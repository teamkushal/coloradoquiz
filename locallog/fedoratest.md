```bash
yarn run v1.22.22
$ ng test
[32m08 11 2024 12:57:18.813:INFO [karma-server]: [39mKarma v6.4.2 server started at http://localhost:9876/
[32m08 11 2024 12:57:18.816:INFO [launcher]: [39mLaunching browsers FirefoxHeadless with concurrency unlimited
[32m08 11 2024 12:57:18.822:INFO [launcher]: [39mStarting browser Firefox
[32m08 11 2024 12:57:21.485:INFO [Firefox 115.0 (Linux x86_64)]: [39mConnected on socket vgHLa7KqmAHENKwaAAAB with id 19671264
Firefox 115.0 (Linux x86_64): Executed 0 of 18[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2K[31mFirefox 115.0 (Linux x86_64) AppComponent should create the app FAILED[39m
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 77307)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:77307:21
	get@vendor.js:78689:27
	get@vendor.js:78689:27
	injectInjectorOnly@vendor.js:76767:36
	ɵɵinject@vendor.js:76773:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:78807:35
	runInInjectorProfilerContext@vendor.js:76538:5
	hydrate@vendor.js:78806:39
	get@vendor.js:78680:23
	get@vendor.js:80960:32
	lookupTokenUsingModuleInjector@vendor.js:81303:31
	getOrCreateInjectable@vendor.js:81349:10
	ɵɵdirectiveInject@vendor.js:87248:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:81543:38
	createRootComponent@vendor.js:92067:48
	create@vendor.js:91924:21
	initComponent@vendor.js:117903:45
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6489:33
	invoke@polyfills.js:413:46
	onInvoke@vendor.js:82719:25
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	run@vendor.js:82571:24
	createComponent@vendor.js:117913:37
	createComponent@vendor.js:117706:33
	1675/</<@main.js:38:80
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6489:33
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	runInTestZone@vendor.js:4669:30
	wrapTestInZone/<@vendor.js:4684:16
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:184:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2502:30
	invokeTask@polyfills.js:438:171
	runTask@polyfills.js:237:37
	drainMicroTaskQueue@polyfills.js:609:23
Firefox 115.0 (Linux x86_64): Executed 1 of 18[31m (1 FAILED)[39m (0 secs / 0.15 secs)
Firefox 115.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 77307)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:77307:21
	get@vendor.js:78689:27
	get@vendor.js:78689:27
	injectInjectorOnly@vendor.js:76767:36
	ɵɵinject@vendor.js:76773:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:78807:35
	runInInjectorProfilerContext@vendor.js:76538:5
	hydrate@vendor.js:78806:39
	get@vendor.js:78680:23
	get@vendor.js:80960:32
	lookupTokenUsingModuleInjector@vendor.js:81303:31
	getOrCreateInjectable@vendor.js:81349:10
	ɵɵdirectiveInject@vendor.js:87248:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:81543:38
	createRootComponent@vendor.js:92067:48
	create@vendor.js:91924:21
	initComponent@vendor.js:117903:45
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6489:33
	invoke@polyfills.js:413:46
	onInvoke@vendor.js:82719:25
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	run@vendor.js:82571:24
	createComponent@vendor.js:117913:37
	createComponent@vendor.js:117706:33
	1675/</<@main.js:38:80
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6489:33
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	runInTestZone@vendor.js:4669:30
	wrapTestInZone/<@vendor.js:4684:16
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:184:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2502:30
	invokeTask@polyfills.js:438:171
	runTask@polyfills.js:237:37
	drainMicroTaskQueue@polyfills.js:609:23
[33m08 11 2024 12:57:22.914:WARN [web-server]: [39m404: /_karma_webpack_/ngsw-worker.js
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 115.0 (Linux x86_64): Executed 1 of 18[31m (1 FAILED)[39m (0 secs / 0.15 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

[1A[2KFirefox 115.0 (Linux x86_64): Executed 2 of 18[31m (1 FAILED)[39m (0 secs / 0.166 secs)
[1A[2K[31mFirefox 115.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED[39m
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 115.0 (Linux x86_64): Executed 3 of 18[31m (2 FAILED)[39m (0 secs / 0.169 secs)
Firefox 115.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2K[31mFirefox 115.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED[39m
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 115.0 (Linux x86_64): Executed 4 of 18[31m (3 FAILED)[39m (0 secs / 0.171 secs)
Firefox 115.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 115.0 (Linux x86_64): Executed 5 of 18[31m (3 FAILED)[39m (0 secs / 0.191 secs)
[1A[2K[31mFirefox 115.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED[39m
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 77307)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:77307:21
	get@vendor.js:78689:27
	get@vendor.js:78689:27
	inject@vendor.js:117836:58
	inject@vendor.js:117691:33
	9074/</<@main.js:411:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6489:33
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	runInTestZone@vendor.js:4669:30
	wrapTestInZone/<@vendor.js:4684:16
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:184:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2502:30
	invokeTask@polyfills.js:438:171
	runTask@polyfills.js:237:37
	drainMicroTaskQueue@polyfills.js:609:23
	invokeTask@polyfills.js:518:11
	4124/initZone/ZoneTask/this.invoke@polyfills.js:504:38
	4124/patchTimer/scheduleTask/data.args[0]@polyfills.js:1793:26
Firefox 115.0 (Linux x86_64): Executed 6 of 18[31m (4 FAILED)[39m (0 secs / 0.205 secs)
Firefox 115.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 77307)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:77307:21
	get@vendor.js:78689:27
	get@vendor.js:78689:27
	inject@vendor.js:117836:58
	inject@vendor.js:117691:33
	9074/</<@main.js:411:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6489:33
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	runInTestZone@vendor.js:4669:30
	wrapTestInZone/<@vendor.js:4684:16
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:184:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2502:30
	invokeTask@polyfills.js:438:171
	runTask@polyfills.js:237:37
	drainMicroTaskQueue@polyfills.js:609:23
	invokeTask@polyfills.js:518:11
	4124/initZone/ZoneTask/this.invoke@polyfills.js:504:38
	4124/patchTimer/scheduleTask/data.args[0]@polyfills.js:1793:26
[1A[2KFirefox 115.0 (Linux x86_64): Executed 7 of 18[31m (4 FAILED)[39m (0 secs / 0.214 secs)
[1A[2KFirefox 115.0 (Linux x86_64): Executed 8 of 18[31m (4 FAILED)[39m (0 secs / 0.223 secs)
[1A[2KERROR: [36m'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 115.0 (Linux x86_64): Executed 8 of 18[31m (4 FAILED)[39m (0 secs / 0.223 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 115.0 (Linux x86_64): Executed 8 of 18[31m (4 FAILED)[39m (0 secs / 0.223 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 115.0 (Linux x86_64): Executed 8 of 18[31m (4 FAILED)[39m (0 secs / 0.223 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 115.0 (Linux x86_64): Executed 9 of 18[31m (4 FAILED)[39m (0 secs / 0.386 secs)
[1A[2K[31mFirefox 115.0 (Linux x86_64) ERROR[39m
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 353)
  createReal@http://localhost:9876/_karma_webpack_/main.js:353:7
  submit@http://localhost:9876/_karma_webpack_/main.js:366:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:1677:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:4064:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1673:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1656:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:80679:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:80703:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:80663:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:80618:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:89020:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:89214:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:88925:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:88906:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:89514:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:116228:30
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6489:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:82719:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:82571:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:116227:18
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1576:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6489:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:4669:30
  wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:4684:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2502:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:438:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:237:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:609:23
Firefox 115.0 (Linux x86_64): Executed 9 of 18[31m (4 FAILED)[39m[31m ERROR[39m (0 secs / 0.386 secs)
Firefox 115.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 353)
  createReal@http://localhost:9876/_karma_webpack_/main.js:353:7
  submit@http://localhost:9876/_karma_webpack_/main.js:366:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:1677:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:4064:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1673:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1656:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:80679:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:80703:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:80663:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:80618:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:89020:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:89214:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:88925:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:88906:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:89514:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:116228:30
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6489:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:82719:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:82571:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:116227:18
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1576:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6489:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:4669:30
  wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:4684:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2502:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:438:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:237:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:609:23
[1A[2KFirefox 115.0 (Linux x86_64): Executed 9 of 18[31m (4 FAILED)[39m[31m ERROR[39m (0.425 secs / 0.386 secs)
[1A[2K[31mFirefox 115.0 (Linux x86_64) ERROR[39m
  Disconnected , because no message in 30000 ms.
Firefox 115.0 (Linux x86_64): Executed 9 of 18[31m (4 FAILED)[39m[31m DISCONNECTED[39m (30.462 secs / 0.386 secs)
Firefox 115.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 115.0 (Linux x86_64): Executed 9 of 18[31m (4 FAILED)[39m[31m DISCONNECTED[39m (30.462 secs / 0.386 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
