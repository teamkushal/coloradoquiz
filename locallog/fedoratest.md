```bash
yarn run v1.22.22
$ ng test
16 10 2025 05:10:56.942:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
16 10 2025 05:10:56.945:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
16 10 2025 05:10:56.949:INFO [launcher]: Starting browser Firefox
16 10 2025 05:11:00.096:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket dNk7k_Ff6sHnIZh5AAAB with id 55632416
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.013 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 2 of 18 (2 FAILED) (0 secs / 0.015 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: NG0201: No provider found for `HttpClient`. Source: DynamicTestModule. Path: IpinfoService -> HttpClient. Find more at https://v20.angular.dev/errors/NG0201 in vendor.js (line 84466)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpClient`.', ngTokenPath: [ 'IpinfoService', 'HttpClient' ] })
	createRuntimeError@vendor.js:85319:17
	get@vendor.js:85860:39
	get@vendor.js:86414:27
	get@vendor.js:86414:27
	retrieve@vendor.js:86299:19
	injectInjectorOnly@vendor.js:85434:35
	ɵɵinject@vendor.js:85446:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	4205/hydrate/<@vendor.js:86546:35
	runInInjectorProfilerContext@vendor.js:85139:5
	hydrate@vendor.js:86544:39
	get@vendor.js:86405:23
	get@vendor.js:42240:32
	lookupTokenUsingModuleInjector@vendor.js:31800:31
	getOrCreateInjectable@vendor.js:31846:10
	ɵɵdirectiveInject@vendor.js:42287:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:32050:38
	instantiateAllDirectives@vendor.js:38232:40
	createDirectivesInstances@vendor.js:38015:27
	create@vendor.js:43380:34
	initComponent@vendor.js:182117:45
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29204:33
	invoke@polyfills.js:969:46
	onInvoke@vendor.js:46457:25
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	run@vendor.js:46309:24
	createComponent@vendor.js:182122:37
	createComponent@vendor.js:181903:33
	1675/</<@main.js:638:80
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29204:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27386:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27401:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
Firefox 140.0 (Linux x86_64): Executed 3 of 18 (3 FAILED) (0 secs / 0.129 secs)
Firefox 140.0 (Linux x86_64) AppComponent should create the app FAILED
	ɵNotFound: NG0201: No provider found for `HttpClient`. Source: DynamicTestModule. Path: IpinfoService -> HttpClient. Find more at https://v20.angular.dev/errors/NG0201 in vendor.js (line 84466)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpClient`.', ngTokenPath: [ 'IpinfoService', 'HttpClient' ] })
	createRuntimeError@vendor.js:85319:17
	get@vendor.js:85860:39
	get@vendor.js:86414:27
	get@vendor.js:86414:27
	retrieve@vendor.js:86299:19
	injectInjectorOnly@vendor.js:85434:35
	ɵɵinject@vendor.js:85446:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:57
	4205/hydrate/<@vendor.js:86546:35
	runInInjectorProfilerContext@vendor.js:85139:5
	hydrate@vendor.js:86544:39
	get@vendor.js:86405:23
	get@vendor.js:42240:32
	lookupTokenUsingModuleInjector@vendor.js:31800:31
	getOrCreateInjectable@vendor.js:31846:10
	ɵɵdirectiveInject@vendor.js:42287:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:32050:38
	instantiateAllDirectives@vendor.js:38232:40
	createDirectivesInstances@vendor.js:38015:27
	create@vendor.js:43380:34
	initComponent@vendor.js:182117:45
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29204:33
	invoke@polyfills.js:969:46
	onInvoke@vendor.js:46457:25
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	run@vendor.js:46309:24
	createComponent@vendor.js:182122:37
	createComponent@vendor.js:181903:33
	1675/</<@main.js:638:80
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29204:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27386:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27401:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 3 of 18 (3 FAILED) (0 secs / 0.129 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
16 10 2025 05:11:02.160:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 3 of 18 (3 FAILED) (0 secs / 0.129 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 3 of 18 (3 FAILED) (0 secs / 0.129 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 4 of 18 (3 FAILED) (0 secs / 0.311 secs)
[1A[2KERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (3 FAILED) (0 secs / 0.311 secs)
ERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178919:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178888:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178861:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149286:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80307:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11389:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80301:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80296:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30983:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:31007:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30967:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30922:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:39004:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:39202:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:38907:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:38896:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:39736:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180370:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29204:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:46457:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:46309:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180367:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29204:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27386:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27401:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (3 FAILED) ERROR (0 secs / 0.311 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178919:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178888:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178861:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149286:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80307:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11389:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80301:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80296:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30983:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:31007:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30967:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30922:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:39004:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:39202:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:38907:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:38896:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:39736:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180370:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29204:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:46457:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:46309:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180367:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29204:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27386:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27401:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 4 of 18 (3 FAILED) ERROR (0.084 secs / 0.311 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (3 FAILED) DISCONNECTED (30.098 secs / 0.311 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 4 of 18 (3 FAILED) DISCONNECTED (30.098 secs / 0.311 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
