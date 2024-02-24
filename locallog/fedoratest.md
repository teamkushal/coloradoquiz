```bash
yarn run v1.22.21
$ ng test
24 02 2024 08:14:21.371:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
24 02 2024 08:14:21.372:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
24 02 2024 08:14:21.376:INFO [launcher]: Starting browser Firefox
24 02 2024 08:14:23.050:INFO [Firefox 122.0 (Linux x86_64)]: Connected on socket xu4M7MMEuhR3oyofAAAB with id 7710486
Firefox 122.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 122.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 122.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 122.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.072 secs)
[1A[2K[31mFirefox 122.0 (Linux x86_64) AppComponent should create the app FAILED[39m
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 81393)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:81393:21
	get@vendor.js:81844:27
	get@vendor.js:81844:27
	injectInjectorOnly@vendor.js:80566:36
	ɵɵinject@vendor.js:80572:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:41
	4280/hydrate/<@vendor.js:81958:33
	runInInjectorProfilerContext@vendor.js:80397:5
	hydrate@vendor.js:81957:37
	get@vendor.js:81835:23
	get@vendor.js:92792:32
	lookupTokenUsingModuleInjector@vendor.js:83385:31
	getOrCreateInjectable@vendor.js:83431:10
	ɵɵdirectiveInject@vendor.js:86858:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:83625:38
	createRootComponent@vendor.js:93042:48
	create@vendor.js:92910:19
	initComponent@vendor.js:114585:45
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	onInvoke@vendor.js:91975:25
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	run@vendor.js:91829:24
	createComponent@vendor.js:114595:37
	createComponent@vendor.js:114388:33
	3832/</<@main.js:38:80
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	runInTestZone@vendor.js:5000:28
	9088/</wrapTestInZone/<@vendor.js:5015:14
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:198:35
	8120/</scheduleResolveOrReject/<@polyfills.js:1273:28
	invokeTask@polyfills.js:440:171
	runTask@polyfills.js:244:37
	drainMicroTaskQueue@polyfills.js:611:23
Firefox 122.0 (Linux x86_64): Executed 2 of 17[31m (1 FAILED)[39m (0 secs / 0.126 secs)
Firefox 122.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 81393)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:81393:21
	get@vendor.js:81844:27
	get@vendor.js:81844:27
	injectInjectorOnly@vendor.js:80566:36
	ɵɵinject@vendor.js:80572:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:41
	4280/hydrate/<@vendor.js:81958:33
	runInInjectorProfilerContext@vendor.js:80397:5
	hydrate@vendor.js:81957:37
	get@vendor.js:81835:23
	get@vendor.js:92792:32
	lookupTokenUsingModuleInjector@vendor.js:83385:31
	getOrCreateInjectable@vendor.js:83431:10
	ɵɵdirectiveInject@vendor.js:86858:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:83625:38
	createRootComponent@vendor.js:93042:48
	create@vendor.js:92910:19
	initComponent@vendor.js:114585:45
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	onInvoke@vendor.js:91975:25
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	run@vendor.js:91829:24
	createComponent@vendor.js:114595:37
	createComponent@vendor.js:114388:33
	3832/</<@main.js:38:80
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	runInTestZone@vendor.js:5000:28
	9088/</wrapTestInZone/<@vendor.js:5015:14
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:198:35
	8120/</scheduleResolveOrReject/<@polyfills.js:1273:28
	invokeTask@polyfills.js:440:171
	runTask@polyfills.js:244:37
	drainMicroTaskQueue@polyfills.js:611:23
[1A[2KFirefox 122.0 (Linux x86_64): Executed 3 of 17[31m (1 FAILED)[39m (0 secs / 0.14 secs)
[1A[2K[31mFirefox 122.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED[39m
	NullInjectorError: R3InjectorError[HandleUnrecoverableStateService -> HandleUnrecoverableStateService]: 
	  NullInjectorError: No provider for HandleUnrecoverableStateService! in vendor.js (line 81393)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HandleUnrecoverableStateService', 'HandleUnrecoverableStateService' ] })
	get@vendor.js:81393:21
	get@vendor.js:81844:27
	get@vendor.js:81844:27
	inject@vendor.js:114518:58
	inject@vendor.js:114373:33
	3864/</<@main.js:119:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	runInTestZone@vendor.js:5000:28
	9088/</wrapTestInZone/<@vendor.js:5015:14
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:198:35
	8120/</scheduleResolveOrReject/<@polyfills.js:1273:28
	invokeTask@polyfills.js:440:171
	runTask@polyfills.js:244:37
	drainMicroTaskQueue@polyfills.js:611:23
Firefox 122.0 (Linux x86_64): Executed 4 of 17[31m (2 FAILED)[39m (0 secs / 0.149 secs)
Firefox 122.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	NullInjectorError: R3InjectorError[HandleUnrecoverableStateService -> HandleUnrecoverableStateService]: 
	  NullInjectorError: No provider for HandleUnrecoverableStateService! in vendor.js (line 81393)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HandleUnrecoverableStateService', 'HandleUnrecoverableStateService' ] })
	get@vendor.js:81393:21
	get@vendor.js:81844:27
	get@vendor.js:81844:27
	inject@vendor.js:114518:58
	inject@vendor.js:114373:33
	3864/</<@main.js:119:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	runInTestZone@vendor.js:5000:28
	9088/</wrapTestInZone/<@vendor.js:5015:14
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:198:35
	8120/</scheduleResolveOrReject/<@polyfills.js:1273:28
	invokeTask@polyfills.js:440:171
	runTask@polyfills.js:244:37
	drainMicroTaskQueue@polyfills.js:611:23
24 02 2024 08:14:24.418:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 122.0 (Linux x86_64): Executed 5 of 17[31m (2 FAILED)[39m (0 secs / 0.157 secs)
[1A[2KERROR: [36m'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 122.0 (Linux x86_64): Executed 5 of 17[31m (2 FAILED)[39m (0 secs / 0.157 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 122.0 (Linux x86_64): Executed 5 of 17[31m (2 FAILED)[39m (0 secs / 0.157 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 122.0 (Linux x86_64): Executed 5 of 17[31m (2 FAILED)[39m (0 secs / 0.157 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 122.0 (Linux x86_64): Executed 5 of 17[31m (2 FAILED)[39m (0 secs / 0.157 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 122.0 (Linux x86_64): Executed 5 of 17[31m (2 FAILED)[39m (0 secs / 0.157 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 122.0 (Linux x86_64): Executed 6 of 17[31m (2 FAILED)[39m (0 secs / 0.229 secs)
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 122.0 (Linux x86_64): Executed 6 of 17[31m (2 FAILED)[39m (0 secs / 0.229 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

[1A[2K[31mFirefox 122.0 (Linux x86_64) PromptUpdateService should be created FAILED[39m
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 105705)
	verifySemanticsOfNgModuleDef@vendor.js:105705:13
	4280/verifySemanticsOfNgModuleDef/<@vendor.js:105715:33
	verifySemanticsOfNgModuleDef@vendor.js:105713:58
	get@vendor.js:105670:22
	applyProviderOverridesInScope@vendor.js:113788:25
	compileTestModule@vendor.js:114075:10
	finalize@vendor.js:113612:10
	get testModuleRef@vendor.js:114615:43
	inject@vendor.js:114517:20
	inject@vendor.js:114373:33
	6288/</<@main.js:1298:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	runInTestZone@vendor.js:5000:28
	9088/</wrapTestInZone/<@vendor.js:5015:14
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:198:35
	8120/</scheduleResolveOrReject/<@polyfills.js:1273:28
	invokeTask@polyfills.js:440:171
	runTask@polyfills.js:244:37
	drainMicroTaskQueue@polyfills.js:611:23
Firefox 122.0 (Linux x86_64): Executed 7 of 17[31m (3 FAILED)[39m (0 secs / 0.233 secs)
Firefox 122.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 105705)
	verifySemanticsOfNgModuleDef@vendor.js:105705:13
	4280/verifySemanticsOfNgModuleDef/<@vendor.js:105715:33
	verifySemanticsOfNgModuleDef@vendor.js:105713:58
	get@vendor.js:105670:22
	applyProviderOverridesInScope@vendor.js:113788:25
	compileTestModule@vendor.js:114075:10
	finalize@vendor.js:113612:10
	get testModuleRef@vendor.js:114615:43
	inject@vendor.js:114517:20
	inject@vendor.js:114373:33
	6288/</<@main.js:1298:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	runInTestZone@vendor.js:5000:28
	9088/</wrapTestInZone/<@vendor.js:5015:14
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:198:35
	8120/</scheduleResolveOrReject/<@polyfills.js:1273:28
	invokeTask@polyfills.js:440:171
	runTask@polyfills.js:244:37
	drainMicroTaskQueue@polyfills.js:611:23
[1A[2KERROR: [36m'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 122.0 (Linux x86_64): Executed 7 of 17[31m (3 FAILED)[39m (0 secs / 0.233 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 122.0 (Linux x86_64): Executed 7 of 17[31m (3 FAILED)[39m (0 secs / 0.233 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 122.0 (Linux x86_64): Executed 7 of 17[31m (3 FAILED)[39m (0 secs / 0.233 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 122.0 (Linux x86_64): Executed 8 of 17[31m (3 FAILED)[39m (0 secs / 0.303 secs)
[1A[2K[31mFirefox 122.0 (Linux x86_64) ERROR[39m
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 327)
  createReal@http://localhost:9876/_karma_webpack_/main.js:327:7
  submit@http://localhost:9876/_karma_webpack_/main.js:340:25
  4092/getData/<@http://localhost:9876/_karma_webpack_/main.js:1606:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  1296/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:4064:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1602:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1585:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:82803:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:82827:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:82787:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:82742:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:88582:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:88786:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:88514:22
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:88498:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:89077:26
  4820/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:112982:30
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4734:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:91975:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:91829:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:112981:18
  7384/</<@http://localhost:9876/_karma_webpack_/main.js:1505:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4734:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:5000:28
  9088/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:5015:14
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  8120/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:1273:28
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:440:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:244:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:611:23
Firefox 122.0 (Linux x86_64): Executed 8 of 17[31m (3 FAILED)[39m[31m ERROR[39m (0 secs / 0.303 secs)
Firefox 122.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 327)
  createReal@http://localhost:9876/_karma_webpack_/main.js:327:7
  submit@http://localhost:9876/_karma_webpack_/main.js:340:25
  4092/getData/<@http://localhost:9876/_karma_webpack_/main.js:1606:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  1296/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:4064:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1602:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1585:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:82803:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:82827:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:82787:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:82742:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:88582:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:88786:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:88514:22
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:88498:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:89077:26
  4820/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:112982:30
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4734:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:91975:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:91829:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:112981:18
  7384/</<@http://localhost:9876/_karma_webpack_/main.js:1505:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4734:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:5000:28
  9088/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:5015:14
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  8120/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:1273:28
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:440:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:244:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:611:23
[1A[2KFirefox 122.0 (Linux x86_64): Executed 8 of 17[31m (3 FAILED)[39m[31m ERROR[39m (0.351 secs / 0.303 secs)
[1A[2K[31mFirefox 122.0 (Linux x86_64) ERROR[39m
  Disconnected , because no message in 30000 ms.
Firefox 122.0 (Linux x86_64): Executed 8 of 17[31m (3 FAILED)[39m[31m DISCONNECTED[39m (30.36 secs / 0.303 secs)
Firefox 122.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 122.0 (Linux x86_64): Executed 8 of 17[31m (3 FAILED)[39m[31m DISCONNECTED[39m (30.36 secs / 0.303 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
