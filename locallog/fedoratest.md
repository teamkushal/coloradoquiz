```bash
yarn run v1.22.22
$ ng test
02 04 2025 21:10:58.400:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
02 04 2025 21:10:58.403:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
02 04 2025 21:10:58.432:INFO [launcher]: Starting browser Firefox
02 04 2025 21:11:01.677:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket GEb9cwfG1ze8gFHmAAAB with id 20227526
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.103 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.203 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.227 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 SUCCESS (0 secs / 0.255 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 SUCCESS (0 secs / 0.262 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 SUCCESS (0 secs / 0.282 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 SUCCESS (0 secs / 0.29 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 SUCCESS (0 secs / 0.334 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 8 of 18 SUCCESS (0 secs / 0.334 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 8 of 18 SUCCESS (0 secs / 0.334 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 8 of 18 SUCCESS (0 secs / 0.334 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 SUCCESS (0 secs / 0.452 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:177984:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:177953:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:177926:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:98742:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:48931:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:14392:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:48925:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:48920:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:124039:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:124063:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:124023:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:123978:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:133519:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:133717:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:133425:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:133409:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:134244:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:179411:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:36571:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:126282:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:739:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:126134:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:179408:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:36571:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:739:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:34750:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:34765:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:739:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3057:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:993:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:792:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1164:23
Firefox 128.0 (Linux x86_64): Executed 9 of 18 ERROR (0 secs / 0.452 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:177984:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:177953:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:177926:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:98742:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:48931:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:14392:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:48925:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:48920:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:124039:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:124063:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:124023:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:123978:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:133519:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:133717:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:133425:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:133409:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:134244:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:179411:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:36571:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:126282:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:739:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:126134:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:179408:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:36571:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:739:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:34750:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:34765:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:739:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3057:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:993:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:792:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1164:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 ERROR (0.525 secs / 0.452 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 9 of 18 DISCONNECTED (30.561 secs / 0.452 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 DISCONNECTED (30.561 secs / 0.452 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
