```bash
yarn run v1.22.22
$ ng test
08 10 2025 07:11:56.206:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
08 10 2025 07:11:56.210:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
08 10 2025 07:11:56.232:INFO [launcher]: Starting browser Firefox
08 10 2025 07:12:01.446:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket FCjT0GFqh3fxaKfxAAAB with id 12776476
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 58891)
	verifySemanticsOfNgModuleDef@vendor.js:58891:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:58901:33
	verifySemanticsOfNgModuleDef@vendor.js:58899:118
	get@vendor.js:58856:22
	applyProviderOverridesInScope@vendor.js:180959:25
	compileTestModule@vendor.js:181277:10
	finalize@vendor.js:180790:10
	get testModuleRef@vendor.js:181862:43
	inject@vendor.js:181771:20
	inject@vendor.js:181612:33
	1230/</<@main.js:389:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29164:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27346:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27361:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
Firefox 140.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.016 secs)
Firefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 58891)
	verifySemanticsOfNgModuleDef@vendor.js:58891:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:58901:33
	verifySemanticsOfNgModuleDef@vendor.js:58899:118
	get@vendor.js:58856:22
	applyProviderOverridesInScope@vendor.js:180959:25
	compileTestModule@vendor.js:181277:10
	finalize@vendor.js:180790:10
	get testModuleRef@vendor.js:181862:43
	inject@vendor.js:181771:20
	inject@vendor.js:181612:33
	1230/</<@main.js:389:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29164:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27346:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27361:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.057 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.096 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.109 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.126 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.126 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.126 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.126 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.435 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178639:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178608:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178581:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149007:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80142:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11388:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80136:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80131:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30942:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:30966:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30926:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30881:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:38886:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:39093:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:38788:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:38777:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:39627:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180090:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29164:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:46348:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:46200:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180087:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29164:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27346:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27361:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
Firefox 140.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) ERROR (0 secs / 0.435 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178639:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178608:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178581:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149007:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80142:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11388:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80136:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80131:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30942:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:30966:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30926:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30881:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:38886:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:39093:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:38788:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:38777:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:39627:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180090:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29164:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:46348:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:46200:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180087:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29164:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27346:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27361:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) ERROR (2.664 secs / 0.435 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v20.angular.dev/errors/NG0201 in vendor.js (line 84301)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:85154:17
	get@vendor.js:85695:39
	get@vendor.js:86249:27
	get@vendor.js:86249:27
	inject@vendor.js:181772:58
	inject@vendor.js:181612:33
	9074/</<@main.js:1966:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29164:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27346:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27361:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) ERROR (2.664 secs / 0.456 secs)
Firefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v20.angular.dev/errors/NG0201 in vendor.js (line 84301)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:85154:17
	get@vendor.js:85695:39
	get@vendor.js:86249:27
	get@vendor.js:86249:27
	inject@vendor.js:181772:58
	inject@vendor.js:181612:33
	9074/</<@main.js:1966:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29164:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27346:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27361:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) ERROR (2.664 secs / 0.475 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) ERROR (2.664 secs / 0.498 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 10 of 18 (3 FAILED) ERROR (2.664 secs / 0.5 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) ERROR (2.664 secs / 0.503 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) ERROR (2.664 secs / 0.514 secs)
[1A[2KFirefox 140.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: NG0201: No provider found for `HttpClient`. Source: DynamicTestModule. Path: IpinfoService -> HttpClient. Find more at https://v20.angular.dev/errors/NG0201 in vendor.js (line 84301)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpClient`.', ngTokenPath: [ 'IpinfoService', 'HttpClient' ] })
	createRuntimeError@vendor.js:85154:17
	get@vendor.js:85695:39
	get@vendor.js:86249:27
	get@vendor.js:86249:27
	retrieve@vendor.js:86134:19
	injectInjectorOnly@vendor.js:85269:35
	ɵɵinject@vendor.js:85281:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	4205/hydrate/<@vendor.js:86381:35
	runInInjectorProfilerContext@vendor.js:84974:5
	hydrate@vendor.js:86379:39
	get@vendor.js:86240:23
	get@vendor.js:42131:32
	lookupTokenUsingModuleInjector@vendor.js:31759:31
	getOrCreateInjectable@vendor.js:31805:10
	ɵɵdirectiveInject@vendor.js:42178:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:32009:38
	instantiateAllDirectives@vendor.js:38113:40
	createDirectivesInstances@vendor.js:37896:27
	create@vendor.js:43271:34
	initComponent@vendor.js:181837:45
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29164:33
	invoke@polyfills.js:969:46
	onInvoke@vendor.js:46348:25
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	run@vendor.js:46200:24
	createComponent@vendor.js:181842:37
	createComponent@vendor.js:181623:33
	1675/</<@main.js:638:80
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29164:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27346:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27361:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
Firefox 140.0 (Linux x86_64): Executed 13 of 18 (5 FAILED) ERROR (2.664 secs / 0.563 secs)
Firefox 140.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: NG0201: No provider found for `HttpClient`. Source: DynamicTestModule. Path: IpinfoService -> HttpClient. Find more at https://v20.angular.dev/errors/NG0201 in vendor.js (line 84301)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpClient`.', ngTokenPath: [ 'IpinfoService', 'HttpClient' ] })
	createRuntimeError@vendor.js:85154:17
	get@vendor.js:85695:39
	get@vendor.js:86249:27
	get@vendor.js:86249:27
	retrieve@vendor.js:86134:19
	injectInjectorOnly@vendor.js:85269:35
	ɵɵinject@vendor.js:85281:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	4205/hydrate/<@vendor.js:86381:35
	runInInjectorProfilerContext@vendor.js:84974:5
	hydrate@vendor.js:86379:39
	get@vendor.js:86240:23
	get@vendor.js:42131:32
	lookupTokenUsingModuleInjector@vendor.js:31759:31
	getOrCreateInjectable@vendor.js:31805:10
	ɵɵdirectiveInject@vendor.js:42178:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:32009:38
	instantiateAllDirectives@vendor.js:38113:40
	createDirectivesInstances@vendor.js:37896:27
	create@vendor.js:43271:34
	initComponent@vendor.js:181837:45
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29164:33
	invoke@polyfills.js:969:46
	onInvoke@vendor.js:46348:25
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	run@vendor.js:46200:24
	createComponent@vendor.js:181842:37
	createComponent@vendor.js:181623:33
	1675/</<@main.js:638:80
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29164:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27346:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27361:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 14 of 18 (5 FAILED) ERROR (2.664 secs / 0.584 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 15 of 18 (5 FAILED) ERROR (2.664 secs / 0.665 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 15 of 18 (5 FAILED) ERROR (2.664 secs / 0.665 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 15 of 18 (5 FAILED) ERROR (2.664 secs / 0.665 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 140.0 (Linux x86_64): Executed 16 of 18 (5 FAILED) ERROR (2.664 secs / 0.715 secs)
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 16 of 18 (5 FAILED) ERROR (2.664 secs / 0.715 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 16 of 18 (5 FAILED) ERROR (2.664 secs / 0.715 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 16 of 18 (5 FAILED) ERROR (2.664 secs / 0.715 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 140.0 (Linux x86_64): Executed 16 of 18 (5 FAILED) ERROR (2.664 secs / 0.715 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 140.0 (Linux x86_64): Executed 16 of 18 (5 FAILED) ERROR (2.664 secs / 0.715 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 17 of 18 (5 FAILED) ERROR (2.664 secs / 0.876 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 18 of 18 (5 FAILED) ERROR (2.664 secs / 0.954 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 18 of 18 (5 FAILED) ERROR (2.685 secs / 0.954 secs)
08 10 2025 07:12:06.604:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
