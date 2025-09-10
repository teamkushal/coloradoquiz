```bash
yarn run v1.22.22
$ ng test
10 09 2025 19:10:57.278:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
10 09 2025 19:10:57.282:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
10 09 2025 19:10:57.303:INFO [launcher]: Starting browser Firefox
10 09 2025 19:11:00.562:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket Y8-VCBTpS5Gj5bkmAAAB with id 37829820
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.189 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.209 secs)
[1A[2KFirefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: NG0201: No provider found for `HttpClient`. Source: DynamicTestModule. Path: IpinfoService -> HttpClient. Find more at https://angular.dev/errors/NG0201 in vendor.js (line 84279)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpClient`.', ngTokenPath: [ 'IpinfoService', 'HttpClient' ] })
	createRuntimeError@vendor.js:85132:17
	get@vendor.js:85673:39
	get@vendor.js:86227:27
	get@vendor.js:86227:27
	retrieve@vendor.js:86112:19
	injectInjectorOnly@vendor.js:85247:35
	ɵɵinject@vendor.js:85259:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	4205/hydrate/<@vendor.js:86353:35
	runInInjectorProfilerContext@vendor.js:84952:5
	hydrate@vendor.js:86351:39
	get@vendor.js:86218:23
	get@vendor.js:41941:32
	lookupTokenUsingModuleInjector@vendor.js:31742:31
	getOrCreateInjectable@vendor.js:31788:10
	ɵɵdirectiveInject@vendor.js:41988:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:31992:38
	instantiateAllDirectives@vendor.js:37939:40
	createDirectivesInstances@vendor.js:37722:27
	create@vendor.js:43078:34
	initComponent@vendor.js:181862:45
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29146:33
	invoke@polyfills.js:969:46
	onInvoke@vendor.js:46155:25
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	run@vendor.js:46007:24
	createComponent@vendor.js:181867:37
	createComponent@vendor.js:181648:33
	1675/</<@main.js:638:80
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29146:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27328:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27343:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.32 secs)
Firefox 128.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: NG0201: No provider found for `HttpClient`. Source: DynamicTestModule. Path: IpinfoService -> HttpClient. Find more at https://angular.dev/errors/NG0201 in vendor.js (line 84279)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpClient`.', ngTokenPath: [ 'IpinfoService', 'HttpClient' ] })
	createRuntimeError@vendor.js:85132:17
	get@vendor.js:85673:39
	get@vendor.js:86227:27
	get@vendor.js:86227:27
	retrieve@vendor.js:86112:19
	injectInjectorOnly@vendor.js:85247:35
	ɵɵinject@vendor.js:85259:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	4205/hydrate/<@vendor.js:86353:35
	runInInjectorProfilerContext@vendor.js:84952:5
	hydrate@vendor.js:86351:39
	get@vendor.js:86218:23
	get@vendor.js:41941:32
	lookupTokenUsingModuleInjector@vendor.js:31742:31
	getOrCreateInjectable@vendor.js:31788:10
	ɵɵdirectiveInject@vendor.js:41988:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:31992:38
	instantiateAllDirectives@vendor.js:37939:40
	createDirectivesInstances@vendor.js:37722:27
	create@vendor.js:43078:34
	initComponent@vendor.js:181862:45
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29146:33
	invoke@polyfills.js:969:46
	onInvoke@vendor.js:46155:25
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	run@vendor.js:46007:24
	createComponent@vendor.js:181867:37
	createComponent@vendor.js:181648:33
	1675/</<@main.js:638:80
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29146:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27328:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27343:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (2 FAILED) (0 secs / 0.324 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) (0 secs / 0.325 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) (0 secs / 0.325 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) (0 secs / 0.325 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.377 secs)
10 09 2025 19:11:03.059:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.377 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.377 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.377 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.377 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.377 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.57 secs)
[1A[2KERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
Firefox 128.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.57 secs)
ERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) (0 secs / 0.59 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (3 FAILED) (0 secs / 0.62 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 10 of 18 (3 FAILED) (0 secs / 0.708 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 11 of 18 (3 FAILED) (0 secs / 0.726 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (3 FAILED) (0 secs / 0.726 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (3 FAILED) (0 secs / 0.726 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (3 FAILED) (0 secs / 0.726 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 12 of 18 (3 FAILED) (0 secs / 0.838 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178664:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178633:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178606:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149052:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80099:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11374:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80093:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80088:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30925:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:30949:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30909:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30864:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:38711:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:38909:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:38614:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:38603:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:39443:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180115:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29146:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:46155:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:46007:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180112:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29146:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27328:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27343:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
Firefox 128.0 (Linux x86_64): Executed 12 of 18 (3 FAILED) ERROR (0 secs / 0.838 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178664:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178633:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178606:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149052:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80099:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11374:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80093:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80088:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30925:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:30949:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30909:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30864:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:38711:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:38909:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:38614:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:38603:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:39443:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180115:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29146:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:46155:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:46007:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180112:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29146:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27328:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27343:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 12 of 18 (3 FAILED) ERROR (0.962 secs / 0.838 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 12 of 18 (3 FAILED) DISCONNECTED (31.002 secs / 0.838 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 12 of 18 (3 FAILED) DISCONNECTED (31.002 secs / 0.838 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
