```bash
yarn run v1.22.22
$ ng test
23 05 2025 12:10:57.961:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
23 05 2025 12:10:57.964:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
23 05 2025 12:10:57.969:INFO [launcher]: Starting browser Firefox
23 05 2025 12:11:01.439:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket 0nIiOc34K2By4W5nAAAB with id 67409924
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 124805)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:124805:21
	get@vendor.js:125335:27
	get@vendor.js:125335:27
	injectInjectorOnly@vendor.js:124316:28
	ɵɵinject@vendor.js:124322:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:125448:35
	runInInjectorProfilerContext@vendor.js:124086:5
	hydrate@vendor.js:125447:39
	get@vendor.js:125326:23
	get@vendor.js:140036:32
	lookupTokenUsingModuleInjector@vendor.js:128160:31
	getOrCreateInjectable@vendor.js:128206:10
	ɵɵdirectiveInject@vendor.js:140083:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:128400:38
	instantiateAllDirectives@vendor.js:135493:40
	createDirectivesInstances@vendor.js:135293:27
	create@vendor.js:140707:34
	initComponent@vendor.js:178103:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:33937:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:129609:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:129461:24
	createComponent@vendor.js:178108:37
	createComponent@vendor.js:177894:33
	1675/</<@main.js:643:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:33937:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32116:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32131:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.12 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 124805)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:124805:21
	get@vendor.js:125335:27
	get@vendor.js:125335:27
	injectInjectorOnly@vendor.js:124316:28
	ɵɵinject@vendor.js:124322:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:125448:35
	runInInjectorProfilerContext@vendor.js:124086:5
	hydrate@vendor.js:125447:39
	get@vendor.js:125326:23
	get@vendor.js:140036:32
	lookupTokenUsingModuleInjector@vendor.js:128160:31
	getOrCreateInjectable@vendor.js:128206:10
	ɵɵdirectiveInject@vendor.js:140083:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:128400:38
	instantiateAllDirectives@vendor.js:135493:40
	createDirectivesInstances@vendor.js:135293:27
	create@vendor.js:140707:34
	initComponent@vendor.js:178103:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:33937:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:129609:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:129461:24
	createComponent@vendor.js:178108:37
	createComponent@vendor.js:177894:33
	1675/</<@main.js:643:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:33937:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32116:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32131:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
23 05 2025 12:11:03.178:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 2 of 18 (2 FAILED) (0 secs / 0.122 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (3 FAILED) (0 secs / 0.123 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 (3 FAILED) (0 secs / 0.148 secs)
[1A[2KERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (3 FAILED) (0 secs / 0.148 secs)
ERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) (0 secs / 0.214 secs)
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 156197)
	verifySemanticsOfNgModuleDef@vendor.js:156197:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:156207:33
	verifySemanticsOfNgModuleDef@vendor.js:156205:58
	get@vendor.js:156162:22
	applyProviderOverridesInScope@vendor.js:177241:25
	compileTestModule@vendor.js:177552:10
	finalize@vendor.js:177065:10
	get testModuleRef@vendor.js:178128:43
	inject@vendor.js:178035:20
	inject@vendor.js:177879:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:33937:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32116:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32131:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
	invokeTask@polyfills.js:543:11
	4124/initZone/ZoneTask/this.invoke@polyfills.js:529:38
	4124/patchTimer/scheduleTask/data.args[0]@polyfills.js:1818:26
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (4 FAILED) (0 secs / 0.218 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 156197)
	verifySemanticsOfNgModuleDef@vendor.js:156197:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:156207:33
	verifySemanticsOfNgModuleDef@vendor.js:156205:58
	get@vendor.js:156162:22
	applyProviderOverridesInScope@vendor.js:177241:25
	compileTestModule@vendor.js:177552:10
	finalize@vendor.js:177065:10
	get testModuleRef@vendor.js:178128:43
	inject@vendor.js:178035:20
	inject@vendor.js:177879:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:33937:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32116:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32131:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
	invokeTask@polyfills.js:543:11
	4124/initZone/ZoneTask/this.invoke@polyfills.js:529:38
	4124/patchTimer/scheduleTask/data.args[0]@polyfills.js:1818:26
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (4 FAILED) (0 secs / 0.237 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 (4 FAILED) (0 secs / 0.245 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (4 FAILED) (0 secs / 0.259 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 10 of 18 (4 FAILED) (0 secs / 0.267 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 10 of 18 (4 FAILED) (0 secs / 0.267 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 10 of 18 (4 FAILED) (0 secs / 0.267 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) (0 secs / 0.303 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) (0 secs / 0.303 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) (0 secs / 0.303 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) (0 secs / 0.303 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) (0 secs / 0.436 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:174922:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:174891:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:174864:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:109260:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:54062:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:15671:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:54056:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:54051:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:127345:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:127369:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:127329:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:127284:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:136897:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:137095:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:136803:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:136787:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:137622:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:176349:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:33937:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:129609:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:129461:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:176346:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:33937:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:32116:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:32131:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) ERROR (0 secs / 0.436 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:174922:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:174891:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:174864:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:109260:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:54062:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:15671:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:54056:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:54051:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:127345:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:127369:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:127329:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:127284:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:136897:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:137095:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:136803:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:136787:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:137622:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:176349:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:33937:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:129609:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:129461:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:176346:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:33937:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:32116:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:32131:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) ERROR (0.529 secs / 0.436 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) DISCONNECTED (30.562 secs / 0.436 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) DISCONNECTED (30.562 secs / 0.436 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
