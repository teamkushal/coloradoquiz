```bash
yarn run v1.22.22
$ ng test
18 04 2025 12:11:00.994:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
18 04 2025 12:11:00.999:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
18 04 2025 12:11:01.007:INFO [launcher]: Starting browser Firefox
18 04 2025 12:11:04.414:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket JR9NgozLERfkl9WcAAAB with id 50001418
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 127076)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:127076:21
	get@vendor.js:127604:27
	get@vendor.js:127604:27
	inject@vendor.js:179250:58
	inject@vendor.js:179093:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:39455:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:37634:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:37649:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.022 secs)
Firefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 127076)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:127076:21
	get@vendor.js:127604:27
	get@vendor.js:127604:27
	inject@vendor.js:179250:58
	inject@vendor.js:179093:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:39455:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:37634:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:37649:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.039 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.051 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (2 FAILED) (0 secs / 0.053 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) (0 secs / 0.055 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) (0 secs / 0.055 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) (0 secs / 0.055 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) (0 secs / 0.055 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) (0 secs / 0.055 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) (0 secs / 0.055 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.232 secs)
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 127076)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:127076:21
	get@vendor.js:127604:27
	get@vendor.js:127604:27
	injectInjectorOnly@vendor.js:126587:28
	ɵɵinject@vendor.js:126593:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:127717:35
	runInInjectorProfilerContext@vendor.js:126357:5
	hydrate@vendor.js:127716:39
	get@vendor.js:127595:23
	get@vendor.js:142215:32
	lookupTokenUsingModuleInjector@vendor.js:130419:31
	getOrCreateInjectable@vendor.js:130465:10
	ɵɵdirectiveInject@vendor.js:142262:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:130659:38
	instantiateAllDirectives@vendor.js:137680:40
	createDirectivesInstances@vendor.js:137480:27
	create@vendor.js:142886:34
	initComponent@vendor.js:179317:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:39455:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:131847:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:131699:24
	createComponent@vendor.js:179322:37
	createComponent@vendor.js:179108:33
	1675/</<@main.js:643:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:39455:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:37634:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:37649:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 7 of 18 (4 FAILED) (0 secs / 0.295 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 127076)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:127076:21
	get@vendor.js:127604:27
	get@vendor.js:127604:27
	injectInjectorOnly@vendor.js:126587:28
	ɵɵinject@vendor.js:126593:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:127717:35
	runInInjectorProfilerContext@vendor.js:126357:5
	hydrate@vendor.js:127716:39
	get@vendor.js:127595:23
	get@vendor.js:142215:32
	lookupTokenUsingModuleInjector@vendor.js:130419:31
	getOrCreateInjectable@vendor.js:130465:10
	ɵɵdirectiveInject@vendor.js:142262:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:130659:38
	instantiateAllDirectives@vendor.js:137680:40
	createDirectivesInstances@vendor.js:137480:27
	create@vendor.js:142886:34
	initComponent@vendor.js:179317:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:39455:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:131847:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:131699:24
	createComponent@vendor.js:179322:37
	createComponent@vendor.js:179108:33
	1675/</<@main.js:643:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:39455:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:37634:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:37649:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
18 04 2025 12:11:06.248:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 (4 FAILED) (0 secs / 0.315 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (4 FAILED) (0 secs / 0.328 secs)
[1A[2KERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

Firefox 128.0 (Linux x86_64): Executed 9 of 18 (4 FAILED) (0 secs / 0.328 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (4 FAILED) (0 secs / 0.328 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (4 FAILED) (0 secs / 0.328 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 10 of 18 (4 FAILED) (0 secs / 0.361 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) (0 secs / 0.405 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) (0 secs / 0.417 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) (0 secs / 0.417 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) (0 secs / 0.417 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) (0 secs / 0.417 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) (0 secs / 0.502 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:175856:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:175825:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:175798:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:113899:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:55695:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:20465:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:55689:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:55684:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:129604:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:129628:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:129588:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:129543:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:139084:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:139282:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:138990:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:138974:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:139809:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:177563:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:39455:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:131847:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:131699:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:177560:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:39455:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:37634:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:37649:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) ERROR (0 secs / 0.502 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:175856:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:175825:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:175798:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:113899:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:55695:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:20465:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:55689:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:55684:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:129604:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:129628:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:129588:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:129543:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:139084:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:139282:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:138990:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:138974:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:139809:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:177563:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:39455:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:131847:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:131699:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:177560:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:39455:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:37634:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:37649:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) ERROR (0.587 secs / 0.502 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) DISCONNECTED (30.596 secs / 0.502 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) DISCONNECTED (30.596 secs / 0.502 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
