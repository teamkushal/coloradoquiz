```bash
yarn run v1.22.22
$ ng test
09 01 2025 01:10:56.764:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
09 01 2025 01:10:56.767:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
09 01 2025 01:10:56.790:INFO [launcher]: Starting browser Firefox
09 01 2025 01:11:00.144:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket NTWIK4VE45JKCeA2AAAB with id 76977967
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.014 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 2 of 18 (2 FAILED) (0 secs / 0.017 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 (2 FAILED) (0 secs / 0.045 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 (2 FAILED) (0 secs / 0.209 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (2 FAILED) (0 secs / 0.231 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (2 FAILED) (0 secs / 0.231 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (2 FAILED) (0 secs / 0.231 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (2 FAILED) (0 secs / 0.231 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) (0 secs / 0.41 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 355)
  createReal@http://localhost:9876/_karma_webpack_/main.js:355:7
  submit@http://localhost:9876/_karma_webpack_/main.js:368:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:1685:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:4064:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1681:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1664:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:80228:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:80252:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:80212:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:80167:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:90514:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:90709:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:90420:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:90404:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:91022:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:119160:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6490:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:82561:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:82413:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:119157:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1584:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6490:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:4669:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:4684:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2502:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:438:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:237:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:609:23
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:518:11
  4124/initZone/ZoneTask/this.invoke@http://localhost:9876/_karma_webpack_/polyfills.js:504:38
  4124/patchTimer/scheduleTask/data.args[0]@http://localhost:9876/_karma_webpack_/polyfills.js:1793:26
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) ERROR (0 secs / 0.41 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 355)
  createReal@http://localhost:9876/_karma_webpack_/main.js:355:7
  submit@http://localhost:9876/_karma_webpack_/main.js:368:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:1685:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:4064:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1681:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1664:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:80228:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:80252:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:80212:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:80167:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:90514:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:90709:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:90420:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:90404:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:91022:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:119160:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6490:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:82561:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:82413:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:119157:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1584:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6490:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:4669:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:4684:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2502:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:438:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:237:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:609:23
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:518:11
  4124/initZone/ZoneTask/this.invoke@http://localhost:9876/_karma_webpack_/polyfills.js:504:38
  4124/patchTimer/scheduleTask/data.args[0]@http://localhost:9876/_karma_webpack_/polyfills.js:1793:26
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) ERROR (0.392 secs / 0.41 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) DISCONNECTED (30.41 secs / 0.41 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) DISCONNECTED (30.41 secs / 0.41 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
