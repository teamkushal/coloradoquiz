```bash
yarn run v1.22.22
$ ng test
18 06 2025 00:10:52.348:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
18 06 2025 00:10:52.351:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
18 06 2025 00:10:52.355:INFO [launcher]: Starting browser Firefox
18 06 2025 00:10:56.004:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket 0oyBPYSYASOlmVpMAAAB with id 26171526
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.033 secs)
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 173748)
	verifySemanticsOfNgModuleDef@vendor.js:173748:13
	9293/verifySemanticsOfNgModuleDef/<@vendor.js:173758:33
	verifySemanticsOfNgModuleDef@vendor.js:173756:127
	get@vendor.js:173713:22
	applyProviderOverridesInScope@vendor.js:178214:25
	compileTestModule@vendor.js:178529:10
	finalize@vendor.js:178045:10
	get testModuleRef@vendor.js:179100:43
	inject@vendor.js:179011:20
	inject@vendor.js:178856:33
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
Firefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.04 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 173748)
	verifySemanticsOfNgModuleDef@vendor.js:173748:13
	9293/verifySemanticsOfNgModuleDef/<@vendor.js:173758:33
	verifySemanticsOfNgModuleDef@vendor.js:173756:127
	get@vendor.js:173713:22
	applyProviderOverridesInScope@vendor.js:178214:25
	compileTestModule@vendor.js:178529:10
	finalize@vendor.js:178045:10
	get testModuleRef@vendor.js:179100:43
	inject@vendor.js:179011:20
	inject@vendor.js:178856:33
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
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.065 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.17 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (2 FAILED) (0 secs / 0.175 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.177 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 45026)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	NotFoundError@vendor.js:45026:5
	get@vendor.js:131400:21
	get@vendor.js:131952:27
	get@vendor.js:131952:27
	retrieve@vendor.js:131837:19
	injectInjectorOnly@vendor.js:130948:35
	ɵɵinject@vendor.js:130960:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7747/hydrate/<@vendor.js:132070:35
	runInInjectorProfilerContext@vendor.js:130734:5
	hydrate@vendor.js:132068:39
	get@vendor.js:131943:23
	get@vendor.js:157829:32
	lookupTokenUsingModuleInjector@vendor.js:147706:31
	getOrCreateInjectable@vendor.js:147752:10
	ɵɵdirectiveInject@vendor.js:157876:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:147946:38
	instantiateAllDirectives@vendor.js:153151:40
	createDirectivesInstances@vendor.js:152936:27
	create@vendor.js:158928:34
	initComponent@vendor.js:179075:45
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:34513:33
	invoke@polyfills.js:966:46
	onInvoke@vendor.js:161930:25
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	run@vendor.js:161782:24
	createComponent@vendor.js:179080:37
	createComponent@vendor.js:178867:33
	1675/</<@main.js:633:80
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
Firefox 128.0 (Linux x86_64): Executed 7 of 18 (4 FAILED) (0 secs / 0.234 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 45026)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	NotFoundError@vendor.js:45026:5
	get@vendor.js:131400:21
	get@vendor.js:131952:27
	get@vendor.js:131952:27
	retrieve@vendor.js:131837:19
	injectInjectorOnly@vendor.js:130948:35
	ɵɵinject@vendor.js:130960:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7747/hydrate/<@vendor.js:132070:35
	runInInjectorProfilerContext@vendor.js:130734:5
	hydrate@vendor.js:132068:39
	get@vendor.js:131943:23
	get@vendor.js:157829:32
	lookupTokenUsingModuleInjector@vendor.js:147706:31
	getOrCreateInjectable@vendor.js:147752:10
	ɵɵdirectiveInject@vendor.js:157876:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:147946:38
	instantiateAllDirectives@vendor.js:153151:40
	createDirectivesInstances@vendor.js:152936:27
	create@vendor.js:158928:34
	initComponent@vendor.js:179075:45
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:34513:33
	invoke@polyfills.js:966:46
	onInvoke@vendor.js:161930:25
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	run@vendor.js:161782:24
	createComponent@vendor.js:179080:37
	createComponent@vendor.js:178867:33
	1675/</<@main.js:633:80
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
18 06 2025 00:10:58.070:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 (4 FAILED) (0 secs / 0.243 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (4 FAILED) (0 secs / 0.243 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (4 FAILED) (0 secs / 0.243 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (4 FAILED) (0 secs / 0.243 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (4 FAILED) (0 secs / 0.352 secs)
[1A[2KERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (4 FAILED) (0 secs / 0.352 secs)
ERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:145516:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:145485:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:145458:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:103975:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:51314:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13968:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:51308:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:51303:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:146893:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:146917:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:146877:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:146832:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:154599:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:154797:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:154502:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:154491:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:155331:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:177337:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34513:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:161930:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:161782:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:177334:22
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
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (4 FAILED) ERROR (0 secs / 0.352 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:145516:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:145485:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:145458:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:103975:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:51314:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13968:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:51308:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:51303:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:146893:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:146917:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:146877:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:146832:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:154599:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:154797:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:154502:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:154491:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:155331:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:177337:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34513:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:161930:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:161782:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:177334:22
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
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (4 FAILED) ERROR (0.402 secs / 0.352 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (4 FAILED) DISCONNECTED (30.421 secs / 0.352 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (4 FAILED) DISCONNECTED (30.421 secs / 0.352 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
