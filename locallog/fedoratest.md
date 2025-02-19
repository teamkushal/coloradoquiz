```bash
yarn run v1.22.22
$ ng test
19 02 2025 13:10:59.771:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
19 02 2025 13:10:59.774:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
19 02 2025 13:10:59.797:INFO [launcher]: Starting browser Firefox
19 02 2025 13:11:02.918:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket AOd9s9ubKrNYN9qwAAAB with id 42756045
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.008 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 2 of 18 (2 FAILED) (0 secs / 0.01 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 77694)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:77694:21
	get@vendor.js:78218:27
	get@vendor.js:78218:27
	injectInjectorOnly@vendor.js:77150:36
	ɵɵinject@vendor.js:77156:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:78331:35
	runInInjectorProfilerContext@vendor.js:76921:5
	hydrate@vendor.js:78330:39
	get@vendor.js:78209:23
	get@vendor.js:80775:32
	lookupTokenUsingModuleInjector@vendor.js:81118:31
	getOrCreateInjectable@vendor.js:81164:10
	ɵɵdirectiveInject@vendor.js:92884:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:81358:38
	instantiateAllDirectives@vendor.js:88339:40
	createDirectivesInstances@vendor.js:88058:27
	create@vendor.js:93489:34
	initComponent@vendor.js:121406:45
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6490:33
	invoke@polyfills.js:413:46
	onInvoke@vendor.js:82570:25
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	run@vendor.js:82422:24
	createComponent@vendor.js:121411:37
	createComponent@vendor.js:121197:33
	1675/</<@main.js:38:80
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6490:33
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	runInTestZone@vendor.js:4669:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:4684:16
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:184:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2502:30
	invokeTask@polyfills.js:438:171
	runTask@polyfills.js:237:37
	drainMicroTaskQueue@polyfills.js:609:23
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (3 FAILED) (0 secs / 0.094 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 77694)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:77694:21
	get@vendor.js:78218:27
	get@vendor.js:78218:27
	injectInjectorOnly@vendor.js:77150:36
	ɵɵinject@vendor.js:77156:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:78331:35
	runInInjectorProfilerContext@vendor.js:76921:5
	hydrate@vendor.js:78330:39
	get@vendor.js:78209:23
	get@vendor.js:80775:32
	lookupTokenUsingModuleInjector@vendor.js:81118:31
	getOrCreateInjectable@vendor.js:81164:10
	ɵɵdirectiveInject@vendor.js:92884:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:81358:38
	instantiateAllDirectives@vendor.js:88339:40
	createDirectivesInstances@vendor.js:88058:27
	create@vendor.js:93489:34
	initComponent@vendor.js:121406:45
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6490:33
	invoke@polyfills.js:413:46
	onInvoke@vendor.js:82570:25
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	run@vendor.js:82422:24
	createComponent@vendor.js:121411:37
	createComponent@vendor.js:121197:33
	1675/</<@main.js:38:80
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6490:33
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	runInTestZone@vendor.js:4669:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:4684:16
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:184:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2502:30
	invokeTask@polyfills.js:438:171
	runTask@polyfills.js:237:37
	drainMicroTaskQueue@polyfills.js:609:23
19 02 2025 13:11:04.437:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 (3 FAILED) (0 secs / 0.177 secs)
[1A[2KERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

Firefox 128.0 (Linux x86_64): Executed 4 of 18 (3 FAILED) (0 secs / 0.177 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) (0 secs / 0.199 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) (0 secs / 0.199 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) (0 secs / 0.199 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) (0 secs / 0.199 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.306 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 355)
  createReal@http://localhost:9876/_karma_webpack_/main.js:355:7
  submit@http://localhost:9876/_karma_webpack_/main.js:368:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:1685:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:4064:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1681:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1664:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:80237:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:80261:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:80221:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:80176:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:89956:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:90151:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:89862:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:89846:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:90498:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:119654:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6490:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:82570:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:82422:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:119651:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1584:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6490:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:4669:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:4684:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2502:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:438:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:237:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:609:23
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:518:11
  4124/initZone/ZoneTask/this.invoke@http://localhost:9876/_karma_webpack_/polyfills.js:504:38
  4124/patchTimer/scheduleTask/data.args[0]@http://localhost:9876/_karma_webpack_/polyfills.js:1793:26
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) ERROR (0 secs / 0.306 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 355)
  createReal@http://localhost:9876/_karma_webpack_/main.js:355:7
  submit@http://localhost:9876/_karma_webpack_/main.js:368:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:1685:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:4064:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1681:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1664:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:80237:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:80261:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:80221:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:80176:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:89956:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:90151:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:89862:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:89846:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:90498:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:119654:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6490:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:82570:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:82422:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:119651:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1584:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6490:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:4669:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:4684:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2502:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:438:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:237:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:609:23
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:518:11
  4124/initZone/ZoneTask/this.invoke@http://localhost:9876/_karma_webpack_/polyfills.js:504:38
  4124/patchTimer/scheduleTask/data.args[0]@http://localhost:9876/_karma_webpack_/polyfills.js:1793:26
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) ERROR (0.351 secs / 0.306 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) DISCONNECTED (30.387 secs / 0.306 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) DISCONNECTED (30.387 secs / 0.306 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
