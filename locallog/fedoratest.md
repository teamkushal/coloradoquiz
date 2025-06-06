```bash
yarn run v1.22.22
$ ng test
06 06 2025 03:10:58.294:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
06 06 2025 03:10:58.298:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
06 06 2025 03:10:58.303:INFO [launcher]: Starting browser Firefox
06 06 2025 03:11:01.938:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket aBNTLSirGgSUKC61AAAB with id 38105389
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.029 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.048 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.148 secs)
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 82897)
	verifySemanticsOfNgModuleDef@vendor.js:82897:13
	4086/verifySemanticsOfNgModuleDef/<@vendor.js:82907:33
	verifySemanticsOfNgModuleDef@vendor.js:82905:127
	get@vendor.js:82862:22
	applyProviderOverridesInScope@vendor.js:178572:25
	compileTestModule@vendor.js:178887:10
	finalize@vendor.js:178403:10
	get testModuleRef@vendor.js:179458:43
	inject@vendor.js:179369:20
	inject@vendor.js:179214:33
	1230/</<@main.js:386:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:32496:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:30679:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:30694:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.151 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 82897)
	verifySemanticsOfNgModuleDef@vendor.js:82897:13
	4086/verifySemanticsOfNgModuleDef/<@vendor.js:82907:33
	verifySemanticsOfNgModuleDef@vendor.js:82905:127
	get@vendor.js:82862:22
	applyProviderOverridesInScope@vendor.js:178572:25
	compileTestModule@vendor.js:178887:10
	finalize@vendor.js:178403:10
	get testModuleRef@vendor.js:179458:43
	inject@vendor.js:179369:20
	inject@vendor.js:179214:33
	1230/</<@main.js:386:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:32496:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:30679:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:30694:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.151 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.151 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.187 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.203 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 41947)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	NotFoundError@vendor.js:41947:5
	get@vendor.js:43631:21
	get@vendor.js:44183:27
	get@vendor.js:44183:27
	inject@vendor.js:179370:58
	inject@vendor.js:179214:33
	9074/</<@main.js:1950:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:32496:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:30679:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:30694:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
Firefox 128.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) (0 secs / 0.214 secs)
Firefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 41947)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	NotFoundError@vendor.js:41947:5
	get@vendor.js:43631:21
	get@vendor.js:44183:27
	get@vendor.js:44183:27
	inject@vendor.js:179370:58
	inject@vendor.js:179214:33
	9074/</<@main.js:1950:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:32496:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:30679:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:30694:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) (0 secs / 0.276 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (3 FAILED) (0 secs / 0.281 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 10 of 18 (4 FAILED) (0 secs / 0.283 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 10 of 18 (4 FAILED) (0 secs / 0.283 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 10 of 18 (4 FAILED) (0 secs / 0.283 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 10 of 18 (4 FAILED) (0 secs / 0.283 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) (0 secs / 0.377 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:176213:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:176182:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:176155:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:137095:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:52239:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:14635:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:52233:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:52228:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:56051:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:56075:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:56035:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:55990:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:63754:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:63952:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:63660:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:63649:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:64480:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:177695:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:32496:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:71079:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:70931:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:177692:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:32496:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:30679:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:30694:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:541:11
  4124/initZone/ZoneTask/this.invoke@http://localhost:9876/_karma_webpack_/polyfills.js:527:38
  4124/patchTimer/scheduleTask/data.args[0]@http://localhost:9876/_karma_webpack_/polyfills.js:1816:26
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) ERROR (0 secs / 0.377 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:176213:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:176182:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:176155:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:137095:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:52239:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:14635:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:52233:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:52228:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:56051:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:56075:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:56035:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:55990:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:63754:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:63952:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:63660:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:63649:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:64480:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:177695:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:32496:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:71079:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:70931:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:177692:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:32496:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:30679:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:30694:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:541:11
  4124/initZone/ZoneTask/this.invoke@http://localhost:9876/_karma_webpack_/polyfills.js:527:38
  4124/patchTimer/scheduleTask/data.args[0]@http://localhost:9876/_karma_webpack_/polyfills.js:1816:26
[1A[2KFirefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) ERROR (0.426 secs / 0.377 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) DISCONNECTED (30.441 secs / 0.377 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) DISCONNECTED (30.441 secs / 0.377 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
