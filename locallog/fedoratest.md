```bash
yarn run v1.22.22
$ ng test
20 08 2025 09:11:49.996:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
20 08 2025 09:11:49.999:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
20 08 2025 09:11:50.017:INFO [launcher]: Starting browser Firefox
20 08 2025 09:11:54.510:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket UjtiWPLYQYQimRsJAAAB with id 33072899
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.033 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.154 secs)
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: NG0201: No provider found for `HttpClient`. Source: DynamicTestModule. Path: IpinfoService -> HttpClient. Find more at https://angular.dev/errors/NG0201 in vendor.js (line 84268)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpClient`.', ngTokenPath: [ 'IpinfoService', 'HttpClient' ] })
	createRuntimeError@vendor.js:85121:17
	get@vendor.js:85662:39
	get@vendor.js:86216:27
	get@vendor.js:86216:27
	retrieve@vendor.js:86101:19
	injectInjectorOnly@vendor.js:85236:35
	ɵɵinject@vendor.js:85248:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	4205/hydrate/<@vendor.js:86342:35
	runInInjectorProfilerContext@vendor.js:84941:5
	hydrate@vendor.js:86340:39
	get@vendor.js:86207:23
	get@vendor.js:41924:32
	lookupTokenUsingModuleInjector@vendor.js:31730:31
	getOrCreateInjectable@vendor.js:31776:10
	ɵɵdirectiveInject@vendor.js:41971:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:31980:38
	instantiateAllDirectives@vendor.js:37927:40
	createDirectivesInstances@vendor.js:37710:27
	create@vendor.js:43061:34
	initComponent@vendor.js:182844:45
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:29134:33
	invoke@polyfills.js:966:46
	onInvoke@vendor.js:46138:25
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	run@vendor.js:45990:24
	createComponent@vendor.js:182849:37
	createComponent@vendor.js:182630:33
	1675/</<@main.js:633:80
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:29134:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:27317:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27332:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.239 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: NG0201: No provider found for `HttpClient`. Source: DynamicTestModule. Path: IpinfoService -> HttpClient. Find more at https://angular.dev/errors/NG0201 in vendor.js (line 84268)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpClient`.', ngTokenPath: [ 'IpinfoService', 'HttpClient' ] })
	createRuntimeError@vendor.js:85121:17
	get@vendor.js:85662:39
	get@vendor.js:86216:27
	get@vendor.js:86216:27
	retrieve@vendor.js:86101:19
	injectInjectorOnly@vendor.js:85236:35
	ɵɵinject@vendor.js:85248:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	4205/hydrate/<@vendor.js:86342:35
	runInInjectorProfilerContext@vendor.js:84941:5
	hydrate@vendor.js:86340:39
	get@vendor.js:86207:23
	get@vendor.js:41924:32
	lookupTokenUsingModuleInjector@vendor.js:31730:31
	getOrCreateInjectable@vendor.js:31776:10
	ɵɵdirectiveInject@vendor.js:41971:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:31980:38
	instantiateAllDirectives@vendor.js:37927:40
	createDirectivesInstances@vendor.js:37710:27
	create@vendor.js:43061:34
	initComponent@vendor.js:182844:45
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:29134:33
	invoke@polyfills.js:966:46
	onInvoke@vendor.js:46138:25
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	run@vendor.js:45990:24
	createComponent@vendor.js:182849:37
	createComponent@vendor.js:182630:33
	1675/</<@main.js:633:80
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:29134:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:27317:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27332:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.257 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (2 FAILED) (0 secs / 0.26 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.262 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.275 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.275 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.275 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.275 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) (0 secs / 0.43 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:179646:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:179615:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:179588:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:150068:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80088:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11374:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80082:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80077:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30913:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:30937:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30897:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30852:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:38694:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:38892:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:38597:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:38586:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:39426:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:181097:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29134:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:46138:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:45990:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:181094:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1665:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29134:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27317:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27332:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3055:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:991:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:790:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) ERROR (0 secs / 0.43 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:179646:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:179615:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:179588:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:150068:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80088:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11374:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80082:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80077:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30913:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:30937:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30897:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30852:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:38694:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:38892:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:38597:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:38586:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:39426:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:181097:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29134:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:46138:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:45990:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:181094:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1665:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29134:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27317:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27332:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3055:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:991:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:790:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1162:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) ERROR (0.008 secs / 0.43 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (3 FAILED) ERROR (0.008 secs / 0.456 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 10 of 18 (3 FAILED) ERROR (0.008 secs / 0.513 secs)
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 58829)
	verifySemanticsOfNgModuleDef@vendor.js:58829:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:58839:33
	verifySemanticsOfNgModuleDef@vendor.js:58837:118
	get@vendor.js:58794:22
	applyProviderOverridesInScope@vendor.js:181966:25
	compileTestModule@vendor.js:182284:10
	finalize@vendor.js:181797:10
	get testModuleRef@vendor.js:182869:43
	inject@vendor.js:182778:20
	inject@vendor.js:182619:33
	1230/</<@main.js:386:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:29134:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:27317:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27332:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
	invokeTask@polyfills.js:1071:11
	4124/initZone/ZoneTask/this.invoke@polyfills.js:1057:38
	4124/patchTimer/scheduleTask/data.args[0]@polyfills.js:2346:26
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) ERROR (0.008 secs / 0.521 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 58829)
	verifySemanticsOfNgModuleDef@vendor.js:58829:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:58839:33
	verifySemanticsOfNgModuleDef@vendor.js:58837:118
	get@vendor.js:58794:22
	applyProviderOverridesInScope@vendor.js:181966:25
	compileTestModule@vendor.js:182284:10
	finalize@vendor.js:181797:10
	get testModuleRef@vendor.js:182869:43
	inject@vendor.js:182778:20
	inject@vendor.js:182619:33
	1230/</<@main.js:386:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:29134:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:27317:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27332:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
	invokeTask@polyfills.js:1071:11
	4124/initZone/ZoneTask/this.invoke@polyfills.js:1057:38
	4124/patchTimer/scheduleTask/data.args[0]@polyfills.js:2346:26
[1A[2KFirefox 128.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) ERROR (0.008 secs / 0.54 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) ERROR (0.008 secs / 0.55 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://angular.dev/errors/NG0201 in vendor.js (line 84268)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:85121:17
	get@vendor.js:85662:39
	get@vendor.js:86216:27
	get@vendor.js:86216:27
	inject@vendor.js:182779:58
	inject@vendor.js:182619:33
	9074/</<@main.js:1950:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:29134:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:27317:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27332:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 14 of 18 (5 FAILED) ERROR (0.008 secs / 0.561 secs)
Firefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://angular.dev/errors/NG0201 in vendor.js (line 84268)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:85121:17
	get@vendor.js:85662:39
	get@vendor.js:86216:27
	get@vendor.js:86216:27
	inject@vendor.js:182779:58
	inject@vendor.js:182619:33
	9074/</<@main.js:1950:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:29134:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:27317:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27332:16
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
Firefox 128.0 (Linux x86_64): Executed 14 of 18 (5 FAILED) ERROR (0.008 secs / 0.561 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 14 of 18 (5 FAILED) ERROR (0.008 secs / 0.561 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 14 of 18 (5 FAILED) ERROR (0.008 secs / 0.561 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 128.0 (Linux x86_64): Executed 14 of 18 (5 FAILED) ERROR (0.008 secs / 0.561 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 128.0 (Linux x86_64): Executed 14 of 18 (5 FAILED) ERROR (0.008 secs / 0.561 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 15 of 18 (5 FAILED) ERROR (0.008 secs / 0.758 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 15 of 18 (5 FAILED) ERROR (0.008 secs / 0.758 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 15 of 18 (5 FAILED) ERROR (0.008 secs / 0.758 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 16 of 18 (5 FAILED) ERROR (0.008 secs / 0.849 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 17 of 18 (5 FAILED) ERROR (0.008 secs / 0.872 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 18 of 18 (5 FAILED) ERROR (0.008 secs / 0.879 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 18 of 18 (5 FAILED) ERROR (0.022 secs / 0.879 secs)
20 08 2025 09:11:58.877:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
