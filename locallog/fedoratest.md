```bash
yarn run v1.22.22
$ ng test
30 04 2025 07:11:02.133:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
30 04 2025 07:11:02.136:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
30 04 2025 07:11:02.142:INFO [launcher]: Starting browser Firefox
30 04 2025 07:11:05.932:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket ty7843V90RdcWCG7AAAB with id 33929962
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.022 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.071 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.091 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 SUCCESS (0 secs / 0.104 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 123685)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:123685:21
	get@vendor.js:124215:27
	get@vendor.js:124215:27
	inject@vendor.js:177442:58
	inject@vendor.js:177285:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:37635:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:35814:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:35829:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.118 secs)
Firefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 123685)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:123685:21
	get@vendor.js:124215:27
	get@vendor.js:124215:27
	inject@vendor.js:177442:58
	inject@vendor.js:177285:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:37635:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:35814:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:35829:16
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
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.118 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.118 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.118 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.274 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:174048:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:174017:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:173990:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:110508:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:53875:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:18645:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:53869:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:53864:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:126215:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:126239:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:126199:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:126154:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:135695:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:135893:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:135601:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:135585:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:136420:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:175755:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:37635:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:128458:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:128310:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:175752:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:37635:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:35814:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:35829:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) ERROR (0 secs / 0.274 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:174048:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:174017:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:173990:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:110508:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:53875:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:18645:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:53869:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:53864:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:126215:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:126239:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:126199:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:126154:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:135695:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:135893:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:135601:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:135585:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:136420:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:175755:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:37635:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:128458:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:128310:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:175752:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:37635:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:35814:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:35829:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) ERROR (0.372 secs / 0.274 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (1 FAILED) ERROR (0.372 secs / 0.286 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) ERROR (0.372 secs / 0.289 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (3 FAILED) ERROR (0.372 secs / 0.292 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (3 FAILED) DISCONNECTED (30.407 secs / 0.292 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (3 FAILED) DISCONNECTED (30.407 secs / 0.292 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
