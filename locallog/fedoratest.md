```bash
yarn run v1.22.22
$ ng test
12 03 2025 12:11:36.660:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
12 03 2025 12:11:36.663:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
12 03 2025 12:11:36.669:INFO [launcher]: Starting browser Firefox
12 03 2025 12:11:41.305:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket kCApHXPyzftXUbeTAAAB with id 89139345
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.122 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.232 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.261 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 131178)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:131178:21
	get@vendor.js:131702:27
	get@vendor.js:131702:27
	inject@vendor.js:181792:58
	inject@vendor.js:181635:33
	9074/</<@main.js:1981:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:40565:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:38744:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:38759:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.278 secs)
Firefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 131178)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:131178:21
	get@vendor.js:131702:27
	get@vendor.js:131702:27
	inject@vendor.js:181792:58
	inject@vendor.js:181635:33
	9074/</<@main.js:1981:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:40565:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:38744:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:38759:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.299 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.299 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.299 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.299 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.469 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1201)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1201:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1214:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:536:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:115356:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:51521:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:19745:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:51515:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:51510:69
  getData@http://localhost:9876/_karma_webpack_/main.js:532:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:515:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:133722:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:133746:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:133706:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:133661:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:143385:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:143583:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:143291:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:143275:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:144110:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180107:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:40565:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:136052:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:135904:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180104:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1679:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:40565:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:38744:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:38759:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) ERROR (0 secs / 0.469 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1201)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1201:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1214:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:536:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:115356:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:51521:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:19745:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:51515:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:51510:69
  getData@http://localhost:9876/_karma_webpack_/main.js:532:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:515:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:133722:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:133746:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:133706:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:133661:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:143385:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:143583:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:143291:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:143275:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:144110:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180107:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:40565:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:136052:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:135904:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180104:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1679:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:40565:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:38744:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:38759:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) ERROR (0.63 secs / 0.469 secs)
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 131178)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:131178:21
	get@vendor.js:131702:27
	get@vendor.js:131702:27
	injectInjectorOnly@vendor.js:130634:40
	ɵɵinject@vendor.js:130640:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:131815:35
	runInInjectorProfilerContext@vendor.js:130415:5
	hydrate@vendor.js:131814:39
	get@vendor.js:131693:23
	get@vendor.js:134257:32
	lookupTokenUsingModuleInjector@vendor.js:134600:31
	getOrCreateInjectable@vendor.js:134646:10
	ɵɵdirectiveInject@vendor.js:146521:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:134840:38
	instantiateAllDirectives@vendor.js:141935:40
	createDirectivesInstances@vendor.js:141735:27
	create@vendor.js:147145:34
	initComponent@vendor.js:181859:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:40565:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:136052:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:135904:24
	createComponent@vendor.js:181864:37
	createComponent@vendor.js:181650:33
	1675/</<@main.js:642:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:40565:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:38744:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:38759:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) ERROR (0.63 secs / 0.543 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 131178)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:131178:21
	get@vendor.js:131702:27
	get@vendor.js:131702:27
	injectInjectorOnly@vendor.js:130634:40
	ɵɵinject@vendor.js:130640:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:131815:35
	runInInjectorProfilerContext@vendor.js:130415:5
	hydrate@vendor.js:131814:39
	get@vendor.js:131693:23
	get@vendor.js:134257:32
	lookupTokenUsingModuleInjector@vendor.js:134600:31
	getOrCreateInjectable@vendor.js:134646:10
	ɵɵdirectiveInject@vendor.js:146521:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:134840:38
	instantiateAllDirectives@vendor.js:141935:40
	createDirectivesInstances@vendor.js:141735:27
	create@vendor.js:147145:34
	initComponent@vendor.js:181859:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:40565:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:136052:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:135904:24
	createComponent@vendor.js:181864:37
	createComponent@vendor.js:181650:33
	1675/</<@main.js:642:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:40565:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:38744:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:38759:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) DISCONNECTED (30.701 secs / 0.543 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) DISCONNECTED (30.701 secs / 0.543 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
