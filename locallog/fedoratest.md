```bash
yarn run v1.22.22
$ ng test
19 11 2025 13:11:44.667:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
19 11 2025 13:11:44.670:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
19 11 2025 13:11:44.691:INFO [launcher]: Starting browser Firefox
19 11 2025 13:11:49.952:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket P3GHDsLG6umYwyrOAAAB with id 52293485
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: NG0201: No provider found for `HttpClient`. Source: DynamicTestModule. Path: IpinfoService -> HttpClient. Find more at https://v20.angular.dev/errors/NG0201 in vendor.js (line 84596)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpClient`.', ngTokenPath: [ 'IpinfoService', 'HttpClient' ] })
	createRuntimeError@vendor.js:85452:17
	get@vendor.js:85995:39
	get@vendor.js:86551:27
	get@vendor.js:86551:27
	retrieve@vendor.js:86436:19
	injectInjectorOnly@vendor.js:85567:35
	ɵɵinject@vendor.js:85579:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	4205/hydrate/<@vendor.js:86683:35
	runInInjectorProfilerContext@vendor.js:85272:5
	hydrate@vendor.js:86681:39
	get@vendor.js:86542:23
	get@vendor.js:43120:32
	lookupTokenUsingModuleInjector@vendor.js:31807:31
	getOrCreateInjectable@vendor.js:31853:10
	ɵɵdirectiveInject@vendor.js:43167:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:32057:38
	instantiateAllDirectives@vendor.js:39110:40
	createDirectivesInstances@vendor.js:38893:27
	create@vendor.js:44263:34
	initComponent@vendor.js:182344:45
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29211:33
	invoke@polyfills.js:969:46
	onInvoke@vendor.js:37740:25
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	run@vendor.js:37592:24
	createComponent@vendor.js:182349:37
	createComponent@vendor.js:182130:33
	1675/</<@main.js:638:80
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29211:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27393:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27408:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
Firefox 140.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.306 secs)
Firefox 140.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: NG0201: No provider found for `HttpClient`. Source: DynamicTestModule. Path: IpinfoService -> HttpClient. Find more at https://v20.angular.dev/errors/NG0201 in vendor.js (line 84596)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpClient`.', ngTokenPath: [ 'IpinfoService', 'HttpClient' ] })
	createRuntimeError@vendor.js:85452:17
	get@vendor.js:85995:39
	get@vendor.js:86551:27
	get@vendor.js:86551:27
	retrieve@vendor.js:86436:19
	injectInjectorOnly@vendor.js:85567:35
	ɵɵinject@vendor.js:85579:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	4205/hydrate/<@vendor.js:86683:35
	runInInjectorProfilerContext@vendor.js:85272:5
	hydrate@vendor.js:86681:39
	get@vendor.js:86542:23
	get@vendor.js:43120:32
	lookupTokenUsingModuleInjector@vendor.js:31807:31
	getOrCreateInjectable@vendor.js:31853:10
	ɵɵdirectiveInject@vendor.js:43167:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:32057:38
	instantiateAllDirectives@vendor.js:39110:40
	createDirectivesInstances@vendor.js:38893:27
	create@vendor.js:44263:34
	initComponent@vendor.js:182344:45
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29211:33
	invoke@polyfills.js:969:46
	onInvoke@vendor.js:37740:25
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	run@vendor.js:37592:24
	createComponent@vendor.js:182349:37
	createComponent@vendor.js:182130:33
	1675/</<@main.js:638:80
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29211:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27393:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27408:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.349 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.363 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.494 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.494 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.494 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.494 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.84 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:179146:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:179115:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:179088:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149465:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80398:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11432:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80392:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80387:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30990:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:31014:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30974:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30929:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:39882:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:40080:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:39785:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:39774:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:40614:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180597:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29211:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:37740:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:37592:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180594:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29211:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27393:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27408:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
Firefox 140.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) ERROR (0 secs / 0.84 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:179146:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:179115:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:179088:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149465:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80398:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11432:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80392:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80387:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30990:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:31014:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30974:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30929:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:39882:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:40080:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:39785:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:39774:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:40614:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180597:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29211:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:37740:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:37592:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180594:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29211:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27393:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27408:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) ERROR (0.009 secs / 0.84 secs)
[1A[2KFirefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 59111)
	verifySemanticsOfNgModuleDef@vendor.js:59111:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:59121:33
	verifySemanticsOfNgModuleDef@vendor.js:59119:118
	get@vendor.js:59076:22
	applyProviderOverridesInScope@vendor.js:181466:25
	compileTestModule@vendor.js:181784:10
	finalize@vendor.js:181297:10
	get testModuleRef@vendor.js:182369:43
	inject@vendor.js:182278:20
	inject@vendor.js:182119:33
	1230/</<@main.js:389:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29211:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27393:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27408:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
Firefox 140.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) ERROR (0.009 secs / 0.85 secs)
Firefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 59111)
	verifySemanticsOfNgModuleDef@vendor.js:59111:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:59121:33
	verifySemanticsOfNgModuleDef@vendor.js:59119:118
	get@vendor.js:59076:22
	applyProviderOverridesInScope@vendor.js:181466:25
	compileTestModule@vendor.js:181784:10
	finalize@vendor.js:181297:10
	get testModuleRef@vendor.js:182369:43
	inject@vendor.js:182278:20
	inject@vendor.js:182119:33
	1230/</<@main.js:389:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29211:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27393:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27408:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) ERROR (0.009 secs / 0.874 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) ERROR (0.009 secs / 0.894 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) ERROR (0.009 secs / 0.918 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 10 of 18 (2 FAILED) ERROR (0.009 secs / 0.947 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v20.angular.dev/errors/NG0201 in vendor.js (line 84596)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:85452:17
	get@vendor.js:85995:39
	get@vendor.js:86551:27
	get@vendor.js:86551:27
	inject@vendor.js:182279:58
	inject@vendor.js:182119:33
	9074/</<@main.js:1966:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29211:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27393:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27408:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
Firefox 140.0 (Linux x86_64): Executed 11 of 18 (3 FAILED) ERROR (0.009 secs / 0.973 secs)
Firefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v20.angular.dev/errors/NG0201 in vendor.js (line 84596)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:85452:17
	get@vendor.js:85995:39
	get@vendor.js:86551:27
	get@vendor.js:86551:27
	inject@vendor.js:182279:58
	inject@vendor.js:182119:33
	9074/</<@main.js:1966:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29211:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27393:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27408:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) ERROR (0.009 secs / 0.976 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 13 of 18 (5 FAILED) ERROR (0.009 secs / 0.977 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64): Executed 14 of 18 (5 FAILED) ERROR (0.009 secs / 0.991 secs)
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 14 of 18 (5 FAILED) ERROR (0.009 secs / 0.991 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 14 of 18 (5 FAILED) ERROR (0.009 secs / 0.991 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 14 of 18 (5 FAILED) ERROR (0.009 secs / 0.991 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 140.0 (Linux x86_64): Executed 14 of 18 (5 FAILED) ERROR (0.009 secs / 0.991 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 140.0 (Linux x86_64): Executed 14 of 18 (5 FAILED) ERROR (0.009 secs / 0.991 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 15 of 18 (5 FAILED) ERROR (0.009 secs / 1.281 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 16 of 18 (5 FAILED) ERROR (0.009 secs / 1.315 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 17 of 18 (5 FAILED) ERROR (0.009 secs / 1.43 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 17 of 18 (5 FAILED) ERROR (0.009 secs / 1.43 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 17 of 18 (5 FAILED) ERROR (0.009 secs / 1.43 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 140.0 (Linux x86_64): Executed 18 of 18 (5 FAILED) ERROR (0.009 secs / 1.471 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 18 of 18 (5 FAILED) ERROR (0.028 secs / 1.471 secs)
19 11 2025 13:11:54.916:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
