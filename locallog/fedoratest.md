```bash
yarn run v1.22.22
$ ng test
21 06 2025 01:10:52.863:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
21 06 2025 01:10:52.866:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
21 06 2025 01:10:52.871:INFO [launcher]: Starting browser Firefox
21 06 2025 01:10:56.275:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket EkOPJ9EuJwzGDxXxAAAB with id 15452625
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 83225)
	verifySemanticsOfNgModuleDef@vendor.js:83225:13
	4245/verifySemanticsOfNgModuleDef/<@vendor.js:83235:33
	verifySemanticsOfNgModuleDef@vendor.js:83233:126
	get@vendor.js:83190:22
	applyProviderOverridesInScope@vendor.js:178215:25
	compileTestModule@vendor.js:178530:10
	finalize@vendor.js:178046:10
	get testModuleRef@vendor.js:179101:43
	inject@vendor.js:179012:20
	inject@vendor.js:178857:33
	1230/</<@main.js:386:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:34513:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:32696:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32711:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.011 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 83225)
	verifySemanticsOfNgModuleDef@vendor.js:83225:13
	4245/verifySemanticsOfNgModuleDef/<@vendor.js:83235:33
	verifySemanticsOfNgModuleDef@vendor.js:83233:126
	get@vendor.js:83190:22
	applyProviderOverridesInScope@vendor.js:178215:25
	compileTestModule@vendor.js:178530:10
	finalize@vendor.js:178046:10
	get testModuleRef@vendor.js:179101:43
	inject@vendor.js:179012:20
	inject@vendor.js:178857:33
	1230/</<@main.js:386:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:34513:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:32696:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32711:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.032 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.15 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.187 secs)
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.187 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.187 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.187 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.187 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.187 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.304 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 45026)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	NotFoundError@vendor.js:45026:5
	get@vendor.js:136671:21
	get@vendor.js:137223:27
	get@vendor.js:137223:27
	inject@vendor.js:179013:58
	inject@vendor.js:178857:33
	9074/</<@main.js:1950:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:34513:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:32696:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32711:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) (0 secs / 0.318 secs)
Firefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 45026)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	NotFoundError@vendor.js:45026:5
	get@vendor.js:136671:21
	get@vendor.js:137223:27
	get@vendor.js:137223:27
	inject@vendor.js:179013:58
	inject@vendor.js:178857:33
	9074/</<@main.js:1950:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:34513:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:32696:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32711:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) (0 secs / 0.327 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) (0 secs / 0.34 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) (0 secs / 0.34 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) (0 secs / 0.34 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) (0 secs / 0.34 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) (0 secs / 0.416 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:175856:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:175825:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:175798:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:134978:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:51314:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13968:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:51308:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:51303:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:56370:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:56394:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:56354:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:56309:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:64076:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:64274:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:63979:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:63968:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:64808:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:177338:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34513:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:71407:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:71259:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:177335:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34513:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:32696:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:32711:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3055:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:991:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:790:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) ERROR (0 secs / 0.416 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:175856:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:175825:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:175798:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:134978:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:51314:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13968:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:51308:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:51303:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:56370:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:56394:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:56354:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:56309:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:64076:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:64274:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:63979:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:63968:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:64808:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:177338:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34513:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:71407:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:71259:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:177335:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34513:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:32696:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:32711:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3055:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:991:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:790:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1162:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) ERROR (0.473 secs / 0.416 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) DISCONNECTED (30.483 secs / 0.416 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) DISCONNECTED (30.483 secs / 0.416 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
