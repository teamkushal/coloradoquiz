```bash
yarn run v1.22.22
$ ng test
13 04 2025 04:10:59.583:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
13 04 2025 04:10:59.586:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
13 04 2025 04:10:59.593:INFO [launcher]: Starting browser Firefox
13 04 2025 04:11:02.988:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket 55oLf-AkLGbkcySPAAAB with id 41003704
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.029 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.04 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.055 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.055 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.055 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 SUCCESS (0 secs / 0.122 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.123 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) (0 secs / 0.125 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) (0 secs / 0.137 secs)
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 161980)
	verifySemanticsOfNgModuleDef@vendor.js:161980:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:161990:33
	verifySemanticsOfNgModuleDef@vendor.js:161988:58
	get@vendor.js:161945:22
	applyProviderOverridesInScope@vendor.js:180556:25
	compileTestModule@vendor.js:180867:10
	finalize@vendor.js:180380:10
	get testModuleRef@vendor.js:181443:43
	inject@vendor.js:181350:20
	inject@vendor.js:181194:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:45246:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:43425:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:43440:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) (0 secs / 0.141 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 161980)
	verifySemanticsOfNgModuleDef@vendor.js:161980:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:161990:33
	verifySemanticsOfNgModuleDef@vendor.js:161988:58
	get@vendor.js:161945:22
	applyProviderOverridesInScope@vendor.js:180556:25
	compileTestModule@vendor.js:180867:10
	finalize@vendor.js:180380:10
	get testModuleRef@vendor.js:181443:43
	inject@vendor.js:181350:20
	inject@vendor.js:181194:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:45246:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:43425:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:43440:16
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
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) (0 secs / 0.141 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) (0 secs / 0.141 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) (0 secs / 0.141 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (3 FAILED) (0 secs / 0.302 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:177872:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:177841:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:177814:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:117260:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:58460:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:21525:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:58454:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:58449:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:133212:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:133236:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:133196:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:133151:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:142692:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:142890:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:142598:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:142582:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:143417:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:179664:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:45246:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:135455:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:135307:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:179661:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:45246:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:43425:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:43440:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (3 FAILED) ERROR (0 secs / 0.302 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:177872:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:177841:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:177814:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:117260:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:58460:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:21525:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:58454:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:58449:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:133212:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:133236:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:133196:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:133151:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:142692:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:142890:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:142598:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:142582:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:143417:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:179664:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:45246:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:135455:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:135307:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:179661:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:45246:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:43425:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:43440:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (3 FAILED) ERROR (0.352 secs / 0.302 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (3 FAILED) DISCONNECTED (30.364 secs / 0.302 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (3 FAILED) DISCONNECTED (30.364 secs / 0.302 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
