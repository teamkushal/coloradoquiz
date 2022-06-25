[kushal@fedora coloradoquiz]$ date; cd ~/src/angular/coloradoquiz; time sh update.sh; time git push origin master; date;
Sat Jun 25 07:13:37 PM EDT 2022
[master e86417ae5] add timestamp
 1 file changed, 1 insertion(+), 44 deletions(-)
 rewrite README.md (100%)
[master 839dc2807] begin add system status
 1 file changed, 11 insertions(+)
[master b9cea336f] add system status
 1 file changed, 6 insertions(+)
[master 90e17c50a] end add system status
 1 file changed, 1 insertion(+)
[master b1a6ac7ff] begin update node
 1 file changed, 1 insertion(+)
Installing latest LTS version.
v16.15.1 is already installed.
Now using node v16.15.1 (npm v8.11.0)

real    0m1.104s
user    0m0.727s
sys     0m0.308s
Now using node v16.15.1 (npm v8.11.0)

real    0m0.530s
user    0m0.371s
sys     0m0.244s
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

changed 220 packages, and audited 221 packages in 13s

25 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

real    0m12.906s
user    0m9.443s
sys     0m2.865s
Error: You need to specify a command before moving on. Use '--help' to view the available commands.
error Command failed with exit code 1.                                                                                                                                                                                                                                        

real    0m0.904s
user    0m0.847s
sys     0m0.143s

real    0m0.800s
user    0m1.058s
sys     0m0.068s
[master 214c4a161] end update node
 1 file changed, 8 insertions(+)
On branch master
Your branch is ahead of 'origin/master' by 7 commits.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
yarn run v1.22.19
$ ng update @angular/core @angular/cli @angular/material @angular/localize
Using package manager: yarn
Collecting installed dependencies...
Found 35 dependencies.
Fetching dependency metadata from registry...
Package '@angular/core' is already up to date.
Package '@angular/cli' is already up to date.
Package '@angular/material' is already up to date.
Package '@angular/localize' is already up to date.
Done in 2.35s.

real    0m2.562s
user    0m1.586s
sys     0m0.308s
On branch master
Your branch is ahead of 'origin/master' by 7 commits.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
[master 97430134f] begin prepare to build angular
 1 file changed, 1 insertion(+)
- Generating browser application bundles (phase: setup)...
WARNING: The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md
    node_modules/@angular/material/core/theming/_theming.scss 325:7   private-check-duplicate-theme-styles()
    node_modules/@angular/material/core/theming/_all-theme.scss 42:3  all-component-themes()
    src/styles.scss 58:1                                              root stylesheet

✔ Browser application bundle generation complete.
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

real    1m49.410s
user    2m55.226s
sys     0m7.608s
[master 7823da76c] end prepare to build angular
 1 file changed, 14 insertions(+)
[master 0525a58ff] begin prepare to unit test angular
 1 file changed, 1 insertion(+), 8436 deletions(-)
 rewrite locallog/fedoratest.md (99%)
- Generating browser application bundles (phase: setup)...
WARNING: The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md
    node_modules/@angular/material/core/theming/_theming.scss 325:7   private-check-duplicate-theme-styles()
    node_modules/@angular/material/core/theming/_all-theme.scss 42:3  all-component-themes()
    src/styles.scss 58:1                                              root stylesheet

✔ Browser application bundle generation complete.
✔ Browser application bundle generation complete.
✔ Browser application bundle generation complete.
error Command failed with exit code 1.                                                                                                                                                                                                                                        

real    3m41.457s
user    5m43.921s
sys     0m25.512s
[master 90edaf380] end prepare to unit test angular
 1 file changed, 8504 insertions(+)
[master c6b7d3f5e] add timestamp
 1 file changed, 1 insertion(+)

real    5m53.442s
user    8m54.440s
sys     0m39.856s
Enumerating objects: 61, done.
Counting objects: 100% (61/61), done.
Delta compression using up to 8 threads
Compressing objects: 100% (46/46), done.
Writing objects: 100% (48/48), 89.38 KiB | 1.21 MiB/s, done.
Total 48 (delta 30), reused 2 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (30/30), completed with 12 local objects.
To github.com:teamkushal/coloradoquiz.git
   f17edcde0..c6b7d3f5e  master -> master

real    0m1.933s
user    0m0.173s
sys     0m0.046s
Sat Jun 25 07:19:32 PM EDT 2022
[kushal@fedora coloradoquiz]$ 
