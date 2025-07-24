```bash
yarn run v1.22.22
$ ng test
24 07 2025 09:11:13.833:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
24 07 2025 09:11:13.835:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
24 07 2025 09:11:13.840:INFO [launcher]: Starting browser Firefox
24 07 2025 09:11:16.830:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket vYATLMG4VE4g9LnCAAAB with id 78146975
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.107 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.127 secs)
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: NG0201: No provider found for `HttpClient`. Source: DynamicTestModule. Path: IpinfoService -> HttpClient. Find more at https://angular.dev/errors/NG0201 in vendor.js (line 85682)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpClient`.', ngTokenPath: [ 'IpinfoService', 'HttpClient' ] })
	createRuntimeError@vendor.js:86535:17
	get@vendor.js:87076:39
	get@vendor.js:87630:27
	get@vendor.js:87630:27
	retrieve@vendor.js:87515:19
	injectInjectorOnly@vendor.js:86650:35
	ɵɵinject@vendor.js:86662:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	4205/hydrate/<@vendor.js:87756:35
	runInInjectorProfilerContext@vendor.js:86355:5
	hydrate@vendor.js:87754:39
	get@vendor.js:87621:23
	get@vendor.js:43470:32
	lookupTokenUsingModuleInjector@vendor.js:33280:31
	getOrCreateInjectable@vendor.js:33326:10
	ɵɵdirectiveInject@vendor.js:43517:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:33530:38
	instantiateAllDirectives@vendor.js:39473:40
	createDirectivesInstances@vendor.js:39256:27
	create@vendor.js:44598:34
	initComponent@vendor.js:182215:45
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:30590:33
	invoke@polyfills.js:966:46
	onInvoke@vendor.js:47669:25
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	run@vendor.js:47521:24
	createComponent@vendor.js:182220:37
	createComponent@vendor.js:182007:33
	1675/</<@main.js:633:80
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:30590:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:28773:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28788:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.212 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: NG0201: No provider found for `HttpClient`. Source: DynamicTestModule. Path: IpinfoService -> HttpClient. Find more at https://angular.dev/errors/NG0201 in vendor.js (line 85682)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpClient`.', ngTokenPath: [ 'IpinfoService', 'HttpClient' ] })
	createRuntimeError@vendor.js:86535:17
	get@vendor.js:87076:39
	get@vendor.js:87630:27
	get@vendor.js:87630:27
	retrieve@vendor.js:87515:19
	injectInjectorOnly@vendor.js:86650:35
	ɵɵinject@vendor.js:86662:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	4205/hydrate/<@vendor.js:87756:35
	runInInjectorProfilerContext@vendor.js:86355:5
	hydrate@vendor.js:87754:39
	get@vendor.js:87621:23
	get@vendor.js:43470:32
	lookupTokenUsingModuleInjector@vendor.js:33280:31
	getOrCreateInjectable@vendor.js:33326:10
	ɵɵdirectiveInject@vendor.js:43517:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:33530:38
	instantiateAllDirectives@vendor.js:39473:40
	createDirectivesInstances@vendor.js:39256:27
	create@vendor.js:44598:34
	initComponent@vendor.js:182215:45
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:30590:33
	invoke@polyfills.js:966:46
	onInvoke@vendor.js:47669:25
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	run@vendor.js:47521:24
	createComponent@vendor.js:182220:37
	createComponent@vendor.js:182007:33
	1675/</<@main.js:633:80
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:30590:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:28773:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28788:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
24 07 2025 09:11:18.724:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 59607)
	verifySemanticsOfNgModuleDef@vendor.js:59607:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:59617:33
	verifySemanticsOfNgModuleDef@vendor.js:59615:118
	get@vendor.js:59572:22
	applyProviderOverridesInScope@vendor.js:181354:25
	compileTestModule@vendor.js:181669:10
	finalize@vendor.js:181185:10
	get testModuleRef@vendor.js:182240:43
	inject@vendor.js:182151:20
	inject@vendor.js:181996:33
	1230/</<@main.js:386:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:30590:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:28773:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28788:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (2 FAILED) (0 secs / 0.219 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 59607)
	verifySemanticsOfNgModuleDef@vendor.js:59607:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:59617:33
	verifySemanticsOfNgModuleDef@vendor.js:59615:118
	get@vendor.js:59572:22
	applyProviderOverridesInScope@vendor.js:181354:25
	compileTestModule@vendor.js:181669:10
	finalize@vendor.js:181185:10
	get testModuleRef@vendor.js:182240:43
	inject@vendor.js:182151:20
	inject@vendor.js:181996:33
	1230/</<@main.js:386:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:30590:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:28773:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28788:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (2 FAILED) (0 secs / 0.228 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) (0 secs / 0.359 secs)
[1A[2KERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) (0 secs / 0.359 secs)
ERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) (0 secs / 0.374 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) (0 secs / 0.444 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) (0 secs / 0.452 secs)
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) (0 secs / 0.452 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) (0 secs / 0.452 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) (0 secs / 0.452 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) (0 secs / 0.452 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) (0 secs / 0.452 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 10 of 18 (2 FAILED) (0 secs / 0.589 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 10 of 18 (2 FAILED) (0 secs / 0.589 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 10 of 18 (2 FAILED) (0 secs / 0.589 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 10 of 18 (2 FAILED) (0 secs / 0.589 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 11 of 18 (2 FAILED) (0 secs / 0.693 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:179005:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178974:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178947:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:148101:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:82326:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:12846:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:82320:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:82315:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:32463:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:32487:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:32447:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:32402:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:40240:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:40438:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:40143:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:40132:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:40972:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180487:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30590:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:47669:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:47521:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180484:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30590:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28773:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28788:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3055:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:991:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:790:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (2 FAILED) ERROR (0 secs / 0.693 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:179005:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178974:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178947:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:148101:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:82326:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:12846:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:82320:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:82315:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:32463:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:32487:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:32447:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:32402:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:40240:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:40438:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:40143:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:40132:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:40972:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180487:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30590:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:47669:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:47521:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180484:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30590:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28773:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28788:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3055:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:991:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:790:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1162:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 11 of 18 (2 FAILED) ERROR (0.787 secs / 0.693 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (2 FAILED) DISCONNECTED (30.799 secs / 0.693 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 11 of 18 (2 FAILED) DISCONNECTED (30.799 secs / 0.693 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
