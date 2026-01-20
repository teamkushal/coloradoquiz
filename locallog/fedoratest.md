```bash
yarn run v1.22.22
$ ng test
20 01 2026 00:10:57.790:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
20 01 2026 00:10:57.792:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
20 01 2026 00:10:57.796:INFO [launcher]: Starting browser Firefox
20 01 2026 00:11:00.905:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket 9dZqKO5Bx-JvJ0IJAAAB with id 21192407
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.038 secs)
[1A[2KFirefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 108783)
	verifySemanticsOfNgModuleDef@vendor.js:108783:13
	6124/verifySemanticsOfNgModuleDef/<@vendor.js:108793:33
	verifySemanticsOfNgModuleDef@vendor.js:108791:112
	get@vendor.js:108750:22
	applyProviderOverridesInScope@vendor.js:131453:25
	compileTestModule@vendor.js:131693:10
	finalize@vendor.js:131329:10
	get testModuleRef@vendor.js:132125:43
	inject@vendor.js:132046:20
	inject@vendor.js:131933:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30395:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28574:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28589:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.046 secs)
Firefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 108783)
	verifySemanticsOfNgModuleDef@vendor.js:108783:13
	6124/verifySemanticsOfNgModuleDef/<@vendor.js:108793:33
	verifySemanticsOfNgModuleDef@vendor.js:108791:112
	get@vendor.js:108750:22
	applyProviderOverridesInScope@vendor.js:131453:25
	compileTestModule@vendor.js:131693:10
	finalize@vendor.js:131329:10
	get testModuleRef@vendor.js:132125:43
	inject@vendor.js:132046:20
	inject@vendor.js:131933:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30395:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28574:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28589:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.06 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.06 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.06 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.06 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.266 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129734:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129703:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129676:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90718:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:46920:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13173:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:46914:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:46909:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:91947:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:91962:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:91936:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91905:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96831:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:96959:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96768:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96757:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103220:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103194:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103169:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103157:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103150:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130831:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30395:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28574:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28589:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) ERROR (0 secs / 0.266 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129734:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129703:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129676:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90718:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:46920:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13173:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:46914:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:46909:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:91947:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:91962:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:91936:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91905:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96831:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:96959:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96768:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96757:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103220:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103194:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103169:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103157:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103150:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130831:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30395:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28574:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28589:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) ERROR (0.31 secs / 0.266 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) DISCONNECTED (30.33 secs / 0.266 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) DISCONNECTED (30.33 secs / 0.266 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
