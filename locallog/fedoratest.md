```bash
yarn run v1.22.22
$ ng test
02 07 2025 14:10:57.762:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
02 07 2025 14:10:57.766:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
02 07 2025 14:10:57.773:INFO [launcher]: Starting browser Firefox
02 07 2025 14:11:01.280:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket bxKiWHtUq3bM6FQBAAAB with id 22797748
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.066 secs)
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 67597)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	NotFoundError@vendor.js:67597:5
	get@vendor.js:87720:21
	get@vendor.js:88272:27
	get@vendor.js:88272:27
	retrieve@vendor.js:88157:19
	injectInjectorOnly@vendor.js:87268:35
	ɵɵinject@vendor.js:87280:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	4205/hydrate/<@vendor.js:88390:35
	runInInjectorProfilerContext@vendor.js:87054:5
	hydrate@vendor.js:88388:39
	get@vendor.js:88263:23
	get@vendor.js:45702:32
	lookupTokenUsingModuleInjector@vendor.js:35579:31
	getOrCreateInjectable@vendor.js:35625:10
	ɵɵdirectiveInject@vendor.js:45749:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:35819:38
	instantiateAllDirectives@vendor.js:41024:40
	createDirectivesInstances@vendor.js:40809:27
	create@vendor.js:46801:34
	initComponent@vendor.js:180285:45
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:32903:33
	invoke@polyfills.js:966:46
	onInvoke@vendor.js:49803:25
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	run@vendor.js:49655:24
	createComponent@vendor.js:180290:37
	createComponent@vendor.js:180077:33
	1675/</<@main.js:633:80
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:32903:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:31086:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:31101:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.563 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 67597)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	NotFoundError@vendor.js:67597:5
	get@vendor.js:87720:21
	get@vendor.js:88272:27
	get@vendor.js:88272:27
	retrieve@vendor.js:88157:19
	injectInjectorOnly@vendor.js:87268:35
	ɵɵinject@vendor.js:87280:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	4205/hydrate/<@vendor.js:88390:35
	runInInjectorProfilerContext@vendor.js:87054:5
	hydrate@vendor.js:88388:39
	get@vendor.js:88263:23
	get@vendor.js:45702:32
	lookupTokenUsingModuleInjector@vendor.js:35579:31
	getOrCreateInjectable@vendor.js:35625:10
	ɵɵdirectiveInject@vendor.js:45749:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:35819:38
	instantiateAllDirectives@vendor.js:41024:40
	createDirectivesInstances@vendor.js:40809:27
	create@vendor.js:46801:34
	initComponent@vendor.js:180285:45
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:32903:33
	invoke@polyfills.js:966:46
	onInvoke@vendor.js:49803:25
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	run@vendor.js:49655:24
	createComponent@vendor.js:180290:37
	createComponent@vendor.js:180077:33
	1675/</<@main.js:633:80
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:32903:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:31086:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:31101:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
02 07 2025 14:11:03.530:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.578 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.586 secs)
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.586 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.586 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.586 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.586 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.586 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.716 secs)
[1A[2KERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.716 secs)
ERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 61628)
	verifySemanticsOfNgModuleDef@vendor.js:61628:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:61638:33
	verifySemanticsOfNgModuleDef@vendor.js:61636:118
	get@vendor.js:61593:22
	applyProviderOverridesInScope@vendor.js:179424:25
	compileTestModule@vendor.js:179739:10
	finalize@vendor.js:179255:10
	get testModuleRef@vendor.js:180310:43
	inject@vendor.js:180221:20
	inject@vendor.js:180066:33
	1230/</<@main.js:386:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:32903:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:31086:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:31101:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) (0 secs / 0.722 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 61628)
	verifySemanticsOfNgModuleDef@vendor.js:61628:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:61638:33
	verifySemanticsOfNgModuleDef@vendor.js:61636:118
	get@vendor.js:61593:22
	applyProviderOverridesInScope@vendor.js:179424:25
	compileTestModule@vendor.js:179739:10
	finalize@vendor.js:179255:10
	get testModuleRef@vendor.js:180310:43
	inject@vendor.js:180221:20
	inject@vendor.js:180066:33
	1230/</<@main.js:386:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:32903:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:31086:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:31101:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) (0 secs / 0.79 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) (0 secs / 0.801 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) (0 secs / 0.801 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) (0 secs / 0.801 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) (0 secs / 0.801 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) (0 secs / 0.887 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:177065:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:177034:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:177007:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:148168:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:83024:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:12716:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:83018:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:83013:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:34766:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:34790:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:34750:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:34705:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:42472:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:42670:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:42375:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:42364:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:43204:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:178547:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:32903:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:49803:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:49655:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:178544:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:32903:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:31086:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:31101:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3055:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:991:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:790:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) ERROR (0 secs / 0.887 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:177065:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:177034:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:177007:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:148168:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:83024:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:12716:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:83018:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:83013:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:34766:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:34790:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:34750:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:34705:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:42472:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:42670:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:42375:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:42364:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:43204:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:178547:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:32903:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:49803:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:49655:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:178544:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:32903:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:31086:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:31101:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3055:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:991:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:790:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1162:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) ERROR (0.965 secs / 0.887 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) DISCONNECTED (30.98 secs / 0.887 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) DISCONNECTED (30.98 secs / 0.887 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
