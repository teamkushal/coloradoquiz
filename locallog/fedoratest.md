```bash
yarn run v1.22.22
$ ng test
24 04 2024 06:42:32.672:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
24 04 2024 06:42:32.675:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
24 04 2024 06:42:32.680:INFO [launcher]: Starting browser Firefox
24 04 2024 06:42:34.814:INFO [Firefox 124.0 (Linux x86_64)]: Connected on socket rFav-_XO8idOPXM4AAAB with id 30142714
Firefox 124.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2K[31mFirefox 124.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED[39m
	NullInjectorError: R3InjectorError[HandleUnrecoverableStateService -> HandleUnrecoverableStateService]: 
	  NullInjectorError: No provider for HandleUnrecoverableStateService! in vendor.js (line 78637)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HandleUnrecoverableStateService', 'HandleUnrecoverableStateService' ] })
	get@vendor.js:78637:21
	get@vendor.js:80018:27
	get@vendor.js:80018:27
	inject@vendor.js:115277:58
	inject@vendor.js:115132:33
	6378/</<@main.js:119:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	runInTestZone@vendor.js:5000:28
	2309/</wrapTestInZone/<@vendor.js:5015:14
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:198:35
	4124/</scheduleResolveOrReject/<@polyfills.js:1273:28
	invokeTask@polyfills.js:440:171
	runTask@polyfills.js:244:37
	drainMicroTaskQueue@polyfills.js:611:23
Firefox 124.0 (Linux x86_64): Executed 1 of 17[31m (1 FAILED)[39m (0 secs / 0.023 secs)
Firefox 124.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	NullInjectorError: R3InjectorError[HandleUnrecoverableStateService -> HandleUnrecoverableStateService]: 
	  NullInjectorError: No provider for HandleUnrecoverableStateService! in vendor.js (line 78637)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HandleUnrecoverableStateService', 'HandleUnrecoverableStateService' ] })
	get@vendor.js:78637:21
	get@vendor.js:80018:27
	get@vendor.js:80018:27
	inject@vendor.js:115277:58
	inject@vendor.js:115132:33
	6378/</<@main.js:119:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	runInTestZone@vendor.js:5000:28
	2309/</wrapTestInZone/<@vendor.js:5015:14
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:198:35
	4124/</scheduleResolveOrReject/<@polyfills.js:1273:28
	invokeTask@polyfills.js:440:171
	runTask@polyfills.js:244:37
	drainMicroTaskQueue@polyfills.js:611:23
[1A[2KFirefox 124.0 (Linux x86_64): Executed 2 of 17[31m (1 FAILED)[39m (0 secs / 0.036 secs)
[1A[2K[31mFirefox 124.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED[39m
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 78637)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:78637:21
	get@vendor.js:80018:27
	get@vendor.js:80018:27
	inject@vendor.js:115277:58
	inject@vendor.js:115132:33
	9074/</<@main.js:380:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	runInTestZone@vendor.js:5000:28
	2309/</wrapTestInZone/<@vendor.js:5015:14
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:198:35
	4124/</scheduleResolveOrReject/<@polyfills.js:1273:28
	invokeTask@polyfills.js:440:171
	runTask@polyfills.js:244:37
	drainMicroTaskQueue@polyfills.js:611:23
Firefox 124.0 (Linux x86_64): Executed 3 of 17[31m (2 FAILED)[39m (0 secs / 0.046 secs)
Firefox 124.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 78637)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:78637:21
	get@vendor.js:80018:27
	get@vendor.js:80018:27
	inject@vendor.js:115277:58
	inject@vendor.js:115132:33
	9074/</<@main.js:380:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	runInTestZone@vendor.js:5000:28
	2309/</wrapTestInZone/<@vendor.js:5015:14
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:198:35
	4124/</scheduleResolveOrReject/<@polyfills.js:1273:28
	invokeTask@polyfills.js:440:171
	runTask@polyfills.js:244:37
	drainMicroTaskQueue@polyfills.js:611:23
[1A[2KFirefox 124.0 (Linux x86_64): Executed 4 of 17[31m (2 FAILED)[39m (0 secs / 0.054 secs)
[1A[2KFirefox 124.0 (Linux x86_64): Executed 5 of 17[31m (2 FAILED)[39m (0 secs / 0.061 secs)
[1A[2KFirefox 124.0 (Linux x86_64): Executed 6 of 17[31m (2 FAILED)[39m (0 secs / 0.069 secs)
[1A[2KFirefox 124.0 (Linux x86_64): Executed 7 of 17[31m (2 FAILED)[39m (0 secs / 0.185 secs)
[1A[2K[31mFirefox 124.0 (Linux x86_64) PromptUpdateService should be created FAILED[39m
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 105069)
	verifySemanticsOfNgModuleDef@vendor.js:105069:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:105079:33
	verifySemanticsOfNgModuleDef@vendor.js:105077:58
	get@vendor.js:105034:22
	applyProviderOverridesInScope@vendor.js:114538:25
	compileTestModule@vendor.js:114834:10
	finalize@vendor.js:114362:10
	get testModuleRef@vendor.js:115374:43
	inject@vendor.js:115276:20
	inject@vendor.js:115132:33
	1230/</<@main.js:1298:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	runInTestZone@vendor.js:5000:28
	2309/</wrapTestInZone/<@vendor.js:5015:14
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:198:35
	4124/</scheduleResolveOrReject/<@polyfills.js:1273:28
	invokeTask@polyfills.js:440:171
	runTask@polyfills.js:244:37
	drainMicroTaskQueue@polyfills.js:611:23
Firefox 124.0 (Linux x86_64): Executed 8 of 17[31m (3 FAILED)[39m (0 secs / 0.187 secs)
Firefox 124.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 105069)
	verifySemanticsOfNgModuleDef@vendor.js:105069:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:105079:33
	verifySemanticsOfNgModuleDef@vendor.js:105077:58
	get@vendor.js:105034:22
	applyProviderOverridesInScope@vendor.js:114538:25
	compileTestModule@vendor.js:114834:10
	finalize@vendor.js:114362:10
	get testModuleRef@vendor.js:115374:43
	inject@vendor.js:115276:20
	inject@vendor.js:115132:33
	1230/</<@main.js:1298:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	runInTestZone@vendor.js:5000:28
	2309/</wrapTestInZone/<@vendor.js:5015:14
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:198:35
	4124/</scheduleResolveOrReject/<@polyfills.js:1273:28
	invokeTask@polyfills.js:440:171
	runTask@polyfills.js:244:37
	drainMicroTaskQueue@polyfills.js:611:23
[1A[2K[31mFirefox 124.0 (Linux x86_64) AppComponent should create the app FAILED[39m
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 78637)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:78637:21
	get@vendor.js:80018:27
	get@vendor.js:80018:27
	injectInjectorOnly@vendor.js:78099:36
	ɵɵinject@vendor.js:78105:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:41
	7580/hydrate/<@vendor.js:80136:35
	runInInjectorProfilerContext@vendor.js:77870:5
	hydrate@vendor.js:80135:39
	get@vendor.js:80009:23
	get@vendor.js:92294:32
	lookupTokenUsingModuleInjector@vendor.js:82584:31
	getOrCreateInjectable@vendor.js:82630:10
	ɵɵdirectiveInject@vendor.js:87760:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:82824:38
	createRootComponent@vendor.js:92549:48
	create@vendor.js:92414:21
	initComponent@vendor.js:115344:45
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	onInvoke@vendor.js:91470:25
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	run@vendor.js:91324:24
	createComponent@vendor.js:115354:37
	createComponent@vendor.js:115147:33
	1675/</<@main.js:38:80
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	runInTestZone@vendor.js:5000:28
	2309/</wrapTestInZone/<@vendor.js:5015:14
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:198:35
	4124/</scheduleResolveOrReject/<@polyfills.js:1273:28
	invokeTask@polyfills.js:440:171
	runTask@polyfills.js:244:37
	drainMicroTaskQueue@polyfills.js:611:23
Firefox 124.0 (Linux x86_64): Executed 9 of 17[31m (4 FAILED)[39m (0 secs / 0.228 secs)
Firefox 124.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 78637)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:78637:21
	get@vendor.js:80018:27
	get@vendor.js:80018:27
	injectInjectorOnly@vendor.js:78099:36
	ɵɵinject@vendor.js:78105:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:41
	7580/hydrate/<@vendor.js:80136:35
	runInInjectorProfilerContext@vendor.js:77870:5
	hydrate@vendor.js:80135:39
	get@vendor.js:80009:23
	get@vendor.js:92294:32
	lookupTokenUsingModuleInjector@vendor.js:82584:31
	getOrCreateInjectable@vendor.js:82630:10
	ɵɵdirectiveInject@vendor.js:87760:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:82824:38
	createRootComponent@vendor.js:92549:48
	create@vendor.js:92414:21
	initComponent@vendor.js:115344:45
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	onInvoke@vendor.js:91470:25
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	run@vendor.js:91324:24
	createComponent@vendor.js:115354:37
	createComponent@vendor.js:115147:33
	1675/</<@main.js:38:80
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	runInTestZone@vendor.js:5000:28
	2309/</wrapTestInZone/<@vendor.js:5015:14
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:198:35
	4124/</scheduleResolveOrReject/<@polyfills.js:1273:28
	invokeTask@polyfills.js:440:171
	runTask@polyfills.js:244:37
	drainMicroTaskQueue@polyfills.js:611:23
[1A[2KFirefox 124.0 (Linux x86_64): Executed 10 of 17[31m (4 FAILED)[39m (0 secs / 0.243 secs)
24 04 2024 06:42:36.372:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KERROR: [36m'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 124.0 (Linux x86_64): Executed 10 of 17[31m (4 FAILED)[39m (0 secs / 0.243 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 124.0 (Linux x86_64): Executed 10 of 17[31m (4 FAILED)[39m (0 secs / 0.243 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 124.0 (Linux x86_64): Executed 10 of 17[31m (4 FAILED)[39m (0 secs / 0.243 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 124.0 (Linux x86_64): Executed 11 of 17[31m (4 FAILED)[39m (0 secs / 0.426 secs)
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 124.0 (Linux x86_64): Executed 11 of 17[31m (4 FAILED)[39m (0 secs / 0.426 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

[1A[2K[31mFirefox 124.0 (Linux x86_64) ERROR[39m
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 327)
  createReal@http://localhost:9876/_karma_webpack_/main.js:327:7
  submit@http://localhost:9876/_karma_webpack_/main.js:340:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:1606:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:4064:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1602:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1585:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:82002:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:82026:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:81986:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:81941:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:89444:35
  detectChangesInView$1@http://localhost:9876/_karma_webpack_/vendor.js:89648:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:89376:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:89360:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:89939:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:113714:30
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4734:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:91470:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:91324:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:113713:18
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1505:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4734:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:5000:28
  2309/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:5015:14
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  4124/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:1273:28
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:440:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:244:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:611:23
Firefox 124.0 (Linux x86_64): Executed 11 of 17[31m (4 FAILED)[39m[31m ERROR[39m (0 secs / 0.426 secs)
Firefox 124.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 327)
  createReal@http://localhost:9876/_karma_webpack_/main.js:327:7
  submit@http://localhost:9876/_karma_webpack_/main.js:340:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:1606:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:4064:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1602:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1585:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:82002:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:82026:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:81986:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:81941:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:89444:35
  detectChangesInView$1@http://localhost:9876/_karma_webpack_/vendor.js:89648:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:89376:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:89360:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:89939:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:113714:30
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4734:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:91470:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:91324:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:113713:18
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1505:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4734:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:5000:28
  2309/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:5015:14
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  4124/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:1273:28
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:440:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:244:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:611:23
[1A[2KFirefox 124.0 (Linux x86_64): Executed 11 of 17[31m (4 FAILED)[39m[31m ERROR[39m (0.505 secs / 0.426 secs)
[1A[2K[31mFirefox 124.0 (Linux x86_64) ERROR[39m
  Disconnected , because no message in 30000 ms.
Firefox 124.0 (Linux x86_64): Executed 11 of 17[31m (4 FAILED)[39m[31m DISCONNECTED[39m (30.514 secs / 0.426 secs)
Firefox 124.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 124.0 (Linux x86_64): Executed 11 of 17[31m (4 FAILED)[39m[31m DISCONNECTED[39m (30.514 secs / 0.426 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
