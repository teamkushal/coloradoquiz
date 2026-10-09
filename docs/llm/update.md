Fri Oct  9 09:10:01 AM EDT 2026

# Coloradoquiz


This project is live at [https://coloradoquiz.web.app](https://coloradoquiz.web.app "colorado!") thanks to Firebase.

CI Status: 

[![Deploy to Firebase Hosting on merge](https://github.com/teamkushal/coloradoquiz/actions/workflows/firebase-hosting-merge.yml/badge.svg)](https://github.com/teamkushal/coloradoquiz/actions/workflows/firebase-hosting-merge.yml)

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           3.7Gi       2.1Gi       501Mi       104Mi       1.6Gi       1.7Gi
Swap:          975Mi       975Mi       160Ki
System Storage
1.4G	.
```
```bash
yarn run v1.22.22
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI       : 22.2.2
Angular           : 22.2.2
Node.js           : 24.21.0
Package Manager   : yarn 1.22.22
Operating System  : linux x64

┌───────────────────────────┬───────────────────┬───────────────────┐
│ Package                   │ Installed Version │ Requested Version │
├───────────────────────────┼───────────────────┼───────────────────┤
│ @angular/animations       │ 22.2.2            │ ^22.2.2           │
│ @angular/build            │ 22.2.2            │ ^22.2.2           │
│ @angular/cdk              │ 22.2.2            │ ^22.2.2           │
│ @angular/cli              │ 22.2.2            │ ^22.2.2           │
│ @angular/common           │ 22.2.2            │ ^22.2.2           │
│ @angular/compiler         │ 22.2.2            │ ^22.2.2           │
│ @angular/compiler-cli     │ 22.2.2            │ ^22.2.2           │
│ @angular/core             │ 22.2.2            │ ^22.2.2           │
│ @angular/forms            │ 22.2.2            │ ^22.2.2           │
│ @angular/material         │ 22.2.2            │ ^22.2.2           │
│ @angular/platform-browser │ 22.2.2            │ ^22.2.2           │
│ @angular/router           │ 22.2.2            │ ^22.2.2           │
│ @angular/service-worker   │ 22.2.2            │ ^22.2.2           │
│ rxjs                      │ 7.8.1             │ ~7.8.0            │
│ typescript                │ 6.0.3             │ ~6.0.2            │
│ vitest                    │ 4.1.9             │ ^4.0.8            │
└───────────────────────────┴───────────────────┴───────────────────┘
Done in 0.90s.
yarn install v1.22.22
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.39s.
```
```bash
Browserslist: caniuse-lite is outdated. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
Registry latest:         1.0.30001815
Installed version:       1.0.30001815
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.22
$ ng build --configuration production
[baseline-browser-mapping] The data in this module is over two months old.  To ensure accurate Baseline data, please update: `npm i baseline-browser-mapping@latest -D`
❯ Building...
✔ Building...
Application bundle generation failed. [1.051 seconds] - 2026-10-09T13:10:26.524Z

✘ [ERROR] Angular compilation initialization failed. [plugin angular-compiler]

  SyntaxError: The requested module '@jridgewell/sourcemap-codec' does not provide an export named 'encodeRangeMappings'
      at ModuleJobSync.runSync (node:internal/modules/esm/module_job:658:17)
      at ModuleLoader.importSyncForRequire (node:internal/modules/esm/loader:347:47)
      at loadESMFromCJS (node:internal/modules/cjs/loader:1747:24)
      at Module._compile (node:internal/modules/cjs/loader:1911:5)
      at Object..js (node:internal/modules/cjs/loader:2060:10)
      at Module.load (node:internal/modules/cjs/loader:1651:32)
      at Module._load (node:internal/modules/cjs/loader:1443:12)
      at wrapModuleLoad (node:internal/modules/cjs/loader:261:19)
      at Module.require (node:internal/modules/cjs/loader:1674:12)
      at require (node:internal/modules/helpers:157:16)


error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
