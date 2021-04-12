# Coloradoquiz

This project is live at [https://coloradoquiz.web.app](https://coloradoquiz.web.app "colorado!") 
thanks to Firebase. 

CI Status: 

![Build](https://github.com/teamkushal/coloradoquiz/workflows/Deploy%20to%20Firebase%20Hosting%20on%20merge/badge.svg)

sigh

```bash
$ time ng build
⠋ Generating browser application bundles...
Compiling @angular/material/stepper : es2015 as esm2015
✔ Browser application bundle generation complete.

Error: Failed to compile entry-point @angular/material/stepper (es2015 as esm2015) due to compilation errors:
node_modules/@angular/material/icon/icon-module.d.ts:8:22 - error NG6002: Appears in the NgModule.imports of MatStepperModule, but could not be resolved to an NgModule class.

This likely means that the library (@angular/material/icon) which declares MatIconModule has not been processed correctly by ngcc, or is not compatible with Angular Ivy. Check if a newer version of the library is available, and update if so. Also consider checking with the library's authors to see if the library is expected to be compatible with Ivy.

8 export declare class MatIconModule {
                       ~~~~~~~~~~~~~




real    0m14.342s
user    0m20.888s
sys     0m0.763s
```Mon Apr 12 05:12:37 PM MDT 2021
