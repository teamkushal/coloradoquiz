```bash
yarn run v1.22.22
$ ng test
17 12 2025 21:10:57.981:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
17 12 2025 21:10:57.987:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
17 12 2025 21:10:57.992:INFO [launcher]: Starting browser Firefox
17 12 2025 21:11:01.308:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket GPsC02ObfpImqBEvAAAB with id 86377499
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.027 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.027 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.027 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.027 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.265 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129461:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129430:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129403:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90798:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47168:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13077:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47162:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47157:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:92025:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:92040:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:92014:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91983:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96906:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:97034:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96843:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96832:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103295:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103269:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103244:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103232:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103225:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130559:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30336:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28515:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28530:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 2 of 18 ERROR (0 secs / 0.265 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129461:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129430:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129403:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90798:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47168:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13077:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47162:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47157:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:92025:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:92040:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:92014:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91983:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96906:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:97034:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96843:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96832:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103295:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103269:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103244:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103232:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103225:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130559:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30336:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28515:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28530:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 2 of 18 ERROR (0.481 secs / 0.265 secs)
[1A[2KFirefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 108825)
	verifySemanticsOfNgModuleDef@vendor.js:108825:13
	6124/verifySemanticsOfNgModuleDef/<@vendor.js:108835:33
	verifySemanticsOfNgModuleDef@vendor.js:108833:112
	get@vendor.js:108792:22
	applyProviderOverridesInScope@vendor.js:131181:25
	compileTestModule@vendor.js:131421:10
	finalize@vendor.js:131057:10
	get testModuleRef@vendor.js:131853:43
	inject@vendor.js:131774:20
	inject@vendor.js:131661:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30336:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28515:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28530:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) ERROR (0.481 secs / 0.273 secs)
Firefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 108825)
	verifySemanticsOfNgModuleDef@vendor.js:108825:13
	6124/verifySemanticsOfNgModuleDef/<@vendor.js:108835:33
	verifySemanticsOfNgModuleDef@vendor.js:108833:112
	get@vendor.js:108792:22
	applyProviderOverridesInScope@vendor.js:131181:25
	compileTestModule@vendor.js:131421:10
	finalize@vendor.js:131057:10
	get testModuleRef@vendor.js:131853:43
	inject@vendor.js:131774:20
	inject@vendor.js:131661:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30336:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28515:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28530:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) ERROR (0.481 secs / 0.288 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v21.angular.dev/errors/NG0201 in vendor.js (line 18278)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:18822:17
	get@vendor.js:19094:39
	get@vendor.js:19416:27
	get@vendor.js:19416:27
	inject@vendor.js:131775:58
	inject@vendor.js:131661:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30336:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28515:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28530:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 5 of 18 (2 FAILED) ERROR (0.481 secs / 0.298 secs)
Firefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v21.angular.dev/errors/NG0201 in vendor.js (line 18278)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:18822:17
	get@vendor.js:19094:39
	get@vendor.js:19416:27
	get@vendor.js:19416:27
	inject@vendor.js:131775:58
	inject@vendor.js:131661:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30336:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28515:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28530:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) ERROR (0.481 secs / 0.314 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) DISCONNECTED (30.499 secs / 0.314 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) DISCONNECTED (30.499 secs / 0.314 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
