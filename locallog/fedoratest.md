```bash
yarn run v1.22.22
$ ng test
13 09 2025 23:10:58.487:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
13 09 2025 23:10:58.490:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
13 09 2025 23:10:58.494:INFO [launcher]: Starting browser Firefox
13 09 2025 23:11:01.723:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket Xf76aNdIVMGn8nT8AAAB with id 52932261
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.045 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.064 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.064 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.064 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.199 secs)
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 58849)
	verifySemanticsOfNgModuleDef@vendor.js:58849:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:58859:33
	verifySemanticsOfNgModuleDef@vendor.js:58857:118
	get@vendor.js:58814:22
	applyProviderOverridesInScope@vendor.js:180984:25
	compileTestModule@vendor.js:181302:10
	finalize@vendor.js:180815:10
	get testModuleRef@vendor.js:181887:43
	inject@vendor.js:181796:20
	inject@vendor.js:181637:33
	1230/</<@main.js:389:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29146:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27328:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27343:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.204 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 58849)
	verifySemanticsOfNgModuleDef@vendor.js:58849:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:58859:33
	verifySemanticsOfNgModuleDef@vendor.js:58857:118
	get@vendor.js:58814:22
	applyProviderOverridesInScope@vendor.js:180984:25
	compileTestModule@vendor.js:181302:10
	finalize@vendor.js:180815:10
	get testModuleRef@vendor.js:181887:43
	inject@vendor.js:181796:20
	inject@vendor.js:181637:33
	1230/</<@main.js:389:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29146:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27328:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27343:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.223 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.415 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) (0 secs / 0.424 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) (0 secs / 0.427 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (3 FAILED) (0 secs / 0.462 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 10 of 18 (3 FAILED) (0 secs / 0.511 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 10 of 18 (3 FAILED) (0 secs / 0.511 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 10 of 18 (3 FAILED) (0 secs / 0.511 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 10 of 18 (3 FAILED) (0 secs / 0.511 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 11 of 18 (3 FAILED) (0 secs / 0.746 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178664:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178633:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178606:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149052:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80099:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11374:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80093:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80088:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30925:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:30949:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30909:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30864:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:38711:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:38909:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:38614:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:38603:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:39443:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180115:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29146:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:46155:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:46007:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180112:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29146:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27328:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27343:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:1074:11
  4124/initZone/ZoneTask/this.invoke@http://localhost:9876/_karma_webpack_/polyfills.js:1060:38
  4124/patchTimer/scheduleTask/data.args[0]@http://localhost:9876/_karma_webpack_/polyfills.js:2349:26
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (3 FAILED) ERROR (0 secs / 0.746 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178664:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178633:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178606:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149052:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80099:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11374:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80093:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80088:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30925:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:30949:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30909:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30864:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:38711:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:38909:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:38614:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:38603:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:39443:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180115:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29146:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:46155:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:46007:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180112:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29146:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27328:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27343:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:1074:11
  4124/initZone/ZoneTask/this.invoke@http://localhost:9876/_karma_webpack_/polyfills.js:1060:38
  4124/patchTimer/scheduleTask/data.args[0]@http://localhost:9876/_karma_webpack_/polyfills.js:2349:26
[1A[2KFirefox 128.0 (Linux x86_64): Executed 11 of 18 (3 FAILED) ERROR (0.925 secs / 0.746 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (3 FAILED) DISCONNECTED (30.95 secs / 0.746 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 11 of 18 (3 FAILED) DISCONNECTED (30.95 secs / 0.746 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
