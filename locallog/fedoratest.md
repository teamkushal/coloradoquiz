```bash
yarn run v1.22.22
$ ng test
16 04 2025 15:11:05.086:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
16 04 2025 15:11:05.089:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
16 04 2025 15:11:05.093:INFO [launcher]: Starting browser Firefox
16 04 2025 15:11:09.272:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket 5llNXXAUxIautGx9AAAB with id 85200409
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.08 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.1 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.166 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 SUCCESS (0 secs / 0.199 secs)
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 127071)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:127071:21
	get@vendor.js:127599:27
	get@vendor.js:127599:27
	injectInjectorOnly@vendor.js:126582:28
	ɵɵinject@vendor.js:126588:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:127712:35
	runInInjectorProfilerContext@vendor.js:126352:5
	hydrate@vendor.js:127711:39
	get@vendor.js:127590:23
	get@vendor.js:142210:32
	lookupTokenUsingModuleInjector@vendor.js:130414:31
	getOrCreateInjectable@vendor.js:130460:10
	ɵɵdirectiveInject@vendor.js:142257:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:130654:38
	instantiateAllDirectives@vendor.js:137675:40
	createDirectivesInstances@vendor.js:137475:27
	create@vendor.js:142881:34
	initComponent@vendor.js:179312:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:39456:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:131842:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:131694:24
	createComponent@vendor.js:179317:37
	createComponent@vendor.js:179103:33
	1675/</<@main.js:643:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:39456:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:37635:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:37650:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.256 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 127071)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:127071:21
	get@vendor.js:127599:27
	get@vendor.js:127599:27
	injectInjectorOnly@vendor.js:126582:28
	ɵɵinject@vendor.js:126588:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:127712:35
	runInInjectorProfilerContext@vendor.js:126352:5
	hydrate@vendor.js:127711:39
	get@vendor.js:127590:23
	get@vendor.js:142210:32
	lookupTokenUsingModuleInjector@vendor.js:130414:31
	getOrCreateInjectable@vendor.js:130460:10
	ɵɵdirectiveInject@vendor.js:142257:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:130654:38
	instantiateAllDirectives@vendor.js:137675:40
	createDirectivesInstances@vendor.js:137475:27
	create@vendor.js:142881:34
	initComponent@vendor.js:179312:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:39456:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:131842:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:131694:24
	createComponent@vendor.js:179317:37
	createComponent@vendor.js:179103:33
	1675/</<@main.js:643:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:39456:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:37635:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:37650:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
16 04 2025 15:11:10.901:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.256 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.256 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.256 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.376 secs)
[1A[2KERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

Firefox 128.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.376 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:175851:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:175820:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:175793:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:113900:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:55696:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:20466:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:55690:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:55685:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:129599:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:129623:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:129583:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:129538:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:139079:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:139277:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:138985:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:138969:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:139804:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:177558:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:39456:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:131842:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:131694:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:177555:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:39456:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:37635:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:37650:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) ERROR (0 secs / 0.376 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:175851:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:175820:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:175793:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:113900:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:55696:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:20466:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:55690:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:55685:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:129599:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:129623:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:129583:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:129538:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:139079:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:139277:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:138985:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:138969:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:139804:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:177558:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:39456:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:131842:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:131694:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:177555:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:39456:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:37635:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:37650:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) ERROR (0.439 secs / 0.376 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) DISCONNECTED (30.475 secs / 0.376 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) DISCONNECTED (30.475 secs / 0.376 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
