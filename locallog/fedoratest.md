```bash
yarn run v1.22.22
$ ng test
23 07 2025 16:11:14.870:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
23 07 2025 16:11:14.874:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
23 07 2025 16:11:14.906:INFO [launcher]: Starting browser Firefox
23 07 2025 16:11:17.826:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket q66Pdttvrr0dW9guAAAB with id 895568
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://angular.dev/errors/NG0201 in vendor.js (line 85662)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:86515:17
	get@vendor.js:87056:39
	get@vendor.js:87610:27
	get@vendor.js:87610:27
	inject@vendor.js:182112:58
	inject@vendor.js:181956:33
	9074/</<@main.js:1950:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:30581:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:28764:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28779:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.037 secs)
Firefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://angular.dev/errors/NG0201 in vendor.js (line 85662)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:86515:17
	get@vendor.js:87056:39
	get@vendor.js:87610:27
	get@vendor.js:87610:27
	inject@vendor.js:182112:58
	inject@vendor.js:181956:33
	9074/</<@main.js:1950:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:30581:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:28764:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28779:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.059 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (2 FAILED) (0 secs / 0.063 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (3 FAILED) (0 secs / 0.067 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: NG0201: No provider found for `HttpClient`. Source: DynamicTestModule. Path: IpinfoService -> HttpClient. Find more at https://angular.dev/errors/NG0201 in vendor.js (line 85662)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpClient`.', ngTokenPath: [ 'IpinfoService', 'HttpClient' ] })
	createRuntimeError@vendor.js:86515:17
	get@vendor.js:87056:39
	get@vendor.js:87610:27
	get@vendor.js:87610:27
	retrieve@vendor.js:87495:19
	injectInjectorOnly@vendor.js:86630:35
	ɵɵinject@vendor.js:86642:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	4205/hydrate/<@vendor.js:87736:35
	runInInjectorProfilerContext@vendor.js:86335:5
	hydrate@vendor.js:87734:39
	get@vendor.js:87601:23
	get@vendor.js:43453:32
	lookupTokenUsingModuleInjector@vendor.js:33269:31
	getOrCreateInjectable@vendor.js:33315:10
	ɵɵdirectiveInject@vendor.js:43500:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:33519:38
	instantiateAllDirectives@vendor.js:39456:40
	createDirectivesInstances@vendor.js:39239:27
	create@vendor.js:44581:34
	initComponent@vendor.js:182175:45
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:30581:33
	invoke@polyfills.js:966:46
	onInvoke@vendor.js:47652:25
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	run@vendor.js:47504:24
	createComponent@vendor.js:182180:37
	createComponent@vendor.js:181967:33
	1675/</<@main.js:633:80
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:30581:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:28764:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28779:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (4 FAILED) (0 secs / 0.212 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: NG0201: No provider found for `HttpClient`. Source: DynamicTestModule. Path: IpinfoService -> HttpClient. Find more at https://angular.dev/errors/NG0201 in vendor.js (line 85662)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpClient`.', ngTokenPath: [ 'IpinfoService', 'HttpClient' ] })
	createRuntimeError@vendor.js:86515:17
	get@vendor.js:87056:39
	get@vendor.js:87610:27
	get@vendor.js:87610:27
	retrieve@vendor.js:87495:19
	injectInjectorOnly@vendor.js:86630:35
	ɵɵinject@vendor.js:86642:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	4205/hydrate/<@vendor.js:87736:35
	runInInjectorProfilerContext@vendor.js:86335:5
	hydrate@vendor.js:87734:39
	get@vendor.js:87601:23
	get@vendor.js:43453:32
	lookupTokenUsingModuleInjector@vendor.js:33269:31
	getOrCreateInjectable@vendor.js:33315:10
	ɵɵdirectiveInject@vendor.js:43500:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:33519:38
	instantiateAllDirectives@vendor.js:39456:40
	createDirectivesInstances@vendor.js:39239:27
	create@vendor.js:44581:34
	initComponent@vendor.js:182175:45
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:30581:33
	invoke@polyfills.js:966:46
	onInvoke@vendor.js:47652:25
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	run@vendor.js:47504:24
	createComponent@vendor.js:182180:37
	createComponent@vendor.js:181967:33
	1675/</<@main.js:633:80
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:30581:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:28764:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28779:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (4 FAILED) (0 secs / 0.222 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (4 FAILED) (0 secs / 0.248 secs)
23 07 2025 16:11:19.564:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 (4 FAILED) (0 secs / 0.374 secs)
[1A[2KERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (4 FAILED) (0 secs / 0.374 secs)
ERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (4 FAILED) (0 secs / 0.389 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 10 of 18 (4 FAILED) (0 secs / 0.416 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) (0 secs / 0.44 secs)
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) (0 secs / 0.44 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) (0 secs / 0.44 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) (0 secs / 0.44 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) (0 secs / 0.44 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) (0 secs / 0.44 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) (0 secs / 0.624 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) (0 secs / 0.634 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 14 of 18 (4 FAILED) (0 secs / 0.704 secs)
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 59590)
	verifySemanticsOfNgModuleDef@vendor.js:59590:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:59600:33
	verifySemanticsOfNgModuleDef@vendor.js:59598:118
	get@vendor.js:59555:22
	applyProviderOverridesInScope@vendor.js:181314:25
	compileTestModule@vendor.js:181629:10
	finalize@vendor.js:181145:10
	get testModuleRef@vendor.js:182200:43
	inject@vendor.js:182111:20
	inject@vendor.js:181956:33
	1230/</<@main.js:386:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:30581:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:28764:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28779:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 15 of 18 (5 FAILED) (0 secs / 0.709 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 59590)
	verifySemanticsOfNgModuleDef@vendor.js:59590:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:59600:33
	verifySemanticsOfNgModuleDef@vendor.js:59598:118
	get@vendor.js:59555:22
	applyProviderOverridesInScope@vendor.js:181314:25
	compileTestModule@vendor.js:181629:10
	finalize@vendor.js:181145:10
	get testModuleRef@vendor.js:182200:43
	inject@vendor.js:182111:20
	inject@vendor.js:181956:33
	1230/</<@main.js:386:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:30581:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:28764:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28779:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 15 of 18 (5 FAILED) (0 secs / 0.709 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 15 of 18 (5 FAILED) (0 secs / 0.709 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 15 of 18 (5 FAILED) (0 secs / 0.709 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 16 of 18 (5 FAILED) (0 secs / 0.809 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178965:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178934:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178907:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:148081:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:82306:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:12846:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:82300:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:82295:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:32452:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:32476:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:32436:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:32391:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:40223:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:40421:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:40126:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:40115:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:40955:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180447:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30581:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:47652:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:47504:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180444:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30581:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28764:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28779:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3055:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:991:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:790:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1162:23
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:1071:11
  4124/initZone/ZoneTask/this.invoke@http://localhost:9876/_karma_webpack_/polyfills.js:1057:38
  4124/patchTimer/scheduleTask/data.args[0]@http://localhost:9876/_karma_webpack_/polyfills.js:2346:26
Firefox 128.0 (Linux x86_64): Executed 16 of 18 (5 FAILED) ERROR (0 secs / 0.809 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178965:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178934:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178907:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:148081:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:82306:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:12846:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:82300:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:82295:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:32452:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:32476:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:32436:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:32391:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:40223:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:40421:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:40126:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:40115:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:40955:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180447:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30581:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:47652:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:47504:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180444:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30581:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28764:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28779:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3055:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:991:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:790:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1162:23
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:1071:11
  4124/initZone/ZoneTask/this.invoke@http://localhost:9876/_karma_webpack_/polyfills.js:1057:38
  4124/patchTimer/scheduleTask/data.args[0]@http://localhost:9876/_karma_webpack_/polyfills.js:2346:26
[1A[2KFirefox 128.0 (Linux x86_64): Executed 16 of 18 (5 FAILED) ERROR (0.871 secs / 0.809 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 16 of 18 (5 FAILED) DISCONNECTED (30.88 secs / 0.809 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 16 of 18 (5 FAILED) DISCONNECTED (30.88 secs / 0.809 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
