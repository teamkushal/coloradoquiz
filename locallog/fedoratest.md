```bash
yarn run v1.22.22
$ ng test
[32m28 11 2024 18:18:13.972:INFO [karma-server]: [39mKarma v6.4.2 server started at http://localhost:9876/
[32m28 11 2024 18:18:13.974:INFO [launcher]: [39mLaunching browsers FirefoxHeadless with concurrency unlimited
[32m28 11 2024 18:18:13.979:INFO [launcher]: [39mStarting browser Firefox
[32m28 11 2024 18:18:17.141:INFO [Firefox 128.0 (Linux x86_64)]: [39mConnected on socket 2yM18AEo-S3tcFKbAAAB with id 83786621
Firefox 128.0 (Linux x86_64): Executed 0 of 18[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18[32m SUCCESS[39m (0 secs / 0.034 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18[32m SUCCESS[39m (0 secs / 0.057 secs)
[1A[2K[31mFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED[39m
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 108766)
	verifySemanticsOfNgModuleDef@vendor.js:108766:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:108776:33
	verifySemanticsOfNgModuleDef@vendor.js:108774:58
	get@vendor.js:108731:22
	applyProviderOverridesInScope@vendor.js:120099:25
	compileTestModule@vendor.js:120410:10
	finalize@vendor.js:119923:10
	get testModuleRef@vendor.js:120984:43
	inject@vendor.js:120891:20
	inject@vendor.js:120735:33
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
Firefox 128.0 (Linux x86_64): Executed 3 of 18[31m (1 FAILED)[39m (0 secs / 0.063 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 108766)
	verifySemanticsOfNgModuleDef@vendor.js:108766:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:108776:33
	verifySemanticsOfNgModuleDef@vendor.js:108774:58
	get@vendor.js:108731:22
	applyProviderOverridesInScope@vendor.js:120099:25
	compileTestModule@vendor.js:120410:10
	finalize@vendor.js:119923:10
	get testModuleRef@vendor.js:120984:43
	inject@vendor.js:120891:20
	inject@vendor.js:120735:33
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
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18[31m (1 FAILED)[39m (0 secs / 0.086 secs)
[1A[2K[31mFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED[39m
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 5 of 18[31m (2 FAILED)[39m (0 secs / 0.09 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2K[31mFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED[39m
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 6 of 18[31m (3 FAILED)[39m (0 secs / 0.092 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18[31m (3 FAILED)[39m (0 secs / 0.138 secs)
[1A[2K[31mFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED[39m
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 77731)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:77731:21
	get@vendor.js:78256:27
	get@vendor.js:78256:27
	injectInjectorOnly@vendor.js:77187:36
	ɵɵinject@vendor.js:77193:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:78369:35
	runInInjectorProfilerContext@vendor.js:76958:5
	hydrate@vendor.js:78368:39
	get@vendor.js:78247:23
	get@vendor.js:80791:32
	lookupTokenUsingModuleInjector@vendor.js:81134:31
	getOrCreateInjectable@vendor.js:81180:10
	ɵɵdirectiveInject@vendor.js:88728:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:81374:38
	createRootComponent@vendor.js:93605:48
	create@vendor.js:93461:21
	initComponent@vendor.js:120959:45
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6490:33
	invoke@polyfills.js:413:46
	onInvoke@vendor.js:82585:25
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	run@vendor.js:82437:24
	createComponent@vendor.js:120964:37
	createComponent@vendor.js:120750:33
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
Firefox 128.0 (Linux x86_64): Executed 8 of 18[31m (4 FAILED)[39m (0 secs / 0.287 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 77731)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:77731:21
	get@vendor.js:78256:27
	get@vendor.js:78256:27
	injectInjectorOnly@vendor.js:77187:36
	ɵɵinject@vendor.js:77193:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:78369:35
	runInInjectorProfilerContext@vendor.js:76958:5
	hydrate@vendor.js:78368:39
	get@vendor.js:78247:23
	get@vendor.js:80791:32
	lookupTokenUsingModuleInjector@vendor.js:81134:31
	getOrCreateInjectable@vendor.js:81180:10
	ɵɵdirectiveInject@vendor.js:88728:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:81374:38
	createRootComponent@vendor.js:93605:48
	create@vendor.js:93461:21
	initComponent@vendor.js:120959:45
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6490:33
	invoke@polyfills.js:413:46
	onInvoke@vendor.js:82585:25
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	run@vendor.js:82437:24
	createComponent@vendor.js:120964:37
	createComponent@vendor.js:120750:33
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
[33m28 11 2024 18:18:18.780:WARN [web-server]: [39m404: /_karma_webpack_/ngsw-worker.js
[1A[2K[31mFirefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED[39m
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 77731)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:77731:21
	get@vendor.js:78256:27
	get@vendor.js:78256:27
	inject@vendor.js:120892:58
	inject@vendor.js:120735:33
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
Firefox 128.0 (Linux x86_64): Executed 9 of 18[31m (5 FAILED)[39m (0 secs / 0.302 secs)
Firefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 77731)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:77731:21
	get@vendor.js:78256:27
	get@vendor.js:78256:27
	inject@vendor.js:120892:58
	inject@vendor.js:120735:33
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
[1A[2KFirefox 128.0 (Linux x86_64): Executed 10 of 18[31m (5 FAILED)[39m (0 secs / 0.316 secs)
[1A[2KERROR: [36m'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 128.0 (Linux x86_64): Executed 10 of 18[31m (5 FAILED)[39m (0 secs / 0.316 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 128.0 (Linux x86_64): Executed 10 of 18[31m (5 FAILED)[39m (0 secs / 0.316 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 128.0 (Linux x86_64): Executed 10 of 18[31m (5 FAILED)[39m (0 secs / 0.316 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 11 of 18[31m (5 FAILED)[39m (0 secs / 0.462 secs)
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 128.0 (Linux x86_64): Executed 11 of 18[31m (5 FAILED)[39m (0 secs / 0.462 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

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
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:80253:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:80277:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:80237:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:80192:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:90532:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:90727:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:90438:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:90422:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:91040:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:119207:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6490:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:82585:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:82437:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:119204:22
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
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:518:11
  4124/initZone/ZoneTask/this.invoke@http://localhost:9876/_karma_webpack_/polyfills.js:504:38
  4124/patchTimer/scheduleTask/data.args[0]@http://localhost:9876/_karma_webpack_/polyfills.js:1793:26
Firefox 128.0 (Linux x86_64): Executed 11 of 18[31m (5 FAILED)[39m[31m ERROR[39m (0 secs / 0.462 secs)
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
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:80253:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:80277:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:80237:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:80192:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:90532:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:90727:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:90438:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:90422:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:91040:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:119207:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6490:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:82585:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:82437:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:119204:22
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
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:518:11
  4124/initZone/ZoneTask/this.invoke@http://localhost:9876/_karma_webpack_/polyfills.js:504:38
  4124/patchTimer/scheduleTask/data.args[0]@http://localhost:9876/_karma_webpack_/polyfills.js:1793:26
[1A[2KFirefox 128.0 (Linux x86_64): Executed 11 of 18[31m (5 FAILED)[39m[31m ERROR[39m (0.547 secs / 0.462 secs)
[1A[2K[31mFirefox 128.0 (Linux x86_64) ERROR[39m
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 11 of 18[31m (5 FAILED)[39m[31m DISCONNECTED[39m (30.561 secs / 0.462 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 11 of 18[31m (5 FAILED)[39m[31m DISCONNECTED[39m (30.561 secs / 0.462 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
