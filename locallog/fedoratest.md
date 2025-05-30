```bash
yarn run v1.22.22
$ ng test
30 05 2025 16:10:57.874:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
30 05 2025 16:10:57.877:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
30 05 2025 16:10:57.882:INFO [launcher]: Starting browser Firefox
30 05 2025 16:11:01.982:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket DR6kZhGslVdg8BmiAAAB with id 30410351
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 45028)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	NotFoundError@vendor.js:45028:5
	get@vendor.js:9763:21
	get@vendor.js:10315:27
	get@vendor.js:10315:27
	retrieve@vendor.js:10200:19
	injectInjectorOnly@vendor.js:9311:35
	ɵɵinject@vendor.js:9323:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	437/hydrate/<@vendor.js:10433:35
	runInInjectorProfilerContext@vendor.js:9097:5
	hydrate@vendor.js:10431:39
	get@vendor.js:10306:23
	get@vendor.js:147258:32
	lookupTokenUsingModuleInjector@vendor.js:137144:31
	getOrCreateInjectable@vendor.js:137190:10
	ɵɵdirectiveInject@vendor.js:147305:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:137384:38
	instantiateAllDirectives@vendor.js:142591:40
	createDirectivesInstances@vendor.js:142376:27
	create@vendor.js:148357:34
	initComponent@vendor.js:179540:45
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:33656:33
	invoke@polyfills.js:436:46
	onInvoke@vendor.js:151358:25
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	run@vendor.js:151210:24
	createComponent@vendor.js:179545:37
	createComponent@vendor.js:179332:33
	1675/</<@main.js:633:80
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:33656:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:31839:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:31854:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.106 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 45028)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	NotFoundError@vendor.js:45028:5
	get@vendor.js:9763:21
	get@vendor.js:10315:27
	get@vendor.js:10315:27
	retrieve@vendor.js:10200:19
	injectInjectorOnly@vendor.js:9311:35
	ɵɵinject@vendor.js:9323:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	437/hydrate/<@vendor.js:10433:35
	runInInjectorProfilerContext@vendor.js:9097:5
	hydrate@vendor.js:10431:39
	get@vendor.js:10306:23
	get@vendor.js:147258:32
	lookupTokenUsingModuleInjector@vendor.js:137144:31
	getOrCreateInjectable@vendor.js:137190:10
	ɵɵdirectiveInject@vendor.js:147305:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:137384:38
	instantiateAllDirectives@vendor.js:142591:40
	createDirectivesInstances@vendor.js:142376:27
	create@vendor.js:148357:34
	initComponent@vendor.js:179540:45
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:33656:33
	invoke@polyfills.js:436:46
	onInvoke@vendor.js:151358:25
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	run@vendor.js:151210:24
	createComponent@vendor.js:179545:37
	createComponent@vendor.js:179332:33
	1675/</<@main.js:633:80
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:33656:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:31839:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:31854:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 163166)
	verifySemanticsOfNgModuleDef@vendor.js:163166:13
	7838/verifySemanticsOfNgModuleDef/<@vendor.js:163176:33
	verifySemanticsOfNgModuleDef@vendor.js:163174:127
	get@vendor.js:163131:22
	applyProviderOverridesInScope@vendor.js:178679:25
	compileTestModule@vendor.js:178994:10
	finalize@vendor.js:178510:10
	get testModuleRef@vendor.js:179565:43
	inject@vendor.js:179476:20
	inject@vendor.js:179321:33
	1230/</<@main.js:386:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:33656:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:31839:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:31854:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
Firefox 128.0 (Linux x86_64): Executed 2 of 18 (2 FAILED) (0 secs / 0.112 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 163166)
	verifySemanticsOfNgModuleDef@vendor.js:163166:13
	7838/verifySemanticsOfNgModuleDef/<@vendor.js:163176:33
	verifySemanticsOfNgModuleDef@vendor.js:163174:127
	get@vendor.js:163131:22
	applyProviderOverridesInScope@vendor.js:178679:25
	compileTestModule@vendor.js:178994:10
	finalize@vendor.js:178510:10
	get testModuleRef@vendor.js:179565:43
	inject@vendor.js:179476:20
	inject@vendor.js:179321:33
	1230/</<@main.js:386:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:33656:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:31839:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:31854:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
30 05 2025 16:11:03.804:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 45028)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	NotFoundError@vendor.js:45028:5
	get@vendor.js:9763:21
	get@vendor.js:10315:27
	get@vendor.js:10315:27
	inject@vendor.js:179477:58
	inject@vendor.js:179321:33
	9074/</<@main.js:1950:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:33656:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:31839:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:31854:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (3 FAILED) (0 secs / 0.128 secs)
Firefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 45028)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	NotFoundError@vendor.js:45028:5
	get@vendor.js:9763:21
	get@vendor.js:10315:27
	get@vendor.js:10315:27
	inject@vendor.js:179477:58
	inject@vendor.js:179321:33
	9074/</<@main.js:1950:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:33656:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:31839:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:31854:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 (3 FAILED) (0 secs / 0.14 secs)
[1A[2KERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (3 FAILED) (0 secs / 0.14 secs)
ERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) (0 secs / 0.152 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.173 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.183 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (4 FAILED) (0 secs / 0.185 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (5 FAILED) (0 secs / 0.186 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64): Executed 10 of 18 (5 FAILED) (0 secs / 0.196 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 11 of 18 (5 FAILED) (0 secs / 0.204 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (5 FAILED) (0 secs / 0.204 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (5 FAILED) (0 secs / 0.204 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 12 of 18 (5 FAILED) (0 secs / 0.243 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 12 of 18 (5 FAILED) (0 secs / 0.243 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 12 of 18 (5 FAILED) (0 secs / 0.243 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 12 of 18 (5 FAILED) (0 secs / 0.243 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 13 of 18 (5 FAILED) (0 secs / 0.366 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:176320:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:176289:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:176262:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:106276:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:51745:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:16945:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:51739:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:51734:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:136331:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:136355:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:136315:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:136270:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:144036:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:144234:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:143942:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:143931:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:144760:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:177802:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:33656:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:151358:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:151210:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:177799:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:33656:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:31839:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:31854:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (5 FAILED) ERROR (0 secs / 0.366 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:176320:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:176289:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:176262:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:106276:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:51745:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:16945:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:51739:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:51734:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:136331:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:136355:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:136315:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:136270:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:144036:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:144234:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:143942:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:143931:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:144760:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:177802:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:33656:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:151358:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:151210:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:177799:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:33656:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:31839:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:31854:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 13 of 18 (5 FAILED) ERROR (0.434 secs / 0.366 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (5 FAILED) DISCONNECTED (30.448 secs / 0.366 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 13 of 18 (5 FAILED) DISCONNECTED (30.448 secs / 0.366 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
