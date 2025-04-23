```bash
yarn run v1.22.22
$ ng test
23 04 2025 07:11:02.274:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
23 04 2025 07:11:02.283:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
23 04 2025 07:11:02.296:INFO [launcher]: Starting browser Firefox
23 04 2025 07:11:05.658:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket JOlMtC1mfwxntP9WAAAB with id 24238091
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.234 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:175856:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:175825:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:175798:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:113899:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:55695:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:20465:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:55689:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:55684:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:129604:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:129628:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:129588:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:129543:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:139084:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:139282:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:138990:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:138974:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:139809:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:177563:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:39455:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:131847:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:131699:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:177560:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:39455:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:37634:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:37649:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 1 of 18 ERROR (0 secs / 0.234 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:175856:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:175825:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:175798:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:113899:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:55695:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:20465:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:55689:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:55684:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:129604:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:129628:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:129588:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:129543:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:139084:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:139282:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:138990:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:138974:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:139809:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:177563:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:39455:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:131847:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:131699:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:177560:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:39455:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:37634:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:37649:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 ERROR (0.271 secs / 0.234 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 1 of 18 DISCONNECTED (30.284 secs / 0.234 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 DISCONNECTED (30.284 secs / 0.234 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
