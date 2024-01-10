Wed Jan 10 12:02:44 PM EST 2024

# Coloradoquiz


This project is live at [https://coloradoquiz.web.app](https://coloradoquiz.web.app "colorado!") thanks to Firebase.

CI Status: 

[![Deploy to Firebase Hosting on merge](https://github.com/teamkushal/coloradoquiz/actions/workflows/firebase-hosting-merge.yml/badge.svg)](https://github.com/teamkushal/coloradoquiz/actions/workflows/firebase-hosting-merge.yml)

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.5Gi       5.6Gi       297Mi       5.9Gi        10Gi
Swap:          8.0Gi       3.0Gi       5.0Gi
System Storage
6.0G	.
```
```bash
yarn run v1.22.21
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 17.0.9
Node: 20.11.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.0.8
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1700.9
@angular-devkit/build-angular   17.0.9
@angular-devkit/core            17.0.9
@angular-devkit/schematics      17.0.9
@angular/cdk                    17.0.4
@angular/cli                    17.0.9
@angular/material               17.0.4
@schematics/angular             17.0.9
rxjs                            7.5.5
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.63s.
yarn install v1.22.21
[1/4] Resolving packages...
[2/4] Fetching packages...
warning Pattern ["string-width-cjs@npm:string-width@^4.2.0"] is trying to unpack in the same destination "/home/kushal/.cache/yarn/v6/npm-string-width-cjs-4.2.3-269c7117d27b05ad2e536830a8ec895ef9c6d010-integrity/node_modules/string-width-cjs" as pattern ["string-width@^4.2.3"]. This could result in non-deterministic behavior, skipping.
warning Pattern ["strip-ansi-cjs@npm:strip-ansi@^6.0.1"] is trying to unpack in the same destination "/home/kushal/.cache/yarn/v6/npm-strip-ansi-cjs-6.0.1-9e26c63d30f53443e9489495b2105d37b67a85d9-integrity/node_modules/strip-ansi-cjs" as pattern ["strip-ansi@^6.0.1"]. This could result in non-deterministic behavior, skipping.
[3/4] Linking dependencies...
warning " > @angular/material@16.2.12" has incorrect peer dependency "@angular/cdk@16.2.12".
warning " > codelyzer@6.0.1" has incorrect peer dependency "@angular/compiler@>=2.3.1 <12.0.0 || ^11.0.0-next || ^11.1.0-next || ^11.2.0-next".
warning " > codelyzer@6.0.1" has incorrect peer dependency "@angular/core@>=2.3.1 <12.0.0 || ^11.0.0-next || ^11.1.0-next || ^11.2.0-next".
[4/4] Building fresh packages...
success Saved lockfile.
Done in 7.94s.
```
```bash
Latest version:     1.0.30001576
Installed version:  1.0.30001576
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.21
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
main.899af32354a6ae81.js      | main          | 582.62 kB |               137.61 kB
styles.72f2c6cf98c963b4.css   | styles        | 242.92 kB |                16.22 kB
polyfills.ed6695223f2a9368.js | polyfills     |  33.55 kB |                10.89 kB
runtime.2731ab190b54de91.js   | runtime       | 902 bytes |               517 bytes

| Initial Total | 859.97 kB |               165.22 kB

Build at: 2024-01-10T17:05:38.639Z - Hash: 36f6c10d3029e59a - Time: 95516ms

./src/styles.scss - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet



Done in 99.20s.
```
