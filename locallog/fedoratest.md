```bash
yarn run v1.22.22
$ ng test
14 12 2025 20:10:58.959:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
14 12 2025 20:10:58.961:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
14 12 2025 20:10:58.965:INFO [launcher]: Starting browser Firefox
14 12 2025 20:11:02.283:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket 4QK-3HvyGrWfhZ3jAAAB with id 95278538
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.091 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.113 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.194 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 4 of 18 SUCCESS (0 secs / 0.204 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 SUCCESS (0 secs / 0.217 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.219 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) (0 secs / 0.221 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) (0 secs / 0.221 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) (0 secs / 0.221 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) (0 secs / 0.221 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) (0 secs / 0.427 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129460:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129429:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129402:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90791:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47161:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13079:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47155:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47150:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:92018:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:92033:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:92007:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91976:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96899:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:97027:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96836:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96825:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103288:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103262:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103237:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103225:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103218:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130558:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30329:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28508:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28523:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) ERROR (0 secs / 0.427 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129460:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129429:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129402:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90791:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47161:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13079:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47155:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47150:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:92018:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:92033:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:92007:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91976:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96899:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:97027:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96836:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96825:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103288:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103262:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103237:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103225:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103218:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130558:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30329:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28508:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28523:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) ERROR (0.646 secs / 0.427 secs)
[1A[2KFirefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 108818)
	verifySemanticsOfNgModuleDef@vendor.js:108818:13
	6124/verifySemanticsOfNgModuleDef/<@vendor.js:108828:33
	verifySemanticsOfNgModuleDef@vendor.js:108826:112
	get@vendor.js:108785:22
	applyProviderOverridesInScope@vendor.js:131180:25
	compileTestModule@vendor.js:131420:10
	finalize@vendor.js:131056:10
	get testModuleRef@vendor.js:131852:43
	inject@vendor.js:131773:20
	inject@vendor.js:131660:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30329:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28508:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28523:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 9 of 18 (3 FAILED) ERROR (0.646 secs / 0.436 secs)
Firefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 108818)
	verifySemanticsOfNgModuleDef@vendor.js:108818:13
	6124/verifySemanticsOfNgModuleDef/<@vendor.js:108828:33
	verifySemanticsOfNgModuleDef@vendor.js:108826:112
	get@vendor.js:108785:22
	applyProviderOverridesInScope@vendor.js:131180:25
	compileTestModule@vendor.js:131420:10
	finalize@vendor.js:131056:10
	get testModuleRef@vendor.js:131852:43
	inject@vendor.js:131773:20
	inject@vendor.js:131660:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30329:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28508:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28523:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 10 of 18 (3 FAILED) ERROR (0.646 secs / 0.506 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 11 of 18 (3 FAILED) ERROR (0.646 secs / 0.517 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v21.angular.dev/errors/NG0201 in vendor.js (line 18280)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:18815:17
	get@vendor.js:19087:39
	get@vendor.js:19409:27
	get@vendor.js:19409:27
	inject@vendor.js:131774:58
	inject@vendor.js:131660:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30329:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28508:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28523:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) ERROR (0.646 secs / 0.528 secs)
Firefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v21.angular.dev/errors/NG0201 in vendor.js (line 18280)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:18815:17
	get@vendor.js:19087:39
	get@vendor.js:19409:27
	get@vendor.js:19409:27
	inject@vendor.js:131774:58
	inject@vendor.js:131660:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30329:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28508:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28523:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) ERROR (0.646 secs / 0.538 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) DISCONNECTED (30.67 secs / 0.538 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) DISCONNECTED (30.67 secs / 0.538 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
