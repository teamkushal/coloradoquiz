```bash
yarn run v1.22.22
$ ng test
05 05 2024 16:22:57.919:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
05 05 2024 16:22:57.922:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
05 05 2024 16:22:57.924:INFO [launcher]: Starting browser Firefox
05 05 2024 16:22:59.587:INFO [Firefox 125.0 (Linux x86_64)]: Connected on socket Zi0efxNmm7q878OjAAAB with id 15523971
Firefox 125.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 125.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.021 secs)
[1A[2KFirefox 125.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.034 secs)
[1A[2KERROR: [36m'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 125.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.034 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 125.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.034 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 125.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.034 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 125.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.263 secs)
[1A[2K[31mFirefox 125.0 (Linux x86_64) ERROR[39m
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
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:113740:30
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4734:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:95041:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:94895:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:113739:18
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
Firefox 125.0 (Linux x86_64): Executed 3 of 17[31m ERROR[39m (0 secs / 0.263 secs)
Firefox 125.0 (Linux x86_64) ERROR
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
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:113740:30
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4734:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:95041:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:94895:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:113739:18
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
[1A[2KFirefox 125.0 (Linux x86_64): Executed 3 of 17[31m ERROR[39m (0.004 secs / 0.263 secs)
[1A[2K[31mFirefox 125.0 (Linux x86_64) PromptUpdateService should be created FAILED[39m
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 105093)
	verifySemanticsOfNgModuleDef@vendor.js:105093:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:105103:33
	verifySemanticsOfNgModuleDef@vendor.js:105101:58
	get@vendor.js:105058:22
	applyProviderOverridesInScope@vendor.js:114564:25
	compileTestModule@vendor.js:114860:10
	finalize@vendor.js:114388:10
	get testModuleRef@vendor.js:115400:43
	inject@vendor.js:115302:20
	inject@vendor.js:115158:33
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
Firefox 125.0 (Linux x86_64): Executed 4 of 17[31m (1 FAILED)[39m[31m ERROR[39m (0.004 secs / 0.269 secs)
Firefox 125.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 105093)
	verifySemanticsOfNgModuleDef@vendor.js:105093:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:105103:33
	verifySemanticsOfNgModuleDef@vendor.js:105101:58
	get@vendor.js:105058:22
	applyProviderOverridesInScope@vendor.js:114564:25
	compileTestModule@vendor.js:114860:10
	finalize@vendor.js:114388:10
	get testModuleRef@vendor.js:115400:43
	inject@vendor.js:115302:20
	inject@vendor.js:115158:33
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
[1A[2KFirefox 125.0 (Linux x86_64): Executed 5 of 17[31m (1 FAILED)[39m[31m ERROR[39m (0.004 secs / 0.347 secs)
[1A[2KERROR: [36m'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 125.0 (Linux x86_64): Executed 5 of 17[31m (1 FAILED)[39m[31m ERROR[39m (0.004 secs / 0.347 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 125.0 (Linux x86_64): Executed 5 of 17[31m (1 FAILED)[39m[31m ERROR[39m (0.004 secs / 0.347 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 125.0 (Linux x86_64): Executed 5 of 17[31m (1 FAILED)[39m[31m ERROR[39m (0.004 secs / 0.347 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 125.0 (Linux x86_64): Executed 5 of 17[31m (1 FAILED)[39m[31m ERROR[39m (0.004 secs / 0.347 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 125.0 (Linux x86_64): Executed 5 of 17[31m (1 FAILED)[39m[31m ERROR[39m (0.004 secs / 0.347 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 125.0 (Linux x86_64): Executed 6 of 17[31m (1 FAILED)[39m[31m ERROR[39m (0.004 secs / 0.444 secs)
[1A[2KFirefox 125.0 (Linux x86_64): Executed 7 of 17[31m (1 FAILED)[39m[31m ERROR[39m (0.004 secs / 0.451 secs)
[1A[2KFirefox 125.0 (Linux x86_64): Executed 8 of 17[31m (1 FAILED)[39m[31m ERROR[39m (0.004 secs / 0.456 secs)
[1A[2KERROR: [36m'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 125.0 (Linux x86_64): Executed 8 of 17[31m (1 FAILED)[39m[31m ERROR[39m (0.004 secs / 0.456 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 125.0 (Linux x86_64): Executed 8 of 17[31m (1 FAILED)[39m[31m ERROR[39m (0.004 secs / 0.456 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 125.0 (Linux x86_64): Executed 9 of 17[31m (1 FAILED)[39m[31m ERROR[39m (0.004 secs / 0.483 secs)
[1A[2KFirefox 125.0 (Linux x86_64): Executed 10 of 17[31m (1 FAILED)[39m[31m ERROR[39m (0.004 secs / 0.492 secs)
[1A[2K[31mFirefox 125.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED[39m
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 78637)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:78637:21
	get@vendor.js:80018:27
	get@vendor.js:80018:27
	inject@vendor.js:115303:58
	inject@vendor.js:115158:33
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
Firefox 125.0 (Linux x86_64): Executed 11 of 17[31m (2 FAILED)[39m[31m ERROR[39m (0.004 secs / 0.501 secs)
Firefox 125.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 78637)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:78637:21
	get@vendor.js:80018:27
	get@vendor.js:80018:27
	inject@vendor.js:115303:58
	inject@vendor.js:115158:33
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
[1A[2KFirefox 125.0 (Linux x86_64): Executed 12 of 17[31m (2 FAILED)[39m[31m ERROR[39m (0.004 secs / 0.513 secs)
[1A[2K[31mFirefox 125.0 (Linux x86_64) HoneynutCheeriosService should be created FAILED[39m
	NullInjectorError: R3InjectorError(DynamicTestModule)[HoneynutCheeriosService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 78637)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HoneynutCheeriosService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:78637:21
	get@vendor.js:80018:27
	get@vendor.js:80018:27
	injectInjectorOnly@vendor.js:78099:36
	ɵɵinject@vendor.js:78105:59
	HoneynutCheeriosService_Factory@ng:///HoneynutCheeriosService/ɵfac.js:5:51
	7580/hydrate/<@vendor.js:80136:35
	runInInjectorProfilerContext@vendor.js:77870:5
	hydrate@vendor.js:80135:39
	get@vendor.js:80009:23
	inject@vendor.js:115302:48
	inject@vendor.js:115158:33
	4459/</<@main.js:256:74
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
Firefox 125.0 (Linux x86_64): Executed 13 of 17[31m (3 FAILED)[39m[31m ERROR[39m (0.004 secs / 0.519 secs)
Firefox 125.0 (Linux x86_64) HoneynutCheeriosService should be created FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[HoneynutCheeriosService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 78637)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HoneynutCheeriosService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:78637:21
	get@vendor.js:80018:27
	get@vendor.js:80018:27
	injectInjectorOnly@vendor.js:78099:36
	ɵɵinject@vendor.js:78105:59
	HoneynutCheeriosService_Factory@ng:///HoneynutCheeriosService/ɵfac.js:5:51
	7580/hydrate/<@vendor.js:80136:35
	runInInjectorProfilerContext@vendor.js:77870:5
	hydrate@vendor.js:80135:39
	get@vendor.js:80009:23
	inject@vendor.js:115302:48
	inject@vendor.js:115158:33
	4459/</<@main.js:256:74
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
[1A[2KFirefox 125.0 (Linux x86_64): Executed 14 of 17[31m (3 FAILED)[39m[31m ERROR[39m (0.004 secs / 0.553 secs)
[1A[2K[31mFirefox 125.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED[39m
	NullInjectorError: R3InjectorError[HandleUnrecoverableStateService -> HandleUnrecoverableStateService]: 
	  NullInjectorError: No provider for HandleUnrecoverableStateService! in vendor.js (line 78637)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HandleUnrecoverableStateService', 'HandleUnrecoverableStateService' ] })
	get@vendor.js:78637:21
	get@vendor.js:80018:27
	get@vendor.js:80018:27
	inject@vendor.js:115303:58
	inject@vendor.js:115158:33
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
Firefox 125.0 (Linux x86_64): Executed 15 of 17[31m (4 FAILED)[39m[31m ERROR[39m (0.004 secs / 0.558 secs)
Firefox 125.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	NullInjectorError: R3InjectorError[HandleUnrecoverableStateService -> HandleUnrecoverableStateService]: 
	  NullInjectorError: No provider for HandleUnrecoverableStateService! in vendor.js (line 78637)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HandleUnrecoverableStateService', 'HandleUnrecoverableStateService' ] })
	get@vendor.js:78637:21
	get@vendor.js:80018:27
	get@vendor.js:80018:27
	inject@vendor.js:115303:58
	inject@vendor.js:115158:33
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
[1A[2KFirefox 125.0 (Linux x86_64): Executed 16 of 17[31m (4 FAILED)[39m[31m ERROR[39m (0.004 secs / 0.57 secs)
[1A[2K[31mFirefox 125.0 (Linux x86_64) AppComponent should create the app FAILED[39m
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
	get@vendor.js:91823:32
	lookupTokenUsingModuleInjector@vendor.js:82584:31
	getOrCreateInjectable@vendor.js:82630:10
	ɵɵdirectiveInject@vendor.js:87760:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:82824:38
	createRootComponent@vendor.js:92078:48
	create@vendor.js:91943:21
	initComponent@vendor.js:115370:45
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	onInvoke@vendor.js:95041:25
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	run@vendor.js:94895:24
	createComponent@vendor.js:115380:37
	createComponent@vendor.js:115173:33
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
Firefox 125.0 (Linux x86_64): Executed 17 of 17[31m (5 FAILED)[39m[31m ERROR[39m (0.004 secs / 0.596 secs)
Firefox 125.0 (Linux x86_64) AppComponent should create the app FAILED
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
	get@vendor.js:91823:32
	lookupTokenUsingModuleInjector@vendor.js:82584:31
	getOrCreateInjectable@vendor.js:82630:10
	ɵɵdirectiveInject@vendor.js:87760:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:82824:38
	createRootComponent@vendor.js:92078:48
	create@vendor.js:91943:21
	initComponent@vendor.js:115370:45
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	onInvoke@vendor.js:95041:25
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	run@vendor.js:94895:24
	createComponent@vendor.js:115380:37
	createComponent@vendor.js:115173:33
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
[1A[2KFirefox 125.0 (Linux x86_64): Executed 17 of 17[31m (5 FAILED)[39m[31m ERROR[39m (0.013 secs / 0.596 secs)
05 05 2024 16:23:01.607:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
