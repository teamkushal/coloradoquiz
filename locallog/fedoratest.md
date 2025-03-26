```bash
yarn run v1.22.22
$ ng test
26 03 2025 19:10:59.829:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
26 03 2025 19:10:59.834:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
26 03 2025 19:10:59.838:INFO [launcher]: Starting browser Firefox
26 03 2025 19:11:03.425:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket uHH_hvz_bgB4GaM4AAAB with id 11835547
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.038 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.147 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.147 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.147 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.186 secs)
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 158775)
	verifySemanticsOfNgModuleDef@vendor.js:158775:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:158785:33
	verifySemanticsOfNgModuleDef@vendor.js:158783:58
	get@vendor.js:158740:22
	applyProviderOverridesInScope@vendor.js:177243:25
	compileTestModule@vendor.js:177554:10
	finalize@vendor.js:177067:10
	get testModuleRef@vendor.js:178130:43
	inject@vendor.js:178037:20
	inject@vendor.js:177881:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34739:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32918:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32933:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.19 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 158775)
	verifySemanticsOfNgModuleDef@vendor.js:158775:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:158785:33
	verifySemanticsOfNgModuleDef@vendor.js:158783:58
	get@vendor.js:158740:22
	applyProviderOverridesInScope@vendor.js:177243:25
	compileTestModule@vendor.js:177554:10
	finalize@vendor.js:177067:10
	get testModuleRef@vendor.js:178130:43
	inject@vendor.js:178037:20
	inject@vendor.js:177881:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34739:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32918:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32933:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.199 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.218 secs)
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 127498)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:127498:21
	get@vendor.js:128026:27
	get@vendor.js:128026:27
	injectInjectorOnly@vendor.js:127009:28
	ɵɵinject@vendor.js:127015:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:128139:35
	runInInjectorProfilerContext@vendor.js:126779:5
	hydrate@vendor.js:128138:39
	get@vendor.js:128017:23
	get@vendor.js:130550:32
	lookupTokenUsingModuleInjector@vendor.js:130893:31
	getOrCreateInjectable@vendor.js:130939:10
	ɵɵdirectiveInject@vendor.js:142691:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:131133:38
	instantiateAllDirectives@vendor.js:138154:40
	createDirectivesInstances@vendor.js:137954:27
	create@vendor.js:143315:34
	initComponent@vendor.js:178105:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34739:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:132321:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:132173:24
	createComponent@vendor.js:178110:37
	createComponent@vendor.js:177896:33
	1675/</<@main.js:643:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34739:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32918:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32933:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) (0 secs / 0.263 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 127498)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:127498:21
	get@vendor.js:128026:27
	get@vendor.js:128026:27
	injectInjectorOnly@vendor.js:127009:28
	ɵɵinject@vendor.js:127015:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:128139:35
	runInInjectorProfilerContext@vendor.js:126779:5
	hydrate@vendor.js:128138:39
	get@vendor.js:128017:23
	get@vendor.js:130550:32
	lookupTokenUsingModuleInjector@vendor.js:130893:31
	getOrCreateInjectable@vendor.js:130939:10
	ɵɵdirectiveInject@vendor.js:142691:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:131133:38
	instantiateAllDirectives@vendor.js:138154:40
	createDirectivesInstances@vendor.js:137954:27
	create@vendor.js:143315:34
	initComponent@vendor.js:178105:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34739:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:132321:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:132173:24
	createComponent@vendor.js:178110:37
	createComponent@vendor.js:177896:33
	1675/</<@main.js:643:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34739:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32918:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32933:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
26 03 2025 19:11:05.187:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) (0 secs / 0.263 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) (0 secs / 0.263 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) (0 secs / 0.263 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) (0 secs / 0.368 secs)
[1A[2KERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

Firefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) (0 secs / 0.368 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:174850:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:174819:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:174792:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:105994:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47706:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:18782:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47700:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47695:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:130026:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:130050:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:130010:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:129965:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:139558:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:139756:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:139464:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:139448:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:140283:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:176351:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34739:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:132321:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:132173:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:176348:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34739:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:32918:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:32933:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) ERROR (0 secs / 0.368 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:174850:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:174819:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:174792:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:105994:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47706:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:18782:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47700:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47695:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:130026:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:130050:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:130010:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:129965:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:139558:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:139756:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:139464:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:139448:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:140283:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:176351:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34739:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:132321:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:132173:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:176348:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34739:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:32918:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:32933:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) ERROR (0.426 secs / 0.368 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) DISCONNECTED (30.439 secs / 0.368 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) DISCONNECTED (30.439 secs / 0.368 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
