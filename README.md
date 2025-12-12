Fri Dec 12 06:10:01 PM EST 2025

# Coloradoquiz


This project is live at [https://coloradoquiz.web.app](https://coloradoquiz.web.app "colorado!") thanks to Firebase.

CI Status: 

[![Deploy to Firebase Hosting on merge](https://github.com/teamkushal/coloradoquiz/actions/workflows/firebase-hosting-merge.yml/badge.svg)](https://github.com/teamkushal/coloradoquiz/actions/workflows/firebase-hosting-merge.yml)

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           3.7Gi       661Mi       1.5Gi       5.7Mi       1.9Gi       3.1Gi
Swap:          975Mi       869Mi       106Mi
System Storage
2.3G	.
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
    

Angular CLI       : 21.0.3
Angular           : 21.0.5
Node.js           : 24.12.0
Package Manager   : yarn 1.22.22
Operating System  : linux x64

┌───────────────────────────────────┬───────────────────┬───────────────────┐
│ Package                           │ Installed Version │ Requested Version │
├───────────────────────────────────┼───────────────────┼───────────────────┤
│ @angular-devkit/build-angular     │ 21.0.3            │ ^21.0.3           │
│ @angular/animations               │ 21.0.5            │ ^21.0.5           │
│ @angular/cdk                      │ 21.0.3            │ 21.0.3            │
│ @angular/cli                      │ 21.0.3            │ ^21.0.3           │
│ @angular/common                   │ 21.0.5            │ ^21.0.5           │
│ @angular/compiler                 │ 21.0.5            │ ^21.0.5           │
│ @angular/compiler-cli             │ 21.0.5            │ ^21.0.5           │
│ @angular/core                     │ 21.0.5            │ ^21.0.5           │
│ @angular/forms                    │ 21.0.5            │ ^21.0.5           │
│ @angular/localize                 │ 21.0.5            │ 21.0.5            │
│ @angular/material                 │ 21.0.3            │ 21.0.3            │
│ @angular/platform-browser         │ 21.0.5            │ ^21.0.5           │
│ @angular/platform-browser-dynamic │ 21.0.5            │ ^21.0.5           │
│ @angular/router                   │ 21.0.5            │ ^21.0.5           │
│ @angular/service-worker           │ 21.0.5            │ ^21.0.5           │
│ rxjs                              │ 7.8.1             │ ~7.8.0            │
│ typescript                        │ 5.9.3             │ ~5.9.3            │
│ zone.js                           │ 0.15.0            │ ~0.15.0           │
└───────────────────────────────────┴───────────────────┴───────────────────┘
Done in 0.71s.
yarn install v1.22.22
[1/4] Resolving packages...
success Already up-to-date.
Done in 1.13s.
```
```bash
Browserslist: caniuse-lite is outdated. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
Latest version:     1.0.30001760
Installed version:  1.0.30001760
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
main-TGNKG4HW.js      | main          | 987.68 kB |               201.75 kB
styles-CZWGMGW6.css   | styles        | 103.79 kB |                 7.64 kB
polyfills-RJMUQUVT.js | polyfills     |  34.98 kB |                11.51 kB

                      | Initial total |   1.13 MB |               220.90 kB

Application bundle generation complete. [11.392 seconds] - 2025-12-12T23:10:40.113Z

▲ [WARNING] NG8107: The left side of this optional chain operation does not include 'null' or 'undefined' in its type, therefore the '?.' operator can be replaced with the '.' operator. [plugin angular-compiler]

    src/app/quiz/quiz.component.html:18:30:
      18 │       @for (question of quiz?.questions; track question) {
         ╵                               ~~~~~~~~~

  Warning occurs in the template of component QuizComponent.

    src/app/quiz/quiz.component.ts:14:17:
      14 │     templateUrl: './quiz.component.html',
         ╵                  ~~~~~~~~~~~~~~~~~~~~~~~


Output location: /home/kushal/src/angular/coloradoquiz/dist/coloradoquiz

Done in 12.87s.
```
Fri Dec 12 06:11:33 PM EST 2025
yarn version v1.22.22
info Current version: 0.0.10249
info New version: 0.0.10250
Done in 0.07s.
