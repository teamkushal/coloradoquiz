Mon Oct 23 07:36:14 AM EDT 2023

# Coloradoquiz


This project is live at [https://coloradoquiz.web.app](https://coloradoquiz.web.app "colorado!") thanks to Firebase.

CI Status: 

[![Deploy to Firebase Hosting on merge](https://github.com/teamkushal/coloradoquiz/actions/workflows/firebase-hosting-merge.yml/badge.svg)](https://github.com/teamkushal/coloradoquiz/actions/workflows/firebase-hosting-merge.yml)

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.6Gi       1.5Gi       255Mi        11Gi        11Gi
Swap:          8.0Gi       1.0Mi       8.0Gi
System Storage
2.8G	.
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
    

Angular CLI: 16.2.7
Node: 18.18.2
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.10
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.7
@angular-devkit/build-angular   16.2.7
@angular-devkit/core            16.2.7
@angular-devkit/schematics      16.2.7
@angular/cdk                    16.2.9
@angular/cli                    16.2.7
@angular/material               16.2.9
@schematics/angular             16.2.7
rxjs                            7.5.5
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.55s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.42s.
```
```bash
Latest version:     1.0.30001553
Installed version:  1.0.30001551
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
warning Pattern ["string-width@^1.0.2 || 2 || 3 || 4"] is trying to unpack in the same destination "/home/kushal/.cache/yarn/v6/npm-string-width-cjs-4.2.3-269c7117d27b05ad2e536830a8ec895ef9c6d010-integrity/node_modules/string-width-cjs" as pattern ["string-width@^4.2.3"]. This could result in non-deterministic behavior, skipping.
warning " > codelyzer@6.0.1" has incorrect peer dependency "@angular/compiler@>=2.3.1 <12.0.0 || ^11.0.0-next || ^11.1.0-next || ^11.2.0-next".
warning " > codelyzer@6.0.1" has incorrect peer dependency "@angular/core@>=2.3.1 <12.0.0 || ^11.0.0-next || ^11.1.0-next || ^11.2.0-next".
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
warning Pattern ["string-width@^1.0.2 || 2 || 3 || 4"] is trying to unpack in the same destination "/home/kushal/.cache/yarn/v6/npm-string-width-cjs-4.2.3-269c7117d27b05ad2e536830a8ec895ef9c6d010-integrity/node_modules/string-width-cjs" as pattern ["string-width@^4.2.3"]. This could result in non-deterministic behavior, skipping.
warning " > codelyzer@6.0.1" has incorrect peer dependency "@angular/compiler@>=2.3.1 <12.0.0 || ^11.0.0-next || ^11.1.0-next || ^11.2.0-next".
warning " > codelyzer@6.0.1" has incorrect peer dependency "@angular/core@>=2.3.1 <12.0.0 || ^11.0.0-next || ^11.1.0-next || ^11.2.0-next".
caniuse-lite has been successfully updated

No target browser changes
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
main.ba5011b621761b26.js      | main          | 580.59 kB |               136.92 kB
styles.72f2c6cf98c963b4.css   | styles        | 242.92 kB |                16.22 kB
polyfills.f2c0533e840d243f.js | polyfills     |  33.49 kB |                10.90 kB
runtime.2731ab190b54de91.js   | runtime       | 902 bytes |               517 bytes

| Initial Total | 857.88 kB |               164.54 kB

Build at: 2023-10-23T11:38:19.384Z - Hash: 2b776c392865c37d - Time: 97164ms

./src/styles.scss - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet



Done in 99.68s.
```
