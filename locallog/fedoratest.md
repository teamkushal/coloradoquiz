```bash
yarn run v1.22.22
$ ng test
16 03 2025 17:11:00.535:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
16 03 2025 17:11:00.539:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
16 03 2025 17:11:00.592:INFO [launcher]: Starting browser Firefox
16 03 2025 17:11:04.083:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket iLxTtz7jeIb97WxhAAAB with id 23048468
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.032 secs)
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 129897)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:129897:21
	get@vendor.js:130425:27
	get@vendor.js:130425:27
	injectInjectorOnly@vendor.js:129408:28
	ɵɵinject@vendor.js:129414:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:130538:35
	runInInjectorProfilerContext@vendor.js:129178:5
	hydrate@vendor.js:130537:39
	get@vendor.js:130416:23
	get@vendor.js:132949:32
	lookupTokenUsingModuleInjector@vendor.js:133292:31
	getOrCreateInjectable@vendor.js:133338:10
	ɵɵdirectiveInject@vendor.js:145050:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:133532:38
	instantiateAllDirectives@vendor.js:140513:40
	createDirectivesInstances@vendor.js:140313:27
	create@vendor.js:145674:34
	initComponent@vendor.js:179378:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:40455:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:134720:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:134572:24
	createComponent@vendor.js:179383:37
	createComponent@vendor.js:179169:33
	1675/</<@main.js:642:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:40455:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:38634:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:38649:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.117 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 129897)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:129897:21
	get@vendor.js:130425:27
	get@vendor.js:130425:27
	injectInjectorOnly@vendor.js:129408:28
	ɵɵinject@vendor.js:129414:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:130538:35
	runInInjectorProfilerContext@vendor.js:129178:5
	hydrate@vendor.js:130537:39
	get@vendor.js:130416:23
	get@vendor.js:132949:32
	lookupTokenUsingModuleInjector@vendor.js:133292:31
	getOrCreateInjectable@vendor.js:133338:10
	ɵɵdirectiveInject@vendor.js:145050:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:133532:38
	instantiateAllDirectives@vendor.js:140513:40
	createDirectivesInstances@vendor.js:140313:27
	create@vendor.js:145674:34
	initComponent@vendor.js:179378:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:40455:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:134720:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:134572:24
	createComponent@vendor.js:179383:37
	createComponent@vendor.js:179169:33
	1675/</<@main.js:642:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:40455:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:38634:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:38649:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
16 03 2025 17:11:05.718:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.142 secs)
[1A[2KERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

Firefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.142 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.142 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.142 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.191 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 129897)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:129897:21
	get@vendor.js:130425:27
	get@vendor.js:130425:27
	inject@vendor.js:179311:58
	inject@vendor.js:179154:33
	9074/</<@main.js:1981:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:40455:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:38634:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:38649:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (2 FAILED) (0 secs / 0.207 secs)
Firefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 129897)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:129897:21
	get@vendor.js:130425:27
	get@vendor.js:130425:27
	inject@vendor.js:179311:58
	inject@vendor.js:179154:33
	9074/</<@main.js:1981:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:40455:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:38634:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:38649:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) (0 secs / 0.27 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) (0 secs / 0.282 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) (0 secs / 0.302 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) (0 secs / 0.319 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 10 of 18 (3 FAILED) (0 secs / 0.321 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) (0 secs / 0.323 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) (0 secs / 0.331 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) (0 secs / 0.331 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) (0 secs / 0.331 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) (0 secs / 0.331 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) (0 secs / 0.428 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1201)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1201:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1214:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:536:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:176203:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:176172:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:176145:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:114818:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:51363:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:19648:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:51357:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:51352:69
  getData@http://localhost:9876/_karma_webpack_/main.js:532:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:515:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:132425:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:132449:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:132409:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:132364:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:141917:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:142115:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:141823:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:141807:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:142642:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:177624:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:40455:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:134720:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:134572:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:177621:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1679:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:40455:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:38634:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:38649:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) ERROR (0 secs / 0.428 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1201)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1201:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1214:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:536:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:176203:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:176172:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:176145:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:114818:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:51363:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:19648:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:51357:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:51352:69
  getData@http://localhost:9876/_karma_webpack_/main.js:532:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:515:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:132425:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:132449:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:132409:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:132364:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:141917:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:142115:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:141823:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:141807:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:142642:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:177624:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:40455:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:134720:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:134572:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:177621:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1679:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:40455:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:38634:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:38649:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) ERROR (0.511 secs / 0.428 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) DISCONNECTED (30.526 secs / 0.428 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) DISCONNECTED (30.526 secs / 0.428 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
