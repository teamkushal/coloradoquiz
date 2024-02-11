```bash
yarn run v1.22.21
$ ng test
11 02 2024 07:15:20.171:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
11 02 2024 07:15:20.173:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
11 02 2024 07:15:20.176:INFO [launcher]: Starting browser Firefox
11 02 2024 07:15:22.117:INFO [Firefox 122.0 (Linux x86_64)]: Connected on socket VH8lRh1aG6Gk3RG1AAAB with id 33839223
Firefox 122.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 122.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.021 secs)
[1A[2KERROR: [36m'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 122.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.021 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 122.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.021 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 122.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.021 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 122.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.021 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 122.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.021 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 122.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.127 secs)
[1A[2KFirefox 122.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.138 secs)
[1A[2KFirefox 122.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.192 secs)
[1A[2KFirefox 122.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.209 secs)
[1A[2KFirefox 122.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.221 secs)
[1A[2K[31mFirefox 122.0 (Linux x86_64) HoneynutCheeriosService should be created FAILED[39m
	NullInjectorError: R3InjectorError(DynamicTestModule)[HoneynutCheeriosService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 80826)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HoneynutCheeriosService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:80826:21
	get@vendor.js:81277:27
	get@vendor.js:81277:27
	injectInjectorOnly@vendor.js:76290:36
	ɵɵinject@vendor.js:76296:59
	HoneynutCheeriosService_Factory@ng:///HoneynutCheeriosService/ɵfac.js:5:51
	1699/hydrate/<@vendor.js:81391:33
	runInInjectorProfilerContext@vendor.js:76251:5
	hydrate@vendor.js:81390:37
	get@vendor.js:81268:23
	inject@vendor.js:112471:48
	inject@vendor.js:112327:33
	909/</<@main.js:256:74
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
Firefox 122.0 (Linux x86_64): Executed 7 of 17[31m (1 FAILED)[39m (0 secs / 0.229 secs)
Firefox 122.0 (Linux x86_64) HoneynutCheeriosService should be created FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[HoneynutCheeriosService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 80826)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HoneynutCheeriosService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:80826:21
	get@vendor.js:81277:27
	get@vendor.js:81277:27
	injectInjectorOnly@vendor.js:76290:36
	ɵɵinject@vendor.js:76296:59
	HoneynutCheeriosService_Factory@ng:///HoneynutCheeriosService/ɵfac.js:5:51
	1699/hydrate/<@vendor.js:81391:33
	runInInjectorProfilerContext@vendor.js:76251:5
	hydrate@vendor.js:81390:37
	get@vendor.js:81268:23
	inject@vendor.js:112471:48
	inject@vendor.js:112327:33
	909/</<@main.js:256:74
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
[1A[2K[31mFirefox 122.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED[39m
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 80826)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:80826:21
	get@vendor.js:81277:27
	get@vendor.js:81277:27
	inject@vendor.js:112472:58
	inject@vendor.js:112327:33
	3130/</<@main.js:380:74
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
Firefox 122.0 (Linux x86_64): Executed 8 of 17[31m (2 FAILED)[39m (0 secs / 0.236 secs)
Firefox 122.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 80826)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:80826:21
	get@vendor.js:81277:27
	get@vendor.js:81277:27
	inject@vendor.js:112472:58
	inject@vendor.js:112327:33
	3130/</<@main.js:380:74
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
Firefox 122.0 (Linux x86_64): Executed 8 of 17[31m (2 FAILED)[39m (0 secs / 0.236 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 122.0 (Linux x86_64): Executed 8 of 17[31m (2 FAILED)[39m (0 secs / 0.236 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 122.0 (Linux x86_64): Executed 8 of 17[31m (2 FAILED)[39m (0 secs / 0.236 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 122.0 (Linux x86_64): Executed 9 of 17[31m (2 FAILED)[39m (0 secs / 0.323 secs)
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
Firefox 122.0 (Linux x86_64): Executed 9 of 17[31m (2 FAILED)[39m[31m ERROR[39m (0 secs / 0.323 secs)
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
[1A[2KFirefox 122.0 (Linux x86_64): Executed 9 of 17[31m (2 FAILED)[39m[31m ERROR[39m (0.381 secs / 0.323 secs)
[1A[2K[31mFirefox 122.0 (Linux x86_64) ERROR[39m
  Disconnected , because no message in 30000 ms.
Firefox 122.0 (Linux x86_64): Executed 9 of 17[31m (2 FAILED)[39m[31m DISCONNECTED[39m (30.393 secs / 0.323 secs)
Firefox 122.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 122.0 (Linux x86_64): Executed 9 of 17[31m (2 FAILED)[39m[31m DISCONNECTED[39m (30.393 secs / 0.323 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
