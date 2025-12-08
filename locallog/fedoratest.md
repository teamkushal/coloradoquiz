```bash
yarn run v1.22.22
$ ng test
07 12 2025 22:10:57.968:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
07 12 2025 22:10:57.972:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
07 12 2025 22:10:57.976:INFO [launcher]: Starting browser Firefox
07 12 2025 22:11:01.356:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket kCHFXyN5DyIeTSpHAAAB with id 16283876
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.26 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129420:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129389:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129362:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90758:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47150:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13079:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47144:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47139:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:91985:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:92000:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:91974:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91943:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96866:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:96994:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96803:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96792:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103255:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103229:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103204:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103192:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103185:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130518:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30326:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28505:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28520:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 1 of 18 ERROR (0 secs / 0.26 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129420:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129389:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129362:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90758:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47150:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13079:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47144:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47139:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:91985:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:92000:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:91974:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91943:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96866:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:96994:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96803:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96792:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103255:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103229:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103204:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103192:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103185:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130518:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30326:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28505:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28520:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 ERROR (0.635 secs / 0.26 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 2 of 18 ERROR (0.635 secs / 0.316 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 2 of 18 DISCONNECTED (30.655 secs / 0.316 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 2 of 18 DISCONNECTED (30.655 secs / 0.316 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
