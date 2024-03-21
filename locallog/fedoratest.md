```bash
yarn run v1.22.22
$ ng test
20 03 2024 21:25:37.431:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
20 03 2024 21:25:37.434:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
20 03 2024 21:25:37.439:INFO [launcher]: Starting browser Firefox
20 03 2024 21:25:38.991:INFO [Firefox 123.0 (Linux x86_64)]: Connected on socket NtM26X0LRd_IyxJ1AAAB with id 34580623
Firefox 123.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KERROR: [36m'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 123.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 123.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 123.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.071 secs)
[1A[2K[31mFirefox 123.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED[39m
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 78559)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:78559:21
	get@vendor.js:79940:27
	get@vendor.js:79940:27
	inject@vendor.js:115106:58
	inject@vendor.js:114961:33
	9074/</<@main.js:380:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	runInTestZone@vendor.js:5000:28
	2309/</wrapTestInZone/<@vendor.js:5015:14
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:198:35
	4124/</scheduleResolveOrReject/<@polyfills.js:1273:28
	invokeTask@polyfills.js:440:171
	runTask@polyfills.js:244:37
	drainMicroTaskQueue@polyfills.js:611:23
Firefox 123.0 (Linux x86_64): Executed 2 of 17[31m (1 FAILED)[39m (0 secs / 0.081 secs)
Firefox 123.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 78559)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:78559:21
	get@vendor.js:79940:27
	get@vendor.js:79940:27
	inject@vendor.js:115106:58
	inject@vendor.js:114961:33
	9074/</<@main.js:380:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	runInTestZone@vendor.js:5000:28
	2309/</wrapTestInZone/<@vendor.js:5015:14
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:198:35
	4124/</scheduleResolveOrReject/<@polyfills.js:1273:28
	invokeTask@polyfills.js:440:171
	runTask@polyfills.js:244:37
	drainMicroTaskQueue@polyfills.js:611:23
[1A[2K[31mFirefox 123.0 (Linux x86_64) AppComponent should create the app FAILED[39m
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 78559)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:78559:21
	get@vendor.js:79940:27
	get@vendor.js:79940:27
	injectInjectorOnly@vendor.js:78021:36
	ɵɵinject@vendor.js:78027:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:41
	7580/hydrate/<@vendor.js:80058:35
	runInInjectorProfilerContext@vendor.js:77792:5
	hydrate@vendor.js:80057:39
	get@vendor.js:79931:23
	get@vendor.js:92171:32
	lookupTokenUsingModuleInjector@vendor.js:82506:31
	getOrCreateInjectable@vendor.js:82552:10
	ɵɵdirectiveInject@vendor.js:87637:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:82746:38
	createRootComponent@vendor.js:92426:48
	create@vendor.js:92291:21
	initComponent@vendor.js:115173:45
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	onInvoke@vendor.js:91347:25
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	run@vendor.js:91201:24
	createComponent@vendor.js:115183:37
	createComponent@vendor.js:114976:33
	1675/</<@main.js:38:80
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	runInTestZone@vendor.js:5000:28
	2309/</wrapTestInZone/<@vendor.js:5015:14
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:198:35
	4124/</scheduleResolveOrReject/<@polyfills.js:1273:28
	invokeTask@polyfills.js:440:171
	runTask@polyfills.js:244:37
	drainMicroTaskQueue@polyfills.js:611:23
Firefox 123.0 (Linux x86_64): Executed 3 of 17[31m (2 FAILED)[39m (0 secs / 0.119 secs)
Firefox 123.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 78559)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:78559:21
	get@vendor.js:79940:27
	get@vendor.js:79940:27
	injectInjectorOnly@vendor.js:78021:36
	ɵɵinject@vendor.js:78027:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:41
	7580/hydrate/<@vendor.js:80058:35
	runInInjectorProfilerContext@vendor.js:77792:5
	hydrate@vendor.js:80057:39
	get@vendor.js:79931:23
	get@vendor.js:92171:32
	lookupTokenUsingModuleInjector@vendor.js:82506:31
	getOrCreateInjectable@vendor.js:82552:10
	ɵɵdirectiveInject@vendor.js:87637:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:82746:38
	createRootComponent@vendor.js:92426:48
	create@vendor.js:92291:21
	initComponent@vendor.js:115173:45
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	onInvoke@vendor.js:91347:25
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	run@vendor.js:91201:24
	createComponent@vendor.js:115183:37
	createComponent@vendor.js:114976:33
	1675/</<@main.js:38:80
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	runInTestZone@vendor.js:5000:28
	2309/</wrapTestInZone/<@vendor.js:5015:14
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:198:35
	4124/</scheduleResolveOrReject/<@polyfills.js:1273:28
	invokeTask@polyfills.js:440:171
	runTask@polyfills.js:244:37
	drainMicroTaskQueue@polyfills.js:611:23
20 03 2024 21:25:40.123:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KERROR: [36m'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 123.0 (Linux x86_64): Executed 3 of 17[31m (2 FAILED)[39m (0 secs / 0.119 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 123.0 (Linux x86_64): Executed 3 of 17[31m (2 FAILED)[39m (0 secs / 0.119 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 123.0 (Linux x86_64): Executed 3 of 17[31m (2 FAILED)[39m (0 secs / 0.119 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 123.0 (Linux x86_64): Executed 3 of 17[31m (2 FAILED)[39m (0 secs / 0.119 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 123.0 (Linux x86_64): Executed 3 of 17[31m (2 FAILED)[39m (0 secs / 0.119 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 123.0 (Linux x86_64): Executed 4 of 17[31m (2 FAILED)[39m (0 secs / 0.252 secs)
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 123.0 (Linux x86_64): Executed 4 of 17[31m (2 FAILED)[39m (0 secs / 0.252 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

[1A[2KERROR: [36m'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 123.0 (Linux x86_64): Executed 4 of 17[31m (2 FAILED)[39m (0 secs / 0.252 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 123.0 (Linux x86_64): Executed 4 of 17[31m (2 FAILED)[39m (0 secs / 0.252 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 123.0 (Linux x86_64): Executed 4 of 17[31m (2 FAILED)[39m (0 secs / 0.252 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 123.0 (Linux x86_64): Executed 5 of 17[31m (2 FAILED)[39m (0 secs / 0.35 secs)
[1A[2K[31mFirefox 123.0 (Linux x86_64) ERROR[39m
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 327)
  createReal@http://localhost:9876/_karma_webpack_/main.js:327:7
  submit@http://localhost:9876/_karma_webpack_/main.js:340:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:1606:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:4064:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1602:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1585:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:81924:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:81948:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:81908:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:81863:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:89321:35
  detectChangesInView$1@http://localhost:9876/_karma_webpack_/vendor.js:89525:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:89253:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:89237:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:89816:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:113548:30
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4734:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:91347:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:91201:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:113547:18
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1505:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4734:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:5000:28
  2309/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:5015:14
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  4124/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:1273:28
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:440:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:244:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:611:23
Firefox 123.0 (Linux x86_64): Executed 5 of 17[31m (2 FAILED)[39m[31m ERROR[39m (0 secs / 0.35 secs)
Firefox 123.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 327)
  createReal@http://localhost:9876/_karma_webpack_/main.js:327:7
  submit@http://localhost:9876/_karma_webpack_/main.js:340:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:1606:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:4064:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1602:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1585:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:81924:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:81948:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:81908:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:81863:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:89321:35
  detectChangesInView$1@http://localhost:9876/_karma_webpack_/vendor.js:89525:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:89253:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:89237:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:89816:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:113548:30
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4734:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:91347:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:91201:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:113547:18
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1505:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4734:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:5000:28
  2309/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:5015:14
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  4124/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:1273:28
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:440:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:244:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:611:23
[1A[2KFirefox 123.0 (Linux x86_64): Executed 5 of 17[31m (2 FAILED)[39m[31m ERROR[39m (0.404 secs / 0.35 secs)
[1A[2K[31mFirefox 123.0 (Linux x86_64) ERROR[39m
  Disconnected , because no message in 30000 ms.
Firefox 123.0 (Linux x86_64): Executed 5 of 17[31m (2 FAILED)[39m[31m DISCONNECTED[39m (30.412 secs / 0.35 secs)
Firefox 123.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 123.0 (Linux x86_64): Executed 5 of 17[31m (2 FAILED)[39m[31m DISCONNECTED[39m (30.412 secs / 0.35 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
