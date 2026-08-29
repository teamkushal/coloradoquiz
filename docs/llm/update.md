Sat Aug 29 10:10:02 AM EDT 2026

# Coloradoquiz


This project is live at [https://coloradoquiz.web.app](https://coloradoquiz.web.app "colorado!") thanks to Firebase.

CI Status: 

[![Deploy to Firebase Hosting on merge](https://github.com/teamkushal/coloradoquiz/actions/workflows/firebase-hosting-merge.yml/badge.svg)](https://github.com/teamkushal/coloradoquiz/actions/workflows/firebase-hosting-merge.yml)

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           3.7Gi       1.3Gi       154Mi       187Mi       2.8Gi       2.5Gi
Swap:          975Mi        83Mi       892Mi
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
    

Angular CLI       : 22.1.3
Angular           : 22.1.1
Node.js           : 24.20.0
Package Manager   : yarn 1.22.22
Operating System  : linux x64

┌───────────────────────────┬───────────────────┬───────────────────┐
│ Package                   │ Installed Version │ Requested Version │
├───────────────────────────┼───────────────────┼───────────────────┤
│ @angular/animations       │ 22.1.1            │ ^22.1.1           │
│ @angular/build            │ 22.1.3            │ ^22.1.3           │
│ @angular/cdk              │ 22.1.1            │ ^22.1.1           │
│ @angular/cli              │ 22.1.3            │ ^22.1.3           │
│ @angular/common           │ 22.1.1            │ ^22.1.1           │
│ @angular/compiler         │ 22.1.1            │ ^22.1.1           │
│ @angular/compiler-cli     │ 22.1.1            │ ^22.1.1           │
│ @angular/core             │ 22.1.1            │ ^22.1.1           │
│ @angular/forms            │ 22.1.1            │ ^22.1.1           │
│ @angular/material         │ 22.1.1            │ ^22.1.1           │
│ @angular/platform-browser │ 22.1.1            │ ^22.1.1           │
│ @angular/router           │ 22.1.1            │ ^22.1.1           │
│ @angular/service-worker   │ 22.1.1            │ ^22.1.1           │
│ rxjs                      │ 7.8.1             │ ~7.8.0            │
│ typescript                │ 6.0.3             │ ~6.0.2            │
│ vitest                    │ 4.1.9             │ ^4.0.8            │
└───────────────────────────┴───────────────────┴───────────────────┘
Done in 2.90s.
yarn install v1.22.22
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.39s.
```
```bash
Browserslist: caniuse-lite is outdated. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
Latest version:     1.0.30001810
Installed version:  1.0.30001809
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite baseline-browser-mapping
warning " > vitest@4.1.9" has unmet peer dependency "vite@^6.0.0 || ^7.0.0 || ^8.0.0".
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite baseline-browser-mapping
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
main-A3FKMQUG.js    | main                     | 170.91 kB |                43.96 kB
chunk-pY4VO7By.js   | -                        | 160.72 kB |                48.11 kB
styles-AX2II72J.css | styles                   |   8.05 kB |                 1.31 kB

                    | Initial total            | 339.68 kB |                93.39 kB

Lazy chunk files    | Names                    |  Raw size | Estimated transfer size
chunk-Coo_dKBP.js   | -                        | 107.60 kB |                21.59 kB
chunk-pyqlkxSs.js   | browser                  |  67.86 kB |                17.80 kB
chunk-D6y8P533.js   | quiz-component           |  55.90 kB |                13.54 kB
chunk-BychvtSp.js   | -                        |  29.20 kB |                 7.49 kB
chunk-DiLpTCt7.js   | -                        |  24.21 kB |                 5.83 kB
chunk-CQUA_QZz.js   | key-industries-component |   3.76 kB |                 1.18 kB
chunk-BxG9H6Bq.js   | news-component           |   3.35 kB |                 1.42 kB
chunk-BW4EiYu9.js   | home-component           |   1.43 kB |               679 bytes
chunk-BOXFNWda.js   | loader-io-component      | 307 bytes |               307 bytes
chunk-BMuhZ-oj.js   | playground-component     | 246 bytes |               246 bytes

Application bundle generation complete. [13.843 seconds] - 2026-08-29T14:12:00.755Z

Output location: /home/kushal/src/angular/coloradoquiz/public

Done in 17.36s.
```
