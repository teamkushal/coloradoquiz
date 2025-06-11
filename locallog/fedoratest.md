```bash
yarn run v1.22.22
$ ng test
11 06 2025 13:10:52.037:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
11 06 2025 13:10:52.041:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
11 06 2025 13:10:52.056:INFO [launcher]: Starting browser Firefox
11 06 2025 13:10:55.162:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket eVUXKKylA7zKdCrkAAAB with id 89548743
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.115 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.142 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.218 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 SUCCESS (0 secs / 0.242 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 SUCCESS (0 secs / 0.255 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 5 of 18 SUCCESS (0 secs / 0.255 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 5 of 18 SUCCESS (0 secs / 0.255 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 5 of 18 SUCCESS (0 secs / 0.255 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 SUCCESS (0 secs / 0.36 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:145516:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:145485:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:145458:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:103975:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:51314:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13968:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:51308:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:51303:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:146893:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:146917:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:146877:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:146832:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:154599:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:154797:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:154502:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:154491:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:155331:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:177337:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34513:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:161930:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:161782:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:177334:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34513:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:32696:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:32711:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3055:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:991:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:790:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 6 of 18 ERROR (0 secs / 0.36 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:145516:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:145485:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:145458:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:103975:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:51314:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13968:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:51308:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:51303:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:146893:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:146917:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:146877:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:146832:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:154599:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:154797:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:154502:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:154491:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:155331:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:177337:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34513:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:161930:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:161782:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:177334:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34513:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:32696:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:32711:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3055:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:991:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:790:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1162:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 ERROR (0.404 secs / 0.36 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 6 of 18 DISCONNECTED (30.414 secs / 0.36 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 DISCONNECTED (30.414 secs / 0.36 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
