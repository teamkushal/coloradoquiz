```bash
yarn run v1.22.22
$ ng test
15 11 2025 18:10:57.083:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
15 11 2025 18:10:57.086:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
15 11 2025 18:10:57.091:INFO [launcher]: Starting browser Firefox
15 11 2025 18:11:00.303:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket HwaQKRr7q8Wl27uYAAAB with id 68314961
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.008 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 2 of 18 (2 FAILED) (0 secs / 0.01 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64): Executed 3 of 18 (2 FAILED) (0 secs / 0.027 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 4 of 18 (2 FAILED) (0 secs / 0.111 secs)
[1A[2KFirefox 140.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: NG0201: No provider found for `HttpClient`. Source: DynamicTestModule. Path: IpinfoService -> HttpClient. Find more at https://v20.angular.dev/errors/NG0201 in vendor.js (line 84580)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpClient`.', ngTokenPath: [ 'IpinfoService', 'HttpClient' ] })
	createRuntimeError@vendor.js:85433:17
	get@vendor.js:85974:39
	get@vendor.js:86528:27
	get@vendor.js:86528:27
	retrieve@vendor.js:86413:19
	injectInjectorOnly@vendor.js:85548:35
	ɵɵinject@vendor.js:85560:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	4205/hydrate/<@vendor.js:86660:35
	runInInjectorProfilerContext@vendor.js:85253:5
	hydrate@vendor.js:86658:39
	get@vendor.js:86519:23
	get@vendor.js:43116:32
	lookupTokenUsingModuleInjector@vendor.js:31807:31
	getOrCreateInjectable@vendor.js:31853:10
	ɵɵdirectiveInject@vendor.js:43163:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:32057:38
	instantiateAllDirectives@vendor.js:39106:40
	createDirectivesInstances@vendor.js:38889:27
	create@vendor.js:44256:34
	initComponent@vendor.js:182281:45
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29211:33
	invoke@polyfills.js:969:46
	onInvoke@vendor.js:37736:25
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	run@vendor.js:37588:24
	createComponent@vendor.js:182286:37
	createComponent@vendor.js:182067:33
	1675/</<@main.js:638:80
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29211:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27393:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27408:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
Firefox 140.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) (0 secs / 0.175 secs)
Firefox 140.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: NG0201: No provider found for `HttpClient`. Source: DynamicTestModule. Path: IpinfoService -> HttpClient. Find more at https://v20.angular.dev/errors/NG0201 in vendor.js (line 84580)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpClient`.', ngTokenPath: [ 'IpinfoService', 'HttpClient' ] })
	createRuntimeError@vendor.js:85433:17
	get@vendor.js:85974:39
	get@vendor.js:86528:27
	get@vendor.js:86528:27
	retrieve@vendor.js:86413:19
	injectInjectorOnly@vendor.js:85548:35
	ɵɵinject@vendor.js:85560:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	4205/hydrate/<@vendor.js:86660:35
	runInInjectorProfilerContext@vendor.js:85253:5
	hydrate@vendor.js:86658:39
	get@vendor.js:86519:23
	get@vendor.js:43116:32
	lookupTokenUsingModuleInjector@vendor.js:31807:31
	getOrCreateInjectable@vendor.js:31853:10
	ɵɵdirectiveInject@vendor.js:43163:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:32057:38
	instantiateAllDirectives@vendor.js:39106:40
	createDirectivesInstances@vendor.js:38889:27
	create@vendor.js:44256:34
	initComponent@vendor.js:182281:45
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29211:33
	invoke@polyfills.js:969:46
	onInvoke@vendor.js:37736:25
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	run@vendor.js:37588:24
	createComponent@vendor.js:182286:37
	createComponent@vendor.js:182067:33
	1675/</<@main.js:638:80
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29211:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27393:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27408:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
15 11 2025 18:11:03.116:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) (0 secs / 0.175 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) (0 secs / 0.175 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.217 secs)
[1A[2KERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
Firefox 140.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.217 secs)
ERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.217 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.217 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.217 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.35 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:179083:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:179052:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:179025:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149430:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80382:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11432:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80376:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80371:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30990:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:31014:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30974:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30929:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:39878:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:40076:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:39781:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:39770:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:40610:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180534:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29211:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:37736:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:37588:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180531:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29211:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27393:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27408:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) ERROR (0 secs / 0.35 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:179083:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:179052:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:179025:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149430:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80382:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11432:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80376:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80371:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30990:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:31014:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30974:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30929:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:39878:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:40076:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:39781:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:39770:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:40610:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180534:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29211:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:37736:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:37588:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180531:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29211:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27393:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27408:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) ERROR (0.276 secs / 0.35 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) ERROR (0.276 secs / 0.363 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) DISCONNECTED (30.308 secs / 0.363 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) DISCONNECTED (30.308 secs / 0.363 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
