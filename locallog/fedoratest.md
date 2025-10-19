```bash
yarn run v1.22.22
$ ng test
19 10 2025 09:10:56.522:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
19 10 2025 09:10:56.541:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
19 10 2025 09:10:56.549:INFO [launcher]: Starting browser Firefox
19 10 2025 09:11:00.212:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket s2KLFWKr8KDcTSBIAAAB with id 78689770
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.011 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 2 of 18 (2 FAILED) (0 secs / 0.013 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64): Executed 3 of 18 (2 FAILED) (0 secs / 0.118 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 4 of 18 (2 FAILED) (0 secs / 0.14 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 (2 FAILED) (0 secs / 0.23 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 5 of 18 (2 FAILED) (0 secs / 0.23 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 5 of 18 (2 FAILED) (0 secs / 0.23 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) (0 secs / 0.267 secs)
[1A[2KFirefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 59021)
	verifySemanticsOfNgModuleDef@vendor.js:59021:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:59031:33
	verifySemanticsOfNgModuleDef@vendor.js:59029:118
	get@vendor.js:58986:22
	applyProviderOverridesInScope@vendor.js:181258:25
	compileTestModule@vendor.js:181576:10
	finalize@vendor.js:181089:10
	get testModuleRef@vendor.js:182161:43
	inject@vendor.js:182070:20
	inject@vendor.js:181911:33
	1230/</<@main.js:389:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29168:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27350:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27365:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.271 secs)
Firefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 59021)
	verifySemanticsOfNgModuleDef@vendor.js:59021:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:59031:33
	verifySemanticsOfNgModuleDef@vendor.js:59029:118
	get@vendor.js:58986:22
	applyProviderOverridesInScope@vendor.js:181258:25
	compileTestModule@vendor.js:181576:10
	finalize@vendor.js:181089:10
	get testModuleRef@vendor.js:182161:43
	inject@vendor.js:182070:20
	inject@vendor.js:181911:33
	1230/</<@main.js:389:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29168:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27350:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27365:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) (0 secs / 0.279 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 9 of 18 (3 FAILED) (0 secs / 0.294 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 10 of 18 (3 FAILED) (0 secs / 0.306 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v20.angular.dev/errors/NG0201 in vendor.js (line 84478)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:85331:17
	get@vendor.js:85872:39
	get@vendor.js:86426:27
	get@vendor.js:86426:27
	inject@vendor.js:182071:58
	inject@vendor.js:181911:33
	9074/</<@main.js:1966:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29168:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27350:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27365:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
	invokeTask@polyfills.js:1074:11
	4124/initZone/ZoneTask/this.invoke@polyfills.js:1060:38
	4124/patchTimer/scheduleTask/data.args[0]@polyfills.js:2349:26
Firefox 140.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) (0 secs / 0.323 secs)
Firefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v20.angular.dev/errors/NG0201 in vendor.js (line 84478)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:85331:17
	get@vendor.js:85872:39
	get@vendor.js:86426:27
	get@vendor.js:86426:27
	inject@vendor.js:182071:58
	inject@vendor.js:181911:33
	9074/</<@main.js:1966:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29168:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27350:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27365:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
	invokeTask@polyfills.js:1074:11
	4124/initZone/ZoneTask/this.invoke@polyfills.js:1060:38
	4124/patchTimer/scheduleTask/data.args[0]@polyfills.js:2349:26
[1A[2KFirefox 140.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) (0 secs / 0.335 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) (0 secs / 0.335 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) (0 secs / 0.335 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) (0 secs / 0.335 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) (0 secs / 0.464 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178938:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178907:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178880:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149298:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80272:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11389:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80266:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80261:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30947:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:30971:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30931:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30886:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:39823:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:40021:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:39726:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:39715:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:40555:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180389:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29168:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:37693:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:37545:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180386:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29168:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27350:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27365:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
Firefox 140.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) ERROR (0 secs / 0.464 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178938:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178907:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178880:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149298:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80272:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11389:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80266:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80261:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30947:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:30971:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30931:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30886:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:39823:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:40021:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:39726:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:39715:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:40555:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180389:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29168:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:37693:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:37545:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180386:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29168:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27350:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27365:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) ERROR (0.578 secs / 0.464 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) DISCONNECTED (30.606 secs / 0.464 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) DISCONNECTED (30.606 secs / 0.464 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
