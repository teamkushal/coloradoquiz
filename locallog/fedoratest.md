```bash
yarn run v1.22.22
$ ng test
30 04 2025 14:11:41.602:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
30 04 2025 14:11:41.605:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
30 04 2025 14:11:41.615:INFO [launcher]: Starting browser Firefox
30 04 2025 14:11:46.133:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket pPKRfFbr9_D7Nm99AAAB with id 23451633
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.028 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.044 secs)
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 124949)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:124949:21
	get@vendor.js:125479:27
	get@vendor.js:125479:27
	injectInjectorOnly@vendor.js:124460:28
	ɵɵinject@vendor.js:124466:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:125592:35
	runInInjectorProfilerContext@vendor.js:124230:5
	hydrate@vendor.js:125591:39
	get@vendor.js:125470:23
	get@vendor.js:140120:32
	lookupTokenUsingModuleInjector@vendor.js:128294:31
	getOrCreateInjectable@vendor.js:128340:10
	ɵɵdirectiveInject@vendor.js:140167:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:128534:38
	instantiateAllDirectives@vendor.js:135577:40
	createDirectivesInstances@vendor.js:135377:27
	create@vendor.js:140791:34
	initComponent@vendor.js:177537:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:37080:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:129743:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:129595:24
	createComponent@vendor.js:177542:37
	createComponent@vendor.js:177328:33
	1675/</<@main.js:643:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:37080:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:35259:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:35274:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.145 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 124949)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:124949:21
	get@vendor.js:125479:27
	get@vendor.js:125479:27
	injectInjectorOnly@vendor.js:124460:28
	ɵɵinject@vendor.js:124466:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:125592:35
	runInInjectorProfilerContext@vendor.js:124230:5
	hydrate@vendor.js:125591:39
	get@vendor.js:125470:23
	get@vendor.js:140120:32
	lookupTokenUsingModuleInjector@vendor.js:128294:31
	getOrCreateInjectable@vendor.js:128340:10
	ɵɵdirectiveInject@vendor.js:140167:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:128534:38
	instantiateAllDirectives@vendor.js:135577:40
	createDirectivesInstances@vendor.js:135377:27
	create@vendor.js:140791:34
	initComponent@vendor.js:177537:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:37080:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:129743:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:129595:24
	createComponent@vendor.js:177542:37
	createComponent@vendor.js:177328:33
	1675/</<@main.js:643:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:37080:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:35259:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:35274:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
30 04 2025 14:11:48.214:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 156275)
	verifySemanticsOfNgModuleDef@vendor.js:156275:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:156285:33
	verifySemanticsOfNgModuleDef@vendor.js:156283:58
	get@vendor.js:156240:22
	applyProviderOverridesInScope@vendor.js:176675:25
	compileTestModule@vendor.js:176986:10
	finalize@vendor.js:176499:10
	get testModuleRef@vendor.js:177562:43
	inject@vendor.js:177469:20
	inject@vendor.js:177313:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:37080:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:35259:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:35274:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (2 FAILED) (0 secs / 0.152 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 156275)
	verifySemanticsOfNgModuleDef@vendor.js:156275:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:156285:33
	verifySemanticsOfNgModuleDef@vendor.js:156283:58
	get@vendor.js:156240:22
	applyProviderOverridesInScope@vendor.js:176675:25
	compileTestModule@vendor.js:176986:10
	finalize@vendor.js:176499:10
	get testModuleRef@vendor.js:177562:43
	inject@vendor.js:177469:20
	inject@vendor.js:177313:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:37080:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:35259:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:35274:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
[1A[2KERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

Firefox 128.0 (Linux x86_64): Executed 4 of 18 (2 FAILED) (0 secs / 0.152 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (2 FAILED) (0 secs / 0.248 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) (0 secs / 0.264 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) (0 secs / 0.264 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) (0 secs / 0.264 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) (0 secs / 0.31 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) (0 secs / 0.312 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (4 FAILED) (0 secs / 0.314 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64): Executed 10 of 18 (4 FAILED) (0 secs / 0.329 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 124949)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:124949:21
	get@vendor.js:125479:27
	get@vendor.js:125479:27
	inject@vendor.js:177470:58
	inject@vendor.js:177313:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:37080:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:35259:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:35274:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
	invokeTask@polyfills.js:543:11
	4124/initZone/ZoneTask/this.invoke@polyfills.js:529:38
	4124/patchTimer/scheduleTask/data.args[0]@polyfills.js:1818:26
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (5 FAILED) (0 secs / 0.342 secs)
Firefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 124949)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:124949:21
	get@vendor.js:125479:27
	get@vendor.js:125479:27
	inject@vendor.js:177470:58
	inject@vendor.js:177313:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:37080:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:35259:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:35274:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
	invokeTask@polyfills.js:543:11
	4124/initZone/ZoneTask/this.invoke@polyfills.js:529:38
	4124/patchTimer/scheduleTask/data.args[0]@polyfills.js:1818:26
[1A[2KFirefox 128.0 (Linux x86_64): Executed 12 of 18 (5 FAILED) (0 secs / 0.351 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 13 of 18 (5 FAILED) (0 secs / 0.37 secs)
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (5 FAILED) (0 secs / 0.37 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (5 FAILED) (0 secs / 0.37 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (5 FAILED) (0 secs / 0.37 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (5 FAILED) (0 secs / 0.37 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (5 FAILED) (0 secs / 0.37 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 14 of 18 (5 FAILED) (0 secs / 0.512 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 15 of 18 (5 FAILED) (0 secs / 0.537 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 16 of 18 (5 FAILED) (0 secs / 0.559 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 17 of 18 (5 FAILED) (0 secs / 0.641 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 17 of 18 (5 FAILED) (0 secs / 0.641 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 17 of 18 (5 FAILED) (0 secs / 0.641 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 17 of 18 (5 FAILED) (0 secs / 0.641 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 18 of 18 (5 FAILED) (0 secs / 0.749 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:174076:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:174045:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:174018:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:111764:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:55131:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:18645:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:55125:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:55120:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:127479:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:127503:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:127463:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:127418:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:136981:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:137179:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:136887:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:136871:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:137706:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:175783:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:37080:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:129743:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:129595:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:175780:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:37080:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:35259:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:35274:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 18 of 18 (5 FAILED) ERROR (0 secs / 0.749 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:174076:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:174045:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:174018:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:111764:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:55131:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:18645:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:55125:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:55120:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:127479:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:127503:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:127463:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:127418:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:136981:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:137179:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:136887:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:136871:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:137706:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:175783:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:37080:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:129743:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:129595:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:175780:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:37080:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:35259:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:35274:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 18 of 18 (5 FAILED) ERROR (0.767 secs / 0.749 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 18 of 18 (5 FAILED) ERROR (0.806 secs / 0.749 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
