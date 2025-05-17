```bash
yarn run v1.22.22
$ ng test
17 05 2025 13:10:58.272:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
17 05 2025 13:10:58.275:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
17 05 2025 13:10:58.278:INFO [launcher]: Starting browser Firefox
17 05 2025 13:11:01.710:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket 5j_zwQgUdtOmZ-o2AAAB with id 95322382
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.032 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.154 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.168 secs)
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 121655)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:121655:21
	get@vendor.js:122185:27
	get@vendor.js:122185:27
	injectInjectorOnly@vendor.js:121166:28
	ɵɵinject@vendor.js:121172:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:122298:35
	runInInjectorProfilerContext@vendor.js:120936:5
	hydrate@vendor.js:122297:39
	get@vendor.js:122176:23
	get@vendor.js:136826:32
	lookupTokenUsingModuleInjector@vendor.js:125000:31
	getOrCreateInjectable@vendor.js:125046:10
	ɵɵdirectiveInject@vendor.js:136873:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:125240:38
	instantiateAllDirectives@vendor.js:132283:40
	createDirectivesInstances@vendor.js:132083:27
	create@vendor.js:137497:34
	initComponent@vendor.js:177974:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:30198:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:126449:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:126301:24
	createComponent@vendor.js:177979:37
	createComponent@vendor.js:177765:33
	1675/</<@main.js:643:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:30198:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:28377:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28392:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.227 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 121655)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:121655:21
	get@vendor.js:122185:27
	get@vendor.js:122185:27
	injectInjectorOnly@vendor.js:121166:28
	ɵɵinject@vendor.js:121172:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:122298:35
	runInInjectorProfilerContext@vendor.js:120936:5
	hydrate@vendor.js:122297:39
	get@vendor.js:122176:23
	get@vendor.js:136826:32
	lookupTokenUsingModuleInjector@vendor.js:125000:31
	getOrCreateInjectable@vendor.js:125046:10
	ɵɵdirectiveInject@vendor.js:136873:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:125240:38
	instantiateAllDirectives@vendor.js:132283:40
	createDirectivesInstances@vendor.js:132083:27
	create@vendor.js:137497:34
	initComponent@vendor.js:177974:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:30198:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:126449:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:126301:24
	createComponent@vendor.js:177979:37
	createComponent@vendor.js:177765:33
	1675/</<@main.js:643:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:30198:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:28377:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28392:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (2 FAILED) (0 secs / 0.229 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.232 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.241 secs)
17 05 2025 13:11:03.607:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 121655)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:121655:21
	get@vendor.js:122185:27
	get@vendor.js:122185:27
	inject@vendor.js:177907:58
	inject@vendor.js:177750:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:30198:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:28377:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28392:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (4 FAILED) (0 secs / 0.254 secs)
Firefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 121655)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:121655:21
	get@vendor.js:122185:27
	get@vendor.js:122185:27
	inject@vendor.js:177907:58
	inject@vendor.js:177750:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:30198:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:28377:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28392:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (4 FAILED) (0 secs / 0.305 secs)
[1A[2KERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (4 FAILED) (0 secs / 0.305 secs)
ERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 10 of 18 (4 FAILED) (0 secs / 0.328 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) (0 secs / 0.334 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) (0 secs / 0.345 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) (0 secs / 0.355 secs)
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) (0 secs / 0.355 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) (0 secs / 0.355 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) (0 secs / 0.355 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) (0 secs / 0.355 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) (0 secs / 0.355 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 14 of 18 (4 FAILED) (0 secs / 0.451 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 15 of 18 (4 FAILED) (0 secs / 0.473 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 15 of 18 (4 FAILED) (0 secs / 0.473 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 15 of 18 (4 FAILED) (0 secs / 0.473 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 16 of 18 (4 FAILED) (0 secs / 0.502 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 16 of 18 (4 FAILED) (0 secs / 0.502 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 16 of 18 (4 FAILED) (0 secs / 0.502 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 16 of 18 (4 FAILED) (0 secs / 0.502 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 17 of 18 (4 FAILED) (0 secs / 0.58 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:174793:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:174762:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:174735:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:106116:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:50937:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:12553:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:50931:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:50926:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:124185:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:124209:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:124169:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:124124:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:133687:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:133885:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:133593:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:133577:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:134412:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:176220:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30198:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:126449:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:126301:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:176217:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30198:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28377:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28392:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 17 of 18 (4 FAILED) ERROR (0 secs / 0.58 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:174793:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:174762:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:174735:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:106116:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:50937:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:12553:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:50931:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:50926:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:124185:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:124209:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:124169:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:124124:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:133687:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:133885:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:133593:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:133577:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:134412:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:176220:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30198:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:126449:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:126301:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:176217:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30198:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28377:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28392:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 17 of 18 (4 FAILED) ERROR (0.68 secs / 0.58 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 17 of 18 (4 FAILED) DISCONNECTED (30.712 secs / 0.58 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 17 of 18 (4 FAILED) DISCONNECTED (30.712 secs / 0.58 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
