```bash
yarn run v1.22.22
$ ng test
23 08 2025 02:11:01.849:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
23 08 2025 02:11:01.853:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
23 08 2025 02:11:01.857:INFO [launcher]: Starting browser Firefox
23 08 2025 02:11:04.805:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket 1rBxzIxZMO8724AXAAAB with id 13594575
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.053 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.243 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.262 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 SUCCESS (0 secs / 0.276 secs)
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 58831)
	verifySemanticsOfNgModuleDef@vendor.js:58831:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:58841:33
	verifySemanticsOfNgModuleDef@vendor.js:58839:118
	get@vendor.js:58796:22
	applyProviderOverridesInScope@vendor.js:181983:25
	compileTestModule@vendor.js:182301:10
	finalize@vendor.js:181814:10
	get testModuleRef@vendor.js:182886:43
	inject@vendor.js:182795:20
	inject@vendor.js:182636:33
	1230/</<@main.js:389:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29136:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27318:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27333:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.281 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 58831)
	verifySemanticsOfNgModuleDef@vendor.js:58831:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:58841:33
	verifySemanticsOfNgModuleDef@vendor.js:58839:118
	get@vendor.js:58796:22
	applyProviderOverridesInScope@vendor.js:181983:25
	compileTestModule@vendor.js:182301:10
	finalize@vendor.js:181814:10
	get testModuleRef@vendor.js:182886:43
	inject@vendor.js:182795:20
	inject@vendor.js:182636:33
	1230/</<@main.js:389:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29136:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27318:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27333:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.3 secs)
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: NG0201: No provider found for `HttpClient`. Source: DynamicTestModule. Path: IpinfoService -> HttpClient. Find more at https://angular.dev/errors/NG0201 in vendor.js (line 84270)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpClient`.', ngTokenPath: [ 'IpinfoService', 'HttpClient' ] })
	createRuntimeError@vendor.js:85123:17
	get@vendor.js:85664:39
	get@vendor.js:86218:27
	get@vendor.js:86218:27
	retrieve@vendor.js:86103:19
	injectInjectorOnly@vendor.js:85238:35
	ɵɵinject@vendor.js:85250:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	4205/hydrate/<@vendor.js:86344:35
	runInInjectorProfilerContext@vendor.js:84943:5
	hydrate@vendor.js:86342:39
	get@vendor.js:86209:23
	get@vendor.js:41926:32
	lookupTokenUsingModuleInjector@vendor.js:31732:31
	getOrCreateInjectable@vendor.js:31778:10
	ɵɵdirectiveInject@vendor.js:41973:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:31982:38
	instantiateAllDirectives@vendor.js:37929:40
	createDirectivesInstances@vendor.js:37712:27
	create@vendor.js:43063:34
	initComponent@vendor.js:182861:45
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29136:33
	invoke@polyfills.js:969:46
	onInvoke@vendor.js:46140:25
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	run@vendor.js:45992:24
	createComponent@vendor.js:182866:37
	createComponent@vendor.js:182647:33
	1675/</<@main.js:638:80
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29136:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27318:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27333:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
Firefox 128.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) (0 secs / 0.39 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: NG0201: No provider found for `HttpClient`. Source: DynamicTestModule. Path: IpinfoService -> HttpClient. Find more at https://angular.dev/errors/NG0201 in vendor.js (line 84270)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpClient`.', ngTokenPath: [ 'IpinfoService', 'HttpClient' ] })
	createRuntimeError@vendor.js:85123:17
	get@vendor.js:85664:39
	get@vendor.js:86218:27
	get@vendor.js:86218:27
	retrieve@vendor.js:86103:19
	injectInjectorOnly@vendor.js:85238:35
	ɵɵinject@vendor.js:85250:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	4205/hydrate/<@vendor.js:86344:35
	runInInjectorProfilerContext@vendor.js:84943:5
	hydrate@vendor.js:86342:39
	get@vendor.js:86209:23
	get@vendor.js:41926:32
	lookupTokenUsingModuleInjector@vendor.js:31732:31
	getOrCreateInjectable@vendor.js:31778:10
	ɵɵdirectiveInject@vendor.js:41973:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:31982:38
	instantiateAllDirectives@vendor.js:37929:40
	createDirectivesInstances@vendor.js:37712:27
	create@vendor.js:43063:34
	initComponent@vendor.js:182861:45
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29136:33
	invoke@polyfills.js:969:46
	onInvoke@vendor.js:46140:25
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	run@vendor.js:45992:24
	createComponent@vendor.js:182866:37
	createComponent@vendor.js:182647:33
	1675/</<@main.js:638:80
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29136:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27318:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27333:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
23 08 2025 02:11:06.765:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) (0 secs / 0.39 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) (0 secs / 0.39 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) (0 secs / 0.436 secs)
[1A[2KERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) (0 secs / 0.436 secs)
ERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (3 FAILED) (0 secs / 0.438 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 10 of 18 (4 FAILED) (0 secs / 0.44 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://angular.dev/errors/NG0201 in vendor.js (line 84270)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:85123:17
	get@vendor.js:85664:39
	get@vendor.js:86218:27
	get@vendor.js:86218:27
	inject@vendor.js:182796:58
	inject@vendor.js:182636:33
	9074/</<@main.js:1966:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29136:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27318:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27333:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
	invokeTask@polyfills.js:1074:11
	4124/initZone/ZoneTask/this.invoke@polyfills.js:1060:38
	4124/patchTimer/scheduleTask/data.args[0]@polyfills.js:2349:26
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (5 FAILED) (0 secs / 0.453 secs)
Firefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://angular.dev/errors/NG0201 in vendor.js (line 84270)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:85123:17
	get@vendor.js:85664:39
	get@vendor.js:86218:27
	get@vendor.js:86218:27
	inject@vendor.js:182796:58
	inject@vendor.js:182636:33
	9074/</<@main.js:1966:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29136:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27318:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27333:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
	invokeTask@polyfills.js:1074:11
	4124/initZone/ZoneTask/this.invoke@polyfills.js:1060:38
	4124/patchTimer/scheduleTask/data.args[0]@polyfills.js:2349:26
[1A[2KFirefox 128.0 (Linux x86_64): Executed 12 of 18 (5 FAILED) (0 secs / 0.462 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 13 of 18 (5 FAILED) (0 secs / 0.471 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 14 of 18 (5 FAILED) (0 secs / 0.679 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 15 of 18 (5 FAILED) (0 secs / 0.736 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 16 of 18 (5 FAILED) (0 secs / 0.755 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 16 of 18 (5 FAILED) (0 secs / 0.755 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 16 of 18 (5 FAILED) (0 secs / 0.755 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 16 of 18 (5 FAILED) (0 secs / 0.755 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 17 of 18 (5 FAILED) (0 secs / 1.013 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:179663:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:179632:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:179605:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:150085:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80090:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11374:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80084:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80079:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30915:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:30939:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30899:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30854:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:38696:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:38894:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:38599:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:38588:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:39428:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:181114:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29136:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:46140:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:45992:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:181111:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29136:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27318:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27333:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
Firefox 128.0 (Linux x86_64): Executed 17 of 18 (5 FAILED) ERROR (0 secs / 1.013 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:179663:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:179632:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:179605:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:150085:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80090:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11374:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80084:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80079:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30915:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:30939:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30899:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30854:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:38696:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:38894:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:38599:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:38588:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:39428:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:181114:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29136:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:46140:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:45992:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:181111:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29136:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27318:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27333:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 17 of 18 (5 FAILED) ERROR (1.11 secs / 1.013 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 17 of 18 (5 FAILED) DISCONNECTED (31.137 secs / 1.013 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 17 of 18 (5 FAILED) DISCONNECTED (31.137 secs / 1.013 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
