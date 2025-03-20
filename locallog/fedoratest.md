```bash
yarn run v1.22.22
$ ng test
20 03 2025 03:11:03.438:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
20 03 2025 03:11:03.446:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
20 03 2025 03:11:03.488:INFO [launcher]: Starting browser Firefox
20 03 2025 03:11:06.767:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket 2bmtUKFEGzQ4p7XlAAAB with id 90839401
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.039 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.16 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.185 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 SUCCESS (0 secs / 0.195 secs)
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 130086)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:130086:21
	get@vendor.js:130614:27
	get@vendor.js:130614:27
	injectInjectorOnly@vendor.js:129597:28
	ɵɵinject@vendor.js:129603:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:130727:35
	runInInjectorProfilerContext@vendor.js:129367:5
	hydrate@vendor.js:130726:39
	get@vendor.js:130605:23
	get@vendor.js:133138:32
	lookupTokenUsingModuleInjector@vendor.js:133481:31
	getOrCreateInjectable@vendor.js:133527:10
	ɵɵdirectiveInject@vendor.js:145279:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:133721:38
	instantiateAllDirectives@vendor.js:140742:40
	createDirectivesInstances@vendor.js:140542:27
	create@vendor.js:145903:34
	initComponent@vendor.js:180693:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34079:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:134909:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:134761:24
	createComponent@vendor.js:180698:37
	createComponent@vendor.js:180484:33
	1675/</<@main.js:643:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34079:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32258:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32273:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.245 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 130086)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:130086:21
	get@vendor.js:130614:27
	get@vendor.js:130614:27
	injectInjectorOnly@vendor.js:129597:28
	ɵɵinject@vendor.js:129603:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:130727:35
	runInInjectorProfilerContext@vendor.js:129367:5
	hydrate@vendor.js:130726:39
	get@vendor.js:130605:23
	get@vendor.js:133138:32
	lookupTokenUsingModuleInjector@vendor.js:133481:31
	getOrCreateInjectable@vendor.js:133527:10
	ɵɵdirectiveInject@vendor.js:145279:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:133721:38
	instantiateAllDirectives@vendor.js:140742:40
	createDirectivesInstances@vendor.js:140542:27
	create@vendor.js:145903:34
	initComponent@vendor.js:180693:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34079:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:134909:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:134761:24
	createComponent@vendor.js:180698:37
	createComponent@vendor.js:180484:33
	1675/</<@main.js:643:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34079:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32258:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32273:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
20 03 2025 03:11:08.548:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

Firefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.245 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) (0 secs / 0.247 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.248 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.248 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.248 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) (0 secs / 0.275 secs)
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) (0 secs / 0.275 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) (0 secs / 0.275 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) (0 secs / 0.275 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) (0 secs / 0.275 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 128.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) (0 secs / 0.275 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (3 FAILED) (0 secs / 0.367 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 10 of 18 (3 FAILED) (0 secs / 0.382 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 11 of 18 (3 FAILED) (0 secs / 0.396 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 12 of 18 (3 FAILED) (0 secs / 0.441 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 13 of 18 (3 FAILED) (0 secs / 0.451 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (3 FAILED) (0 secs / 0.451 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (3 FAILED) (0 secs / 0.451 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 13 of 18 (3 FAILED) (0 secs / 0.451 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 14 of 18 (3 FAILED) (0 secs / 0.537 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:177438:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:177407:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:177380:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:111159:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:46972:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:18782:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:46966:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:46961:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:132614:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:132638:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:132598:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:132553:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:142146:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:142344:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:142052:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:142036:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:142871:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:178939:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34079:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:134909:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:134761:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:178936:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34079:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:32258:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:32273:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 14 of 18 (3 FAILED) ERROR (0 secs / 0.537 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:177438:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:177407:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:177380:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:111159:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:46972:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:18782:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:46966:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:46961:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:132614:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:132638:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:132598:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:132553:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:142146:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:142344:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:142052:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:142036:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:142871:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:178939:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34079:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:134909:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:134761:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:178936:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34079:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:32258:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:32273:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 14 of 18 (3 FAILED) ERROR (0.642 secs / 0.537 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 14 of 18 (3 FAILED) DISCONNECTED (30.656 secs / 0.537 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 14 of 18 (3 FAILED) DISCONNECTED (30.656 secs / 0.537 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
