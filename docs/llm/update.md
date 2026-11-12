Wed Nov 11 10:10:02 PM EST 2026

# Coloradoquiz


This project is live at [https://coloradoquiz.web.app](https://coloradoquiz.web.app "colorado!") thanks to Firebase.

CI Status: 

[![Deploy to Firebase Hosting on merge](https://github.com/teamkushal/coloradoquiz/actions/workflows/firebase-hosting-merge.yml/badge.svg)](https://github.com/teamkushal/coloradoquiz/actions/workflows/firebase-hosting-merge.yml)

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           3.7Gi       1.2Gi       159Mi       138Mi       2.8Gi       2.5Gi
Swap:          975Mi        12Mi       963Mi
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
Node.js           : 26.13.1
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
Done in 2.88s.
yarn install v1.22.22
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
warning " > vitest@4.1.9" has unmet peer dependency "vite@^6.0.0 || ^7.0.0 || ^8.0.0".
[4/4] Building fresh packages...
Done in 4.90s.
```
```bash
Browserslist: caniuse-lite is outdated. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
Registry latest:         1.0.30001826
Installed version:       1.0.30001815
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite baseline-browser-mapping
warning "@angular/build > @oxc-parser/binding-wasm32-wasi > @napi-rs/wasm-runtime@1.2.7" has incorrect peer dependency "@emnapi/core@^1.7.1 || 2.0.0-beta.2 || 2.0.0-beta.3".
warning "@angular/build > @oxc-parser/binding-wasm32-wasi > @napi-rs/wasm-runtime@1.2.7" has incorrect peer dependency "@emnapi/runtime@^1.7.1 || 2.0.0-beta.2 || 2.0.0-beta.3".
warning " > vitest@4.1.9" has unmet peer dependency "vite@^6.0.0 || ^7.0.0 || ^8.0.0".
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite baseline-browser-mapping
warning "@angular/build > @oxc-parser/binding-wasm32-wasi > @napi-rs/wasm-runtime@1.2.7" has incorrect peer dependency "@emnapi/core@^1.7.1 || 2.0.0-beta.2 || 2.0.0-beta.3".
warning "@angular/build > @oxc-parser/binding-wasm32-wasi > @napi-rs/wasm-runtime@1.2.7" has incorrect peer dependency "@emnapi/runtime@^1.7.1 || 2.0.0-beta.2 || 2.0.0-beta.3".
warning " > vitest@4.1.9" has unmet peer dependency "vite@^6.0.0 || ^7.0.0 || ^8.0.0".
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.22
$ ng build --configuration production
[baseline-browser-mapping] The data in this module is over two months old.  To ensure accurate Baseline data, please update: `npm i baseline-browser-mapping@latest -D`
❯ Building...
✔ Building...
Initial chunk files | Names                    |  Raw size | Estimated transfer size
main-UKMW2EL5.js    | main                     | 172.87 kB |                44.31 kB
chunk--MGl6dg8.js   | -                        | 160.08 kB |                47.90 kB
styles-AX2II72J.css | styles                   |   8.05 kB |                 1.31 kB

                    | Initial total            | 341.00 kB |                93.53 kB

Lazy chunk files    | Names                    |  Raw size | Estimated transfer size
chunk-BY3OywoE.js   | -                        | 108.94 kB |                21.79 kB
chunk-28ox3eoq.js   | browser                  |  69.26 kB |                17.86 kB
chunk-DfNczyGo.js   | quiz-component           |  56.63 kB |                13.89 kB
chunk-CY6kpXOO.js   | -                        |  30.18 kB |                 7.67 kB
chunk-D81has1a.js   | -                        |  24.33 kB |                 5.84 kB
chunk-c0Xj1gy3.js   | key-industries-component |   3.76 kB |                 1.18 kB
chunk-3Fg_i34V.js   | news-component           |   3.36 kB |                 1.43 kB
chunk-Dwdq1ipV.js   | home-component           |   1.44 kB |               691 bytes
chunk-DRkMrEvK.js   | loader-io-component      | 307 bytes |               307 bytes
chunk-CP5nwC3F.js   | playground-component     | 246 bytes |               246 bytes

Application bundle generation complete. [11.579 seconds] - 2026-11-12T03:12:19.963Z

Output location: /home/kushal/src/angular/coloradoquiz/public

Done in 14.68s.
```
Wed Nov 11 10:12:37 PM EST 2026
yarn version v1.22.22
info Current version: 2.0.2019
info New version: 2.0.2020
Done in 0.12s.
