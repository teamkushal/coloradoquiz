```bash
yarn run v1.22.22
$ ng test
04 03 2025 18:10:57.145:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
04 03 2025 18:10:57.147:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
04 03 2025 18:10:57.154:INFO [launcher]: Starting browser Firefox
04 03 2025 18:11:00.148:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket Jt-JdjUIpjhdU--GAAAB with id 64553208
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.077 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.093 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.115 secs)
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 131140)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:131140:21
	get@vendor.js:131664:27
	get@vendor.js:131664:27
	injectInjectorOnly@vendor.js:130596:36
	ɵɵinject@vendor.js:130602:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:131777:35
	runInInjectorProfilerContext@vendor.js:130368:5
	hydrate@vendor.js:131776:39
	get@vendor.js:131655:23
	get@vendor.js:134222:32
	lookupTokenUsingModuleInjector@vendor.js:134565:31
	getOrCreateInjectable@vendor.js:134611:10
	ɵɵdirectiveInject@vendor.js:146495:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:134805:38
	instantiateAllDirectives@vendor.js:141909:40
	createDirectivesInstances@vendor.js:141709:27
	create@vendor.js:147115:34
	initComponent@vendor.js:181885:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:40531:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:136017:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:135869:24
	createComponent@vendor.js:181890:37
	createComponent@vendor.js:181676:33
	1675/</<@main.js:642:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:40531:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:38710:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:38725:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.165 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 131140)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:131140:21
	get@vendor.js:131664:27
	get@vendor.js:131664:27
	injectInjectorOnly@vendor.js:130596:36
	ɵɵinject@vendor.js:130602:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:131777:35
	runInInjectorProfilerContext@vendor.js:130368:5
	hydrate@vendor.js:131776:39
	get@vendor.js:131655:23
	get@vendor.js:134222:32
	lookupTokenUsingModuleInjector@vendor.js:134565:31
	getOrCreateInjectable@vendor.js:134611:10
	ɵɵdirectiveInject@vendor.js:146495:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:134805:38
	instantiateAllDirectives@vendor.js:141909:40
	createDirectivesInstances@vendor.js:141709:27
	create@vendor.js:147115:34
	initComponent@vendor.js:181885:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:40531:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:136017:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:135869:24
	createComponent@vendor.js:181890:37
	createComponent@vendor.js:181676:33
	1675/</<@main.js:642:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:40531:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:38710:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:38725:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.178 secs)
04 03 2025 18:11:01.745:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.227 secs)
[1A[2KERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

Firefox 128.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.227 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

[1A[2KFirefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 131140)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:131140:21
	get@vendor.js:131664:27
	get@vendor.js:131664:27
	inject@vendor.js:181818:58
	inject@vendor.js:181661:33
	9074/</<@main.js:1981:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:40531:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:38710:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:38725:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) (0 secs / 0.239 secs)
Firefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 131140)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:131140:21
	get@vendor.js:131664:27
	get@vendor.js:131664:27
	inject@vendor.js:181818:58
	inject@vendor.js:181661:33
	9074/</<@main.js:1981:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:40531:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:38710:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:38725:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) (0 secs / 0.246 secs)
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) (0 secs / 0.246 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) (0 secs / 0.246 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) (0 secs / 0.246 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) (0 secs / 0.246 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) (0 secs / 0.246 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) (0 secs / 0.338 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 10 of 18 (3 FAILED) (0 secs / 0.342 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) (0 secs / 0.344 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) (0 secs / 0.393 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) (0 secs / 0.401 secs)
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 162762)
	verifySemanticsOfNgModuleDef@vendor.js:162762:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:162772:33
	verifySemanticsOfNgModuleDef@vendor.js:162770:58
	get@vendor.js:162727:22
	applyProviderOverridesInScope@vendor.js:181025:25
	compileTestModule@vendor.js:181336:10
	finalize@vendor.js:180849:10
	get testModuleRef@vendor.js:181910:43
	inject@vendor.js:181817:20
	inject@vendor.js:181661:33
	1230/</<@main.js:391:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:40531:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:38710:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:38725:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 14 of 18 (5 FAILED) (0 secs / 0.404 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 162762)
	verifySemanticsOfNgModuleDef@vendor.js:162762:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:162772:33
	verifySemanticsOfNgModuleDef@vendor.js:162770:58
	get@vendor.js:162727:22
	applyProviderOverridesInScope@vendor.js:181025:25
	compileTestModule@vendor.js:181336:10
	finalize@vendor.js:180849:10
	get testModuleRef@vendor.js:181910:43
	inject@vendor.js:181817:20
	inject@vendor.js:181661:33
	1230/</<@main.js:391:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:40531:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:38710:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:38725:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 15 of 18 (5 FAILED) (0 secs / 0.409 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 16 of 18 (5 FAILED) (0 secs / 0.422 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 17 of 18 (5 FAILED) (0 secs / 0.428 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 17 of 18 (5 FAILED) (0 secs / 0.428 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 17 of 18 (5 FAILED) (0 secs / 0.428 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 17 of 18 (5 FAILED) (0 secs / 0.428 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 18 of 18 (5 FAILED) (0 secs / 0.498 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1201)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1201:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1214:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:536:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178696:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178665:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178638:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:115308:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:51449:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:19748:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:51443:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:51438:69
  getData@http://localhost:9876/_karma_webpack_/main.js:532:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:515:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:133684:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:133708:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:133668:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:133623:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:143359:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:143557:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:143265:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:143249:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:144093:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180133:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:40531:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:136017:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:135869:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180130:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1679:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:40531:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:38710:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:38725:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 18 of 18 (5 FAILED) ERROR (0 secs / 0.498 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1201)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1201:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1214:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:536:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178696:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178665:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178638:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:115308:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:51449:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:19748:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:51443:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:51438:69
  getData@http://localhost:9876/_karma_webpack_/main.js:532:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:515:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:133684:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:133708:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:133668:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:133623:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:143359:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:143557:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:143265:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:143249:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:144093:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180133:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:40531:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:136017:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:135869:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180130:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1679:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:40531:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:38710:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:38725:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 18 of 18 (5 FAILED) ERROR (0.592 secs / 0.498 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 18 of 18 (5 FAILED) ERROR (0.621 secs / 0.498 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
