```bash
yarn run v1.22.22
$ ng test
11 04 2025 14:11:00.676:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
11 04 2025 14:11:00.679:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
11 04 2025 14:11:00.684:INFO [launcher]: Starting browser Firefox
11 04 2025 14:11:04.409:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket pZBUduPSghVCaOgvAAAB with id 14254063
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 130684)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:130684:21
	get@vendor.js:131212:27
	get@vendor.js:131212:27
	injectInjectorOnly@vendor.js:130195:28
	ɵɵinject@vendor.js:130201:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:131325:35
	runInInjectorProfilerContext@vendor.js:129965:5
	hydrate@vendor.js:131324:39
	get@vendor.js:131203:23
	get@vendor.js:145823:32
	lookupTokenUsingModuleInjector@vendor.js:134027:31
	getOrCreateInjectable@vendor.js:134073:10
	ɵɵdirectiveInject@vendor.js:145870:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:134267:38
	instantiateAllDirectives@vendor.js:141288:40
	createDirectivesInstances@vendor.js:141088:27
	create@vendor.js:146494:34
	initComponent@vendor.js:181418:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:45246:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:135455:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:135307:24
	createComponent@vendor.js:181423:37
	createComponent@vendor.js:181209:33
	1675/</<@main.js:643:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:45246:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:43425:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:43440:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.116 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 130684)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:130684:21
	get@vendor.js:131212:27
	get@vendor.js:131212:27
	injectInjectorOnly@vendor.js:130195:28
	ɵɵinject@vendor.js:130201:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:131325:35
	runInInjectorProfilerContext@vendor.js:129965:5
	hydrate@vendor.js:131324:39
	get@vendor.js:131203:23
	get@vendor.js:145823:32
	lookupTokenUsingModuleInjector@vendor.js:134027:31
	getOrCreateInjectable@vendor.js:134073:10
	ɵɵdirectiveInject@vendor.js:145870:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:134267:38
	instantiateAllDirectives@vendor.js:141288:40
	createDirectivesInstances@vendor.js:141088:27
	create@vendor.js:146494:34
	initComponent@vendor.js:181418:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:45246:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:135455:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:135307:24
	createComponent@vendor.js:181423:37
	createComponent@vendor.js:181209:33
	1675/</<@main.js:643:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:45246:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:43425:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:43440:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
11 04 2025 14:11:06.028:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 2 of 18 (2 FAILED) (0 secs / 0.118 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (3 FAILED) (0 secs / 0.12 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 (3 FAILED) (0 secs / 0.134 secs)
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (3 FAILED) (0 secs / 0.134 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (3 FAILED) (0 secs / 0.134 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (3 FAILED) (0 secs / 0.134 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (3 FAILED) (0 secs / 0.134 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (3 FAILED) (0 secs / 0.134 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) (0 secs / 0.279 secs)
[1A[2KERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

Firefox 128.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) (0 secs / 0.279 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) (0 secs / 0.279 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) (0 secs / 0.279 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) (0 secs / 0.279 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.383 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:177872:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:177841:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:177814:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:117260:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:58460:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:21525:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:58454:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:58449:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:133212:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:133236:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:133196:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:133151:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:142692:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:142890:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:142598:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:142582:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:143417:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:179664:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:45246:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:135455:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:135307:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:179661:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:45246:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:43425:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:43440:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:543:11
  4124/initZone/ZoneTask/this.invoke@http://localhost:9876/_karma_webpack_/polyfills.js:529:38
  4124/patchTimer/scheduleTask/data.args[0]@http://localhost:9876/_karma_webpack_/polyfills.js:1818:26
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) ERROR (0 secs / 0.383 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:177872:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:177841:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:177814:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:117260:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:58460:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:21525:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:58454:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:58449:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:133212:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:133236:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:133196:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:133151:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:142692:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:142890:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:142598:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:142582:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:143417:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:179664:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:45246:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:135455:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:135307:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:179661:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:45246:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:43425:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:43440:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:543:11
  4124/initZone/ZoneTask/this.invoke@http://localhost:9876/_karma_webpack_/polyfills.js:529:38
  4124/patchTimer/scheduleTask/data.args[0]@http://localhost:9876/_karma_webpack_/polyfills.js:1818:26
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) ERROR (0.441 secs / 0.383 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) DISCONNECTED (30.455 secs / 0.383 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) DISCONNECTED (30.455 secs / 0.383 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
