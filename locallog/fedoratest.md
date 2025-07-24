```bash
yarn run v1.22.22
$ ng test
24 07 2025 04:11:15.958:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
24 07 2025 04:11:15.961:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
24 07 2025 04:11:15.983:INFO [launcher]: Starting browser Firefox
24 07 2025 04:11:19.111:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket 0gOS7m8Kxw-BpvmJAAAB with id 21706904
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.036 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.057 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://angular.dev/errors/NG0201 in vendor.js (line 85682)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:86535:17
	get@vendor.js:87076:39
	get@vendor.js:87630:27
	get@vendor.js:87630:27
	inject@vendor.js:182152:58
	inject@vendor.js:181996:33
	9074/</<@main.js:1950:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:30590:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:28773:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28788:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.069 secs)
Firefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://angular.dev/errors/NG0201 in vendor.js (line 85682)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:86535:17
	get@vendor.js:87076:39
	get@vendor.js:87630:27
	get@vendor.js:87630:27
	inject@vendor.js:182152:58
	inject@vendor.js:181996:33
	9074/</<@main.js:1950:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:30590:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:28773:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28788:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.084 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (2 FAILED) (0 secs / 0.085 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.088 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.096 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) (0 secs / 0.12 secs)
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: NG0201: No provider found for `HttpClient`. Source: DynamicTestModule. Path: IpinfoService -> HttpClient. Find more at https://angular.dev/errors/NG0201 in vendor.js (line 85682)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpClient`.', ngTokenPath: [ 'IpinfoService', 'HttpClient' ] })
	createRuntimeError@vendor.js:86535:17
	get@vendor.js:87076:39
	get@vendor.js:87630:27
	get@vendor.js:87630:27
	retrieve@vendor.js:87515:19
	injectInjectorOnly@vendor.js:86650:35
	ɵɵinject@vendor.js:86662:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	4205/hydrate/<@vendor.js:87756:35
	runInInjectorProfilerContext@vendor.js:86355:5
	hydrate@vendor.js:87754:39
	get@vendor.js:87621:23
	get@vendor.js:43470:32
	lookupTokenUsingModuleInjector@vendor.js:33280:31
	getOrCreateInjectable@vendor.js:33326:10
	ɵɵdirectiveInject@vendor.js:43517:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:33530:38
	instantiateAllDirectives@vendor.js:39473:40
	createDirectivesInstances@vendor.js:39256:27
	create@vendor.js:44598:34
	initComponent@vendor.js:182215:45
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:30590:33
	invoke@polyfills.js:966:46
	onInvoke@vendor.js:47669:25
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	run@vendor.js:47521:24
	createComponent@vendor.js:182220:37
	createComponent@vendor.js:182007:33
	1675/</<@main.js:633:80
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:30590:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:28773:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28788:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (4 FAILED) (0 secs / 0.232 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: NG0201: No provider found for `HttpClient`. Source: DynamicTestModule. Path: IpinfoService -> HttpClient. Find more at https://angular.dev/errors/NG0201 in vendor.js (line 85682)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpClient`.', ngTokenPath: [ 'IpinfoService', 'HttpClient' ] })
	createRuntimeError@vendor.js:86535:17
	get@vendor.js:87076:39
	get@vendor.js:87630:27
	get@vendor.js:87630:27
	retrieve@vendor.js:87515:19
	injectInjectorOnly@vendor.js:86650:35
	ɵɵinject@vendor.js:86662:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	4205/hydrate/<@vendor.js:87756:35
	runInInjectorProfilerContext@vendor.js:86355:5
	hydrate@vendor.js:87754:39
	get@vendor.js:87621:23
	get@vendor.js:43470:32
	lookupTokenUsingModuleInjector@vendor.js:33280:31
	getOrCreateInjectable@vendor.js:33326:10
	ɵɵdirectiveInject@vendor.js:43517:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:33530:38
	instantiateAllDirectives@vendor.js:39473:40
	createDirectivesInstances@vendor.js:39256:27
	create@vendor.js:44598:34
	initComponent@vendor.js:182215:45
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:30590:33
	invoke@polyfills.js:966:46
	onInvoke@vendor.js:47669:25
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	run@vendor.js:47521:24
	createComponent@vendor.js:182220:37
	createComponent@vendor.js:182007:33
	1675/</<@main.js:633:80
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:30590:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:28773:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28788:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
24 07 2025 04:11:21.046:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 128.0 (Linux x86_64): Executed 10 of 18 (4 FAILED) (0 secs / 0.451 secs)
[1A[2KERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
Firefox 128.0 (Linux x86_64): Executed 10 of 18 (4 FAILED) (0 secs / 0.451 secs)
ERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 10 of 18 (4 FAILED) (0 secs / 0.451 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 10 of 18 (4 FAILED) (0 secs / 0.451 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 10 of 18 (4 FAILED) (0 secs / 0.451 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) (0 secs / 0.631 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:179005:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178974:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178947:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:148101:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:82326:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:12846:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:82320:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:82315:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:32463:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:32487:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:32447:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:32402:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:40240:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:40438:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:40143:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:40132:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:40972:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180487:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30590:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:47669:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:47521:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180484:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30590:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28773:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28788:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3055:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:991:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:790:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1162:23
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:1071:11
  4124/initZone/ZoneTask/this.invoke@http://localhost:9876/_karma_webpack_/polyfills.js:1057:38
  4124/patchTimer/scheduleTask/data.args[0]@http://localhost:9876/_karma_webpack_/polyfills.js:2346:26
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) ERROR (0 secs / 0.631 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:179005:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178974:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178947:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:148101:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:82326:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:12846:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:82320:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:82315:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:32463:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:32487:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:32447:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:32402:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:40240:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:40438:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:40143:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:40132:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:40972:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180487:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30590:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:47669:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:47521:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180484:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30590:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28773:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28788:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3055:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:991:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:790:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1162:23
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:1071:11
  4124/initZone/ZoneTask/this.invoke@http://localhost:9876/_karma_webpack_/polyfills.js:1057:38
  4124/patchTimer/scheduleTask/data.args[0]@http://localhost:9876/_karma_webpack_/polyfills.js:2346:26
[1A[2KFirefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) ERROR (0.707 secs / 0.631 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) DISCONNECTED (30.723 secs / 0.631 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) DISCONNECTED (30.723 secs / 0.631 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
