```bash
yarn run v1.22.22
$ ng test
18 03 2025 12:11:00.162:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
18 03 2025 12:11:00.177:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
18 03 2025 12:11:00.184:INFO [launcher]: Starting browser Firefox
18 03 2025 12:11:03.722:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket L2Nq0uB7zgNdJJxuAAAB with id 65044817
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 161131)
	verifySemanticsOfNgModuleDef@vendor.js:161131:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:161141:33
	verifySemanticsOfNgModuleDef@vendor.js:161139:58
	get@vendor.js:161096:22
	applyProviderOverridesInScope@vendor.js:178516:25
	compileTestModule@vendor.js:178827:10
	finalize@vendor.js:178340:10
	get testModuleRef@vendor.js:179403:43
	inject@vendor.js:179310:20
	inject@vendor.js:179154:33
	1230/</<@main.js:391:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:40455:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:38634:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:38649:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.017 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 161131)
	verifySemanticsOfNgModuleDef@vendor.js:161131:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:161141:33
	verifySemanticsOfNgModuleDef@vendor.js:161139:58
	get@vendor.js:161096:22
	applyProviderOverridesInScope@vendor.js:178516:25
	compileTestModule@vendor.js:178827:10
	finalize@vendor.js:178340:10
	get testModuleRef@vendor.js:179403:43
	inject@vendor.js:179310:20
	inject@vendor.js:179154:33
	1230/</<@main.js:391:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:40455:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:38634:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:38649:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.043 secs)
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 129897)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:129897:21
	get@vendor.js:130425:27
	get@vendor.js:130425:27
	injectInjectorOnly@vendor.js:129408:28
	ɵɵinject@vendor.js:129414:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:130538:35
	runInInjectorProfilerContext@vendor.js:129178:5
	hydrate@vendor.js:130537:39
	get@vendor.js:130416:23
	get@vendor.js:132949:32
	lookupTokenUsingModuleInjector@vendor.js:133292:31
	getOrCreateInjectable@vendor.js:133338:10
	ɵɵdirectiveInject@vendor.js:145050:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:133532:38
	instantiateAllDirectives@vendor.js:140513:40
	createDirectivesInstances@vendor.js:140313:27
	create@vendor.js:145674:34
	initComponent@vendor.js:179378:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:40455:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:134720:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:134572:24
	createComponent@vendor.js:179383:37
	createComponent@vendor.js:179169:33
	1675/</<@main.js:642:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:40455:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:38634:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:38649:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (2 FAILED) (0 secs / 0.124 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 129897)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:129897:21
	get@vendor.js:130425:27
	get@vendor.js:130425:27
	injectInjectorOnly@vendor.js:129408:28
	ɵɵinject@vendor.js:129414:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:130538:35
	runInInjectorProfilerContext@vendor.js:129178:5
	hydrate@vendor.js:130537:39
	get@vendor.js:130416:23
	get@vendor.js:132949:32
	lookupTokenUsingModuleInjector@vendor.js:133292:31
	getOrCreateInjectable@vendor.js:133338:10
	ɵɵdirectiveInject@vendor.js:145050:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:133532:38
	instantiateAllDirectives@vendor.js:140513:40
	createDirectivesInstances@vendor.js:140313:27
	create@vendor.js:145674:34
	initComponent@vendor.js:179378:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:40455:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:134720:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:134572:24
	createComponent@vendor.js:179383:37
	createComponent@vendor.js:179169:33
	1675/</<@main.js:642:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:40455:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:38634:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:38649:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
18 03 2025 12:11:05.680:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (2 FAILED) (0 secs / 0.124 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (2 FAILED) (0 secs / 0.124 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (2 FAILED) (0 secs / 0.124 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (2 FAILED) (0 secs / 0.124 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (2 FAILED) (0 secs / 0.124 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 (2 FAILED) (0 secs / 0.246 secs)
[1A[2KERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

Firefox 128.0 (Linux x86_64): Executed 4 of 18 (2 FAILED) (0 secs / 0.246 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (2 FAILED) (0 secs / 0.246 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (2 FAILED) (0 secs / 0.246 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (2 FAILED) (0 secs / 0.246 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (2 FAILED) (0 secs / 0.351 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1201)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1201:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1214:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:536:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:176203:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:176172:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:176145:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:114818:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:51363:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:19648:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:51357:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:51352:69
  getData@http://localhost:9876/_karma_webpack_/main.js:532:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:515:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:132425:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:132449:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:132409:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:132364:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:141917:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:142115:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:141823:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:141807:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:142642:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:177624:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:40455:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:134720:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:134572:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:177621:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1679:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:40455:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:38634:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:38649:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (2 FAILED) ERROR (0 secs / 0.351 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1201)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1201:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1214:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:536:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:176203:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:176172:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:176145:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:114818:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:51363:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:19648:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:51357:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:51352:69
  getData@http://localhost:9876/_karma_webpack_/main.js:532:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:515:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:132425:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:132449:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:132409:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:132364:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:141917:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:142115:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:141823:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:141807:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:142642:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:177624:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:40455:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:134720:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:134572:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:177621:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1679:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:40455:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:38634:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:38649:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (2 FAILED) ERROR (0.396 secs / 0.351 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (2 FAILED) DISCONNECTED (30.411 secs / 0.351 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (2 FAILED) DISCONNECTED (30.411 secs / 0.351 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
