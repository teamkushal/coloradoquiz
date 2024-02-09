```bash
yarn run v1.22.21
$ ng test
09 02 2024 18:06:09.974:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
09 02 2024 18:06:09.976:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
09 02 2024 18:06:09.979:INFO [launcher]: Starting browser Firefox
09 02 2024 18:06:11.687:INFO [Firefox 122.0 (Linux x86_64)]: Connected on socket sYGSQpJc0d2gDOftAAAB with id 36452318
Firefox 122.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 122.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.054 secs)
[1A[2KFirefox 122.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.071 secs)
[1A[2KERROR: [36m'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 122.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.071 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 122.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.071 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 122.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.101 secs)
[1A[2KFirefox 122.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.137 secs)
[1A[2KFirefox 122.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.149 secs)
09 02 2024 18:06:13.072:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2K[31mFirefox 122.0 (Linux x86_64) AppComponent should create the app FAILED[39m
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 80826)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:80826:21
	get@vendor.js:81277:27
	get@vendor.js:81277:27
	injectInjectorOnly@vendor.js:76290:36
	ɵɵinject@vendor.js:76296:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:41
	1699/hydrate/<@vendor.js:81391:33
	runInInjectorProfilerContext@vendor.js:76251:5
	hydrate@vendor.js:81390:37
	get@vendor.js:81268:23
	get@vendor.js:90321:32
	lookupTokenUsingModuleInjector@vendor.js:79388:31
	getOrCreateInjectable@vendor.js:79434:10
	ɵɵdirectiveInject@vendor.js:87019:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:79628:38
	createRootComponent@vendor.js:90571:48
	create@vendor.js:90439:19
	initComponent@vendor.js:112539:45
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	onInvoke@vendor.js:89690:25
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	run@vendor.js:89544:24
	createComponent@vendor.js:112549:37
	createComponent@vendor.js:112342:33
	7288/</<@main.js:38:80
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	runInTestZone@vendor.js:5000:28
	7681/</wrapTestInZone/<@vendor.js:5015:14
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:198:35
	6657/</scheduleResolveOrReject/<@polyfills.js:1273:28
	invokeTask@polyfills.js:440:171
	runTask@polyfills.js:244:37
	drainMicroTaskQueue@polyfills.js:611:23
Firefox 122.0 (Linux x86_64): Executed 6 of 17[31m (1 FAILED)[39m (0 secs / 0.169 secs)
Firefox 122.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 80826)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:80826:21
	get@vendor.js:81277:27
	get@vendor.js:81277:27
	injectInjectorOnly@vendor.js:76290:36
	ɵɵinject@vendor.js:76296:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:41
	1699/hydrate/<@vendor.js:81391:33
	runInInjectorProfilerContext@vendor.js:76251:5
	hydrate@vendor.js:81390:37
	get@vendor.js:81268:23
	get@vendor.js:90321:32
	lookupTokenUsingModuleInjector@vendor.js:79388:31
	getOrCreateInjectable@vendor.js:79434:10
	ɵɵdirectiveInject@vendor.js:87019:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:79628:38
	createRootComponent@vendor.js:90571:48
	create@vendor.js:90439:19
	initComponent@vendor.js:112539:45
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	onInvoke@vendor.js:89690:25
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	run@vendor.js:89544:24
	createComponent@vendor.js:112549:37
	createComponent@vendor.js:112342:33
	7288/</<@main.js:38:80
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	runInTestZone@vendor.js:5000:28
	7681/</wrapTestInZone/<@vendor.js:5015:14
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:198:35
	6657/</scheduleResolveOrReject/<@polyfills.js:1273:28
	invokeTask@polyfills.js:440:171
	runTask@polyfills.js:244:37
	drainMicroTaskQueue@polyfills.js:611:23
[1A[2KERROR: [36m'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 122.0 (Linux x86_64): Executed 6 of 17[31m (1 FAILED)[39m (0 secs / 0.169 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 122.0 (Linux x86_64): Executed 6 of 17[31m (1 FAILED)[39m (0 secs / 0.169 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 122.0 (Linux x86_64): Executed 6 of 17[31m (1 FAILED)[39m (0 secs / 0.169 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 122.0 (Linux x86_64): Executed 7 of 17[31m (1 FAILED)[39m (0 secs / 0.262 secs)
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 122.0 (Linux x86_64): Executed 7 of 17[31m (1 FAILED)[39m (0 secs / 0.262 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

[1A[2K[31mFirefox 122.0 (Linux x86_64) ERROR[39m
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 327)
  createReal@http://localhost:9876/_karma_webpack_/main.js:327:7
  submit@http://localhost:9876/_karma_webpack_/main.js:340:25
  9048/getData/<@http://localhost:9876/_karma_webpack_/main.js:1606:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  2235/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:4064:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1602:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1585:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:78806:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:78830:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:78790:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:78745:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:88420:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:88624:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:88352:22
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:88336:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:88915:26
  6517/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:110936:30
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4734:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:89690:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:89544:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:110935:18
  1440/</<@http://localhost:9876/_karma_webpack_/main.js:1505:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4734:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:5000:28
  7681/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:5015:14
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  6657/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:1273:28
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:440:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:244:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:611:23
Firefox 122.0 (Linux x86_64): Executed 7 of 17[31m (1 FAILED)[39m[31m ERROR[39m (0 secs / 0.262 secs)
Firefox 122.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 327)
  createReal@http://localhost:9876/_karma_webpack_/main.js:327:7
  submit@http://localhost:9876/_karma_webpack_/main.js:340:25
  9048/getData/<@http://localhost:9876/_karma_webpack_/main.js:1606:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  2235/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:4064:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1602:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1585:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:78806:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:78830:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:78790:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:78745:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:88420:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:88624:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:88352:22
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:88336:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:88915:26
  6517/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:110936:30
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4734:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:89690:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:89544:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:110935:18
  1440/</<@http://localhost:9876/_karma_webpack_/main.js:1505:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4734:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:5000:28
  7681/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:5015:14
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  6657/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:1273:28
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:440:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:244:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:611:23
[1A[2KFirefox 122.0 (Linux x86_64): Executed 7 of 17[31m (1 FAILED)[39m[31m ERROR[39m (0.246 secs / 0.262 secs)
[1A[2K[31mFirefox 122.0 (Linux x86_64) ERROR[39m
  Disconnected , because no message in 30000 ms.
Firefox 122.0 (Linux x86_64): Executed 7 of 17[31m (1 FAILED)[39m[31m DISCONNECTED[39m (30.252 secs / 0.262 secs)
Firefox 122.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 122.0 (Linux x86_64): Executed 7 of 17[31m (1 FAILED)[39m[31m DISCONNECTED[39m (30.252 secs / 0.262 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
