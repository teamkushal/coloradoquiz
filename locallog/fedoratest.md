```bash
yarn run v1.22.22
$ ng test
18 02 2026 20:11:00.442:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
18 02 2026 20:11:00.444:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
18 02 2026 20:11:00.448:INFO [launcher]: Starting browser Firefox
18 02 2026 20:11:03.603:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket dMPLJAuj2eDh_Xj4AAAB with id 61557892
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.045 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.057 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.2 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 4 of 18 SUCCESS (0 secs / 0.22 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 SUCCESS (0 secs / 0.244 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 SUCCESS (0 secs / 0.267 secs)
[1A[2KFirefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 79401)
	verifySemanticsOfNgModuleDef@vendor.js:79401:13
	6124/verifySemanticsOfNgModuleDef/<@vendor.js:79411:33
	verifySemanticsOfNgModuleDef@vendor.js:79409:112
	get@vendor.js:79368:22
	applyProviderOverridesInScope@vendor.js:89965:25
	compileTestModule@vendor.js:90205:10
	finalize@vendor.js:89841:10
	get testModuleRef@vendor.js:90637:43
	inject@vendor.js:90558:20
	inject@vendor.js:90445:33
	1230/</<@main.js:1369:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6270:33
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	runInTestZone@vendor.js:4449:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:4464:16
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:184:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2502:30
	invokeTask@polyfills.js:438:171
	runTask@polyfills.js:237:37
	drainMicroTaskQueue@polyfills.js:609:23
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (1 FAILED) (0 secs / 0.27 secs)
Firefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 79401)
	verifySemanticsOfNgModuleDef@vendor.js:79401:13
	6124/verifySemanticsOfNgModuleDef/<@vendor.js:79411:33
	verifySemanticsOfNgModuleDef@vendor.js:79409:112
	get@vendor.js:79368:22
	applyProviderOverridesInScope@vendor.js:89965:25
	compileTestModule@vendor.js:90205:10
	finalize@vendor.js:89841:10
	get testModuleRef@vendor.js:90637:43
	inject@vendor.js:90558:20
	inject@vendor.js:90445:33
	1230/</<@main.js:1369:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6270:33
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	runInTestZone@vendor.js:4449:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:4464:16
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:184:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2502:30
	invokeTask@polyfills.js:438:171
	runTask@polyfills.js:237:37
	drainMicroTaskQueue@polyfills.js:609:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 8 of 18 (1 FAILED) (0 secs / 0.366 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 8 of 18 (1 FAILED) (0 secs / 0.366 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 8 of 18 (1 FAILED) (0 secs / 0.366 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 8 of 18 (1 FAILED) (0 secs / 0.366 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 9 of 18 (1 FAILED) (0 secs / 0.48 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 355)
  createReal@http://localhost:9876/_karma_webpack_/main.js:355:7
  submit@http://localhost:9876/_karma_webpack_/main.js:368:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:1686:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:3844:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1682:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1665:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:62547:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:62562:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:62536:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:62505:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:67445:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:67573:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:67382:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:67371:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:73834:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:73808:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:73783:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:73771:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:73764:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:89343:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1585:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6270:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:4449:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:4464:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2502:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:438:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:237:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:609:23
Firefox 140.0 (Linux x86_64): Executed 9 of 18 (1 FAILED) ERROR (0 secs / 0.48 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 355)
  createReal@http://localhost:9876/_karma_webpack_/main.js:355:7
  submit@http://localhost:9876/_karma_webpack_/main.js:368:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:1686:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:3844:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1682:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1665:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:62547:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:62562:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:62536:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:62505:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:67445:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:67573:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:67382:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:67371:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:73834:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:73808:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:73783:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:73771:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:73764:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:89343:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1585:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6270:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:4449:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:4464:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2502:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:438:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:237:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:609:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 9 of 18 (1 FAILED) ERROR (0.602 secs / 0.48 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 9 of 18 (1 FAILED) DISCONNECTED (30.631 secs / 0.48 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 9 of 18 (1 FAILED) DISCONNECTED (30.631 secs / 0.48 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
