```bash
yarn run v1.22.22
$ ng test
20 06 2025 15:10:53.636:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
20 06 2025 15:10:53.641:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
20 06 2025 15:10:53.645:INFO [launcher]: Starting browser Firefox
20 06 2025 15:10:56.969:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket 8Y7fmkZr-QkMHeLDAAAB with id 61675785
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.024 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.027 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (2 FAILED) (0 secs / 0.029 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 45026)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	NotFoundError@vendor.js:45026:5
	get@vendor.js:136671:21
	get@vendor.js:137223:27
	get@vendor.js:137223:27
	retrieve@vendor.js:137108:19
	injectInjectorOnly@vendor.js:136219:35
	ɵɵinject@vendor.js:136231:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	5877/hydrate/<@vendor.js:137341:35
	runInInjectorProfilerContext@vendor.js:136005:5
	hydrate@vendor.js:137339:39
	get@vendor.js:137214:23
	get@vendor.js:67306:32
	lookupTokenUsingModuleInjector@vendor.js:57183:31
	getOrCreateInjectable@vendor.js:57229:10
	ɵɵdirectiveInject@vendor.js:67353:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:57423:38
	instantiateAllDirectives@vendor.js:62628:40
	createDirectivesInstances@vendor.js:62413:27
	create@vendor.js:68405:34
	initComponent@vendor.js:179076:45
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:34513:33
	invoke@polyfills.js:966:46
	onInvoke@vendor.js:71407:25
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	run@vendor.js:71259:24
	createComponent@vendor.js:179081:37
	createComponent@vendor.js:178868:33
	1675/</<@main.js:633:80
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:34513:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:32696:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32711:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (3 FAILED) (0 secs / 0.109 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 45026)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	NotFoundError@vendor.js:45026:5
	get@vendor.js:136671:21
	get@vendor.js:137223:27
	get@vendor.js:137223:27
	retrieve@vendor.js:137108:19
	injectInjectorOnly@vendor.js:136219:35
	ɵɵinject@vendor.js:136231:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	5877/hydrate/<@vendor.js:137341:35
	runInInjectorProfilerContext@vendor.js:136005:5
	hydrate@vendor.js:137339:39
	get@vendor.js:137214:23
	get@vendor.js:67306:32
	lookupTokenUsingModuleInjector@vendor.js:57183:31
	getOrCreateInjectable@vendor.js:57229:10
	ɵɵdirectiveInject@vendor.js:67353:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:57423:38
	instantiateAllDirectives@vendor.js:62628:40
	createDirectivesInstances@vendor.js:62413:27
	create@vendor.js:68405:34
	initComponent@vendor.js:179076:45
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:34513:33
	invoke@polyfills.js:966:46
	onInvoke@vendor.js:71407:25
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	run@vendor.js:71259:24
	createComponent@vendor.js:179081:37
	createComponent@vendor.js:178868:33
	1675/</<@main.js:633:80
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:34513:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:32696:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32711:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) (0 secs / 0.119 secs)
20 06 2025 15:10:59.057:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.129 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.129 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.129 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.181 secs)
[1A[2KERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
Firefox 128.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.181 secs)
ERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) (0 secs / 0.2 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 45026)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	NotFoundError@vendor.js:45026:5
	get@vendor.js:136671:21
	get@vendor.js:137223:27
	get@vendor.js:137223:27
	inject@vendor.js:179013:58
	inject@vendor.js:178857:33
	9074/</<@main.js:1950:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:34513:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:32696:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32711:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (4 FAILED) (0 secs / 0.211 secs)
Firefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 45026)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	NotFoundError@vendor.js:45026:5
	get@vendor.js:136671:21
	get@vendor.js:137223:27
	get@vendor.js:137223:27
	inject@vendor.js:179013:58
	inject@vendor.js:178857:33
	9074/</<@main.js:1950:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:34513:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:32696:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32711:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 10 of 18 (4 FAILED) (0 secs / 0.257 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) (0 secs / 0.266 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) (0 secs / 0.281 secs)
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 83225)
	verifySemanticsOfNgModuleDef@vendor.js:83225:13
	4245/verifySemanticsOfNgModuleDef/<@vendor.js:83235:33
	verifySemanticsOfNgModuleDef@vendor.js:83233:126
	get@vendor.js:83190:22
	applyProviderOverridesInScope@vendor.js:178215:25
	compileTestModule@vendor.js:178530:10
	finalize@vendor.js:178046:10
	get testModuleRef@vendor.js:179101:43
	inject@vendor.js:179012:20
	inject@vendor.js:178857:33
	1230/</<@main.js:386:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:34513:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:32696:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32711:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (5 FAILED) (0 secs / 0.284 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 83225)
	verifySemanticsOfNgModuleDef@vendor.js:83225:13
	4245/verifySemanticsOfNgModuleDef/<@vendor.js:83235:33
	verifySemanticsOfNgModuleDef@vendor.js:83233:126
	get@vendor.js:83190:22
	applyProviderOverridesInScope@vendor.js:178215:25
	compileTestModule@vendor.js:178530:10
	finalize@vendor.js:178046:10
	get testModuleRef@vendor.js:179101:43
	inject@vendor.js:179012:20
	inject@vendor.js:178857:33
	1230/</<@main.js:386:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:34513:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:32696:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32711:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 14 of 18 (5 FAILED) (0 secs / 0.352 secs)
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 14 of 18 (5 FAILED) (0 secs / 0.352 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 14 of 18 (5 FAILED) (0 secs / 0.352 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 14 of 18 (5 FAILED) (0 secs / 0.352 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 128.0 (Linux x86_64): Executed 14 of 18 (5 FAILED) (0 secs / 0.352 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 128.0 (Linux x86_64): Executed 14 of 18 (5 FAILED) (0 secs / 0.352 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 15 of 18 (5 FAILED) (0 secs / 0.435 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 16 of 18 (5 FAILED) (0 secs / 0.456 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 17 of 18 (5 FAILED) (0 secs / 0.463 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 17 of 18 (5 FAILED) (0 secs / 0.463 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 17 of 18 (5 FAILED) (0 secs / 0.463 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 17 of 18 (5 FAILED) (0 secs / 0.463 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 18 of 18 (5 FAILED) (0 secs / 0.544 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:175856:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:175825:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:175798:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:134978:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:51314:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13968:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:51308:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:51303:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:56370:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:56394:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:56354:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:56309:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:64076:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:64274:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:63979:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:63968:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:64808:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:177338:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34513:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:71407:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:71259:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:177335:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34513:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:32696:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:32711:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3055:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:991:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:790:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 18 of 18 (5 FAILED) ERROR (0 secs / 0.544 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:175856:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:175825:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:175798:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:134978:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:51314:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13968:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:51308:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:51303:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:56370:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:56394:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:56354:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:56309:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:64076:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:64274:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:63979:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:63968:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:64808:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:177338:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34513:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:71407:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:71259:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:177335:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34513:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:32696:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:32711:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3055:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:991:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:790:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1162:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 18 of 18 (5 FAILED) ERROR (0.658 secs / 0.544 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 18 of 18 (5 FAILED) DISCONNECTED (30.671 secs / 0.544 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 18 of 18 (5 FAILED) DISCONNECTED (30.671 secs / 0.544 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
