```bash
yarn run v1.22.22
$ ng test
11 05 2025 14:11:03.116:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
11 05 2025 14:11:03.120:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
11 05 2025 14:11:03.126:INFO [launcher]: Starting browser Firefox
11 05 2025 14:11:06.690:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket eHfPtcqeb8zbx5YbAAAB with id 81845671
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.045 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 117258)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:117258:21
	get@vendor.js:117788:27
	get@vendor.js:117788:27
	inject@vendor.js:172606:58
	inject@vendor.js:172449:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34328:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32507:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32522:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.067 secs)
Firefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 117258)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:117258:21
	get@vendor.js:117788:27
	get@vendor.js:117788:27
	inject@vendor.js:172606:58
	inject@vendor.js:172449:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34328:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32507:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32522:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 117258)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:117258:21
	get@vendor.js:117788:27
	get@vendor.js:117788:27
	injectInjectorOnly@vendor.js:116769:28
	ɵɵinject@vendor.js:116775:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:117901:35
	runInInjectorProfilerContext@vendor.js:116539:5
	hydrate@vendor.js:117900:39
	get@vendor.js:117779:23
	get@vendor.js:132429:32
	lookupTokenUsingModuleInjector@vendor.js:120603:31
	getOrCreateInjectable@vendor.js:120649:10
	ɵɵdirectiveInject@vendor.js:132476:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:120843:38
	instantiateAllDirectives@vendor.js:127886:40
	createDirectivesInstances@vendor.js:127686:27
	create@vendor.js:133100:34
	initComponent@vendor.js:172673:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34328:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:122052:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:121904:24
	createComponent@vendor.js:172678:37
	createComponent@vendor.js:172464:33
	1675/</<@main.js:643:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34328:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32507:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32522:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (2 FAILED) (0 secs / 0.262 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 117258)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:117258:21
	get@vendor.js:117788:27
	get@vendor.js:117788:27
	injectInjectorOnly@vendor.js:116769:28
	ɵɵinject@vendor.js:116775:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:117901:35
	runInInjectorProfilerContext@vendor.js:116539:5
	hydrate@vendor.js:117900:39
	get@vendor.js:117779:23
	get@vendor.js:132429:32
	lookupTokenUsingModuleInjector@vendor.js:120603:31
	getOrCreateInjectable@vendor.js:120649:10
	ɵɵdirectiveInject@vendor.js:132476:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:120843:38
	instantiateAllDirectives@vendor.js:127886:40
	createDirectivesInstances@vendor.js:127686:27
	create@vendor.js:133100:34
	initComponent@vendor.js:172673:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34328:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:122052:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:121904:24
	createComponent@vendor.js:172678:37
	createComponent@vendor.js:172464:33
	1675/</<@main.js:643:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34328:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32507:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32522:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
11 05 2025 14:11:08.921:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (2 FAILED) (0 secs / 0.262 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (2 FAILED) (0 secs / 0.262 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 (2 FAILED) (0 secs / 0.347 secs)
[1A[2KERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (2 FAILED) (0 secs / 0.347 secs)
ERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) (0 secs / 0.349 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (4 FAILED) (0 secs / 0.351 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (4 FAILED) (0 secs / 0.446 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 (4 FAILED) (0 secs / 0.489 secs)
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 148584)
	verifySemanticsOfNgModuleDef@vendor.js:148584:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:148594:33
	verifySemanticsOfNgModuleDef@vendor.js:148592:58
	get@vendor.js:148549:22
	applyProviderOverridesInScope@vendor.js:171811:25
	compileTestModule@vendor.js:172122:10
	finalize@vendor.js:171635:10
	get testModuleRef@vendor.js:172698:43
	inject@vendor.js:172605:20
	inject@vendor.js:172449:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34328:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32507:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32522:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (5 FAILED) (0 secs / 0.499 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 148584)
	verifySemanticsOfNgModuleDef@vendor.js:148584:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:148594:33
	verifySemanticsOfNgModuleDef@vendor.js:148592:58
	get@vendor.js:148549:22
	applyProviderOverridesInScope@vendor.js:171811:25
	compileTestModule@vendor.js:172122:10
	finalize@vendor.js:171635:10
	get testModuleRef@vendor.js:172698:43
	inject@vendor.js:172605:20
	inject@vendor.js:172449:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34328:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32507:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32522:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 10 of 18 (5 FAILED) (0 secs / 0.554 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 11 of 18 (5 FAILED) (0 secs / 0.58 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (5 FAILED) (0 secs / 0.58 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (5 FAILED) (0 secs / 0.58 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (5 FAILED) (0 secs / 0.58 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 12 of 18 (5 FAILED) (0 secs / 0.757 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:169492:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:169461:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:169434:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:101054:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:48925:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:17114:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:48919:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:48914:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:119788:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:119812:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:119772:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:119727:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:129290:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:129488:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:129196:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:129180:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130015:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:170919:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34328:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:122052:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:121904:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:170916:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34328:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:32507:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:32522:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 12 of 18 (5 FAILED) ERROR (0 secs / 0.757 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:169492:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:169461:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:169434:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:101054:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:48925:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:17114:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:48919:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:48914:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:119788:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:119812:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:119772:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:119727:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:129290:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:129488:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:129196:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:129180:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130015:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:170919:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34328:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:122052:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:121904:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:170916:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34328:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:32507:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:32522:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 12 of 18 (5 FAILED) ERROR (0.861 secs / 0.757 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 12 of 18 (5 FAILED) DISCONNECTED (30.952 secs / 0.757 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 12 of 18 (5 FAILED) DISCONNECTED (30.952 secs / 0.757 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
