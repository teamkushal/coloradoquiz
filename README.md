Mon Nov 28 06:34:27 PM EST 2022

# Coloradoquiz


This project is live at [https://coloradoquiz.web.app](https://coloradoquiz.web.app "colorado!") thanks to Firebase.

CI Status: 

[![Deploy to Firebase Hosting on merge](https://github.com/teamkushal/coloradoquiz/actions/workflows/firebase-hosting-merge.yml/badge.svg)](https://github.com/teamkushal/coloradoquiz/actions/workflows/firebase-hosting-merge.yml)

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.8Gi       6.5Gi       953Mi       5.0Gi        10Gi
Swap:          8.0Gi       1.8Gi       6.2Gi
System Storage
2.5G	.
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
    

Angular CLI: 15.0.1
Node: 18.12.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 15.0.1
... animations, cli, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1500.1
@angular-devkit/build-angular   15.0.1
@angular-devkit/core            15.0.1
@angular-devkit/schematics      15.0.1
@angular/cdk                    15.0.0
@angular/material               15.0.0
@schematics/angular             15.0.1
rxjs                            7.5.5
typescript                      4.8.4
    
Done in 0.76s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.46s.
```
Browserslist: caniuse-lite is outdated. Please run:
  npx browserslist@latest --update-db
  Why you should do it regularly: https://github.com/browserslist/browserslist#browsers-data-updating
Latest version:     1.0.30001434
Installed versions: 1.0.30001171, 1.0.30001228, 1.0.30001286, 1.0.30001346, 1.0.30001383, 1.0.30001431
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
warning " > codelyzer@6.0.1" has incorrect peer dependency "@angular/compiler@>=2.3.1 <12.0.0 || ^11.0.0-next || ^11.1.0-next || ^11.2.0-next".
warning " > codelyzer@6.0.1" has incorrect peer dependency "@angular/core@>=2.3.1 <12.0.0 || ^11.0.0-next || ^11.1.0-next || ^11.2.0-next".
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
warning " > codelyzer@6.0.1" has incorrect peer dependency "@angular/compiler@>=2.3.1 <12.0.0 || ^11.0.0-next || ^11.1.0-next || ^11.2.0-next".
warning " > codelyzer@6.0.1" has incorrect peer dependency "@angular/core@>=2.3.1 <12.0.0 || ^11.0.0-next || ^11.1.0-next || ^11.2.0-next".
caniuse-lite has been successfully updated

Target browser changes:
- and_chr 96
+ and_chr 107
- and_ff 94
+ and_ff 106
- and_qq 10.4
+ and_qq 13.1
- and_uc 12.12
+ and_uc 13.4
- android 96
+ android 107
- baidu 7.12
+ baidu 13.18
- chrome 96
- chrome 95
- chrome 94
+ chrome 107
+ chrome 106
+ chrome 105
- edge 96
- edge 95
+ edge 107
+ edge 106
+ edge 105
- firefox 95
- firefox 94
+ firefox 107
+ firefox 106
+ firefox 105
- ios_saf 15.0-15.1
- ios_saf 14.0-14.4
- ios_saf 12.2-12.5
+ ios_saf 16.1
+ ios_saf 16.0
+ ios_saf 15.6
+ ios_saf 15.5
- op_mob 64
+ op_mob 72
- opera 82
- opera 81
- opera 80
+ opera 92
+ opera 91
- safari 15.1
- safari 15
- safari 14.1
- safari 13.1
+ safari 16.1
+ safari 16.0
+ safari 15.6
- samsung 15.0
- samsung 14.0
+ samsung 19.0
+ samsung 18.0
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
main.9b4dd0f358c33c45.js      | main          | 560.23 kB |               133.41 kB
styles.5c3965f9ffa7c57c.css   | styles        | 285.35 kB |                18.09 kB
polyfills.8e2859748d24a2ce.js | polyfills     |  37.58 kB |                11.97 kB
runtime.2731ab190b54de91.js   | runtime       | 902 bytes |               517 bytes

| Initial Total | 884.04 kB |               163.98 kB

Build at: 2022-11-28T23:38:58.103Z - Hash: 584a823c563a7ade - Time: 228136ms

./src/styles.scss - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
Deprecation $weight: Passing a number without unit % (60) is deprecated.

To preserve current behavior: $weight * 1%

More info: https://sass-lang.com/d/function-units

@material/slider/_slider-theme.scss 77:5                                    @use
node_modules/@angular/material/slider/_slider-theme.scss 3:1                @use
node_modules/@angular/material/core/density/private/_all-density.scss 25:1  @forward
@angular/_index.scss 18:1                                                   @use
src/styles.scss 1:1                                                         root stylesheet


./src/styles.scss - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 351:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet



Done in 232.47s.
```
Mon Nov 28 06:44:45 PM EST 2022
yarn version v1.22.19
info Current version: 0.0.400
info New version: 0.0.401
Done in 0.18s.
