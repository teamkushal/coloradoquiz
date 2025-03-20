```bash
yarn run v1.22.22
$ ng test
19 03 2025 21:11:03.324:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
19 03 2025 21:11:03.327:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
19 03 2025 21:11:03.331:INFO [launcher]: Starting browser Firefox
19 03 2025 21:11:06.836:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket OiJ3uRAqF4gt0a31AAAB with id 31904795
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 161363)
	verifySemanticsOfNgModuleDef@vendor.js:161363:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:161373:33
	verifySemanticsOfNgModuleDef@vendor.js:161371:58
	get@vendor.js:161328:22
	applyProviderOverridesInScope@vendor.js:179831:25
	compileTestModule@vendor.js:180142:10
	finalize@vendor.js:179655:10
	get testModuleRef@vendor.js:180718:43
	inject@vendor.js:180625:20
	inject@vendor.js:180469:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34079:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32258:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32273:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.021 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 161363)
	verifySemanticsOfNgModuleDef@vendor.js:161363:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:161373:33
	verifySemanticsOfNgModuleDef@vendor.js:161371:58
	get@vendor.js:161328:22
	applyProviderOverridesInScope@vendor.js:179831:25
	compileTestModule@vendor.js:180142:10
	finalize@vendor.js:179655:10
	get testModuleRef@vendor.js:180718:43
	inject@vendor.js:180625:20
	inject@vendor.js:180469:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34079:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32258:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32273:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.021 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.021 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.021 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.245 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:177438:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:177407:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:177380:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:111159:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:46972:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:18782:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:46966:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:46961:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:132614:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:132638:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:132598:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:132553:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:142146:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:142344:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:142052:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:142036:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:142871:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:178939:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34079:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:134909:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:134761:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:178936:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34079:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:32258:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:32273:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) ERROR (0 secs / 0.245 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:177438:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:177407:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:177380:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:111159:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:46972:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:18782:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:46966:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:46961:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:132614:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:132638:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:132598:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:132553:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:142146:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:142344:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:142052:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:142036:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:142871:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:178939:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34079:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:134909:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:134761:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:178936:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34079:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:32258:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:32273:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) ERROR (0.27 secs / 0.245 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) DISCONNECTED (30.284 secs / 0.245 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) DISCONNECTED (30.284 secs / 0.245 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
