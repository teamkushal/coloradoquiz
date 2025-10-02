```bash
yarn run v1.22.22
$ ng test
02 10 2025 04:10:56.655:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
02 10 2025 04:10:56.658:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
02 10 2025 04:10:56.661:INFO [launcher]: Starting browser Firefox
02 10 2025 04:10:59.921:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket _YWcEgPHQtYO5Kl0AAAB with id 99992047
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.058 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.186 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.207 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v20.angular.dev/errors/NG0201 in vendor.js (line 84311)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:85164:17
	get@vendor.js:85705:39
	get@vendor.js:86259:27
	get@vendor.js:86259:27
	inject@vendor.js:181775:58
	inject@vendor.js:181615:33
	9074/</<@main.js:1966:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29164:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27346:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27361:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.219 secs)
Firefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v20.angular.dev/errors/NG0201 in vendor.js (line 84311)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:85164:17
	get@vendor.js:85705:39
	get@vendor.js:86259:27
	get@vendor.js:86259:27
	inject@vendor.js:181775:58
	inject@vendor.js:181615:33
	9074/</<@main.js:1966:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29164:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27346:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27361:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.254 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.268 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 7 of 18 (1 FAILED) (0 secs / 0.299 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 8 of 18 (1 FAILED) (0 secs / 0.392 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 8 of 18 (1 FAILED) (0 secs / 0.392 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 8 of 18 (1 FAILED) (0 secs / 0.392 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 8 of 18 (1 FAILED) (0 secs / 0.392 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 9 of 18 (1 FAILED) (0 secs / 0.528 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178642:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178611:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178584:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149022:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80152:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11388:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80146:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80141:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30942:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:30966:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30926:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30881:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:38886:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:39093:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:38788:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:38777:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:39627:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180093:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29164:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:46348:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:46200:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180090:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29164:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27346:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27361:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
Firefox 140.0 (Linux x86_64): Executed 9 of 18 (1 FAILED) ERROR (0 secs / 0.528 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178642:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178611:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178584:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149022:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80152:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11388:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80146:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80141:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30942:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:30966:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30926:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30881:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:38886:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:39093:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:38788:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:38777:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:39627:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180093:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29164:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:46348:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:46200:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180090:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29164:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27346:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27361:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 9 of 18 (1 FAILED) ERROR (0.616 secs / 0.528 secs)
[1A[2KFirefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 58901)
	verifySemanticsOfNgModuleDef@vendor.js:58901:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:58911:33
	verifySemanticsOfNgModuleDef@vendor.js:58909:118
	get@vendor.js:58866:22
	applyProviderOverridesInScope@vendor.js:180962:25
	compileTestModule@vendor.js:181280:10
	finalize@vendor.js:180793:10
	get testModuleRef@vendor.js:181865:43
	inject@vendor.js:181774:20
	inject@vendor.js:181615:33
	1230/</<@main.js:389:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29164:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27346:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27361:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
Firefox 140.0 (Linux x86_64): Executed 10 of 18 (2 FAILED) ERROR (0.616 secs / 0.535 secs)
Firefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 58901)
	verifySemanticsOfNgModuleDef@vendor.js:58901:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:58911:33
	verifySemanticsOfNgModuleDef@vendor.js:58909:118
	get@vendor.js:58866:22
	applyProviderOverridesInScope@vendor.js:180962:25
	compileTestModule@vendor.js:181280:10
	finalize@vendor.js:180793:10
	get testModuleRef@vendor.js:181865:43
	inject@vendor.js:181774:20
	inject@vendor.js:181615:33
	1230/</<@main.js:389:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29164:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27346:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27361:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 10 of 18 (2 FAILED) DISCONNECTED (30.635 secs / 0.535 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 10 of 18 (2 FAILED) DISCONNECTED (30.635 secs / 0.535 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
