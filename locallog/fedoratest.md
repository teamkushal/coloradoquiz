```bash
yarn run v1.22.22
$ ng test
11 03 2024 08:31:54.456:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
11 03 2024 08:31:54.459:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
11 03 2024 08:31:54.462:INFO [launcher]: Starting browser Firefox
11 03 2024 08:31:56.172:INFO [Firefox 123.0 (Linux x86_64)]: Connected on socket uZGTPBjZBBXBkTjDAAAB with id 5345287
Firefox 123.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 123.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.031 secs)
[1A[2K[31mFirefox 123.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED[39m
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 81468)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:81468:21
	get@vendor.js:81921:27
	get@vendor.js:81921:27
	inject@vendor.js:114761:58
	inject@vendor.js:114616:33
	9864/</<@main.js:380:74
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
Firefox 123.0 (Linux x86_64): Executed 2 of 17[31m (1 FAILED)[39m (0 secs / 0.043 secs)
Firefox 123.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 81468)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:81468:21
	get@vendor.js:81921:27
	get@vendor.js:81921:27
	inject@vendor.js:114761:58
	inject@vendor.js:114616:33
	9864/</<@main.js:380:74
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
[1A[2K[31mFirefox 123.0 (Linux x86_64) HoneynutCheeriosService should be created FAILED[39m
	NullInjectorError: R3InjectorError(DynamicTestModule)[HoneynutCheeriosService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 81468)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HoneynutCheeriosService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:81468:21
	get@vendor.js:81921:27
	get@vendor.js:81921:27
	injectInjectorOnly@vendor.js:80641:36
	ɵɵinject@vendor.js:80647:59
	HoneynutCheeriosService_Factory@ng:///HoneynutCheeriosService/ɵfac.js:5:51
	4280/hydrate/<@vendor.js:82039:35
	runInInjectorProfilerContext@vendor.js:80472:5
	hydrate@vendor.js:82038:39
	get@vendor.js:81912:23
	inject@vendor.js:114760:48
	inject@vendor.js:114616:33
	9760/</<@main.js:256:74
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
Firefox 123.0 (Linux x86_64): Executed 3 of 17[31m (2 FAILED)[39m (0 secs / 0.053 secs)
Firefox 123.0 (Linux x86_64) HoneynutCheeriosService should be created FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[HoneynutCheeriosService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 81468)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HoneynutCheeriosService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:81468:21
	get@vendor.js:81921:27
	get@vendor.js:81921:27
	injectInjectorOnly@vendor.js:80641:36
	ɵɵinject@vendor.js:80647:59
	HoneynutCheeriosService_Factory@ng:///HoneynutCheeriosService/ɵfac.js:5:51
	4280/hydrate/<@vendor.js:82039:35
	runInInjectorProfilerContext@vendor.js:80472:5
	hydrate@vendor.js:82038:39
	get@vendor.js:81912:23
	inject@vendor.js:114760:48
	inject@vendor.js:114616:33
	9760/</<@main.js:256:74
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
[1A[2KFirefox 123.0 (Linux x86_64): Executed 4 of 17[31m (2 FAILED)[39m (0 secs / 0.06 secs)
[1A[2KFirefox 123.0 (Linux x86_64): Executed 5 of 17[31m (2 FAILED)[39m (0 secs / 0.12 secs)
[1A[2KERROR: [36m'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 123.0 (Linux x86_64): Executed 5 of 17[31m (2 FAILED)[39m (0 secs / 0.12 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 123.0 (Linux x86_64): Executed 5 of 17[31m (2 FAILED)[39m (0 secs / 0.12 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 123.0 (Linux x86_64): Executed 6 of 17[31m (2 FAILED)[39m (0 secs / 0.143 secs)
[1A[2KFirefox 123.0 (Linux x86_64): Executed 7 of 17[31m (2 FAILED)[39m (0 secs / 0.159 secs)
[1A[2K[31mFirefox 123.0 (Linux x86_64) PromptUpdateService should be created FAILED[39m
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 104605)
	verifySemanticsOfNgModuleDef@vendor.js:104605:13
	4280/verifySemanticsOfNgModuleDef/<@vendor.js:104615:33
	verifySemanticsOfNgModuleDef@vendor.js:104613:58
	get@vendor.js:104570:22
	applyProviderOverridesInScope@vendor.js:114022:25
	compileTestModule@vendor.js:114318:10
	finalize@vendor.js:113846:10
	get testModuleRef@vendor.js:114858:43
	inject@vendor.js:114760:20
	inject@vendor.js:114616:33
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
Firefox 123.0 (Linux x86_64): Executed 8 of 17[31m (3 FAILED)[39m (0 secs / 0.162 secs)
Firefox 123.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 104605)
	verifySemanticsOfNgModuleDef@vendor.js:104605:13
	4280/verifySemanticsOfNgModuleDef/<@vendor.js:104615:33
	verifySemanticsOfNgModuleDef@vendor.js:104613:58
	get@vendor.js:104570:22
	applyProviderOverridesInScope@vendor.js:114022:25
	compileTestModule@vendor.js:114318:10
	finalize@vendor.js:113846:10
	get testModuleRef@vendor.js:114858:43
	inject@vendor.js:114760:20
	inject@vendor.js:114616:33
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
[1A[2KFirefox 123.0 (Linux x86_64): Executed 9 of 17[31m (3 FAILED)[39m (0 secs / 0.174 secs)
[1A[2KFirefox 123.0 (Linux x86_64): Executed 10 of 17[31m (3 FAILED)[39m (0 secs / 0.18 secs)
[1A[2KFirefox 123.0 (Linux x86_64): Executed 11 of 17[31m (3 FAILED)[39m (0 secs / 0.24 secs)
[1A[2KFirefox 123.0 (Linux x86_64): Executed 12 of 17[31m (3 FAILED)[39m (0 secs / 0.255 secs)
[1A[2KERROR: [36m'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 123.0 (Linux x86_64): Executed 12 of 17[31m (3 FAILED)[39m (0 secs / 0.255 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 123.0 (Linux x86_64): Executed 12 of 17[31m (3 FAILED)[39m (0 secs / 0.255 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 123.0 (Linux x86_64): Executed 12 of 17[31m (3 FAILED)[39m (0 secs / 0.255 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 123.0 (Linux x86_64): Executed 12 of 17[31m (3 FAILED)[39m (0 secs / 0.255 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 123.0 (Linux x86_64): Executed 12 of 17[31m (3 FAILED)[39m (0 secs / 0.255 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 123.0 (Linux x86_64): Executed 13 of 17[31m (3 FAILED)[39m (0 secs / 0.328 secs)
[1A[2K[31mFirefox 123.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED[39m
	NullInjectorError: R3InjectorError[HandleUnrecoverableStateService -> HandleUnrecoverableStateService]: 
	  NullInjectorError: No provider for HandleUnrecoverableStateService! in vendor.js (line 81468)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HandleUnrecoverableStateService', 'HandleUnrecoverableStateService' ] })
	get@vendor.js:81468:21
	get@vendor.js:81921:27
	get@vendor.js:81921:27
	inject@vendor.js:114761:58
	inject@vendor.js:114616:33
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
Firefox 123.0 (Linux x86_64): Executed 14 of 17[31m (4 FAILED)[39m (0 secs / 0.337 secs)
Firefox 123.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	NullInjectorError: R3InjectorError[HandleUnrecoverableStateService -> HandleUnrecoverableStateService]: 
	  NullInjectorError: No provider for HandleUnrecoverableStateService! in vendor.js (line 81468)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HandleUnrecoverableStateService', 'HandleUnrecoverableStateService' ] })
	get@vendor.js:81468:21
	get@vendor.js:81921:27
	get@vendor.js:81921:27
	inject@vendor.js:114761:58
	inject@vendor.js:114616:33
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
[1A[2KERROR: [36m'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 123.0 (Linux x86_64): Executed 14 of 17[31m (4 FAILED)[39m (0 secs / 0.337 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 123.0 (Linux x86_64): Executed 14 of 17[31m (4 FAILED)[39m (0 secs / 0.337 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 123.0 (Linux x86_64): Executed 14 of 17[31m (4 FAILED)[39m (0 secs / 0.337 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 123.0 (Linux x86_64): Executed 15 of 17[31m (4 FAILED)[39m (0 secs / 0.42 secs)
[1A[2K[31mFirefox 123.0 (Linux x86_64) ERROR[39m
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
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:82887:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:82911:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:82871:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:82826:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:88680:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:88884:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:88612:22
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:88596:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:89175:26
  4820/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:113203:30
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4734:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:90701:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:90555:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:113202:18
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
Firefox 123.0 (Linux x86_64): Executed 15 of 17[31m (4 FAILED)[39m[31m ERROR[39m (0 secs / 0.42 secs)
Firefox 123.0 (Linux x86_64) ERROR
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
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:82887:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:82911:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:82871:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:82826:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:88680:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:88884:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:88612:22
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:88596:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:89175:26
  4820/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:113203:30
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4734:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:90701:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:90555:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:113202:18
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
[1A[2KFirefox 123.0 (Linux x86_64): Executed 15 of 17[31m (4 FAILED)[39m[31m ERROR[39m (0.005 secs / 0.42 secs)
[1A[2KFirefox 123.0 (Linux x86_64): Executed 16 of 17[31m (4 FAILED)[39m[31m ERROR[39m (0.005 secs / 0.427 secs)
[1A[2K[31mFirefox 123.0 (Linux x86_64) AppComponent should create the app FAILED[39m
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 81468)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:81468:21
	get@vendor.js:81921:27
	get@vendor.js:81921:27
	injectInjectorOnly@vendor.js:80641:36
	ɵɵinject@vendor.js:80647:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:41
	4280/hydrate/<@vendor.js:82039:35
	runInInjectorProfilerContext@vendor.js:80472:5
	hydrate@vendor.js:82038:39
	get@vendor.js:81912:23
	get@vendor.js:91521:32
	lookupTokenUsingModuleInjector@vendor.js:83469:31
	getOrCreateInjectable@vendor.js:83515:10
	ɵɵdirectiveInject@vendor.js:86950:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:83709:38
	createRootComponent@vendor.js:91776:48
	create@vendor.js:91641:21
	initComponent@vendor.js:114828:45
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	onInvoke@vendor.js:90701:25
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	run@vendor.js:90555:24
	createComponent@vendor.js:114838:37
	createComponent@vendor.js:114631:33
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
Firefox 123.0 (Linux x86_64): Executed 17 of 17[31m (5 FAILED)[39m[31m ERROR[39m (0.005 secs / 0.456 secs)
Firefox 123.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 81468)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:81468:21
	get@vendor.js:81921:27
	get@vendor.js:81921:27
	injectInjectorOnly@vendor.js:80641:36
	ɵɵinject@vendor.js:80647:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:41
	4280/hydrate/<@vendor.js:82039:35
	runInInjectorProfilerContext@vendor.js:80472:5
	hydrate@vendor.js:82038:39
	get@vendor.js:81912:23
	get@vendor.js:91521:32
	lookupTokenUsingModuleInjector@vendor.js:83469:31
	getOrCreateInjectable@vendor.js:83515:10
	ɵɵdirectiveInject@vendor.js:86950:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:83709:38
	createRootComponent@vendor.js:91776:48
	create@vendor.js:91641:21
	initComponent@vendor.js:114828:45
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	onInvoke@vendor.js:90701:25
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	run@vendor.js:90555:24
	createComponent@vendor.js:114838:37
	createComponent@vendor.js:114631:33
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
[1A[2KFirefox 123.0 (Linux x86_64): Executed 17 of 17[31m (5 FAILED)[39m[31m ERROR[39m (0.011 secs / 0.456 secs)
11 03 2024 08:31:58.788:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
