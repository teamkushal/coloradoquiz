# Coloradoquiz

This project is live at [https://coloradoquiz.web.app](https://coloradoquiz.web.app "colorado!") 
thanks to Firebase. 

CI Status: 

![Build](https://github.com/teamkushal/coloradoquiz/workflows/Deploy%20to%20Firebase%20Hosting%20on%20merge/badge.svg)

Build fails

```bash
$ time yarn run ng build --configuration production > locallog/build.txt
Warning: Support was requested for IE 11 in the project's browserslist configuration. IE 11 support is deprecated since Angular v12.
For more information, see https://angular.io/guide/browser-support
⠏ Generating browser application bundles (phase: building)...
<--- Last few GCs --->

[31821:0x6459810]    57023 ms: Mark-sweep (reduce) 2028.4 (2090.5) -> 2025.7 (2093.5) MB, 2361.5 / 0.1 ms  (+ 64.6 ms in 103 steps since start of marking, biggest step 8.8 ms, walltime since start of marking 2726 ms) (average mu = 0.170, current mu = 0.11[31821:0x6459810]    59459 ms: Mark-sweep (reduce) 2026.9 (2065.5) -> 2026.2 (2065.8) MB, 2429.4 / 0.1 ms  (average mu = 0.088, current mu = 0.003) allocation failure scavenge might not succeed


<--- JS stacktrace --->

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
 1: 0xa222f0 node::Abort() [ng build --configuration production]
 2: 0x96411f node::FatalError(char const*, char const*) [ng build --configuration production]
 3: 0xb97f1e v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [ng build --configuration production]
 4: 0xb98297 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [ng build --configuration production]
 5: 0xd52fd5  [ng build --configuration production]
 6: 0xd53b5f  [ng build --configuration production]
 7: 0xd61beb v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [ng build --configuration production]
 8: 0xd657ac v8::internal::Heap::AllocateRawWithRetryOrFailSlowPath(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [ng build --configuration production]
 9: 0xd2af4d v8::internal::Factory::AllocateRaw(int, v8::internal::AllocationType, v8::internal::AllocationAlignment) [ng build --configuration production]
10: 0xd24dd4 v8::internal::FactoryBase<v8::internal::Factory>::AllocateRawWithImmortalMap(int, v8::internal::AllocationType, v8::internal::Map, v8::internal::AllocationAlignment) [ng build --configuration production]
11: 0xd252b5 v8::internal::FactoryBase<v8::internal::Factory>::NewConsString(v8::internal::Handle<v8::internal::String>, v8::internal::Handle<v8::internal::String>, int, bool, v8::internal::AllocationType) [ng build --configuration production]
12: 0xd29e67 v8::internal::FactoryBase<v8::internal::Factory>::NewConsString(v8::internal::Handle<v8::internal::String>, v8::internal::Handle<v8::internal::String>, v8::internal::AllocationType) [ng build --configuration production]
13: 0x1113887 v8::internal::IncrementalStringBuilder::Extend() [ng build --configuration production]
14: 0x1113abc v8::internal::IncrementalStringBuilder::AppendString(v8::internal::Handle<v8::internal::String>) [ng build --configuration production]
15: 0xc2e869  [ng build --configuration production]
16: 0xc2f6b4 v8::internal::Builtin_FunctionConstructor(int, unsigned long*, v8::internal::Isolate*) [ng build --configuration production]
17: 0x1423359  [ng build --configuration production]
error Command failed with signal "SIGABRT".                                                                                                                                                                    

real    1m18.937s
user    2m16.110s
sys     0m5.986s
```

build succeeds with node options

```bash
$ export NODE_OPTIONS="--max-old-space-size=6144";time yarn run ng build --configuration production > locallog/build.txt
Warning: Support was requested for IE 11 in the project's browserslist configuration. IE 11 support is deprecated since Angular v12.
For more information, see https://angular.io/guide/browser-support
⠹ Generating browser application bundles (phase: building)...: The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/master/guides/duplicate-theming-styles.md
    node_modules/@angular/material/core/theming/_theming.scss 289:7   private-check-duplicate-theme-styles()
    node_modules/@angular/material/core/theming/_all-theme.scss 42:3  all-component-themes()
    src/styles.scss 58:1                                              root stylesheet

✔ Browser application bundle generation complete.
✔ ES5 bundle generation complete.
✔ Copying assets complete.
✔ Index html generation complete.
✔ Service worker generation complete.

Warning: bundle initial-es5 exceeded maximum budget. Budget 2.00 MB was not met by 367.53 kB with a total of 2.36 MB.



real    5m36.307s
user    8m14.248s
sys     0m15.031s
```
