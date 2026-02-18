Wed Feb 18 12:10:01 PM EST 2026

# Coloradoquiz


This project is live at [https://coloradoquiz.web.app](https://coloradoquiz.web.app "colorado!") thanks to Firebase.

CI Status: 

[![Deploy to Firebase Hosting on merge](https://github.com/teamkushal/coloradoquiz/actions/workflows/firebase-hosting-merge.yml/badge.svg)](https://github.com/teamkushal/coloradoquiz/actions/workflows/firebase-hosting-merge.yml)

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           3.7Gi       709Mi       1.4Gi       6.3Mi       1.9Gi       3.0Gi
Swap:          975Mi       854Mi       121Mi
System Storage
2.1G	.
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
    

Angular CLI       : 21.1.4
Angular           : 21.1.4
Node.js           : 24.13.1
Package Manager   : yarn 1.22.22
Operating System  : linux x64

┌───────────────────────────────────┬───────────────────┬───────────────────┐
│ Package                           │ Installed Version │ Requested Version │
├───────────────────────────────────┼───────────────────┼───────────────────┤
│ @angular-devkit/build-angular     │ 21.1.4            │ ^21.1.4           │
│ @angular/animations               │ 21.1.4            │ ^21.1.4           │
│ @angular/cdk                      │ 21.1.5            │ 21.1.5            │
│ @angular/cli                      │ 21.1.4            │ ^21.1.4           │
│ @angular/common                   │ 21.1.4            │ ^21.1.4           │
│ @angular/compiler                 │ 21.1.4            │ ^21.1.4           │
│ @angular/compiler-cli             │ 21.1.4            │ ^21.1.4           │
│ @angular/core                     │ 21.1.4            │ ^21.1.4           │
│ @angular/forms                    │ 21.1.4            │ ^21.1.4           │
│ @angular/localize                 │ 21.1.4            │ 21.1.4            │
│ @angular/material                 │ 21.1.5            │ 21.1.5            │
│ @angular/platform-browser         │ 21.1.4            │ ^21.1.4           │
│ @angular/platform-browser-dynamic │ 21.1.4            │ ^21.1.4           │
│ @angular/router                   │ 21.1.4            │ ^21.1.4           │
│ @angular/service-worker           │ 21.1.4            │ ^21.1.4           │
│ rxjs                              │ 7.8.1             │ ~7.8.0            │
│ typescript                        │ 5.9.3             │ ~5.9.3            │
│ zone.js                           │ 0.15.0            │ ~0.15.0           │
└───────────────────────────────────┴───────────────────┴───────────────────┘
Done in 0.89s.
yarn install v1.22.22
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.70s.
```
```bash
(node:367279) [DEP0169] DeprecationWarning: `url.parse()` behavior is not standardized and prone to errors that have security implications. Use the WHATWG URL API instead. CVEs are not issued for `url.parse()` vulnerabilities.
(Use `node --trace-deprecation ...` to show where the warning was created)
Browserslist: caniuse-lite is outdated. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
Latest version:     1.0.30001770
Installed version:  1.0.30001770
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
Initial chunk files   | Names         |  Raw size | Estimated transfer size
main-ZVFWAIEN.js      | main          | 990.64 kB |               202.20 kB
styles-CZWGMGW6.css   | styles        | 103.79 kB |                 7.64 kB
polyfills-RJMUQUVT.js | polyfills     |  34.98 kB |                11.51 kB

                      | Initial total |   1.13 MB |               221.35 kB

Application bundle generation complete. [12.009 seconds] - 2026-02-18T17:10:47.841Z

▲ [WARNING] NG8107: The left side of this optional chain operation does not include 'null' or 'undefined' in its type, therefore the '?.' operator can be replaced with the '.' operator. [plugin angular-compiler]

    src/app/quiz/quiz.component.html:18:30:
      18 │       @for (question of quiz?.questions; track question) {
         ╵                               ~~~~~~~~~

  Warning occurs in the template of component QuizComponent.

    src/app/quiz/quiz.component.ts:14:17:
      14 │     templateUrl: './quiz.component.html',
         ╵                  ~~~~~~~~~~~~~~~~~~~~~~~


Output location: /home/kushal/src/angular/coloradoquiz/dist/coloradoquiz

Done in 13.53s.
```
Wed Feb 18 12:11:09 PM EST 2026
yarn version v1.22.22
info Current version: 0.0.11875
info New version: 0.0.11876
Done in 0.07s.
