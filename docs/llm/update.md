Wed Nov 18 04:10:01 PM EST 2026

# Coloradoquiz


This project is live at [https://coloradoquiz.web.app](https://coloradoquiz.web.app "colorado!") thanks to Firebase.

CI Status: 

[![Deploy to Firebase Hosting on merge](https://github.com/teamkushal/coloradoquiz/actions/workflows/firebase-hosting-merge.yml/badge.svg)](https://github.com/teamkushal/coloradoquiz/actions/workflows/firebase-hosting-merge.yml)

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           3.7Gi       1.7Gi       385Mi        99Mi       2.0Gi       2.0Gi
Swap:          975Mi       975Mi       356Ki
System Storage
1.5G	.
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
    

Angular CLI       : 22.2.7
Angular           : 22.3.0
Node.js           : 26.13.1
Package Manager   : yarn 1.22.22
Operating System  : linux x64

┌───────────────────────────┬───────────────────┬───────────────────┐
│ Package                   │ Installed Version │ Requested Version │
├───────────────────────────┼───────────────────┼───────────────────┤
│ @angular/animations       │ 22.3.0            │ ^22.3.0           │
│ @angular/build            │ 22.2.7            │ ^22.2.7           │
│ @angular/cdk              │ 22.3.0            │ ^22.3.0           │
│ @angular/cli              │ 22.2.7            │ ^22.2.7           │
│ @angular/common           │ 22.3.0            │ ^22.3.0           │
│ @angular/compiler         │ 22.3.0            │ ^22.3.0           │
│ @angular/compiler-cli     │ 22.3.0            │ ^22.3.0           │
│ @angular/core             │ 22.3.0            │ ^22.3.0           │
│ @angular/forms            │ 22.3.0            │ ^22.3.0           │
│ @angular/material         │ 22.3.0            │ ^22.3.0           │
│ @angular/platform-browser │ 22.3.0            │ ^22.3.0           │
│ @angular/router           │ 22.3.0            │ ^22.3.0           │
│ @angular/service-worker   │ 22.3.0            │ ^22.3.0           │
│ rxjs                      │ 7.8.1             │ ~7.8.0            │
│ typescript                │ 6.0.3             │ ~6.0.2            │
│ vitest                    │ 4.1.9             │ ^4.0.8            │
└───────────────────────────┴───────────────────┴───────────────────┘
Done in 0.89s.
yarn install v1.22.22
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
warning "@angular/build > @oxc-parser/binding-wasm32-wasi > @napi-rs/wasm-runtime@1.2.7" has incorrect peer dependency "@emnapi/core@^1.7.1 || 2.0.0-beta.2 || 2.0.0-beta.3".
warning "@angular/build > @oxc-parser/binding-wasm32-wasi > @napi-rs/wasm-runtime@1.2.7" has incorrect peer dependency "@emnapi/runtime@^1.7.1 || 2.0.0-beta.2 || 2.0.0-beta.3".
warning " > vitest@4.1.9" has unmet peer dependency "vite@^6.0.0 || ^7.0.0 || ^8.0.0".
[4/4] Building fresh packages...
Done in 3.45s.
```
```bash
Browserslist: caniuse-lite is outdated. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
Registry latest:         1.0.30001826
Installed version:       1.0.30001826
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
Initial chunk files | Names                    |  Raw size | Estimated transfer size
main-KD6UPR5D.js    | main                     | 174.25 kB |                44.66 kB
chunk-Cn1UG-_p.js   | -                        | 159.88 kB |                47.83 kB
styles-AX2II72J.css | styles                   |   8.05 kB |                 1.31 kB

                    | Initial total            | 342.17 kB |                93.80 kB

Lazy chunk files    | Names                    |  Raw size | Estimated transfer size
chunk-BL_BofIR.js   | -                        | 108.91 kB |                21.82 kB
chunk-CN203VLZ.js   | browser                  |  69.26 kB |                17.88 kB
chunk-DkkIQxrr.js   | quiz-component           |  56.71 kB |                13.88 kB
chunk-DqVldf8j.js   | -                        |  30.18 kB |                 7.69 kB
chunk-DJZTuLCB.js   | -                        |  24.33 kB |                 5.83 kB
chunk-B4AO3rys.js   | key-industries-component |   3.76 kB |                 1.17 kB
chunk-C7p15GTV.js   | news-component           |   3.36 kB |                 1.43 kB
chunk-lcUJnE1x.js   | home-component           |   1.45 kB |               695 bytes
chunk-BiCGbvdu.js   | loader-io-component      | 307 bytes |               307 bytes
chunk-a1cIm442.js   | playground-component     | 246 bytes |               246 bytes

Application bundle generation complete. [6.117 seconds] - 2026-11-18T21:10:26.360Z

Output location: /home/kushal/src/angular/coloradoquiz/public

Done in 7.75s.
```
