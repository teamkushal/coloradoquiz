```bash
yarn run v1.22.22
$ ng test
30 04 2025 18:11:03.618:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
30 04 2025 18:11:03.620:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
30 04 2025 18:11:03.625:INFO [launcher]: Starting browser Firefox
30 04 2025 18:11:07.342:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket AMsX7E9PqDXQ3EPbAAAB with id 82525391
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.031 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.124 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.212 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.212 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.212 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.212 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 SUCCESS (0 secs / 0.317 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:174076:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:174045:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:174018:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:111764:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:55131:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:18645:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:55125:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:55120:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:127479:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:127503:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:127463:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:127418:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:136981:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:137179:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:136887:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:136871:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:137706:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:175783:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:37080:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:129743:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:129595:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:175780:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:37080:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:35259:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:35274:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 4 of 18 ERROR (0 secs / 0.317 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:174076:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:174045:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:174018:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:111764:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:55131:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:18645:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:55125:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:55120:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:127479:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:127503:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:127463:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:127418:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:136981:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:137179:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:136887:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:136871:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:137706:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:175783:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:37080:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:129743:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:129595:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:175780:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:37080:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:35259:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:35274:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 ERROR (0.367 secs / 0.317 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 4 of 18 DISCONNECTED (30.38 secs / 0.317 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 DISCONNECTED (30.38 secs / 0.317 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
