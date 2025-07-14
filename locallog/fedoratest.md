```bash
yarn run v1.22.22
$ ng test
14 07 2025 00:10:55.355:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
14 07 2025 00:10:55.360:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
14 07 2025 00:10:55.366:INFO [launcher]: Starting browser Firefox
14 07 2025 00:10:59.674:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket 5knavnRumFV1jWZwAAAB with id 83614936
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.073 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.092 secs)
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 62201)
	verifySemanticsOfNgModuleDef@vendor.js:62201:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:62211:33
	verifySemanticsOfNgModuleDef@vendor.js:62209:118
	get@vendor.js:62166:22
	applyProviderOverridesInScope@vendor.js:180469:25
	compileTestModule@vendor.js:180784:10
	finalize@vendor.js:180300:10
	get testModuleRef@vendor.js:181355:43
	inject@vendor.js:181266:20
	inject@vendor.js:181111:33
	1230/</<@main.js:386:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:33227:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:31410:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:31425:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.096 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 62201)
	verifySemanticsOfNgModuleDef@vendor.js:62201:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:62211:33
	verifySemanticsOfNgModuleDef@vendor.js:62209:118
	get@vendor.js:62166:22
	applyProviderOverridesInScope@vendor.js:180469:25
	compileTestModule@vendor.js:180784:10
	finalize@vendor.js:180300:10
	get testModuleRef@vendor.js:181355:43
	inject@vendor.js:181266:20
	inject@vendor.js:181111:33
	1230/</<@main.js:386:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:33227:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:31410:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:31425:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.105 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.126 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 169462)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	NotFoundError@vendor.js:169462:5
	get@vendor.js:88570:21
	get@vendor.js:89122:27
	get@vendor.js:89122:27
	inject@vendor.js:181267:58
	inject@vendor.js:181111:33
	9074/</<@main.js:1950:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:33227:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:31410:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:31425:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) (0 secs / 0.138 secs)
Firefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 169462)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	NotFoundError@vendor.js:169462:5
	get@vendor.js:88570:21
	get@vendor.js:89122:27
	get@vendor.js:89122:27
	inject@vendor.js:181267:58
	inject@vendor.js:181111:33
	9074/</<@main.js:1950:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:33227:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:31410:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:31425:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) (0 secs / 0.138 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) (0 secs / 0.138 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) (0 secs / 0.138 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) (0 secs / 0.138 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) (0 secs / 0.138 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) (0 secs / 0.247 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) (0 secs / 0.26 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) (0 secs / 0.26 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) (0 secs / 0.26 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) (0 secs / 0.26 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) (0 secs / 0.348 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178120:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178089:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178062:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149077:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:83876:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:12756:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:83870:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:83865:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:35098:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:35122:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:35082:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:35037:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:42854:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:43052:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:42757:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:42746:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:43586:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:179602:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:33227:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:50281:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:50133:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:179599:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:33227:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:31410:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:31425:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3055:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:991:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:790:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) ERROR (0 secs / 0.348 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178120:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178089:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178062:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149077:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:83876:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:12756:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:83870:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:83865:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:35098:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:35122:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:35082:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:35037:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:42854:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:43052:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:42757:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:42746:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:43586:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:179602:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:33227:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:50281:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:50133:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:179599:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:33227:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:31410:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:31425:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3055:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:991:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:790:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1162:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) ERROR (0.39 secs / 0.348 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) DISCONNECTED (30.405 secs / 0.348 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) DISCONNECTED (30.405 secs / 0.348 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
