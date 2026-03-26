```bash
yarn run v1.22.22
$ ng test
26 03 2026 16:11:05.131:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
26 03 2026 16:11:05.133:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
26 03 2026 16:11:05.138:INFO [launcher]: Starting browser Firefox
26 03 2026 16:11:08.804:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket i8EL601AT_ndLtXNAAAB with id 3615359
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.038 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.055 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.069 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 4 of 18 SUCCESS (0 secs / 0.103 secs)
[1A[2KFirefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 79694)
	verifySemanticsOfNgModuleDef@vendor.js:79694:13
	6124/verifySemanticsOfNgModuleDef/<@vendor.js:79704:33
	verifySemanticsOfNgModuleDef@vendor.js:79702:110
	get@vendor.js:79661:22
	applyProviderOverridesInScope@vendor.js:90270:25
	compileTestModule@vendor.js:90510:10
	finalize@vendor.js:90146:10
	get testModuleRef@vendor.js:90942:43
	inject@vendor.js:90863:20
	inject@vendor.js:90750:33
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
Firefox 140.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.107 secs)
Firefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 79694)
	verifySemanticsOfNgModuleDef@vendor.js:79694:13
	6124/verifySemanticsOfNgModuleDef/<@vendor.js:79704:33
	verifySemanticsOfNgModuleDef@vendor.js:79702:110
	get@vendor.js:79661:22
	applyProviderOverridesInScope@vendor.js:90270:25
	compileTestModule@vendor.js:90510:10
	finalize@vendor.js:90146:10
	get testModuleRef@vendor.js:90942:43
	inject@vendor.js:90863:20
	inject@vendor.js:90750:33
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
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.107 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.107 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.107 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.312 secs)
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
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:63080:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:63095:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:63069:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:63038:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:68153:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:68281:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:68090:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:68079:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:74742:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:74716:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:74691:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:74679:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:74672:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:89648:24
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
Firefox 140.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) ERROR (0 secs / 0.312 secs)
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
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:63080:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:63095:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:63069:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:63038:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:68153:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:68281:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:68090:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:68079:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:74742:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:74716:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:74691:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:74679:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:74672:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:89648:24
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
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) ERROR (0.399 secs / 0.312 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) DISCONNECTED (30.434 secs / 0.312 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) DISCONNECTED (30.434 secs / 0.312 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
