```bash
yarn run v1.22.22
$ ng test
02 03 2025 05:11:00.073:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
02 03 2025 05:11:00.083:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
02 03 2025 05:11:00.089:INFO [launcher]: Starting browser Firefox
02 03 2025 05:11:04.024:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket 5B_CrBJOhdDzdUyVAAAB with id 7718729
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.037 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.052 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.075 secs)
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 131140)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:131140:21
	get@vendor.js:131664:27
	get@vendor.js:131664:27
	injectInjectorOnly@vendor.js:130596:36
	ɵɵinject@vendor.js:130602:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:131777:35
	runInInjectorProfilerContext@vendor.js:130368:5
	hydrate@vendor.js:131776:39
	get@vendor.js:131655:23
	get@vendor.js:134222:32
	lookupTokenUsingModuleInjector@vendor.js:134565:31
	getOrCreateInjectable@vendor.js:134611:10
	ɵɵdirectiveInject@vendor.js:146495:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:134805:38
	instantiateAllDirectives@vendor.js:141909:40
	createDirectivesInstances@vendor.js:141709:27
	create@vendor.js:147115:34
	initComponent@vendor.js:181885:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:40531:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:136017:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:135869:24
	createComponent@vendor.js:181890:37
	createComponent@vendor.js:181676:33
	1675/</<@main.js:642:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:40531:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:38710:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:38725:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.155 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 131140)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:131140:21
	get@vendor.js:131664:27
	get@vendor.js:131664:27
	injectInjectorOnly@vendor.js:130596:36
	ɵɵinject@vendor.js:130602:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:131777:35
	runInInjectorProfilerContext@vendor.js:130368:5
	hydrate@vendor.js:131776:39
	get@vendor.js:131655:23
	get@vendor.js:134222:32
	lookupTokenUsingModuleInjector@vendor.js:134565:31
	getOrCreateInjectable@vendor.js:134611:10
	ɵɵdirectiveInject@vendor.js:146495:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:134805:38
	instantiateAllDirectives@vendor.js:141909:40
	createDirectivesInstances@vendor.js:141709:27
	create@vendor.js:147115:34
	initComponent@vendor.js:181885:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:40531:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:136017:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:135869:24
	createComponent@vendor.js:181890:37
	createComponent@vendor.js:181676:33
	1675/</<@main.js:642:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:40531:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:38710:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:38725:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
02 03 2025 05:11:05.579:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.155 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.155 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.155 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.288 secs)
[1A[2KERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

Firefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.288 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1201)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1201:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1214:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:536:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178696:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178665:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178638:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:115308:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:51449:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:19748:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:51443:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:51438:69
  getData@http://localhost:9876/_karma_webpack_/main.js:532:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:515:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:133684:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:133708:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:133668:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:133623:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:143359:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:143557:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:143265:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:143249:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:144093:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180133:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:40531:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:136017:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:135869:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180130:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1679:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:40531:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:38710:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:38725:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) ERROR (0 secs / 0.288 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1201)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1201:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1214:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:536:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178696:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178665:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178638:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:115308:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:51449:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:19748:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:51443:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:51438:69
  getData@http://localhost:9876/_karma_webpack_/main.js:532:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:515:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:133684:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:133708:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:133668:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:133623:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:143359:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:143557:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:143265:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:143249:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:144093:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180133:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:40531:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:136017:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:135869:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180130:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1679:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:40531:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:38710:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:38725:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) ERROR (0.371 secs / 0.288 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) DISCONNECTED (30.392 secs / 0.288 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) DISCONNECTED (30.392 secs / 0.288 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
