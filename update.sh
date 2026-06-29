#!/usr/bin/env bash
# =============================================================================
# update.sh — Toolchain update + rebuild + test + publish for this repo.
#
# Location: <repo root>/update.sh   (sits next to export.sh)
#
# Run with:   bash update.sh
#             bash /any/absolute/path/to/update.sh     # CWD does NOT matter
#
# What it does (modernised, while preserving every step of the original):
#   • Locates the repository from THIS script's own path, so the current
#     working directory is irrelevant (no hard-coded project directory).
#   • Bootstraps Node via fnm OR nvm, whichever is present (auto-detected;
#     force one with NODE_VM=fnm or NODE_VM=nvm in the environment).
#   • Operates on the CURRENT git branch — nothing is hard-coded to master.
#   • Writes its human-readable run log to docs/llm/update.md by default
#     (see UPDATE_LOG_REL below) instead of README.md.
#   • Logs unit-test output to locallog/fedoratest.md (as before).
#   • Appends network probes to ping.txt (as before).
#   • Upgrades Node to the latest LTS, installs the global @angular/cli + yarn,
#     records `ng version`, installs deps, runs `ng update`, refreshes the
#     browserslist DB, builds for production, runs the unit tests, bumps the
#     patch version, runs export.sh to refresh docs/llm/dump.txt, then rebases
#     from and pushes to origin on the current branch.
#
# ERROR-HANDLING NOTE:
#   This script intentionally does NOT use `set -e`. Like the original, it is a
#   best-effort pipeline: every checkpoint is committed and the run always
#   proceeds to the final push, even if an individual step (a flaky test, a
#   build warning treated as an error, an unreachable ping host, etc.) fails.
#   Fallible commands are individually guarded with `|| true`.
# =============================================================================

# ---------------------------------------------------------------------------
# Configuration — edit to taste
# ---------------------------------------------------------------------------
UPDATE_LOG_REL="docs/llm/update.md"      # main run log (replaces the old README.md target)
TEST_LOG_REL="locallog/fedoratest.md"    # unit-test output log
PING_LOG_REL="ping.txt"                  # network-probe log

NODE_MAX_OLD_SPACE_MB="8000"             # Node heap ceiling for the heavy Angular steps
PING_COUNT="20"                          # echo requests per probe
PING_TARGET="8.8.8.8"                    # probe target host

PROJECT_TITLE="Coloradoquiz"
SITE_URL="https://coloradoquiz.web.app"
GH_SLUG="teamkushal/coloradoquiz"        # owner/repo used for the CI badge
WORKFLOW_FILE="firebase-hosting-merge.yml"

# Packages handed to `ng update`.
NG_UPDATE_PKGS=(@angular/core @angular/cli @angular/material @angular/localize)

# Node version manager selection: auto | fnm | nvm
NODE_VM="${NODE_VM:-auto}"

# ---------------------------------------------------------------------------
# 0. Resolve this script's own location, then the repo root (CWD-independent)
# ---------------------------------------------------------------------------
resolve_self() {
    local src="${BASH_SOURCE[0]}"
    if command -v readlink >/dev/null 2>&1 && readlink -f "$src" >/dev/null 2>&1; then
        readlink -f "$src"
        return
    fi
    # Portable fallback for systems without GNU `readlink -f`.
    local dir
    while [[ -h "$src" ]]; do
        dir="$(cd -P "$(dirname "$src")" >/dev/null 2>&1 && pwd)"
        src="$(readlink "$src")"
        [[ "$src" != /* ]] && src="$dir/$src"
    done
    printf '%s\n' "$(cd -P "$(dirname "$src")" >/dev/null 2>&1 && pwd)/$(basename "$src")"
}

SCRIPT_PATH="$(resolve_self)"
SCRIPT_DIR="$(dirname "$SCRIPT_PATH")"
EXPORT_SH="${SCRIPT_DIR}/export.sh"

if ! REPO_ROOT="$(git -C "$SCRIPT_DIR" rev-parse --show-toplevel 2>/dev/null)"; then
    echo "ERROR: '$SCRIPT_DIR' is not inside a git repository; aborting." >&2
    exit 1
fi
cd "$REPO_ROOT" || { echo "ERROR: cannot cd into '$REPO_ROOT'." >&2; exit 1; }

CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo HEAD)"

# Absolute paths derived from the configurable relative paths above.
LOG="${REPO_ROOT}/${UPDATE_LOG_REL}"
TEST_LOG="${REPO_ROOT}/${TEST_LOG_REL}"
PING_LOG="${REPO_ROOT}/${PING_LOG_REL}"
mkdir -p "$(dirname "$LOG")" "$(dirname "$TEST_LOG")" "$(dirname "$PING_LOG")"

# Applied to every Node-heavy command below (exported once).
export NODE_OPTIONS="--max-old-space-size=${NODE_MAX_OLD_SPACE_MB}"

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------
note() { printf '\n==> %s\n' "$*"; }                  # progress line to the terminal

gc() {                                                 # git checkpoint; never aborts the run
    git add -A
    git commit -m "$1" || true
}

md()         { printf '%s\n'   "$*"          >> "$LOG"; }   # append a line to the run log
md_code()    { printf '```%s\n' "${1:-}"     >> "$LOG"; }   # open a fenced block (``` or ```bash)
md_endcode() { printf '```\n'                >> "$LOG"; }   # close a fenced block

ping_first() { ping -A -D -c "$PING_COUNT" -v "$PING_TARGET" >  "$PING_LOG" 2>&1 || true; }
ping_probe() { ping -A -D -c "$PING_COUNT" -v "$PING_TARGET" >> "$PING_LOG" 2>&1 || true; }
ping_final() { ping    -D -c "$PING_COUNT" -v "$PING_TARGET" >> "$PING_LOG" 2>&1 || true; }

# --- Node version manager bootstrap (fnm OR nvm) ---------------------------
NODE_VM_ACTIVE="none"

_try_fnm() {
    command -v fnm >/dev/null 2>&1 || return 1
    local out
    # An explicit shell is faster and avoids fnm's process-tree detection.
    out="$(fnm env --shell bash 2>/dev/null)" || return 1
    eval "$out"
    NODE_VM_ACTIVE="fnm"
}

_try_nvm() {
    local nvm_sh="${NVM_DIR:-$HOME/.nvm}/nvm.sh"
    [[ -s "$nvm_sh" ]] || return 1
    # shellcheck disable=SC1090
    \. "$nvm_sh" || return 1
    command -v nvm >/dev/null 2>&1 || return 1
    NODE_VM_ACTIVE="nvm"
}

bootstrap_node_vm() {
    case "$NODE_VM" in
        fnm) _try_fnm || echo "WARN: NODE_VM=fnm requested but fnm is unavailable." >&2 ;;
        nvm) _try_nvm || echo "WARN: NODE_VM=nvm requested but nvm is unavailable." >&2 ;;
        auto|*)
            _try_fnm || _try_nvm \
                || echo "WARN: neither fnm nor nvm found; Node-dependent steps may fail." >&2 ;;
    esac
    note "Node version manager: ${NODE_VM_ACTIVE}"
}

install_use_lts() {
    case "$NODE_VM_ACTIVE" in
        fnm)
            time fnm install --lts             || true
            time fnm use lts-latest            || true
            fnm default lts-latest 2>/dev/null || true   # default for future shells
            ;;
        nvm)
            time nvm install --lts             || true
            time nvm use --lts                 || true
            ;;
        *)
            echo "WARN: no Node version manager active; skipping LTS install/use." >&2
            ;;
    esac
}

run_export() {
    if [[ -f "$EXPORT_SH" ]]; then
        note "running export.sh (refresh ${UPDATE_LOG_REL%/*}/dump.txt)"
        # export.sh tees its full dump to stdout; keep the console quiet and
        # rely on the file it writes to docs/llm/dump.txt.
        bash "$EXPORT_SH" >/dev/null 2>&1 || echo "WARN: export.sh exited non-zero." >&2
    else
        echo "WARN: export.sh not found at '$EXPORT_SH'; skipping context dump." >&2
    fi
}

# ===========================================================================
# 1. Boot: version manager + first probe + fresh run-log header
# ===========================================================================
bootstrap_node_vm

ping_first
date > "$LOG"
gc "add timestamp"

md ''
md "# ${PROJECT_TITLE}"
md ''
md ''
md "This project is live at [${SITE_URL}](${SITE_URL} \"colorado!\") thanks to Firebase."
md ''
md 'CI Status: '
md ''
md "[![Deploy to Firebase Hosting on merge](https://github.com/${GH_SLUG}/actions/workflows/${WORKFLOW_FILE}/badge.svg)](https://github.com/${GH_SLUG}/actions/workflows/${WORKFLOW_FILE})"
md ''

# ===========================================================================
# 2. System status
# ===========================================================================
md_code bash
ping_probe
gc "begin add system status"
md "System Memory"
if command -v free >/dev/null 2>&1; then
    free -h >> "$LOG" 2>&1 || true
else
    md '(free unavailable)'
fi
md "System Storage"
du -sh . >> "$LOG" 2>&1 || true
gc "add system status"
md_endcode
gc "end add system status"

# ===========================================================================
# 3. Update Node (LTS) + global tooling + install deps
# ===========================================================================
md_code bash
ping_probe
gc "begin update node"
install_use_lts
time npm install --global @angular/cli yarn || true
time yarn run ng version >> "$LOG" 2>&1 || true
time yarn >> "$LOG" 2>&1 || true
md_endcode
ping_probe
gc "end update node"

# ===========================================================================
# 4. Update Angular (output goes to the terminal, as in the original)
# ===========================================================================
gc "begin prepare to update angular"
time yarn run ng update "${NG_UPDATE_PKGS[@]}" || true
gc "end prepare to update angular"

# ===========================================================================
# 5. Refresh the browserslist DB
# ===========================================================================
md_code bash
time npx update-browserslist-db@latest >> "$LOG" 2>&1 || true
md_endcode

# ===========================================================================
# 6. Production build
# ===========================================================================
md_code bash
ping_probe
gc "begin prepare to build angular"
time yarn run ng build --configuration production >> "$LOG" 2>&1 || true
md_endcode
gc "end prepare to build angular"

# ===========================================================================
# 7. Unit tests (logged to the test log).
#    NOTE: `ng test` can run Karma in watch mode unless your angular.json /
#    karma.conf disables it; the command is kept identical to the original.
# ===========================================================================
printf '```bash\n' > "$TEST_LOG"
ping_probe
gc "begin prepare to unit test angular"
time yarn run ng test >> "$TEST_LOG" || true
printf '```\n' >> "$TEST_LOG"
ping_probe
gc "end prepare to unit test angular"

# ===========================================================================
# 8. Version bump, context dump, and publish on the CURRENT branch
# ===========================================================================
date >> "$LOG"
ping_final
# NOTE: in Yarn Classic, `yarn version --patch` wants a clean tree and makes
# its own commit + tag. Command kept identical to the original.
time yarn version --patch >> "$LOG" 2>&1 || true
gc "add timestamp"

run_export
gc "add repo context dump"

if [[ "$CURRENT_BRANCH" == "HEAD" ]]; then
    echo "WARN: detached HEAD — skipping pull/push." >&2
else
    note "syncing with origin/${CURRENT_BRANCH}"
    git pull --rebase origin "$CURRENT_BRANCH" --strategy-option=ours || true
    gc "merge from remote"
    git push origin "$CURRENT_BRANCH" || true
fi

note "done."
