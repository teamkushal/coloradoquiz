```bash
yarn run v1.22.22
$ ng test
06 04 2025 08:10:59.804:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
06 04 2025 08:10:59.808:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
06 04 2025 08:10:59.811:INFO [launcher]: Starting browser Firefox
06 04 2025 08:11:03.520:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket ZFzUYt-QsR5lBhbkAAAB with id 19818921
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 121511)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:121511:21
	get@vendor.js:122039:27
	get@vendor.js:122039:27
	inject@vendor.js:181098:58
	inject@vendor.js:180941:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:968:158
	onInvoke@vendor.js:36571:33
	invoke@polyfills.js:968:46
	run@polyfills.js:739:35
	runInTestZone@vendor.js:34750:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:34765:16
	<Jasmine>
	invoke@polyfills.js:968:158
	run@polyfills.js:739:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3057:30
	invokeTask@polyfills.js:993:171
	runTask@polyfills.js:792:37
	drainMicroTaskQueue@polyfills.js:1164:23
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.029 secs)
Firefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 121511)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:121511:21
	get@vendor.js:122039:27
	get@vendor.js:122039:27
	inject@vendor.js:181098:58
	inject@vendor.js:180941:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:968:158
	onInvoke@vendor.js:36571:33
	invoke@polyfills.js:968:46
	run@polyfills.js:739:35
	runInTestZone@vendor.js:34750:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:34765:16
	<Jasmine>
	invoke@polyfills.js:968:158
	run@polyfills.js:739:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3057:30
	invokeTask@polyfills.js:993:171
	runTask@polyfills.js:792:37
	drainMicroTaskQueue@polyfills.js:1164:23
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.029 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.029 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.106 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.123 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.187 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.208 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.216 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (1 FAILED) (0 secs / 0.241 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 (1 FAILED) (0 secs / 0.251 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (1 FAILED) (0 secs / 0.329 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 10 of 18 (1 FAILED) (0 secs / 0.337 secs)
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 121511)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:121511:21
	get@vendor.js:122039:27
	get@vendor.js:122039:27
	injectInjectorOnly@vendor.js:121022:28
	ɵɵinject@vendor.js:121028:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:122152:35
	runInInjectorProfilerContext@vendor.js:120792:5
	hydrate@vendor.js:122151:39
	get@vendor.js:122030:23
	get@vendor.js:136650:32
	lookupTokenUsingModuleInjector@vendor.js:124854:31
	getOrCreateInjectable@vendor.js:124900:10
	ɵɵdirectiveInject@vendor.js:136697:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:125094:38
	instantiateAllDirectives@vendor.js:132115:40
	createDirectivesInstances@vendor.js:131915:27
	create@vendor.js:137321:34
	initComponent@vendor.js:181165:45
	invoke@polyfills.js:968:158
	onInvoke@vendor.js:36571:33
	invoke@polyfills.js:968:46
	onInvoke@vendor.js:126282:25
	invoke@polyfills.js:968:46
	run@polyfills.js:739:35
	run@vendor.js:126134:24
	createComponent@vendor.js:181170:37
	createComponent@vendor.js:180956:33
	1675/</<@main.js:643:80
	invoke@polyfills.js:968:158
	onInvoke@vendor.js:36571:33
	invoke@polyfills.js:968:46
	run@polyfills.js:739:35
	runInTestZone@vendor.js:34750:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:34765:16
	<Jasmine>
	invoke@polyfills.js:968:158
	run@polyfills.js:739:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3057:30
	invokeTask@polyfills.js:993:171
	runTask@polyfills.js:792:37
	drainMicroTaskQueue@polyfills.js:1164:23
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (2 FAILED) (0 secs / 0.378 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 121511)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:121511:21
	get@vendor.js:122039:27
	get@vendor.js:122039:27
	injectInjectorOnly@vendor.js:121022:28
	ɵɵinject@vendor.js:121028:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:122152:35
	runInInjectorProfilerContext@vendor.js:120792:5
	hydrate@vendor.js:122151:39
	get@vendor.js:122030:23
	get@vendor.js:136650:32
	lookupTokenUsingModuleInjector@vendor.js:124854:31
	getOrCreateInjectable@vendor.js:124900:10
	ɵɵdirectiveInject@vendor.js:136697:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:125094:38
	instantiateAllDirectives@vendor.js:132115:40
	createDirectivesInstances@vendor.js:131915:27
	create@vendor.js:137321:34
	initComponent@vendor.js:181165:45
	invoke@polyfills.js:968:158
	onInvoke@vendor.js:36571:33
	invoke@polyfills.js:968:46
	onInvoke@vendor.js:126282:25
	invoke@polyfills.js:968:46
	run@polyfills.js:739:35
	run@vendor.js:126134:24
	createComponent@vendor.js:181170:37
	createComponent@vendor.js:180956:33
	1675/</<@main.js:643:80
	invoke@polyfills.js:968:158
	onInvoke@vendor.js:36571:33
	invoke@polyfills.js:968:46
	run@polyfills.js:739:35
	runInTestZone@vendor.js:34750:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:34765:16
	<Jasmine>
	invoke@polyfills.js:968:158
	run@polyfills.js:739:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3057:30
	invokeTask@polyfills.js:993:171
	runTask@polyfills.js:792:37
	drainMicroTaskQueue@polyfills.js:1164:23
06 04 2025 08:11:05.198:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (2 FAILED) (0 secs / 0.378 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (2 FAILED) (0 secs / 0.378 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (2 FAILED) (0 secs / 0.378 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (2 FAILED) (0 secs / 0.378 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (2 FAILED) (0 secs / 0.378 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 12 of 18 (2 FAILED) (0 secs / 0.468 secs)
[1A[2KERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

Firefox 128.0 (Linux x86_64): Executed 12 of 18 (2 FAILED) (0 secs / 0.468 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

[1A[2KFirefox 128.0 (Linux x86_64): Executed 13 of 18 (2 FAILED) (0 secs / 0.487 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (2 FAILED) (0 secs / 0.487 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (2 FAILED) (0 secs / 0.487 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (2 FAILED) (0 secs / 0.487 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 14 of 18 (2 FAILED) (0 secs / 0.561 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:177984:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:177953:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:177926:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:98742:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:48931:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:14392:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:48925:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:48920:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:124039:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:124063:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:124023:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:123978:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:133519:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:133717:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:133425:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:133409:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:134244:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:179411:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:36571:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:126282:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:739:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:126134:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:179408:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:36571:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:739:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:34750:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:34765:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:739:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3057:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:993:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:792:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1164:23
Firefox 128.0 (Linux x86_64): Executed 14 of 18 (2 FAILED) ERROR (0 secs / 0.561 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:177984:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:177953:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:177926:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:98742:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:48931:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:14392:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:48925:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:48920:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:124039:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:124063:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:124023:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:123978:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:133519:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:133717:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:133425:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:133409:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:134244:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:179411:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:36571:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:126282:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:739:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:126134:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:179408:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:36571:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:739:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:34750:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:34765:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:739:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3057:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:993:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:792:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1164:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 14 of 18 (2 FAILED) ERROR (0.658 secs / 0.561 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 14 of 18 (2 FAILED) DISCONNECTED (30.695 secs / 0.561 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 14 of 18 (2 FAILED) DISCONNECTED (30.695 secs / 0.561 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
