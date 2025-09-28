```bash
yarn run v1.22.22
$ ng test
28 09 2025 07:10:55.754:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
28 09 2025 07:10:55.766:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
28 09 2025 07:10:55.771:INFO [launcher]: Starting browser Firefox
28 09 2025 07:11:00.061:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket fkYrmxboHLD69RoDAAAB with id 76277645
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.155 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.155 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.155 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 140.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.204 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.226 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.229 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 5 of 18 (2 FAILED) (0 secs / 0.231 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) (0 secs / 0.244 secs)
[1A[2KFirefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 58897)
	verifySemanticsOfNgModuleDef@vendor.js:58897:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:58907:33
	verifySemanticsOfNgModuleDef@vendor.js:58905:118
	get@vendor.js:58862:22
	applyProviderOverridesInScope@vendor.js:180957:25
	compileTestModule@vendor.js:181275:10
	finalize@vendor.js:180788:10
	get testModuleRef@vendor.js:181860:43
	inject@vendor.js:181769:20
	inject@vendor.js:181610:33
	1230/</<@main.js:389:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29160:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27342:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27357:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.258 secs)
Firefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 58897)
	verifySemanticsOfNgModuleDef@vendor.js:58897:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:58907:33
	verifySemanticsOfNgModuleDef@vendor.js:58905:118
	get@vendor.js:58862:22
	applyProviderOverridesInScope@vendor.js:180957:25
	compileTestModule@vendor.js:181275:10
	finalize@vendor.js:180788:10
	get testModuleRef@vendor.js:181860:43
	inject@vendor.js:181769:20
	inject@vendor.js:181610:33
	1230/</<@main.js:389:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29160:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27342:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27357:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.258 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.258 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.258 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) (0 secs / 0.421 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178637:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178606:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178579:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149018:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80148:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11388:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80142:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80137:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30938:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:30962:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30922:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30877:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:38882:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:39089:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:38784:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:38773:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:39623:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180088:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29160:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:46344:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:46196:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180085:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29160:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27342:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27357:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
Firefox 140.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) ERROR (0 secs / 0.421 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178637:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178606:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178579:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149018:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80148:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11388:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80142:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80137:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30938:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:30962:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30922:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30877:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:38882:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:39089:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:38784:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:38773:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:39623:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180088:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29160:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:46344:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:46196:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180085:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29160:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27342:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27357:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) ERROR (0.478 secs / 0.421 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) DISCONNECTED (30.496 secs / 0.421 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) DISCONNECTED (30.496 secs / 0.421 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
