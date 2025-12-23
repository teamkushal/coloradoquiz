```bash
yarn run v1.22.22
$ ng test
22 12 2025 20:10:56.766:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
22 12 2025 20:10:56.769:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
22 12 2025 20:10:56.774:INFO [launcher]: Starting browser Firefox
22 12 2025 20:11:00.523:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket XThhDf3-1au3U2-SAAAB with id 26621054
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.075 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.09 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.103 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 4 of 18 SUCCESS (0 secs / 0.373 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 SUCCESS (0 secs / 0.507 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 SUCCESS (0 secs / 0.522 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 6 of 18 SUCCESS (0 secs / 0.522 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 6 of 18 SUCCESS (0 secs / 0.522 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 6 of 18 SUCCESS (0 secs / 0.522 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 7 of 18 SUCCESS (0 secs / 0.679 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129392:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129361:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129334:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90747:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47128:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13055:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47122:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47117:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:91974:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:91989:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:91963:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91932:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96855:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:96983:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96792:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96781:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103244:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103218:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103193:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103181:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103174:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130489:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30305:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28484:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28499:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 7 of 18 ERROR (0 secs / 0.679 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129392:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129361:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129334:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90747:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47128:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13055:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47122:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47117:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:91974:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:91989:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:91963:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91932:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96855:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:96983:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96792:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96781:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103244:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103218:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103193:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103181:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103174:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130489:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30305:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28484:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28499:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 7 of 18 ERROR (0.784 secs / 0.679 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 8 of 18 (1 FAILED) ERROR (0.784 secs / 0.684 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) ERROR (0.784 secs / 0.686 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) DISCONNECTED (30.831 secs / 0.686 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) DISCONNECTED (30.831 secs / 0.686 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
