Sun Apr 23 11:46:59 PM EDT 2023

# Coloradoquiz


This project is live at [https://coloradoquiz.web.app](https://coloradoquiz.web.app "colorado!") thanks to Firebase.

CI Status: 

[![Deploy to Firebase Hosting on merge](https://github.com/teamkushal/coloradoquiz/actions/workflows/firebase-hosting-merge.yml/badge.svg)](https://github.com/teamkushal/coloradoquiz/actions/workflows/firebase-hosting-merge.yml)

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.2Gi       411Mi       1.0Gi        10Gi       9.8Gi
Swap:          8.0Gi        16Mi       8.0Gi
System Storage
5.2G	.
```
```bash
yarn run v1.22.19
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 15.2.6
Node: 18.16.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 15.2.8
... animations, cdk, common, compiler, compiler-cli, core, forms
... localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1502.6
@angular-devkit/build-angular   15.2.6
@angular-devkit/core            15.2.6
@angular-devkit/schematics      15.2.6
@angular/cli                    15.2.6
@schematics/angular             15.2.6
rxjs                            7.5.5
typescript                      4.8.4
    
Done in 0.82s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.43s.
```
```bash
{"type":"error","data":"Received invalid response from npm."}
undefined:2
{"type":"info","data":"There appears to be trouble with your network connection. Retrying..."}
^

SyntaxError: Unexpected token { in JSON at position 95
    at JSON.parse (<anonymous>)
    at getLatestInfo (/home/kushal/src/angular/coloradoquiz/node_modules/@angular-devkit/build-angular/node_modules/update-browserslist-db/index.js:62:19)
    at updateDB (/home/kushal/src/angular/coloradoquiz/node_modules/@angular-devkit/build-angular/node_modules/update-browserslist-db/index.js:264:16)
    at Object.<anonymous> (/home/kushal/src/angular/coloradoquiz/node_modules/@angular-devkit/build-angular/node_modules/autoprefixer/node_modules/browserslist/cli.js:42:3)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.16.0
```
```bash
yarn run v1.22.19
$ ng build --configuration production
- Generating browser application bundles (phase: setup)...
✔ Browser application bundle generation complete.
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main.b367441782367280.js      | main          | 576.00 kB |               136.61 kB
styles.b26801e62d72f745.css   | styles        | 273.62 kB |                18.02 kB
polyfills.1ab6a21e4e14d9a7.js | polyfills     |  37.04 kB |                11.81 kB
runtime.2731ab190b54de91.js   | runtime       | 902 bytes |               517 bytes

| Initial Total | 887.55 kB |               166.94 kB

Build at: 2023-04-24T09:19:45.871Z - Hash: b7cd7c6e7e567fe2 - Time: 83675ms

./src/styles.scss - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet



Done in 86.48s.
```
