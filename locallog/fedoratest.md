```bash
yarn run v1.22.22
$ ng test
24 03 2025 01:11:02.078:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
24 03 2025 01:11:02.081:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
24 03 2025 01:11:02.087:INFO [launcher]: Starting browser Firefox
24 03 2025 01:11:05.741:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket AjqH0ut8tiSF8GY-AAAB with id 27571908
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.12 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.136 secs)
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 130816)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:130816:21
	get@vendor.js:131344:27
	get@vendor.js:131344:27
	injectInjectorOnly@vendor.js:130327:28
	ɵɵinject@vendor.js:130333:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:131457:35
	runInInjectorProfilerContext@vendor.js:130097:5
	hydrate@vendor.js:131456:39
	get@vendor.js:131335:23
	get@vendor.js:133868:32
	lookupTokenUsingModuleInjector@vendor.js:134211:31
	getOrCreateInjectable@vendor.js:134257:10
	ɵɵdirectiveInject@vendor.js:146009:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:134451:38
	instantiateAllDirectives@vendor.js:141472:40
	createDirectivesInstances@vendor.js:141272:27
	create@vendor.js:146633:34
	initComponent@vendor.js:181423:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34079:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:135639:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:135491:24
	createComponent@vendor.js:181428:37
	createComponent@vendor.js:181214:33
	1675/</<@main.js:643:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34079:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32258:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32273:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.186 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 130816)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:130816:21
	get@vendor.js:131344:27
	get@vendor.js:131344:27
	injectInjectorOnly@vendor.js:130327:28
	ɵɵinject@vendor.js:130333:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:131457:35
	runInInjectorProfilerContext@vendor.js:130097:5
	hydrate@vendor.js:131456:39
	get@vendor.js:131335:23
	get@vendor.js:133868:32
	lookupTokenUsingModuleInjector@vendor.js:134211:31
	getOrCreateInjectable@vendor.js:134257:10
	ɵɵdirectiveInject@vendor.js:146009:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:134451:38
	instantiateAllDirectives@vendor.js:141472:40
	createDirectivesInstances@vendor.js:141272:27
	create@vendor.js:146633:34
	initComponent@vendor.js:181423:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34079:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:135639:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:135491:24
	createComponent@vendor.js:181428:37
	createComponent@vendor.js:181214:33
	1675/</<@main.js:643:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34079:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32258:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32273:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
24 03 2025 01:11:07.726:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.199 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.199 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.199 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.199 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.315 secs)
[1A[2KERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

Firefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.315 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178168:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178137:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178110:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:111164:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:46977:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:18782:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:46971:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:46966:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:133344:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:133368:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:133328:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:133283:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:142876:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:143074:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:142782:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:142766:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:143601:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:179669:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34079:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:135639:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:135491:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:179666:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34079:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:32258:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:32273:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) ERROR (0 secs / 0.315 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178168:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178137:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178110:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:111164:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:46977:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:18782:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:46971:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:46966:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:133344:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:133368:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:133328:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:133283:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:142876:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:143074:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:142782:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:142766:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:143601:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:179669:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34079:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:135639:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:135491:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:179666:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34079:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:32258:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:32273:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) ERROR (0.403 secs / 0.315 secs)
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 162093)
	verifySemanticsOfNgModuleDef@vendor.js:162093:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:162103:33
	verifySemanticsOfNgModuleDef@vendor.js:162101:58
	get@vendor.js:162058:22
	applyProviderOverridesInScope@vendor.js:180561:25
	compileTestModule@vendor.js:180872:10
	finalize@vendor.js:180385:10
	get testModuleRef@vendor.js:181448:43
	inject@vendor.js:181355:20
	inject@vendor.js:181199:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34079:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32258:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32273:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) ERROR (0.403 secs / 0.323 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 162093)
	verifySemanticsOfNgModuleDef@vendor.js:162093:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:162103:33
	verifySemanticsOfNgModuleDef@vendor.js:162101:58
	get@vendor.js:162058:22
	applyProviderOverridesInScope@vendor.js:180561:25
	compileTestModule@vendor.js:180872:10
	finalize@vendor.js:180385:10
	get testModuleRef@vendor.js:181448:43
	inject@vendor.js:181355:20
	inject@vendor.js:181199:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34079:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32258:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32273:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) DISCONNECTED (30.432 secs / 0.323 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) DISCONNECTED (30.432 secs / 0.323 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
