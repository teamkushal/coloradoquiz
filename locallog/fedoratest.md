```bash
yarn run v1.22.22
$ ng test
[32m08 11 2024 16:00:53.371:INFO [karma-server]: [39mKarma v6.4.2 server started at http://localhost:9876/
[32m08 11 2024 16:00:53.374:INFO [launcher]: [39mLaunching browsers FirefoxHeadless with concurrency unlimited
[32m08 11 2024 16:00:53.391:INFO [launcher]: [39mStarting browser Firefox
[32m08 11 2024 16:00:57.439:INFO [Firefox 128.0 (Linux x86_64)]: [39mConnected on socket jRf92f1bwPXj_6_TAAAB with id 31101317
Firefox 128.0 (Linux x86_64): Executed 0 of 18[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18[32m SUCCESS[39m (0 secs / 0.033 secs)
[1A[2K[31mFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED[39m
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 77307)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:77307:21
	get@vendor.js:78689:27
	get@vendor.js:78689:27
	injectInjectorOnly@vendor.js:76767:36
	ɵɵinject@vendor.js:76773:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:78807:35
	runInInjectorProfilerContext@vendor.js:76538:5
	hydrate@vendor.js:78806:39
	get@vendor.js:78680:23
	get@vendor.js:80960:32
	lookupTokenUsingModuleInjector@vendor.js:81303:31
	getOrCreateInjectable@vendor.js:81349:10
	ɵɵdirectiveInject@vendor.js:87248:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:81543:38
	createRootComponent@vendor.js:92067:48
	create@vendor.js:91924:21
	initComponent@vendor.js:117903:45
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6489:33
	invoke@polyfills.js:413:46
	onInvoke@vendor.js:82719:25
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	run@vendor.js:82571:24
	createComponent@vendor.js:117913:37
	createComponent@vendor.js:117706:33
	1675/</<@main.js:38:80
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6489:33
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
Firefox 128.0 (Linux x86_64): Executed 2 of 18[31m (1 FAILED)[39m (0 secs / 0.172 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 77307)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:77307:21
	get@vendor.js:78689:27
	get@vendor.js:78689:27
	injectInjectorOnly@vendor.js:76767:36
	ɵɵinject@vendor.js:76773:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:78807:35
	runInInjectorProfilerContext@vendor.js:76538:5
	hydrate@vendor.js:78806:39
	get@vendor.js:78680:23
	get@vendor.js:80960:32
	lookupTokenUsingModuleInjector@vendor.js:81303:31
	getOrCreateInjectable@vendor.js:81349:10
	ɵɵdirectiveInject@vendor.js:87248:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:81543:38
	createRootComponent@vendor.js:92067:48
	create@vendor.js:91924:21
	initComponent@vendor.js:117903:45
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6489:33
	invoke@polyfills.js:413:46
	onInvoke@vendor.js:82719:25
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	run@vendor.js:82571:24
	createComponent@vendor.js:117913:37
	createComponent@vendor.js:117706:33
	1675/</<@main.js:38:80
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6489:33
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
[33m08 11 2024 16:00:58.882:WARN [web-server]: [39m404: /_karma_webpack_/ngsw-worker.js
[1A[2KERROR: [36m'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 128.0 (Linux x86_64): Executed 2 of 18[31m (1 FAILED)[39m (0 secs / 0.172 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 128.0 (Linux x86_64): Executed 2 of 18[31m (1 FAILED)[39m (0 secs / 0.172 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 128.0 (Linux x86_64): Executed 2 of 18[31m (1 FAILED)[39m (0 secs / 0.172 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 128.0 (Linux x86_64): Executed 2 of 18[31m (1 FAILED)[39m (0 secs / 0.172 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 128.0 (Linux x86_64): Executed 2 of 18[31m (1 FAILED)[39m (0 secs / 0.172 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18[31m (1 FAILED)[39m (0 secs / 0.399 secs)
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 128.0 (Linux x86_64): Executed 3 of 18[31m (1 FAILED)[39m (0 secs / 0.399 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

[1A[2K[31mFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED[39m
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 4 of 18[31m (2 FAILED)[39m (0 secs / 0.403 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2K[31mFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED[39m
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 5 of 18[31m (3 FAILED)[39m (0 secs / 0.405 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18[31m (3 FAILED)[39m (0 secs / 0.458 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18[31m (3 FAILED)[39m (0 secs / 0.47 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18[31m (3 FAILED)[39m (0 secs / 0.481 secs)
[1A[2KERROR: [36m'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 128.0 (Linux x86_64): Executed 8 of 18[31m (3 FAILED)[39m (0 secs / 0.481 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 128.0 (Linux x86_64): Executed 8 of 18[31m (3 FAILED)[39m (0 secs / 0.481 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18[31m (3 FAILED)[39m (0 secs / 0.506 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 10 of 18[31m (3 FAILED)[39m (0 secs / 0.523 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 11 of 18[31m (3 FAILED)[39m (0 secs / 0.529 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 12 of 18[31m (3 FAILED)[39m (0 secs / 0.534 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 13 of 18[31m (3 FAILED)[39m (0 secs / 0.579 secs)
[1A[2K[31mFirefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED[39m
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 77307)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:77307:21
	get@vendor.js:78689:27
	get@vendor.js:78689:27
	inject@vendor.js:117836:58
	inject@vendor.js:117691:33
	9074/</<@main.js:411:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6489:33
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
Firefox 128.0 (Linux x86_64): Executed 14 of 18[31m (4 FAILED)[39m (0 secs / 0.589 secs)
Firefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 77307)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:77307:21
	get@vendor.js:78689:27
	get@vendor.js:78689:27
	inject@vendor.js:117836:58
	inject@vendor.js:117691:33
	9074/</<@main.js:411:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6489:33
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
[1A[2K[31mFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED[39m
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 104793)
	verifySemanticsOfNgModuleDef@vendor.js:104793:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:104803:33
	verifySemanticsOfNgModuleDef@vendor.js:104801:58
	get@vendor.js:104758:22
	applyProviderOverridesInScope@vendor.js:117078:25
	compileTestModule@vendor.js:117391:10
	finalize@vendor.js:116902:10
	get testModuleRef@vendor.js:117933:43
	inject@vendor.js:117835:20
	inject@vendor.js:117691:33
	1230/</<@main.js:1360:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6489:33
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
Firefox 128.0 (Linux x86_64): Executed 15 of 18[31m (5 FAILED)[39m (0 secs / 0.594 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 104793)
	verifySemanticsOfNgModuleDef@vendor.js:104793:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:104803:33
	verifySemanticsOfNgModuleDef@vendor.js:104801:58
	get@vendor.js:104758:22
	applyProviderOverridesInScope@vendor.js:117078:25
	compileTestModule@vendor.js:117391:10
	finalize@vendor.js:116902:10
	get testModuleRef@vendor.js:117933:43
	inject@vendor.js:117835:20
	inject@vendor.js:117691:33
	1230/</<@main.js:1360:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6489:33
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
[1A[2KFirefox 128.0 (Linux x86_64): Executed 16 of 18[31m (5 FAILED)[39m (0 secs / 0.602 secs)
[1A[2KERROR: [36m'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 128.0 (Linux x86_64): Executed 16 of 18[31m (5 FAILED)[39m (0 secs / 0.602 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 128.0 (Linux x86_64): Executed 16 of 18[31m (5 FAILED)[39m (0 secs / 0.602 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 128.0 (Linux x86_64): Executed 16 of 18[31m (5 FAILED)[39m (0 secs / 0.602 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 17 of 18[31m (5 FAILED)[39m (0 secs / 0.68 secs)
[1A[2K[31mFirefox 128.0 (Linux x86_64) ERROR[39m
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 353)
  createReal@http://localhost:9876/_karma_webpack_/main.js:353:7
  submit@http://localhost:9876/_karma_webpack_/main.js:366:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:1677:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:4064:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1673:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1656:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:80679:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:80703:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:80663:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:80618:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:89020:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:89214:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:88925:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:88906:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:89514:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:116228:30
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6489:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:82719:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:82571:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:116227:18
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1576:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6489:33
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
Firefox 128.0 (Linux x86_64): Executed 17 of 18[31m (5 FAILED)[39m[31m ERROR[39m (0 secs / 0.68 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 353)
  createReal@http://localhost:9876/_karma_webpack_/main.js:353:7
  submit@http://localhost:9876/_karma_webpack_/main.js:366:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:1677:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:4064:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1673:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1656:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:80679:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:80703:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:80663:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:80618:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:89020:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:89214:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:88925:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:88906:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:89514:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:116228:30
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6489:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:82719:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:82571:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:116227:18
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1576:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6489:33
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
[1A[2KFirefox 128.0 (Linux x86_64): Executed 17 of 18[31m (5 FAILED)[39m[31m ERROR[39m (0.787 secs / 0.68 secs)
[1A[2K[31mFirefox 128.0 (Linux x86_64) ERROR[39m
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 17 of 18[31m (5 FAILED)[39m[31m DISCONNECTED[39m (30.8 secs / 0.68 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 17 of 18[31m (5 FAILED)[39m[31m DISCONNECTED[39m (30.8 secs / 0.68 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
