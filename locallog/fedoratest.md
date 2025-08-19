```bash
yarn run v1.22.22
$ ng test
19 08 2025 06:10:59.417:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
19 08 2025 06:10:59.420:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
19 08 2025 06:10:59.424:INFO [launcher]: Starting browser Firefox
19 08 2025 06:11:02.425:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket _IEUFsmj6ZMJwBmOAAAB with id 59823560
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.023 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.031 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.031 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.031 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.096 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 SUCCESS (0 secs / 0.104 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 SUCCESS (0 secs / 0.173 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 SUCCESS (0 secs / 0.196 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 SUCCESS (0 secs / 0.211 secs)
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: NG0201: No provider found for `HttpClient`. Source: DynamicTestModule. Path: IpinfoService -> HttpClient. Find more at https://angular.dev/errors/NG0201 in vendor.js (line 87345)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpClient`.', ngTokenPath: [ 'IpinfoService', 'HttpClient' ] })
	createRuntimeError@vendor.js:88198:17
	get@vendor.js:88739:39
	get@vendor.js:89293:27
	get@vendor.js:89293:27
	retrieve@vendor.js:89178:19
	injectInjectorOnly@vendor.js:88313:35
	ɵɵinject@vendor.js:88325:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	4205/hydrate/<@vendor.js:89419:35
	runInInjectorProfilerContext@vendor.js:88018:5
	hydrate@vendor.js:89417:39
	get@vendor.js:89284:23
	get@vendor.js:45096:32
	lookupTokenUsingModuleInjector@vendor.js:34906:31
	getOrCreateInjectable@vendor.js:34952:10
	ɵɵdirectiveInject@vendor.js:45143:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:35156:38
	instantiateAllDirectives@vendor.js:41099:40
	createDirectivesInstances@vendor.js:40882:27
	create@vendor.js:46224:34
	initComponent@vendor.js:182378:45
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:32216:33
	invoke@polyfills.js:966:46
	onInvoke@vendor.js:49301:25
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	run@vendor.js:49153:24
	createComponent@vendor.js:182383:37
	createComponent@vendor.js:182170:33
	1675/</<@main.js:633:80
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:32216:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:30399:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:30414:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (1 FAILED) (0 secs / 0.243 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: NG0201: No provider found for `HttpClient`. Source: DynamicTestModule. Path: IpinfoService -> HttpClient. Find more at https://angular.dev/errors/NG0201 in vendor.js (line 87345)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpClient`.', ngTokenPath: [ 'IpinfoService', 'HttpClient' ] })
	createRuntimeError@vendor.js:88198:17
	get@vendor.js:88739:39
	get@vendor.js:89293:27
	get@vendor.js:89293:27
	retrieve@vendor.js:89178:19
	injectInjectorOnly@vendor.js:88313:35
	ɵɵinject@vendor.js:88325:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	4205/hydrate/<@vendor.js:89419:35
	runInInjectorProfilerContext@vendor.js:88018:5
	hydrate@vendor.js:89417:39
	get@vendor.js:89284:23
	get@vendor.js:45096:32
	lookupTokenUsingModuleInjector@vendor.js:34906:31
	getOrCreateInjectable@vendor.js:34952:10
	ɵɵdirectiveInject@vendor.js:45143:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:35156:38
	instantiateAllDirectives@vendor.js:41099:40
	createDirectivesInstances@vendor.js:40882:27
	create@vendor.js:46224:34
	initComponent@vendor.js:182378:45
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:32216:33
	invoke@polyfills.js:966:46
	onInvoke@vendor.js:49301:25
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	run@vendor.js:49153:24
	createComponent@vendor.js:182383:37
	createComponent@vendor.js:182170:33
	1675/</<@main.js:633:80
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:32216:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:30399:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:30414:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
19 08 2025 06:11:04.110:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (1 FAILED) (0 secs / 0.243 secs)
ERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (1 FAILED) (0 secs / 0.303 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (1 FAILED) (0 secs / 0.303 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (1 FAILED) (0 secs / 0.303 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (1 FAILED) (0 secs / 0.303 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 10 of 18 (1 FAILED) (0 secs / 0.388 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:179168:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:179137:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:179110:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149818:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:83989:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:12800:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:83983:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:83978:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:34089:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:34113:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:34073:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:34028:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:41866:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:42064:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:41769:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:41758:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:42598:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180650:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:32216:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:49301:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:49153:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180647:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:32216:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:30399:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:30414:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3055:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:991:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:790:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 10 of 18 (1 FAILED) ERROR (0 secs / 0.388 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:179168:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:179137:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:179110:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149818:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:83989:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:12800:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:83983:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:83978:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:34089:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:34113:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:34073:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:34028:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:41866:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:42064:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:41769:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:41758:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:42598:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180650:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:32216:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:49301:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:49153:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180647:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:32216:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:30399:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:30414:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3055:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:991:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:790:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1162:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 10 of 18 (1 FAILED) ERROR (0.452 secs / 0.388 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 10 of 18 (1 FAILED) DISCONNECTED (30.461 secs / 0.388 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 10 of 18 (1 FAILED) DISCONNECTED (30.461 secs / 0.388 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
