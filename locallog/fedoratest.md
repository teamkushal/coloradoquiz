```bash
yarn run v1.22.22
$ ng test
09 04 2025 14:11:36.964:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
09 04 2025 14:11:36.973:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
09 04 2025 14:11:36.980:INFO [launcher]: Starting browser Firefox
09 04 2025 14:11:41.752:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket CX4tSwc0Wyr1MBpAAAAB with id 19560608
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.014 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 2 of 18 (2 FAILED) (0 secs / 0.016 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 (2 FAILED) (0 secs / 0.041 secs)
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (2 FAILED) (0 secs / 0.041 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (2 FAILED) (0 secs / 0.041 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (2 FAILED) (0 secs / 0.041 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (2 FAILED) (0 secs / 0.041 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (2 FAILED) (0 secs / 0.041 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 (2 FAILED) (0 secs / 0.261 secs)
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 122731)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:122731:21
	get@vendor.js:123259:27
	get@vendor.js:123259:27
	injectInjectorOnly@vendor.js:122242:28
	ɵɵinject@vendor.js:122248:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:123372:35
	runInInjectorProfilerContext@vendor.js:122012:5
	hydrate@vendor.js:123371:39
	get@vendor.js:123250:23
	get@vendor.js:137870:32
	lookupTokenUsingModuleInjector@vendor.js:126074:31
	getOrCreateInjectable@vendor.js:126120:10
	ɵɵdirectiveInject@vendor.js:137917:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:126314:38
	instantiateAllDirectives@vendor.js:133335:40
	createDirectivesInstances@vendor.js:133135:27
	create@vendor.js:138541:34
	initComponent@vendor.js:181950:45
	invoke@polyfills.js:968:158
	onInvoke@vendor.js:37270:33
	invoke@polyfills.js:968:46
	onInvoke@vendor.js:127502:25
	invoke@polyfills.js:968:46
	run@polyfills.js:739:35
	run@vendor.js:127354:24
	createComponent@vendor.js:181955:37
	createComponent@vendor.js:181741:33
	1675/</<@main.js:643:80
	invoke@polyfills.js:968:158
	onInvoke@vendor.js:37270:33
	invoke@polyfills.js:968:46
	run@polyfills.js:739:35
	runInTestZone@vendor.js:35449:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:35464:16
	<Jasmine>
	invoke@polyfills.js:968:158
	run@polyfills.js:739:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3057:30
	invokeTask@polyfills.js:993:171
	runTask@polyfills.js:792:37
	drainMicroTaskQueue@polyfills.js:1164:23
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) (0 secs / 0.336 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 122731)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:122731:21
	get@vendor.js:123259:27
	get@vendor.js:123259:27
	injectInjectorOnly@vendor.js:122242:28
	ɵɵinject@vendor.js:122248:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	7580/hydrate/<@vendor.js:123372:35
	runInInjectorProfilerContext@vendor.js:122012:5
	hydrate@vendor.js:123371:39
	get@vendor.js:123250:23
	get@vendor.js:137870:32
	lookupTokenUsingModuleInjector@vendor.js:126074:31
	getOrCreateInjectable@vendor.js:126120:10
	ɵɵdirectiveInject@vendor.js:137917:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:126314:38
	instantiateAllDirectives@vendor.js:133335:40
	createDirectivesInstances@vendor.js:133135:27
	create@vendor.js:138541:34
	initComponent@vendor.js:181950:45
	invoke@polyfills.js:968:158
	onInvoke@vendor.js:37270:33
	invoke@polyfills.js:968:46
	onInvoke@vendor.js:127502:25
	invoke@polyfills.js:968:46
	run@polyfills.js:739:35
	run@vendor.js:127354:24
	createComponent@vendor.js:181955:37
	createComponent@vendor.js:181741:33
	1675/</<@main.js:643:80
	invoke@polyfills.js:968:158
	onInvoke@vendor.js:37270:33
	invoke@polyfills.js:968:46
	run@polyfills.js:739:35
	runInTestZone@vendor.js:35449:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:35464:16
	<Jasmine>
	invoke@polyfills.js:968:158
	run@polyfills.js:739:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3057:30
	invokeTask@polyfills.js:993:171
	runTask@polyfills.js:792:37
	drainMicroTaskQueue@polyfills.js:1164:23
09 04 2025 14:11:44.114:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.418 secs)
[1A[2KERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

Firefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.418 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.418 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.418 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.418 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.543 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178404:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178373:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178346:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:101903:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47477:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13563:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47471:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47466:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:125259:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:125283:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:125243:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:125198:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:134739:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:134937:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:134645:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:134629:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:135464:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180196:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:37270:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:127502:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:739:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:127354:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180193:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:37270:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:739:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:35449:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:35464:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:739:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3057:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:993:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:792:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1164:23
Firefox 128.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) ERROR (0 secs / 0.543 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178404:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178373:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178346:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:101903:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47477:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13563:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47471:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47466:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:125259:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:125283:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:125243:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:125198:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:134739:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:134937:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:134645:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:134629:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:135464:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180196:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:37270:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:127502:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:739:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:127354:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180193:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:37270:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:739:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:35449:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:35464:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:739:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3057:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:993:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:792:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1164:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) ERROR (0.632 secs / 0.543 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) DISCONNECTED (30.648 secs / 0.543 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) DISCONNECTED (30.648 secs / 0.543 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
