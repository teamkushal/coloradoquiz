```bash
yarn run v1.22.22
$ ng test
16 10 2025 13:10:59.756:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
16 10 2025 13:10:59.759:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
16 10 2025 13:10:59.768:INFO [launcher]: Starting browser Firefox
16 10 2025 13:11:04.125:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket _oVbBFqIDL7DTwUsAAAB with id 72739954
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.035 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.055 secs)
[1A[2KFirefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 59056)
	verifySemanticsOfNgModuleDef@vendor.js:59056:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:59066:33
	verifySemanticsOfNgModuleDef@vendor.js:59064:118
	get@vendor.js:59021:22
	applyProviderOverridesInScope@vendor.js:181239:25
	compileTestModule@vendor.js:181557:10
	finalize@vendor.js:181070:10
	get testModuleRef@vendor.js:182142:43
	inject@vendor.js:182051:20
	inject@vendor.js:181892:33
	1230/</<@main.js:389:74
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
Firefox 140.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.062 secs)
Firefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 59056)
	verifySemanticsOfNgModuleDef@vendor.js:59056:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:59066:33
	verifySemanticsOfNgModuleDef@vendor.js:59064:118
	get@vendor.js:59021:22
	applyProviderOverridesInScope@vendor.js:181239:25
	compileTestModule@vendor.js:181557:10
	finalize@vendor.js:181070:10
	get testModuleRef@vendor.js:182142:43
	inject@vendor.js:182051:20
	inject@vendor.js:181892:33
	1230/</<@main.js:389:74
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
[1A[2KFirefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.073 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.085 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v20.angular.dev/errors/NG0201 in vendor.js (line 84466)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:85319:17
	get@vendor.js:85860:39
	get@vendor.js:86414:27
	get@vendor.js:86414:27
	inject@vendor.js:182052:58
	inject@vendor.js:181892:33
	9074/</<@main.js:1966:74
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
Firefox 140.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) (0 secs / 0.095 secs)
Firefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v20.angular.dev/errors/NG0201 in vendor.js (line 84466)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:85319:17
	get@vendor.js:85860:39
	get@vendor.js:86414:27
	get@vendor.js:86414:27
	inject@vendor.js:182052:58
	inject@vendor.js:181892:33
	9074/</<@main.js:1966:74
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
[1A[2KFirefox 140.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) (0 secs / 0.137 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) (0 secs / 0.137 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) (0 secs / 0.137 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 140.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) (0 secs / 0.186 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) (0 secs / 0.265 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 10 of 18 (2 FAILED) (0 secs / 0.37 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 11 of 18 (2 FAILED) (0 secs / 0.389 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 11 of 18 (2 FAILED) (0 secs / 0.389 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 11 of 18 (2 FAILED) (0 secs / 0.389 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 11 of 18 (2 FAILED) (0 secs / 0.389 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 12 of 18 (2 FAILED) (0 secs / 0.554 secs)
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
Firefox 140.0 (Linux x86_64): Executed 12 of 18 (2 FAILED) ERROR (0 secs / 0.554 secs)
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
[1A[2KFirefox 140.0 (Linux x86_64): Executed 12 of 18 (2 FAILED) ERROR (0.659 secs / 0.554 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 12 of 18 (2 FAILED) DISCONNECTED (30.674 secs / 0.554 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 12 of 18 (2 FAILED) DISCONNECTED (30.674 secs / 0.554 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
