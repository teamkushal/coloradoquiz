```bash
yarn run v1.22.22
$ ng test
29 10 2025 14:12:02.810:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
29 10 2025 14:12:02.813:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
29 10 2025 14:12:02.831:INFO [launcher]: Starting browser Firefox
29 10 2025 14:12:08.133:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket hxdeqHaLfubGrmJBAAAB with id 34272759
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.194 secs)
[1A[2KFirefox 140.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: NG0201: No provider found for `HttpClient`. Source: DynamicTestModule. Path: IpinfoService -> HttpClient. Find more at https://v20.angular.dev/errors/NG0201 in vendor.js (line 84533)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpClient`.', ngTokenPath: [ 'IpinfoService', 'HttpClient' ] })
	createRuntimeError@vendor.js:85386:17
	get@vendor.js:85927:39
	get@vendor.js:86481:27
	get@vendor.js:86481:27
	retrieve@vendor.js:86366:19
	injectInjectorOnly@vendor.js:85501:35
	ɵɵinject@vendor.js:85513:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	4205/hydrate/<@vendor.js:86613:35
	runInInjectorProfilerContext@vendor.js:85206:5
	hydrate@vendor.js:86611:39
	get@vendor.js:86472:23
	get@vendor.js:43085:32
	lookupTokenUsingModuleInjector@vendor.js:31788:31
	getOrCreateInjectable@vendor.js:31834:10
	ɵɵdirectiveInject@vendor.js:43132:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:32038:38
	instantiateAllDirectives@vendor.js:39075:40
	createDirectivesInstances@vendor.js:38858:27
	create@vendor.js:44225:34
	initComponent@vendor.js:182197:45
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29192:33
	invoke@polyfills.js:969:46
	onInvoke@vendor.js:37717:25
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	run@vendor.js:37569:24
	createComponent@vendor.js:182202:37
	createComponent@vendor.js:181983:33
	1675/</<@main.js:638:80
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29192:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27374:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27389:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
Firefox 140.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.32 secs)
Firefox 140.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: NG0201: No provider found for `HttpClient`. Source: DynamicTestModule. Path: IpinfoService -> HttpClient. Find more at https://v20.angular.dev/errors/NG0201 in vendor.js (line 84533)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpClient`.', ngTokenPath: [ 'IpinfoService', 'HttpClient' ] })
	createRuntimeError@vendor.js:85386:17
	get@vendor.js:85927:39
	get@vendor.js:86481:27
	get@vendor.js:86481:27
	retrieve@vendor.js:86366:19
	injectInjectorOnly@vendor.js:85501:35
	ɵɵinject@vendor.js:85513:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	4205/hydrate/<@vendor.js:86613:35
	runInInjectorProfilerContext@vendor.js:85206:5
	hydrate@vendor.js:86611:39
	get@vendor.js:86472:23
	get@vendor.js:43085:32
	lookupTokenUsingModuleInjector@vendor.js:31788:31
	getOrCreateInjectable@vendor.js:31834:10
	ɵɵdirectiveInject@vendor.js:43132:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:32038:38
	instantiateAllDirectives@vendor.js:39075:40
	createDirectivesInstances@vendor.js:38858:27
	create@vendor.js:44225:34
	initComponent@vendor.js:182197:45
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29192:33
	invoke@polyfills.js:969:46
	onInvoke@vendor.js:37717:25
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	run@vendor.js:37569:24
	createComponent@vendor.js:182202:37
	createComponent@vendor.js:181983:33
	1675/</<@main.js:638:80
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29192:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27374:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27389:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.34 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v20.angular.dev/errors/NG0201 in vendor.js (line 84533)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:85386:17
	get@vendor.js:85927:39
	get@vendor.js:86481:27
	get@vendor.js:86481:27
	inject@vendor.js:182132:58
	inject@vendor.js:181972:33
	9074/</<@main.js:1966:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29192:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27374:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27389:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (2 FAILED) (0 secs / 0.359 secs)
Firefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v20.angular.dev/errors/NG0201 in vendor.js (line 84533)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:85386:17
	get@vendor.js:85927:39
	get@vendor.js:86481:27
	get@vendor.js:86481:27
	inject@vendor.js:182132:58
	inject@vendor.js:181972:33
	9074/</<@main.js:1966:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29192:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27374:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27389:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 (2 FAILED) (0 secs / 0.378 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 5 of 18 (2 FAILED) (0 secs / 0.378 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 5 of 18 (2 FAILED) (0 secs / 0.378 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 5 of 18 (2 FAILED) (0 secs / 0.378 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) (0 secs / 0.65 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178999:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178968:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178941:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149357:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80327:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11413:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80321:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80316:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30971:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:30995:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30955:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30910:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:39847:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:40045:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:39750:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:39739:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:40579:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180450:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29192:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:37717:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:37569:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180447:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29192:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27374:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27389:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
Firefox 140.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) ERROR (0 secs / 0.65 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178999:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178968:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178941:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149357:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80327:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11413:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80321:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80316:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30971:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:30995:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30955:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30910:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:39847:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:40045:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:39750:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:39739:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:40579:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180450:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29192:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:37717:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:37569:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180447:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29192:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27374:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27389:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) ERROR (0.005 secs / 0.65 secs)
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) ERROR (0.005 secs / 0.65 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) ERROR (0.005 secs / 0.65 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) ERROR (0.005 secs / 0.65 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 140.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) ERROR (0.005 secs / 0.65 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 140.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) ERROR (0.005 secs / 0.65 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) ERROR (0.005 secs / 0.778 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) ERROR (0.005 secs / 0.778 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) ERROR (0.005 secs / 0.778 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 140.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) ERROR (0.005 secs / 0.837 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) ERROR (0.005 secs / 0.866 secs)
[1A[2KFirefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 59055)
	verifySemanticsOfNgModuleDef@vendor.js:59055:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:59065:33
	verifySemanticsOfNgModuleDef@vendor.js:59063:118
	get@vendor.js:59020:22
	applyProviderOverridesInScope@vendor.js:181319:25
	compileTestModule@vendor.js:181637:10
	finalize@vendor.js:181150:10
	get testModuleRef@vendor.js:182222:43
	inject@vendor.js:182131:20
	inject@vendor.js:181972:33
	1230/</<@main.js:389:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29192:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27374:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27389:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
Firefox 140.0 (Linux x86_64): Executed 10 of 18 (3 FAILED) ERROR (0.005 secs / 0.879 secs)
Firefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 59055)
	verifySemanticsOfNgModuleDef@vendor.js:59055:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:59065:33
	verifySemanticsOfNgModuleDef@vendor.js:59063:118
	get@vendor.js:59020:22
	applyProviderOverridesInScope@vendor.js:181319:25
	compileTestModule@vendor.js:181637:10
	finalize@vendor.js:181150:10
	get testModuleRef@vendor.js:182222:43
	inject@vendor.js:182131:20
	inject@vendor.js:181972:33
	1230/</<@main.js:389:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29192:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27374:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27389:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 11 of 18 (3 FAILED) ERROR (0.005 secs / 0.899 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 12 of 18 (3 FAILED) ERROR (0.005 secs / 0.91 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 13 of 18 (3 FAILED) ERROR (0.005 secs / 0.978 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 14 of 18 (4 FAILED) ERROR (0.005 secs / 0.985 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 15 of 18 (5 FAILED) ERROR (0.005 secs / 0.986 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64): Executed 16 of 18 (5 FAILED) ERROR (0.005 secs / 0.999 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 17 of 18 (5 FAILED) ERROR (0.005 secs / 1.02 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 18 of 18 (5 FAILED) ERROR (0.005 secs / 1.041 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 18 of 18 (5 FAILED) ERROR (0.017 secs / 1.041 secs)
29 10 2025 14:12:13.445:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
