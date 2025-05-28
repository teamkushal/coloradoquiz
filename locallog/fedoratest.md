```bash
yarn run v1.22.22
$ ng test
28 05 2025 16:10:58.198:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
28 05 2025 16:10:58.211:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
28 05 2025 16:10:58.215:INFO [launcher]: Starting browser Firefox
28 05 2025 16:11:02.320:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket Q7UlSxNr2Eyhp-gNAAAB with id 83156733
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 163487)
	verifySemanticsOfNgModuleDef@vendor.js:163487:13
	7838/verifySemanticsOfNgModuleDef/<@vendor.js:163497:33
	verifySemanticsOfNgModuleDef@vendor.js:163495:127
	get@vendor.js:163452:22
	applyProviderOverridesInScope@vendor.js:178679:25
	compileTestModule@vendor.js:178994:10
	finalize@vendor.js:178510:10
	get testModuleRef@vendor.js:179565:43
	inject@vendor.js:179476:20
	inject@vendor.js:179321:33
	1230/</<@main.js:386:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:33977:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:32160:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32175:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.013 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 163487)
	verifySemanticsOfNgModuleDef@vendor.js:163487:13
	7838/verifySemanticsOfNgModuleDef/<@vendor.js:163497:33
	verifySemanticsOfNgModuleDef@vendor.js:163495:127
	get@vendor.js:163452:22
	applyProviderOverridesInScope@vendor.js:178679:25
	compileTestModule@vendor.js:178994:10
	finalize@vendor.js:178510:10
	get testModuleRef@vendor.js:179565:43
	inject@vendor.js:179476:20
	inject@vendor.js:179321:33
	1230/</<@main.js:386:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:33977:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:32160:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32175:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.039 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.051 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.051 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.051 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.051 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.217 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:176320:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:176289:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:176262:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:106597:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:52066:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:17266:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:52060:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:52055:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:136652:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:136676:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:136636:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:136591:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:144357:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:144555:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:144263:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:144252:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:145081:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:177802:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:33977:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:151679:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:151531:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:177799:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:33977:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:32160:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:32175:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) ERROR (0 secs / 0.217 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:176320:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:176289:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:176262:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:106597:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:52066:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:17266:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:52060:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:52055:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:136652:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:136676:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:136636:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:136591:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:144357:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:144555:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:144263:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:144252:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:145081:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:177802:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:33977:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:151679:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:151531:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:177799:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:33977:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:32160:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:32175:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) ERROR (0.268 secs / 0.217 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) DISCONNECTED (30.285 secs / 0.217 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) DISCONNECTED (30.285 secs / 0.217 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
