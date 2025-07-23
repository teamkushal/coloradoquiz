```bash
yarn run v1.22.22
$ ng test
23 07 2025 10:11:14.203:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
23 07 2025 10:11:14.206:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
23 07 2025 10:11:14.210:INFO [launcher]: Starting browser Firefox
23 07 2025 10:11:17.174:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket hqUCTVhX62a7pKOiAAAB with id 66665598
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.033 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.059 secs)
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 62236)
	verifySemanticsOfNgModuleDef@vendor.js:62236:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:62246:33
	verifySemanticsOfNgModuleDef@vendor.js:62244:118
	get@vendor.js:62201:22
	applyProviderOverridesInScope@vendor.js:180630:25
	compileTestModule@vendor.js:180945:10
	finalize@vendor.js:180461:10
	get testModuleRef@vendor.js:181516:43
	inject@vendor.js:181427:20
	inject@vendor.js:181272:33
	1230/</<@main.js:386:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:33227:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:31410:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:31425:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.062 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 62236)
	verifySemanticsOfNgModuleDef@vendor.js:62236:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:62246:33
	verifySemanticsOfNgModuleDef@vendor.js:62244:118
	get@vendor.js:62201:22
	applyProviderOverridesInScope@vendor.js:180630:25
	compileTestModule@vendor.js:180945:10
	finalize@vendor.js:180461:10
	get testModuleRef@vendor.js:181516:43
	inject@vendor.js:181427:20
	inject@vendor.js:181272:33
	1230/</<@main.js:386:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:33227:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:31410:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:31425:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.062 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.062 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.192 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.224 secs)
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.224 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.224 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.224 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.224 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.224 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.433 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (1 FAILED) (0 secs / 0.467 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 (1 FAILED) (0 secs / 0.506 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (1 FAILED) (0 secs / 0.58 secs)
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: NG0201: No provider found for `HttpClient`. Source: DynamicTestModule. Path: IpinfoService -> HttpClient. Find more at https://angular.dev/errors/NG0201 in vendor.js (line 87267)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpClient`.', ngTokenPath: [ 'IpinfoService', 'HttpClient' ] })
	createRuntimeError@vendor.js:88120:17
	get@vendor.js:88661:39
	get@vendor.js:89215:27
	get@vendor.js:89215:27
	retrieve@vendor.js:89100:19
	injectInjectorOnly@vendor.js:88235:35
	ɵɵinject@vendor.js:88247:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	4205/hydrate/<@vendor.js:89341:35
	runInInjectorProfilerContext@vendor.js:87940:5
	hydrate@vendor.js:89339:39
	get@vendor.js:89206:23
	get@vendor.js:46099:32
	lookupTokenUsingModuleInjector@vendor.js:35915:31
	getOrCreateInjectable@vendor.js:35961:10
	ɵɵdirectiveInject@vendor.js:46146:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:36165:38
	instantiateAllDirectives@vendor.js:42102:40
	createDirectivesInstances@vendor.js:41885:27
	create@vendor.js:47227:34
	initComponent@vendor.js:181491:45
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:33227:33
	invoke@polyfills.js:966:46
	onInvoke@vendor.js:50298:25
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	run@vendor.js:50150:24
	createComponent@vendor.js:181496:37
	createComponent@vendor.js:181283:33
	1675/</<@main.js:633:80
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:33227:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:31410:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:31425:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 10 of 18 (2 FAILED) (0 secs / 0.64 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: NG0201: No provider found for `HttpClient`. Source: DynamicTestModule. Path: IpinfoService -> HttpClient. Find more at https://angular.dev/errors/NG0201 in vendor.js (line 87267)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpClient`.', ngTokenPath: [ 'IpinfoService', 'HttpClient' ] })
	createRuntimeError@vendor.js:88120:17
	get@vendor.js:88661:39
	get@vendor.js:89215:27
	get@vendor.js:89215:27
	retrieve@vendor.js:89100:19
	injectInjectorOnly@vendor.js:88235:35
	ɵɵinject@vendor.js:88247:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	4205/hydrate/<@vendor.js:89341:35
	runInInjectorProfilerContext@vendor.js:87940:5
	hydrate@vendor.js:89339:39
	get@vendor.js:89206:23
	get@vendor.js:46099:32
	lookupTokenUsingModuleInjector@vendor.js:35915:31
	getOrCreateInjectable@vendor.js:35961:10
	ɵɵdirectiveInject@vendor.js:46146:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:36165:38
	instantiateAllDirectives@vendor.js:42102:40
	createDirectivesInstances@vendor.js:41885:27
	create@vendor.js:47227:34
	initComponent@vendor.js:181491:45
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:33227:33
	invoke@polyfills.js:966:46
	onInvoke@vendor.js:50298:25
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	run@vendor.js:50150:24
	createComponent@vendor.js:181496:37
	createComponent@vendor.js:181283:33
	1675/</<@main.js:633:80
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:33227:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:31410:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:31425:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
23 07 2025 10:11:19.727:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 128.0 (Linux x86_64): Executed 11 of 18 (2 FAILED) (0 secs / 0.657 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 12 of 18 (2 FAILED) (0 secs / 0.667 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 12 of 18 (2 FAILED) (0 secs / 0.667 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 12 of 18 (2 FAILED) (0 secs / 0.667 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 12 of 18 (2 FAILED) (0 secs / 0.667 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 13 of 18 (2 FAILED) (0 secs / 0.775 secs)
[1A[2KERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (2 FAILED) (0 secs / 0.775 secs)
ERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178281:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178250:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178223:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149218:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:83911:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:12756:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:83905:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:83900:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:35098:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:35122:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:35082:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:35037:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:42869:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:43067:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:42772:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:42761:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:43601:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:179763:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:33227:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:50298:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:50150:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:179760:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:33227:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:31410:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:31425:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3055:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:991:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:790:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (2 FAILED) ERROR (0 secs / 0.775 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178281:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178250:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178223:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149218:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:83911:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:12756:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:83905:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:83900:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:35098:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:35122:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:35082:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:35037:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:42869:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:43067:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:42772:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:42761:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:43601:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:179763:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:33227:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:50298:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:50150:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:179760:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:33227:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:31410:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:31425:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3055:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:991:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:790:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1162:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 13 of 18 (2 FAILED) ERROR (0.905 secs / 0.775 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (2 FAILED) DISCONNECTED (30.922 secs / 0.775 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 13 of 18 (2 FAILED) DISCONNECTED (30.922 secs / 0.775 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
