```bash
yarn run v1.22.22
$ ng test
03 12 2025 11:11:42.823:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
03 12 2025 11:11:42.826:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
03 12 2025 11:11:42.843:INFO [launcher]: Starting browser Firefox
03 12 2025 11:11:47.790:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket Oft6nShsC1hnXrczAAAB with id 39576169
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.044 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.07 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v21.angular.dev/errors/NG0201 in vendor.js (line 18280)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:18785:17
	get@vendor.js:19057:39
	get@vendor.js:19409:27
	get@vendor.js:19409:27
	inject@vendor.js:131732:58
	inject@vendor.js:131618:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30324:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28503:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28518:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.101 secs)
Firefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v21.angular.dev/errors/NG0201 in vendor.js (line 18280)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:18785:17
	get@vendor.js:19057:39
	get@vendor.js:19409:27
	get@vendor.js:19409:27
	inject@vendor.js:131732:58
	inject@vendor.js:131618:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30324:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28503:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28518:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.258 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.307 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.324 secs)
[1A[2KFirefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 108776)
	verifySemanticsOfNgModuleDef@vendor.js:108776:13
	6124/verifySemanticsOfNgModuleDef/<@vendor.js:108786:33
	verifySemanticsOfNgModuleDef@vendor.js:108784:112
	get@vendor.js:108743:22
	applyProviderOverridesInScope@vendor.js:131138:25
	compileTestModule@vendor.js:131378:10
	finalize@vendor.js:131014:10
	get testModuleRef@vendor.js:131810:43
	inject@vendor.js:131731:20
	inject@vendor.js:131618:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30324:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28503:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28518:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) (0 secs / 0.333 secs)
Firefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 108776)
	verifySemanticsOfNgModuleDef@vendor.js:108776:13
	6124/verifySemanticsOfNgModuleDef/<@vendor.js:108786:33
	verifySemanticsOfNgModuleDef@vendor.js:108784:112
	get@vendor.js:108743:22
	applyProviderOverridesInScope@vendor.js:131138:25
	compileTestModule@vendor.js:131378:10
	finalize@vendor.js:131014:10
	get testModuleRef@vendor.js:131810:43
	inject@vendor.js:131731:20
	inject@vendor.js:131618:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30324:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28503:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28518:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) (0 secs / 0.35 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) (0 secs / 0.35 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) (0 secs / 0.35 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) (0 secs / 0.35 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) (0 secs / 0.577 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129418:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129387:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129360:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90756:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47148:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13079:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47142:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47137:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:91983:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:91998:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:91972:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91941:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96864:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:96992:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96801:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96790:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103253:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103227:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103202:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103190:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103183:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130516:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30324:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28503:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28518:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) ERROR (0 secs / 0.577 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129418:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129387:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129360:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90756:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47148:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13079:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47142:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47137:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:91983:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:91998:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:91972:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91941:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96864:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:96992:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96801:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96790:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103253:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103227:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103202:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103190:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103183:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130516:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30324:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28503:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28518:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) ERROR (0.901 secs / 0.577 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 10 of 18 (2 FAILED) ERROR (0.901 secs / 0.61 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 11 of 18 (2 FAILED) ERROR (0.901 secs / 0.694 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 12 of 18 (2 FAILED) ERROR (0.901 secs / 0.704 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 12 of 18 (2 FAILED) ERROR (0.901 secs / 0.704 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 12 of 18 (2 FAILED) ERROR (0.901 secs / 0.704 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 140.0 (Linux x86_64): Executed 13 of 18 (2 FAILED) ERROR (0.901 secs / 0.743 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 13 of 18 (2 FAILED) DISCONNECTED (30.922 secs / 0.743 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 13 of 18 (2 FAILED) DISCONNECTED (30.922 secs / 0.743 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
