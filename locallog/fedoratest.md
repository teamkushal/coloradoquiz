```bash
yarn run v1.22.22
$ ng test
06 10 2025 02:10:58.464:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
06 10 2025 02:10:58.466:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
06 10 2025 02:10:58.472:INFO [launcher]: Starting browser Firefox
06 10 2025 02:11:01.899:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket w3Y4BJZAnpe11aKBAAAB with id 52295792
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.167 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.184 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.184 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.184 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.184 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.367 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178639:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178608:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178581:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149007:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80142:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11388:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80136:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80131:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30942:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:30966:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30926:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30881:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:38886:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:39093:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:38788:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:38777:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:39627:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180090:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29164:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:46348:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:46200:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180087:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29164:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27346:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27361:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
Firefox 140.0 (Linux x86_64): Executed 3 of 18 ERROR (0 secs / 0.367 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178639:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178608:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178581:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149007:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80142:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11388:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80136:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80131:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30942:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:30966:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30926:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30881:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:38886:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:39093:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:38788:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:38777:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:39627:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180090:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29164:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:46348:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:46200:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180087:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29164:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27346:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27361:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 3 of 18 ERROR (0.496 secs / 0.367 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 4 of 18 ERROR (0.496 secs / 0.382 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 ERROR (0.496 secs / 0.399 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 ERROR (0.496 secs / 0.408 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 7 of 18 ERROR (0.496 secs / 0.415 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 7 of 18 DISCONNECTED (30.515 secs / 0.415 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 7 of 18 DISCONNECTED (30.515 secs / 0.415 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
