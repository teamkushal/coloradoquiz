```bash
yarn run v1.22.22
$ ng test
01 05 2025 19:11:03.447:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
01 05 2025 19:11:03.449:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
01 05 2025 19:11:03.454:INFO [launcher]: Starting browser Firefox
01 05 2025 19:11:07.007:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket mZOiq9St46XReUBlAAAB with id 61032311
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.038 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.135 secs)
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 125374)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:125374:21
	get@vendor.js:125904:27
	get@vendor.js:125904:27
	injectInjectorOnly@vendor.js:124885:28
	ɵɵinject@vendor.js:124891:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:126017:35
	runInInjectorProfilerContext@vendor.js:124655:5
	hydrate@vendor.js:126016:39
	get@vendor.js:125895:23
	get@vendor.js:140545:32
	lookupTokenUsingModuleInjector@vendor.js:128719:31
	getOrCreateInjectable@vendor.js:128765:10
	ɵɵdirectiveInject@vendor.js:140592:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:128959:38
	instantiateAllDirectives@vendor.js:136002:40
	createDirectivesInstances@vendor.js:135802:27
	create@vendor.js:141216:34
	initComponent@vendor.js:177697:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34328:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:130168:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:130020:24
	createComponent@vendor.js:177702:37
	createComponent@vendor.js:177488:33
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
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.368 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 125374)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:125374:21
	get@vendor.js:125904:27
	get@vendor.js:125904:27
	injectInjectorOnly@vendor.js:124885:28
	ɵɵinject@vendor.js:124891:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:126017:35
	runInInjectorProfilerContext@vendor.js:124655:5
	hydrate@vendor.js:126016:39
	get@vendor.js:125895:23
	get@vendor.js:140545:32
	lookupTokenUsingModuleInjector@vendor.js:128719:31
	getOrCreateInjectable@vendor.js:128765:10
	ɵɵdirectiveInject@vendor.js:140592:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:128959:38
	instantiateAllDirectives@vendor.js:136002:40
	createDirectivesInstances@vendor.js:135802:27
	create@vendor.js:141216:34
	initComponent@vendor.js:177697:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34328:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:130168:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:130020:24
	createComponent@vendor.js:177702:37
	createComponent@vendor.js:177488:33
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
01 05 2025 19:11:09.072:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.551 secs)
[1A[2KERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.551 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.551 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.551 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.551 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.795 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:174516:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:174485:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:174458:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:109170:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:52013:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:17114:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:52007:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:52002:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:127904:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:127928:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:127888:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:127843:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:137406:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:137604:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:137312:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:137296:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:138131:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:175943:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34328:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:130168:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:130020:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:175940:22
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
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) ERROR (0 secs / 0.795 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:174516:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:174485:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:174458:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:109170:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:52013:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:17114:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:52007:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:52002:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:127904:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:127928:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:127888:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:127843:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:137406:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:137604:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:137312:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:137296:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:138131:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:175943:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34328:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:130168:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:130020:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:175940:22
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
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) ERROR (0.891 secs / 0.795 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) DISCONNECTED (30.951 secs / 0.795 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) DISCONNECTED (30.951 secs / 0.795 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
