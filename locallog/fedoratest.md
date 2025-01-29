```bash
yarn run v1.22.22
$ ng test
29 01 2025 18:11:44.944:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
29 01 2025 18:11:44.957:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
29 01 2025 18:11:44.963:INFO [launcher]: Starting browser Firefox
29 01 2025 18:11:49.525:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket PHaAB63aerLjLEmLAAAB with id 42586563
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 109010)
	verifySemanticsOfNgModuleDef@vendor.js:109010:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:109020:33
	verifySemanticsOfNgModuleDef@vendor.js:109018:58
	get@vendor.js:108975:22
	applyProviderOverridesInScope@vendor.js:120481:25
	compileTestModule@vendor.js:120792:10
	finalize@vendor.js:120305:10
	get testModuleRef@vendor.js:121366:43
	inject@vendor.js:121273:20
	inject@vendor.js:121117:33
	1230/</<@main.js:1368:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6490:33
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	runInTestZone@vendor.js:4669:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:4684:16
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:184:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2502:30
	invokeTask@polyfills.js:438:171
	runTask@polyfills.js:237:37
	drainMicroTaskQueue@polyfills.js:609:23
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.01 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 109010)
	verifySemanticsOfNgModuleDef@vendor.js:109010:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:109020:33
	verifySemanticsOfNgModuleDef@vendor.js:109018:58
	get@vendor.js:108975:22
	applyProviderOverridesInScope@vendor.js:120481:25
	compileTestModule@vendor.js:120792:10
	finalize@vendor.js:120305:10
	get testModuleRef@vendor.js:121366:43
	inject@vendor.js:121273:20
	inject@vendor.js:121117:33
	1230/</<@main.js:1368:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6490:33
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	runInTestZone@vendor.js:4669:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:4684:16
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:184:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2502:30
	invokeTask@polyfills.js:438:171
	runTask@polyfills.js:237:37
	drainMicroTaskQueue@polyfills.js:609:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.126 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.148 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.162 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.179 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 77675)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:77675:21
	get@vendor.js:78199:27
	get@vendor.js:78199:27
	inject@vendor.js:121274:58
	inject@vendor.js:121117:33
	9074/</<@main.js:413:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6490:33
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	runInTestZone@vendor.js:4669:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:4684:16
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:184:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2502:30
	invokeTask@polyfills.js:438:171
	runTask@polyfills.js:237:37
	drainMicroTaskQueue@polyfills.js:609:23
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) (0 secs / 0.194 secs)
Firefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 77675)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:77675:21
	get@vendor.js:78199:27
	get@vendor.js:78199:27
	inject@vendor.js:121274:58
	inject@vendor.js:121117:33
	9074/</<@main.js:413:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6490:33
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	runInTestZone@vendor.js:4669:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:4684:16
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:184:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2502:30
	invokeTask@polyfills.js:438:171
	runTask@polyfills.js:237:37
	drainMicroTaskQueue@polyfills.js:609:23
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) (0 secs / 0.194 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) (0 secs / 0.194 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) (0 secs / 0.194 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) (0 secs / 0.371 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 355)
  createReal@http://localhost:9876/_karma_webpack_/main.js:355:7
  submit@http://localhost:9876/_karma_webpack_/main.js:368:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:1685:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:4064:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1681:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1664:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:80218:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:80242:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:80202:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:80157:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:90362:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:90557:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:90268:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:90252:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:90904:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:119589:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6490:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:82551:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:82403:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:119586:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1584:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6490:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:4669:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:4684:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2502:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:438:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:237:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:609:23
Firefox 128.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) ERROR (0 secs / 0.371 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 355)
  createReal@http://localhost:9876/_karma_webpack_/main.js:355:7
  submit@http://localhost:9876/_karma_webpack_/main.js:368:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:1685:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:4064:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1681:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1664:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:80218:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:80242:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:80202:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:80157:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:90362:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:90557:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:90268:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:90252:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:90904:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:119589:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6490:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:82551:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:82403:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:119586:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1584:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6490:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:4669:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:4684:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2502:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:438:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:237:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:609:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) ERROR (0.419 secs / 0.371 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) ERROR (0.419 secs / 0.388 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) ERROR (0.419 secs / 0.388 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) DISCONNECTED (30.473 secs / 0.388 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) DISCONNECTED (30.473 secs / 0.388 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
