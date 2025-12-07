```bash
yarn run v1.22.22
$ ng test
07 12 2025 18:10:59.330:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
07 12 2025 18:10:59.332:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
07 12 2025 18:10:59.337:INFO [launcher]: Starting browser Firefox
07 12 2025 18:11:02.707:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket 8frVdgscVAGxqa-bAAAB with id 32105847
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.043 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.043 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.043 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 140.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.262 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.79 secs)
[1A[2KFirefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 108778)
	verifySemanticsOfNgModuleDef@vendor.js:108778:13
	6124/verifySemanticsOfNgModuleDef/<@vendor.js:108788:33
	verifySemanticsOfNgModuleDef@vendor.js:108786:112
	get@vendor.js:108745:22
	applyProviderOverridesInScope@vendor.js:131140:25
	compileTestModule@vendor.js:131380:10
	finalize@vendor.js:131016:10
	get testModuleRef@vendor.js:131812:43
	inject@vendor.js:131733:20
	inject@vendor.js:131620:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30326:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28505:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28520:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.796 secs)
Firefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 108778)
	verifySemanticsOfNgModuleDef@vendor.js:108778:13
	6124/verifySemanticsOfNgModuleDef/<@vendor.js:108788:33
	verifySemanticsOfNgModuleDef@vendor.js:108786:112
	get@vendor.js:108745:22
	applyProviderOverridesInScope@vendor.js:131140:25
	compileTestModule@vendor.js:131380:10
	finalize@vendor.js:131016:10
	get testModuleRef@vendor.js:131812:43
	inject@vendor.js:131733:20
	inject@vendor.js:131620:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30326:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28505:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28520:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.916 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.926 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 7 of 18 (1 FAILED) (0 secs / 1.077 secs)
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (1 FAILED) (0 secs / 1.077 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (1 FAILED) (0 secs / 1.077 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (1 FAILED) (0 secs / 1.077 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (1 FAILED) (0 secs / 1.077 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (1 FAILED) (0 secs / 1.077 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 8 of 18 (1 FAILED) (0 secs / 1.159 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 9 of 18 (1 FAILED) (0 secs / 1.167 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v21.angular.dev/errors/NG0201 in vendor.js (line 18280)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:18785:17
	get@vendor.js:19057:39
	get@vendor.js:19409:27
	get@vendor.js:19409:27
	inject@vendor.js:131734:58
	inject@vendor.js:131620:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30326:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28505:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28520:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 10 of 18 (2 FAILED) (0 secs / 1.185 secs)
Firefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v21.angular.dev/errors/NG0201 in vendor.js (line 18280)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:18785:17
	get@vendor.js:19057:39
	get@vendor.js:19409:27
	get@vendor.js:19409:27
	inject@vendor.js:131734:58
	inject@vendor.js:131620:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30326:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28505:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28520:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 10 of 18 (2 FAILED) (0 secs / 1.185 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 10 of 18 (2 FAILED) (0 secs / 1.185 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 10 of 18 (2 FAILED) (0 secs / 1.185 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 11 of 18 (2 FAILED) (0 secs / 1.31 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129420:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129389:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129362:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90758:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47150:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13079:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47144:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47139:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:91985:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:92000:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:91974:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91943:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96866:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:96994:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96803:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96792:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103255:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103229:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103204:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103192:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103185:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130518:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30326:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28505:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28520:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 11 of 18 (2 FAILED) ERROR (0 secs / 1.31 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129420:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129389:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129362:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90758:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47150:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13079:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47144:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47139:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:91985:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:92000:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:91974:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91943:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96866:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:96994:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96803:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96792:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103255:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103229:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103204:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103192:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103185:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130518:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30326:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28505:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28520:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 11 of 18 (2 FAILED) ERROR (1.5 secs / 1.31 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 12 of 18 (2 FAILED) ERROR (1.5 secs / 1.327 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 12 of 18 (2 FAILED) DISCONNECTED (31.526 secs / 1.327 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 12 of 18 (2 FAILED) DISCONNECTED (31.526 secs / 1.327 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
