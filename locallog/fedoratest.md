```bash
yarn run v1.22.22
$ ng test
10 06 2025 02:10:54.011:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
10 06 2025 02:10:54.015:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
10 06 2025 02:10:54.019:INFO [launcher]: Starting browser Firefox
10 06 2025 02:10:57.099:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket PN61xAt2930QscliAAAB with id 25444015
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 173694)
	verifySemanticsOfNgModuleDef@vendor.js:173694:13
	9293/verifySemanticsOfNgModuleDef/<@vendor.js:173704:33
	verifySemanticsOfNgModuleDef@vendor.js:173702:127
	get@vendor.js:173659:22
	applyProviderOverridesInScope@vendor.js:178160:25
	compileTestModule@vendor.js:178475:10
	finalize@vendor.js:177991:10
	get testModuleRef@vendor.js:179046:43
	inject@vendor.js:178957:20
	inject@vendor.js:178802:33
	1230/</<@main.js:386:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:34513:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:32696:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32711:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.014 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 173694)
	verifySemanticsOfNgModuleDef@vendor.js:173694:13
	9293/verifySemanticsOfNgModuleDef/<@vendor.js:173704:33
	verifySemanticsOfNgModuleDef@vendor.js:173702:127
	get@vendor.js:173659:22
	applyProviderOverridesInScope@vendor.js:178160:25
	compileTestModule@vendor.js:178475:10
	finalize@vendor.js:177991:10
	get testModuleRef@vendor.js:179046:43
	inject@vendor.js:178957:20
	inject@vendor.js:178802:33
	1230/</<@main.js:386:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:34513:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:32696:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32711:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.037 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.147 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.158 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.19 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.208 secs)
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.208 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.208 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.208 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.208 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.208 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (1 FAILED) (0 secs / 0.323 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 7 of 18 (1 FAILED) (0 secs / 0.323 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 7 of 18 (1 FAILED) (0 secs / 0.323 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 (1 FAILED) (0 secs / 0.36 secs)
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 45026)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	NotFoundError@vendor.js:45026:5
	get@vendor.js:131346:21
	get@vendor.js:131898:27
	get@vendor.js:131898:27
	retrieve@vendor.js:131783:19
	injectInjectorOnly@vendor.js:130894:35
	ɵɵinject@vendor.js:130906:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7747/hydrate/<@vendor.js:132016:35
	runInInjectorProfilerContext@vendor.js:130680:5
	hydrate@vendor.js:132014:39
	get@vendor.js:131889:23
	get@vendor.js:157775:32
	lookupTokenUsingModuleInjector@vendor.js:147652:31
	getOrCreateInjectable@vendor.js:147698:10
	ɵɵdirectiveInject@vendor.js:157822:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:147892:38
	instantiateAllDirectives@vendor.js:153097:40
	createDirectivesInstances@vendor.js:152882:27
	create@vendor.js:158874:34
	initComponent@vendor.js:179021:45
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:34513:33
	invoke@polyfills.js:966:46
	onInvoke@vendor.js:161876:25
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	run@vendor.js:161728:24
	createComponent@vendor.js:179026:37
	createComponent@vendor.js:178813:33
	1675/</<@main.js:633:80
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:34513:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:32696:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32711:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) (0 secs / 0.4 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 45026)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	NotFoundError@vendor.js:45026:5
	get@vendor.js:131346:21
	get@vendor.js:131898:27
	get@vendor.js:131898:27
	retrieve@vendor.js:131783:19
	injectInjectorOnly@vendor.js:130894:35
	ɵɵinject@vendor.js:130906:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7747/hydrate/<@vendor.js:132016:35
	runInInjectorProfilerContext@vendor.js:130680:5
	hydrate@vendor.js:132014:39
	get@vendor.js:131889:23
	get@vendor.js:157775:32
	lookupTokenUsingModuleInjector@vendor.js:147652:31
	getOrCreateInjectable@vendor.js:147698:10
	ɵɵdirectiveInject@vendor.js:157822:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:147892:38
	instantiateAllDirectives@vendor.js:153097:40
	createDirectivesInstances@vendor.js:152882:27
	create@vendor.js:158874:34
	initComponent@vendor.js:179021:45
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:34513:33
	invoke@polyfills.js:966:46
	onInvoke@vendor.js:161876:25
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	run@vendor.js:161728:24
	createComponent@vendor.js:179026:37
	createComponent@vendor.js:178813:33
	1675/</<@main.js:633:80
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:34513:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:32696:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32711:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
10 06 2025 02:10:59.203:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 128.0 (Linux x86_64): Executed 10 of 18 (2 FAILED) (0 secs / 0.409 secs)
[1A[2KERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
Firefox 128.0 (Linux x86_64): Executed 10 of 18 (2 FAILED) (0 secs / 0.409 secs)
ERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 10 of 18 (2 FAILED) (0 secs / 0.409 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 10 of 18 (2 FAILED) (0 secs / 0.409 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 10 of 18 (2 FAILED) (0 secs / 0.409 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 11 of 18 (2 FAILED) (0 secs / 0.483 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:145462:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:145431:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:145404:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:104091:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:51430:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13968:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:51424:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:51419:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:146839:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:146863:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:146823:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:146778:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:154545:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:154743:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:154448:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:154437:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:155277:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:177283:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34513:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:161876:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:161728:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:177280:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34513:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:32696:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:32711:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3055:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:991:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:790:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (2 FAILED) ERROR (0 secs / 0.483 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:145462:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:145431:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:145404:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:104091:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:51430:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13968:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:51424:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:51419:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:146839:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:146863:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:146823:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:146778:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:154545:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:154743:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:154448:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:154437:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:155277:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:177283:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34513:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:161876:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:161728:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:177280:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34513:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:32696:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:32711:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3055:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:991:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:790:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1162:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 11 of 18 (2 FAILED) ERROR (0.567 secs / 0.483 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (2 FAILED) DISCONNECTED (30.579 secs / 0.483 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 11 of 18 (2 FAILED) DISCONNECTED (30.579 secs / 0.483 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
