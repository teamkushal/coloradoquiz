```bash
yarn run v1.22.22
$ ng test
29 03 2025 16:10:59.713:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
29 03 2025 16:10:59.717:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
29 03 2025 16:10:59.723:INFO [launcher]: Starting browser Firefox
29 03 2025 16:11:03.318:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket dTluT5_p769SMnhEAAAB with id 10726940
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 127510)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:127510:21
	get@vendor.js:128038:27
	get@vendor.js:128038:27
	injectInjectorOnly@vendor.js:127021:28
	ɵɵinject@vendor.js:127027:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:128151:35
	runInInjectorProfilerContext@vendor.js:126791:5
	hydrate@vendor.js:128150:39
	get@vendor.js:128029:23
	get@vendor.js:130562:32
	lookupTokenUsingModuleInjector@vendor.js:130905:31
	getOrCreateInjectable@vendor.js:130951:10
	ɵɵdirectiveInject@vendor.js:142703:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:131145:38
	instantiateAllDirectives@vendor.js:138166:40
	createDirectivesInstances@vendor.js:137966:27
	create@vendor.js:143327:34
	initComponent@vendor.js:178102:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34727:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:132333:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:132185:24
	createComponent@vendor.js:178107:37
	createComponent@vendor.js:177893:33
	1675/</<@main.js:643:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34727:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32906:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32921:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.103 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 127510)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:127510:21
	get@vendor.js:128038:27
	get@vendor.js:128038:27
	injectInjectorOnly@vendor.js:127021:28
	ɵɵinject@vendor.js:127027:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:128151:35
	runInInjectorProfilerContext@vendor.js:126791:5
	hydrate@vendor.js:128150:39
	get@vendor.js:128029:23
	get@vendor.js:130562:32
	lookupTokenUsingModuleInjector@vendor.js:130905:31
	getOrCreateInjectable@vendor.js:130951:10
	ɵɵdirectiveInject@vendor.js:142703:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:131145:38
	instantiateAllDirectives@vendor.js:138166:40
	createDirectivesInstances@vendor.js:137966:27
	create@vendor.js:143327:34
	initComponent@vendor.js:178102:45
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34727:33
	invoke@polyfills.js:438:46
	onInvoke@vendor.js:132333:25
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	run@vendor.js:132185:24
	createComponent@vendor.js:178107:37
	createComponent@vendor.js:177893:33
	1675/</<@main.js:643:80
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34727:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32906:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32921:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
29 03 2025 16:11:05.042:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.103 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.103 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.103 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.103 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.103 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.232 secs)
[1A[2KERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

Firefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.232 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.232 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.232 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.232 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.346 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:174847:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:174816:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:174789:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:106006:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47664:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:18780:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47658:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47653:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:130038:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:130062:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:130022:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:129977:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:139570:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:139768:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:139476:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:139460:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:140295:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:176348:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34727:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:132333:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:132185:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:176345:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34727:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:32906:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:32921:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) ERROR (0 secs / 0.346 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:174847:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:174816:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:174789:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:106006:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47664:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:18780:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47658:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47653:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:130038:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:130062:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:130022:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:129977:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:139570:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:139768:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:139476:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:139460:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:140295:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:176348:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34727:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:132333:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:132185:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:176345:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34727:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:32906:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:32921:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) ERROR (0.385 secs / 0.346 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) DISCONNECTED (30.395 secs / 0.346 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) DISCONNECTED (30.395 secs / 0.346 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
