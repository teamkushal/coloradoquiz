```bash
yarn run v1.22.22
$ ng test
[32m22 11 2024 19:53:20.663:INFO [karma-server]: [39mKarma v6.4.2 server started at http://localhost:9876/
[32m22 11 2024 19:53:20.674:INFO [launcher]: [39mLaunching browsers FirefoxHeadless with concurrency unlimited
[32m22 11 2024 19:53:20.680:INFO [launcher]: [39mStarting browser Firefox
[32m22 11 2024 19:53:24.723:INFO [Firefox 128.0 (Linux x86_64)]: [39mConnected on socket is0VL5hp_SkDemNtAAAB with id 55138742
Firefox 128.0 (Linux x86_64): Executed 0 of 18[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18[32m SUCCESS[39m (0 secs / 0.038 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18[32m SUCCESS[39m (0 secs / 0.078 secs)
[1A[2K[31mFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED[39m
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 108701)
	verifySemanticsOfNgModuleDef@vendor.js:108701:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:108711:33
	verifySemanticsOfNgModuleDef@vendor.js:108709:58
	get@vendor.js:108666:22
	applyProviderOverridesInScope@vendor.js:120025:25
	compileTestModule@vendor.js:120336:10
	finalize@vendor.js:119849:10
	get testModuleRef@vendor.js:120910:43
	inject@vendor.js:120817:20
	inject@vendor.js:120661:33
	1230/</<@main.js:1368:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6490:33
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	runInTestZone@vendor.js:4669:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:4684:16
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:184:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2502:30
	invokeTask@polyfills.js:438:171
	runTask@polyfills.js:237:37
	drainMicroTaskQueue@polyfills.js:609:23
Firefox 128.0 (Linux x86_64): Executed 3 of 18[31m (1 FAILED)[39m (0 secs / 0.093 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 108701)
	verifySemanticsOfNgModuleDef@vendor.js:108701:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:108711:33
	verifySemanticsOfNgModuleDef@vendor.js:108709:58
	get@vendor.js:108666:22
	applyProviderOverridesInScope@vendor.js:120025:25
	compileTestModule@vendor.js:120336:10
	finalize@vendor.js:119849:10
	get testModuleRef@vendor.js:120910:43
	inject@vendor.js:120817:20
	inject@vendor.js:120661:33
	1230/</<@main.js:1368:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6490:33
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	runInTestZone@vendor.js:4669:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:4684:16
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:184:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2502:30
	invokeTask@polyfills.js:438:171
	runTask@polyfills.js:237:37
	drainMicroTaskQueue@polyfills.js:609:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18[31m (1 FAILED)[39m (0 secs / 0.112 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18[31m (1 FAILED)[39m (0 secs / 0.172 secs)
[1A[2K[31mFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED[39m
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 77719)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:77719:21
	get@vendor.js:78244:27
	get@vendor.js:78244:27
	injectInjectorOnly@vendor.js:77175:36
	ɵɵinject@vendor.js:77181:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:78357:35
	runInInjectorProfilerContext@vendor.js:76946:5
	hydrate@vendor.js:78356:39
	get@vendor.js:78235:23
	get@vendor.js:80779:32
	lookupTokenUsingModuleInjector@vendor.js:81122:31
	getOrCreateInjectable@vendor.js:81168:10
	ɵɵdirectiveInject@vendor.js:88669:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:81362:38
	createRootComponent@vendor.js:92216:48
	create@vendor.js:92072:21
	initComponent@vendor.js:120885:45
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6490:33
	invoke@polyfills.js:413:46
	onInvoke@vendor.js:82573:25
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	run@vendor.js:82425:24
	createComponent@vendor.js:120890:37
	createComponent@vendor.js:120676:33
	1675/</<@main.js:38:80
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6490:33
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	runInTestZone@vendor.js:4669:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:4684:16
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:184:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2502:30
	invokeTask@polyfills.js:438:171
	runTask@polyfills.js:237:37
	drainMicroTaskQueue@polyfills.js:609:23
Firefox 128.0 (Linux x86_64): Executed 6 of 18[31m (2 FAILED)[39m (0 secs / 0.221 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 77719)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:77719:21
	get@vendor.js:78244:27
	get@vendor.js:78244:27
	injectInjectorOnly@vendor.js:77175:36
	ɵɵinject@vendor.js:77181:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:78357:35
	runInInjectorProfilerContext@vendor.js:76946:5
	hydrate@vendor.js:78356:39
	get@vendor.js:78235:23
	get@vendor.js:80779:32
	lookupTokenUsingModuleInjector@vendor.js:81122:31
	getOrCreateInjectable@vendor.js:81168:10
	ɵɵdirectiveInject@vendor.js:88669:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:81362:38
	createRootComponent@vendor.js:92216:48
	create@vendor.js:92072:21
	initComponent@vendor.js:120885:45
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6490:33
	invoke@polyfills.js:413:46
	onInvoke@vendor.js:82573:25
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	run@vendor.js:82425:24
	createComponent@vendor.js:120890:37
	createComponent@vendor.js:120676:33
	1675/</<@main.js:38:80
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6490:33
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	runInTestZone@vendor.js:4669:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:4684:16
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:184:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2502:30
	invokeTask@polyfills.js:438:171
	runTask@polyfills.js:237:37
	drainMicroTaskQueue@polyfills.js:609:23
[33m22 11 2024 19:53:26.421:WARN [web-server]: [39m404: /_karma_webpack_/ngsw-worker.js
[1A[2K[31mFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED[39m
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 7 of 18[31m (3 FAILED)[39m (0 secs / 0.224 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2K[31mFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED[39m
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 8 of 18[31m (4 FAILED)[39m (0 secs / 0.226 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 128.0 (Linux x86_64): Executed 8 of 18[31m (4 FAILED)[39m (0 secs / 0.226 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18[31m (4 FAILED)[39m (0 secs / 0.301 secs)
[1A[2KERROR: [36m'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 128.0 (Linux x86_64): Executed 9 of 18[31m (4 FAILED)[39m (0 secs / 0.301 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 128.0 (Linux x86_64): Executed 9 of 18[31m (4 FAILED)[39m (0 secs / 0.301 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 128.0 (Linux x86_64): Executed 9 of 18[31m (4 FAILED)[39m (0 secs / 0.301 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 128.0 (Linux x86_64): Executed 9 of 18[31m (4 FAILED)[39m (0 secs / 0.301 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 128.0 (Linux x86_64): Executed 9 of 18[31m (4 FAILED)[39m (0 secs / 0.301 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 10 of 18[31m (4 FAILED)[39m (0 secs / 0.417 secs)
[1A[2K[31mFirefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED[39m
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 77719)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:77719:21
	get@vendor.js:78244:27
	get@vendor.js:78244:27
	inject@vendor.js:120818:58
	inject@vendor.js:120661:33
	9074/</<@main.js:413:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6490:33
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	runInTestZone@vendor.js:4669:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:4684:16
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:184:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2502:30
	invokeTask@polyfills.js:438:171
	runTask@polyfills.js:237:37
	drainMicroTaskQueue@polyfills.js:609:23
	invokeTask@polyfills.js:518:11
	4124/initZone/ZoneTask/this.invoke@polyfills.js:504:38
	4124/patchTimer/scheduleTask/data.args[0]@polyfills.js:1793:26
Firefox 128.0 (Linux x86_64): Executed 11 of 18[31m (5 FAILED)[39m (0 secs / 0.426 secs)
Firefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 77719)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:77719:21
	get@vendor.js:78244:27
	get@vendor.js:78244:27
	inject@vendor.js:120818:58
	inject@vendor.js:120661:33
	9074/</<@main.js:413:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6490:33
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	runInTestZone@vendor.js:4669:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:4684:16
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:184:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2502:30
	invokeTask@polyfills.js:438:171
	runTask@polyfills.js:237:37
	drainMicroTaskQueue@polyfills.js:609:23
	invokeTask@polyfills.js:518:11
	4124/initZone/ZoneTask/this.invoke@polyfills.js:504:38
	4124/patchTimer/scheduleTask/data.args[0]@polyfills.js:1793:26
[1A[2KFirefox 128.0 (Linux x86_64): Executed 12 of 18[31m (5 FAILED)[39m (0 secs / 0.434 secs)
[1A[2KERROR: [36m'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 128.0 (Linux x86_64): Executed 12 of 18[31m (5 FAILED)[39m (0 secs / 0.434 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 128.0 (Linux x86_64): Executed 12 of 18[31m (5 FAILED)[39m (0 secs / 0.434 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 128.0 (Linux x86_64): Executed 12 of 18[31m (5 FAILED)[39m (0 secs / 0.434 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 13 of 18[31m (5 FAILED)[39m (0 secs / 0.548 secs)
[1A[2K[31mFirefox 128.0 (Linux x86_64) ERROR[39m
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 355)
  createReal@http://localhost:9876/_karma_webpack_/main.js:355:7
  submit@http://localhost:9876/_karma_webpack_/main.js:368:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:1685:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:4064:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1681:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1664:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:80241:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:80265:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:80225:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:80180:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:90473:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:90668:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:90379:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:90363:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:90981:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:119133:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6490:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:82573:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:82425:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:119130:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1584:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6490:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:4669:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:4684:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2502:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:438:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:237:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:609:23
Firefox 128.0 (Linux x86_64): Executed 13 of 18[31m (5 FAILED)[39m[31m ERROR[39m (0 secs / 0.548 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 355)
  createReal@http://localhost:9876/_karma_webpack_/main.js:355:7
  submit@http://localhost:9876/_karma_webpack_/main.js:368:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:1685:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:4064:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1681:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1664:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:80241:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:80265:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:80225:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:80180:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:90473:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:90668:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:90379:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:90363:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:90981:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:119133:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6490:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:82573:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:82425:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:119130:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1584:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6490:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:4669:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:4684:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2502:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:438:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:237:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:609:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 13 of 18[31m (5 FAILED)[39m[31m ERROR[39m (0.613 secs / 0.548 secs)
[1A[2K[31mFirefox 128.0 (Linux x86_64) ERROR[39m
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 13 of 18[31m (5 FAILED)[39m[31m DISCONNECTED[39m (30.724 secs / 0.548 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 13 of 18[31m (5 FAILED)[39m[31m DISCONNECTED[39m (30.724 secs / 0.548 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
