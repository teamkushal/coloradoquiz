```bash
yarn run v1.22.22
$ ng test
12 08 2025 04:10:56.534:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
12 08 2025 04:10:56.536:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
12 08 2025 04:10:56.541:INFO [launcher]: Starting browser Firefox
12 08 2025 04:10:59.881:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket FzRonTviV5YQZMoyAAAB with id 46077437
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.026 secs)
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 61246)
	verifySemanticsOfNgModuleDef@vendor.js:61246:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:61256:33
	verifySemanticsOfNgModuleDef@vendor.js:61254:118
	get@vendor.js:61211:22
	applyProviderOverridesInScope@vendor.js:181499:25
	compileTestModule@vendor.js:181814:10
	finalize@vendor.js:181330:10
	get testModuleRef@vendor.js:182385:43
	inject@vendor.js:182296:20
	inject@vendor.js:182141:33
	1230/</<@main.js:386:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:32216:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:30399:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:30414:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.031 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 61246)
	verifySemanticsOfNgModuleDef@vendor.js:61246:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:61256:33
	verifySemanticsOfNgModuleDef@vendor.js:61254:118
	get@vendor.js:61211:22
	applyProviderOverridesInScope@vendor.js:181499:25
	compileTestModule@vendor.js:181814:10
	finalize@vendor.js:181330:10
	get testModuleRef@vendor.js:182385:43
	inject@vendor.js:182296:20
	inject@vendor.js:182141:33
	1230/</<@main.js:386:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:32216:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:30399:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:30414:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.045 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (2 FAILED) (0 secs / 0.047 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) (0 secs / 0.049 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.134 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.134 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.134 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.168 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) (0 secs / 0.181 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (3 FAILED) (0 secs / 0.238 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 10 of 18 (3 FAILED) (0 secs / 0.25 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 11 of 18 (3 FAILED) (0 secs / 0.266 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 12 of 18 (3 FAILED) (0 secs / 0.271 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 13 of 18 (3 FAILED) (0 secs / 0.283 secs)
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (3 FAILED) (0 secs / 0.283 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (3 FAILED) (0 secs / 0.283 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (3 FAILED) (0 secs / 0.283 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (3 FAILED) (0 secs / 0.283 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (3 FAILED) (0 secs / 0.283 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 14 of 18 (3 FAILED) (0 secs / 0.375 secs)
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: NG0201: No provider found for `HttpClient`. Source: DynamicTestModule. Path: IpinfoService -> HttpClient. Find more at https://angular.dev/errors/NG0201 in vendor.js (line 87355)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpClient`.', ngTokenPath: [ 'IpinfoService', 'HttpClient' ] })
	createRuntimeError@vendor.js:88208:17
	get@vendor.js:88749:39
	get@vendor.js:89303:27
	get@vendor.js:89303:27
	retrieve@vendor.js:89188:19
	injectInjectorOnly@vendor.js:88323:35
	ɵɵinject@vendor.js:88335:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	4205/hydrate/<@vendor.js:89429:35
	runInInjectorProfilerContext@vendor.js:88028:5
	hydrate@vendor.js:89427:39
	get@vendor.js:89294:23
	get@vendor.js:45096:32
	lookupTokenUsingModuleInjector@vendor.js:34906:31
	getOrCreateInjectable@vendor.js:34952:10
	ɵɵdirectiveInject@vendor.js:45143:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:35156:38
	instantiateAllDirectives@vendor.js:41099:40
	createDirectivesInstances@vendor.js:40882:27
	create@vendor.js:46224:34
	initComponent@vendor.js:182360:45
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:32216:33
	invoke@polyfills.js:966:46
	onInvoke@vendor.js:49301:25
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	run@vendor.js:49153:24
	createComponent@vendor.js:182365:37
	createComponent@vendor.js:182152:33
	1675/</<@main.js:633:80
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:32216:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:30399:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:30414:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 15 of 18 (4 FAILED) (0 secs / 0.409 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: NG0201: No provider found for `HttpClient`. Source: DynamicTestModule. Path: IpinfoService -> HttpClient. Find more at https://angular.dev/errors/NG0201 in vendor.js (line 87355)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpClient`.', ngTokenPath: [ 'IpinfoService', 'HttpClient' ] })
	createRuntimeError@vendor.js:88208:17
	get@vendor.js:88749:39
	get@vendor.js:89303:27
	get@vendor.js:89303:27
	retrieve@vendor.js:89188:19
	injectInjectorOnly@vendor.js:88323:35
	ɵɵinject@vendor.js:88335:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	4205/hydrate/<@vendor.js:89429:35
	runInInjectorProfilerContext@vendor.js:88028:5
	hydrate@vendor.js:89427:39
	get@vendor.js:89294:23
	get@vendor.js:45096:32
	lookupTokenUsingModuleInjector@vendor.js:34906:31
	getOrCreateInjectable@vendor.js:34952:10
	ɵɵdirectiveInject@vendor.js:45143:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:35156:38
	instantiateAllDirectives@vendor.js:41099:40
	createDirectivesInstances@vendor.js:40882:27
	create@vendor.js:46224:34
	initComponent@vendor.js:182360:45
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:32216:33
	invoke@polyfills.js:966:46
	onInvoke@vendor.js:49301:25
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	run@vendor.js:49153:24
	createComponent@vendor.js:182365:37
	createComponent@vendor.js:182152:33
	1675/</<@main.js:633:80
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:32216:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:30399:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:30414:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
12 08 2025 04:11:01.973:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 15 of 18 (4 FAILED) (0 secs / 0.409 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 15 of 18 (4 FAILED) (0 secs / 0.409 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 15 of 18 (4 FAILED) (0 secs / 0.409 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 16 of 18 (4 FAILED) (0 secs / 0.479 secs)
[1A[2KERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
Firefox 128.0 (Linux x86_64): Executed 16 of 18 (4 FAILED) (0 secs / 0.479 secs)
ERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:179150:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:179119:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:179092:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149816:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:83999:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:12800:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:83993:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:83988:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:34089:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:34113:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:34073:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:34028:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:41866:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:42064:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:41769:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:41758:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:42598:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180632:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:32216:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:49301:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:49153:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180629:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:32216:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:30399:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:30414:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3055:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:991:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:790:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1162:23
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:1071:11
  4124/initZone/ZoneTask/this.invoke@http://localhost:9876/_karma_webpack_/polyfills.js:1057:38
  4124/patchTimer/scheduleTask/data.args[0]@http://localhost:9876/_karma_webpack_/polyfills.js:2346:26
Firefox 128.0 (Linux x86_64): Executed 16 of 18 (4 FAILED) ERROR (0 secs / 0.479 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:179150:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:179119:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:179092:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149816:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:83999:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:12800:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:83993:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:83988:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:34089:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:34113:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:34073:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:34028:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:41866:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:42064:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:41769:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:41758:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:42598:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180632:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:32216:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:49301:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:49153:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180629:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:32216:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:30399:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:30414:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3055:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:991:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:790:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1162:23
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:1071:11
  4124/initZone/ZoneTask/this.invoke@http://localhost:9876/_karma_webpack_/polyfills.js:1057:38
  4124/patchTimer/scheduleTask/data.args[0]@http://localhost:9876/_karma_webpack_/polyfills.js:2346:26
[1A[2KFirefox 128.0 (Linux x86_64): Executed 16 of 18 (4 FAILED) ERROR (0.539 secs / 0.479 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 16 of 18 (4 FAILED) DISCONNECTED (30.549 secs / 0.479 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 16 of 18 (4 FAILED) DISCONNECTED (30.549 secs / 0.479 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
