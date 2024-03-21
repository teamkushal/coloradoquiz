```bash
yarn run v1.22.22
$ ng test
20 03 2024 22:14:29.172:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
20 03 2024 22:14:29.174:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
20 03 2024 22:14:29.177:INFO [launcher]: Starting browser Firefox
20 03 2024 22:14:31.072:INFO [Firefox 124.0 (Linux x86_64)]: Connected on socket ViEG0rkOQG4wILPNAAAB with id 27304373
Firefox 124.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 124.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 124.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 124.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.073 secs)
[1A[2KFirefox 124.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.095 secs)
[1A[2KFirefox 124.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.155 secs)
[1A[2KFirefox 124.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.207 secs)
[1A[2KFirefox 124.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.22 secs)
[1A[2KERROR: [36m'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 124.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.22 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 124.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.22 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 124.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.22 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 124.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.328 secs)
[1A[2K[31mFirefox 124.0 (Linux x86_64) ERROR[39m
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 327)
  createReal@http://localhost:9876/_karma_webpack_/main.js:327:7
  submit@http://localhost:9876/_karma_webpack_/main.js:340:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:1606:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:4064:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1602:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1585:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:81924:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:81948:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:81908:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:81863:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:89321:35
  detectChangesInView$1@http://localhost:9876/_karma_webpack_/vendor.js:89525:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:89253:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:89237:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:89816:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:113548:30
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4734:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:91347:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:91201:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:113547:18
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1505:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4734:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:5000:28
  2309/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:5015:14
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  4124/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:1273:28
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:440:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:244:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:611:23
Firefox 124.0 (Linux x86_64): Executed 6 of 17[31m ERROR[39m (0 secs / 0.328 secs)
Firefox 124.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 327)
  createReal@http://localhost:9876/_karma_webpack_/main.js:327:7
  submit@http://localhost:9876/_karma_webpack_/main.js:340:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:1606:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:4064:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1602:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1585:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:81924:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:81948:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:81908:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:81863:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:89321:35
  detectChangesInView$1@http://localhost:9876/_karma_webpack_/vendor.js:89525:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:89253:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:89237:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:89816:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:113548:30
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4734:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:91347:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:91201:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:113547:18
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1505:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4734:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:5000:28
  2309/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:5015:14
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  4124/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:1273:28
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:440:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:244:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:611:23
[1A[2KFirefox 124.0 (Linux x86_64): Executed 6 of 17[31m ERROR[39m (0.357 secs / 0.328 secs)
[1A[2K[31mFirefox 124.0 (Linux x86_64) ERROR[39m
  Disconnected , because no message in 30000 ms.
Firefox 124.0 (Linux x86_64): Executed 6 of 17[31m DISCONNECTED[39m (30.362 secs / 0.328 secs)
Firefox 124.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 124.0 (Linux x86_64): Executed 6 of 17[31m DISCONNECTED[39m (30.362 secs / 0.328 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
