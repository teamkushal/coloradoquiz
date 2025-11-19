Wed Nov 19 03:10:01 PM EST 2025

# Coloradoquiz


This project is live at [https://coloradoquiz.web.app](https://coloradoquiz.web.app "colorado!") thanks to Firebase.

CI Status: 

[![Deploy to Firebase Hosting on merge](https://github.com/teamkushal/coloradoquiz/actions/workflows/firebase-hosting-merge.yml/badge.svg)](https://github.com/teamkushal/coloradoquiz/actions/workflows/firebase-hosting-merge.yml)

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           3.7Gi       673Mi       1.2Gi       5.8Mi       2.1Gi       3.1Gi
Swap:          975Mi       836Mi       139Mi
System Storage
2.0G	.
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
    


Angular CLI: 20.3.11
Node: 24.11.1
Package Manager: yarn 1.22.22
OS: linux x64
    

Angular: 20.3.13
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------
@angular-devkit/architect       0.2003.11
@angular-devkit/build-angular   20.3.11
@angular-devkit/core            20.3.11
@angular-devkit/schematics      20.3.11
@angular/cdk                    20.2.14
@angular/cli                    20.3.11
@angular/material               20.2.14
@schematics/angular             20.3.11
rxjs                            7.8.1
typescript                      5.8.3
zone.js                         0.15.0
Done in 0.86s.
yarn install v1.22.22
[1/4] Resolving packages...
success Already up-to-date.
Done in 1.13s.
```
```bash
Browserslist: caniuse-lite is outdated. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
Latest version:     1.0.30001756
Installed version:  1.0.30001756
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.22
$ ng build --configuration production
❯ Building...
✔ Building...
Initial chunk files   | Names         |  Raw size | Estimated transfer size
main-X7G3ZPOK.js      | main          | 985.44 kB |               201.14 kB
styles-CZWGMGW6.css   | styles        | 103.79 kB |                 7.64 kB
polyfills-RJMUQUVT.js | polyfills     |  34.98 kB |                11.51 kB

                      | Initial total |   1.12 MB |               220.29 kB

Application bundle generation complete. [18.701 seconds] - 2025-11-19T20:12:10.291Z

▲ [WARNING] NG8107: The left side of this optional chain operation does not include 'null' or 'undefined' in its type, therefore the '?.' operator can be replaced with the '.' operator. [plugin angular-compiler]

    src/app/quiz/quiz.component.html:18:30:
      18 │       @for (question of quiz?.questions; track question) {
         ╵                               ~~~~~~~~~

  Warning occurs in the template of component QuizComponent.

    src/app/quiz/quiz.component.ts:14:17:
      14 │     templateUrl: './quiz.component.html',
         ╵                  ~~~~~~~~~~~~~~~~~~~~~~~


Output location: /home/kushal/src/angular/coloradoquiz/dist/coloradoquiz

Done in 20.61s.
```
Wed Nov 19 03:12:55 PM EST 2025
yarn version v1.22.22
info Current version: 0.0.9694
info New version: 0.0.9695
Done in 0.08s.
