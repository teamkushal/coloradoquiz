```bash
yarn run v1.22.21
$ ng test
01 02 2024 17:14:03.527:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
01 02 2024 17:14:03.530:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
01 02 2024 17:14:03.535:INFO [launcher]: Starting browser Firefox
01 02 2024 17:14:05.497:INFO [Firefox 122.0 (Linux x86_64)]: Connected on socket wi80kiYa3Ay7bn41AAAB with id 94899892
Firefox 122.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2K[31mFirefox 122.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED[39m
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 80829)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:80829:21
	get@vendor.js:81280:27
	get@vendor.js:81280:27
	inject@vendor.js:112436:58
	inject@vendor.js:112291:33
	3130/</<@main.js:380:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4771:33
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	runInTestZone@vendor.js:5037:28
	7681/</wrapTestInZone/<@vendor.js:5052:14
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:198:35
	6657/</scheduleResolveOrReject/<@polyfills.js:1273:28
	invokeTask@polyfills.js:440:171
	runTask@polyfills.js:244:37
	drainMicroTaskQueue@polyfills.js:611:23
Firefox 122.0 (Linux x86_64): Executed 1 of 17[31m (1 FAILED)[39m (0 secs / 0.026 secs)
Firefox 122.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 80829)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:80829:21
	get@vendor.js:81280:27
	get@vendor.js:81280:27
	inject@vendor.js:112436:58
	inject@vendor.js:112291:33
	3130/</<@main.js:380:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4771:33
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	runInTestZone@vendor.js:5037:28
	7681/</wrapTestInZone/<@vendor.js:5052:14
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:198:35
	6657/</scheduleResolveOrReject/<@polyfills.js:1273:28
	invokeTask@polyfills.js:440:171
	runTask@polyfills.js:244:37
	drainMicroTaskQueue@polyfills.js:611:23
[1A[2KFirefox 122.0 (Linux x86_64): Executed 2 of 17[31m (1 FAILED)[39m (0 secs / 0.037 secs)
[1A[2KFirefox 122.0 (Linux x86_64): Executed 3 of 17[31m (1 FAILED)[39m (0 secs / 0.048 secs)
[1A[2KERROR: [36m'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 122.0 (Linux x86_64): Executed 3 of 17[31m (1 FAILED)[39m (0 secs / 0.048 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 122.0 (Linux x86_64): Executed 3 of 17[31m (1 FAILED)[39m (0 secs / 0.048 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 122.0 (Linux x86_64): Executed 3 of 17[31m (1 FAILED)[39m (0 secs / 0.048 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 122.0 (Linux x86_64): Executed 4 of 17[31m (1 FAILED)[39m (0 secs / 0.212 secs)
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
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:4101:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1602:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1585:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:78809:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:78833:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:78793:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:78748:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:88423:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:88627:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:88355:22
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:88339:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:88918:26
  6517/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:110900:30
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4771:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:89693:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:89547:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:110899:18
  1440/</<@http://localhost:9876/_karma_webpack_/main.js:1505:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4771:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:5037:28
  7681/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:5052:14
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  6657/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:1273:28
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:440:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:244:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:611:23
Firefox 122.0 (Linux x86_64): Executed 4 of 17[31m (1 FAILED)[39m[31m ERROR[39m (0 secs / 0.212 secs)
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
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:4101:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1602:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1585:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:78809:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:78833:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:78793:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:78748:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:88423:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:88627:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:88355:22
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:88339:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:88918:26
  6517/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:110900:30
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4771:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:89693:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:89547:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:110899:18
  1440/</<@http://localhost:9876/_karma_webpack_/main.js:1505:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4771:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:5037:28
  7681/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:5052:14
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  6657/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:1273:28
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:440:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:244:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:611:23
[1A[2KFirefox 122.0 (Linux x86_64): Executed 4 of 17[31m (1 FAILED)[39m[31m ERROR[39m (0.242 secs / 0.212 secs)
[1A[2K[31mFirefox 122.0 (Linux x86_64) HoneynutCheeriosService should be created FAILED[39m
	NullInjectorError: R3InjectorError(DynamicTestModule)[HoneynutCheeriosService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 80829)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HoneynutCheeriosService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:80829:21
	get@vendor.js:81280:27
	get@vendor.js:81280:27
	injectInjectorOnly@vendor.js:76293:36
	ɵɵinject@vendor.js:76299:59
	HoneynutCheeriosService_Factory@ng:///HoneynutCheeriosService/ɵfac.js:5:51
	1699/hydrate/<@vendor.js:81394:33
	runInInjectorProfilerContext@vendor.js:76254:5
	hydrate@vendor.js:81393:37
	get@vendor.js:81271:23
	inject@vendor.js:112435:48
	inject@vendor.js:112291:33
	909/</<@main.js:256:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4771:33
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	runInTestZone@vendor.js:5037:28
	7681/</wrapTestInZone/<@vendor.js:5052:14
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:198:35
	6657/</scheduleResolveOrReject/<@polyfills.js:1273:28
	invokeTask@polyfills.js:440:171
	runTask@polyfills.js:244:37
	drainMicroTaskQueue@polyfills.js:611:23
Firefox 122.0 (Linux x86_64): Executed 5 of 17[31m (2 FAILED)[39m[31m ERROR[39m (0.242 secs / 0.226 secs)
Firefox 122.0 (Linux x86_64) HoneynutCheeriosService should be created FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[HoneynutCheeriosService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 80829)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HoneynutCheeriosService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:80829:21
	get@vendor.js:81280:27
	get@vendor.js:81280:27
	injectInjectorOnly@vendor.js:76293:36
	ɵɵinject@vendor.js:76299:59
	HoneynutCheeriosService_Factory@ng:///HoneynutCheeriosService/ɵfac.js:5:51
	1699/hydrate/<@vendor.js:81394:33
	runInInjectorProfilerContext@vendor.js:76254:5
	hydrate@vendor.js:81393:37
	get@vendor.js:81271:23
	inject@vendor.js:112435:48
	inject@vendor.js:112291:33
	909/</<@main.js:256:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4771:33
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	runInTestZone@vendor.js:5037:28
	7681/</wrapTestInZone/<@vendor.js:5052:14
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:198:35
	6657/</scheduleResolveOrReject/<@polyfills.js:1273:28
	invokeTask@polyfills.js:440:171
	runTask@polyfills.js:244:37
	drainMicroTaskQueue@polyfills.js:611:23
[1A[2K[31mFirefox 122.0 (Linux x86_64) ERROR[39m
  Disconnected , because no message in 30000 ms.
Firefox 122.0 (Linux x86_64): Executed 5 of 17[31m (2 FAILED)[39m[31m DISCONNECTED[39m (30.288 secs / 0.226 secs)
Firefox 122.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 122.0 (Linux x86_64): Executed 5 of 17[31m (2 FAILED)[39m[31m DISCONNECTED[39m (30.288 secs / 0.226 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
