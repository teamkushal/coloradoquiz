```bash
yarn run v1.22.22
$ ng test
13 07 2025 01:10:55.168:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
13 07 2025 01:10:55.185:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
13 07 2025 01:10:55.190:INFO [launcher]: Starting browser Firefox
13 07 2025 01:10:59.262:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket BCECaCFpq347lIGiAAAB with id 32296325
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 169462)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	NotFoundError@vendor.js:169462:5
	get@vendor.js:88570:21
	get@vendor.js:89122:27
	get@vendor.js:89122:27
	retrieve@vendor.js:89007:19
	injectInjectorOnly@vendor.js:88118:35
	ɵɵinject@vendor.js:88130:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	4205/hydrate/<@vendor.js:89240:35
	runInInjectorProfilerContext@vendor.js:87904:5
	hydrate@vendor.js:89238:39
	get@vendor.js:89113:23
	get@vendor.js:46084:32
	lookupTokenUsingModuleInjector@vendor.js:35911:31
	getOrCreateInjectable@vendor.js:35957:10
	ɵɵdirectiveInject@vendor.js:46131:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:36151:38
	instantiateAllDirectives@vendor.js:42087:40
	createDirectivesInstances@vendor.js:41870:27
	create@vendor.js:47210:34
	initComponent@vendor.js:181330:45
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:33227:33
	invoke@polyfills.js:966:46
	onInvoke@vendor.js:50281:25
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	run@vendor.js:50133:24
	createComponent@vendor.js:181335:37
	createComponent@vendor.js:181122:33
	1675/</<@main.js:633:80
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
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.088 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 169462)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	NotFoundError@vendor.js:169462:5
	get@vendor.js:88570:21
	get@vendor.js:89122:27
	get@vendor.js:89122:27
	retrieve@vendor.js:89007:19
	injectInjectorOnly@vendor.js:88118:35
	ɵɵinject@vendor.js:88130:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	4205/hydrate/<@vendor.js:89240:35
	runInInjectorProfilerContext@vendor.js:87904:5
	hydrate@vendor.js:89238:39
	get@vendor.js:89113:23
	get@vendor.js:46084:32
	lookupTokenUsingModuleInjector@vendor.js:35911:31
	getOrCreateInjectable@vendor.js:35957:10
	ɵɵdirectiveInject@vendor.js:46131:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:36151:38
	instantiateAllDirectives@vendor.js:42087:40
	createDirectivesInstances@vendor.js:41870:27
	create@vendor.js:47210:34
	initComponent@vendor.js:181330:45
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:33227:33
	invoke@polyfills.js:966:46
	onInvoke@vendor.js:50281:25
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	run@vendor.js:50133:24
	createComponent@vendor.js:181335:37
	createComponent@vendor.js:181122:33
	1675/</<@main.js:633:80
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
13 07 2025 01:11:01.327:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.088 secs)
ERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 2 of 18 (2 FAILED) (0 secs / 0.092 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (3 FAILED) (0 secs / 0.093 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 (3 FAILED) (0 secs / 0.104 secs)
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
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (4 FAILED) (0 secs / 0.107 secs)
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
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (4 FAILED) (0 secs / 0.122 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (4 FAILED) (0 secs / 0.13 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 (4 FAILED) (0 secs / 0.15 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (4 FAILED) (0 secs / 0.162 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 10 of 18 (4 FAILED) (0 secs / 0.218 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) (0 secs / 0.229 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) (0 secs / 0.229 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) (0 secs / 0.229 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) (0 secs / 0.256 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) (0 secs / 0.263 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) (0 secs / 0.263 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) (0 secs / 0.263 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) (0 secs / 0.263 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 14 of 18 (4 FAILED) (0 secs / 0.362 secs)
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
Firefox 128.0 (Linux x86_64): Executed 14 of 18 (4 FAILED) ERROR (0 secs / 0.362 secs)
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
[1A[2KFirefox 128.0 (Linux x86_64): Executed 14 of 18 (4 FAILED) ERROR (0.434 secs / 0.362 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 14 of 18 (4 FAILED) DISCONNECTED (30.454 secs / 0.362 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 14 of 18 (4 FAILED) DISCONNECTED (30.454 secs / 0.362 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
