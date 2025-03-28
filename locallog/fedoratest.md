```bash
yarn run v1.22.22
$ ng test
28 03 2025 09:10:57.585:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
28 03 2025 09:10:57.589:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
28 03 2025 09:10:57.594:INFO [launcher]: Starting browser Firefox
28 03 2025 09:11:01.525:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket zMNHVUqynLONDFYpAAAB with id 12627226
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 127510)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:127510:21
	get@vendor.js:128038:27
	get@vendor.js:128038:27
	inject@vendor.js:178035:58
	inject@vendor.js:177878:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34727:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32906:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32921:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.028 secs)
Firefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 127510)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:127510:21
	get@vendor.js:128038:27
	get@vendor.js:128038:27
	inject@vendor.js:178035:58
	inject@vendor.js:177878:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34727:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32906:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32921:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.044 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.044 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.044 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.044 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.219 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:174847:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:174816:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:174789:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:106006:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47664:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:18780:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47658:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47653:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:130038:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:130062:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:130022:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:129977:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:139570:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:139768:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:139476:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:139460:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:140295:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:176348:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34727:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:132333:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:132185:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:176345:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34727:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:32906:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:32921:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) ERROR (0 secs / 0.219 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:174847:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:174816:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:174789:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:106006:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47664:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:18780:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47658:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47653:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:130038:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:130062:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:130022:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:129977:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:139570:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:139768:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:139476:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:139460:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:140295:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:176348:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34727:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:132333:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:132185:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:176345:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34727:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:32906:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:32921:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) ERROR (0.255 secs / 0.219 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) DISCONNECTED (30.265 secs / 0.219 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) DISCONNECTED (30.265 secs / 0.219 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
