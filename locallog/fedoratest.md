```bash
yarn run v1.22.22
$ ng test
07 05 2025 11:11:33.674:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
07 05 2025 11:11:33.680:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
07 05 2025 11:11:33.684:INFO [launcher]: Starting browser Firefox
07 05 2025 11:11:38.621:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket SJxAP1iu3MxUucYAAAAB with id 64770183
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 156712)
	verifySemanticsOfNgModuleDef@vendor.js:156712:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:156722:33
	verifySemanticsOfNgModuleDef@vendor.js:156720:58
	get@vendor.js:156677:22
	applyProviderOverridesInScope@vendor.js:176847:25
	compileTestModule@vendor.js:177158:10
	finalize@vendor.js:176671:10
	get testModuleRef@vendor.js:177734:43
	inject@vendor.js:177641:20
	inject@vendor.js:177485:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34328:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32507:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32522:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.017 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 156712)
	verifySemanticsOfNgModuleDef@vendor.js:156712:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:156722:33
	verifySemanticsOfNgModuleDef@vendor.js:156720:58
	get@vendor.js:156677:22
	applyProviderOverridesInScope@vendor.js:176847:25
	compileTestModule@vendor.js:177158:10
	finalize@vendor.js:176671:10
	get testModuleRef@vendor.js:177734:43
	inject@vendor.js:177641:20
	inject@vendor.js:177485:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34328:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32507:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32522:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.041 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.076 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.076 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.076 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.195 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.231 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.297 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (1 FAILED) (0 secs / 0.327 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 (1 FAILED) (0 secs / 0.34 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (1 FAILED) (0 secs / 0.426 secs)
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (1 FAILED) (0 secs / 0.426 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (1 FAILED) (0 secs / 0.426 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (1 FAILED) (0 secs / 0.426 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (1 FAILED) (0 secs / 0.426 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (1 FAILED) (0 secs / 0.426 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 10 of 18 (1 FAILED) (0 secs / 0.548 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 11 of 18 (1 FAILED) (0 secs / 0.587 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 12 of 18 (2 FAILED) (0 secs / 0.589 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (3 FAILED) (0 secs / 0.59 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (3 FAILED) (0 secs / 0.59 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (3 FAILED) (0 secs / 0.59 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (3 FAILED) (0 secs / 0.59 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 14 of 18 (3 FAILED) (0 secs / 0.701 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:174528:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:174497:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:174470:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:109182:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:52025:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:17114:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:52019:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:52014:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:127916:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:127940:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:127900:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:127855:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:137418:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:137616:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:137324:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:137308:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:138143:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:175955:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34328:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:130180:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:130032:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:175952:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34328:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:32507:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:32522:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 14 of 18 (3 FAILED) ERROR (0 secs / 0.701 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:174528:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:174497:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:174470:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:109182:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:52025:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:17114:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:52019:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:52014:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:127916:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:127940:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:127900:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:127855:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:137418:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:137616:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:137324:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:137308:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:138143:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:175955:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34328:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:130180:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:130032:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:175952:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34328:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:32507:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:32522:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 14 of 18 (3 FAILED) ERROR (2.056 secs / 0.701 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 15 of 18 (3 FAILED) ERROR (2.056 secs / 0.713 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 16 of 18 (3 FAILED) ERROR (2.056 secs / 0.719 secs)
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 125386)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:125386:21
	get@vendor.js:125916:27
	get@vendor.js:125916:27
	injectInjectorOnly@vendor.js:124897:28
	ɵɵinject@vendor.js:124903:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:126029:35
	runInInjectorProfilerContext@vendor.js:124667:5
	hydrate@vendor.js:126028:39
	get@vendor.js:125907:23
	get@vendor.js:140557:32
	lookupTokenUsingModuleInjector@vendor.js:128731:31
	getOrCreateInjectable@vendor.js:128777:10
	ɵɵdirectiveInject@vendor.js:140604:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:128971:38
	instantiateAllDirectives@vendor.js:136014:40
	createDirectivesInstances@vendor.js:135814:27
	create@vendor.js:141228:34
	initComponent@vendor.js:177709:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34328:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:130180:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:130032:24
	createComponent@vendor.js:177714:37
	createComponent@vendor.js:177500:33
	1675/</<@main.js:643:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34328:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32507:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32522:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 17 of 18 (4 FAILED) ERROR (2.056 secs / 0.766 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 125386)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:125386:21
	get@vendor.js:125916:27
	get@vendor.js:125916:27
	injectInjectorOnly@vendor.js:124897:28
	ɵɵinject@vendor.js:124903:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:126029:35
	runInInjectorProfilerContext@vendor.js:124667:5
	hydrate@vendor.js:126028:39
	get@vendor.js:125907:23
	get@vendor.js:140557:32
	lookupTokenUsingModuleInjector@vendor.js:128731:31
	getOrCreateInjectable@vendor.js:128777:10
	ɵɵdirectiveInject@vendor.js:140604:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:128971:38
	instantiateAllDirectives@vendor.js:136014:40
	createDirectivesInstances@vendor.js:135814:27
	create@vendor.js:141228:34
	initComponent@vendor.js:177709:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34328:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:130180:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:130032:24
	createComponent@vendor.js:177714:37
	createComponent@vendor.js:177500:33
	1675/</<@main.js:643:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34328:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32507:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32522:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 125386)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:125386:21
	get@vendor.js:125916:27
	get@vendor.js:125916:27
	inject@vendor.js:177642:58
	inject@vendor.js:177485:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34328:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32507:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32522:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 18 of 18 (5 FAILED) ERROR (2.056 secs / 0.776 secs)
Firefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 125386)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:125386:21
	get@vendor.js:125916:27
	get@vendor.js:125916:27
	inject@vendor.js:177642:58
	inject@vendor.js:177485:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34328:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32507:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32522:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 18 of 18 (5 FAILED) ERROR (2.073 secs / 0.776 secs)
07 05 2025 11:11:42.788:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
