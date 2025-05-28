```bash
yarn run v1.22.22
$ ng test
27 05 2025 22:10:57.892:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
27 05 2025 22:10:57.896:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
27 05 2025 22:10:57.901:INFO [launcher]: Starting browser Firefox
27 05 2025 22:11:01.385:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket k_BNrJLE4i1GCmQpAAAB with id 9238169
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.025 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.026 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (2 FAILED) (0 secs / 0.028 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 (2 FAILED) (0 secs / 0.04 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (2 FAILED) (0 secs / 0.051 secs)
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 121709)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:121709:21
	get@vendor.js:122239:27
	get@vendor.js:122239:27
	injectInjectorOnly@vendor.js:121220:28
	ɵɵinject@vendor.js:121226:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:122352:35
	runInInjectorProfilerContext@vendor.js:120990:5
	hydrate@vendor.js:122351:39
	get@vendor.js:122230:23
	get@vendor.js:136940:32
	lookupTokenUsingModuleInjector@vendor.js:125064:31
	getOrCreateInjectable@vendor.js:125110:10
	ɵɵdirectiveInject@vendor.js:136987:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:125304:38
	instantiateAllDirectives@vendor.js:132397:40
	createDirectivesInstances@vendor.js:132197:27
	create@vendor.js:137611:34
	initComponent@vendor.js:175008:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:30824:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:126513:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:126365:24
	createComponent@vendor.js:175013:37
	createComponent@vendor.js:174799:33
	1675/</<@main.js:643:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:30824:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:29003:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:29018:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
	invokeTask@polyfills.js:543:11
	4124/initZone/ZoneTask/this.invoke@polyfills.js:529:38
	4124/patchTimer/scheduleTask/data.args[0]@polyfills.js:1818:26
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.131 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 121709)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:121709:21
	get@vendor.js:122239:27
	get@vendor.js:122239:27
	injectInjectorOnly@vendor.js:121220:28
	ɵɵinject@vendor.js:121226:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:122352:35
	runInInjectorProfilerContext@vendor.js:120990:5
	hydrate@vendor.js:122351:39
	get@vendor.js:122230:23
	get@vendor.js:136940:32
	lookupTokenUsingModuleInjector@vendor.js:125064:31
	getOrCreateInjectable@vendor.js:125110:10
	ɵɵdirectiveInject@vendor.js:136987:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:125304:38
	instantiateAllDirectives@vendor.js:132397:40
	createDirectivesInstances@vendor.js:132197:27
	create@vendor.js:137611:34
	initComponent@vendor.js:175008:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:30824:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:126513:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:126365:24
	createComponent@vendor.js:175013:37
	createComponent@vendor.js:174799:33
	1675/</<@main.js:643:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:30824:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:29003:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:29018:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
	invokeTask@polyfills.js:543:11
	4124/initZone/ZoneTask/this.invoke@polyfills.js:529:38
	4124/patchTimer/scheduleTask/data.args[0]@polyfills.js:1818:26
27 05 2025 22:11:03.224:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.144 secs)
[1A[2KERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
Firefox 128.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.144 secs)
ERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
[1A[2KFirefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 121709)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:121709:21
	get@vendor.js:122239:27
	get@vendor.js:122239:27
	inject@vendor.js:174941:58
	inject@vendor.js:174784:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:30824:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:29003:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:29018:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (4 FAILED) (0 secs / 0.152 secs)
Firefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 121709)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:121709:21
	get@vendor.js:122239:27
	get@vendor.js:122239:27
	inject@vendor.js:174941:58
	inject@vendor.js:174784:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:30824:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:29003:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:29018:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (4 FAILED) (0 secs / 0.152 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (4 FAILED) (0 secs / 0.152 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (4 FAILED) (0 secs / 0.152 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (4 FAILED) (0 secs / 0.362 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:171826:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:171795:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:171768:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:106147:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:50949:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:12558:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:50943:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:50938:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:124249:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:124273:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:124233:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:124188:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:133801:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:133999:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:133707:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:133691:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:134526:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:173254:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30824:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:126513:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:126365:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:173251:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30824:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:29003:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:29018:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (4 FAILED) ERROR (0 secs / 0.362 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:171826:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:171795:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:171768:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:106147:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:50949:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:12558:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:50943:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:50938:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:124249:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:124273:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:124233:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:124188:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:133801:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:133999:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:133707:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:133691:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:134526:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:173254:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30824:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:126513:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:126365:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:173251:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30824:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:29003:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:29018:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (4 FAILED) ERROR (0.453 secs / 0.362 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (4 FAILED) DISCONNECTED (30.466 secs / 0.362 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (4 FAILED) DISCONNECTED (30.466 secs / 0.362 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
