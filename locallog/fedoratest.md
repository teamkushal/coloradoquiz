```bash
yarn run v1.22.22
$ ng test
20 05 2025 08:10:56.918:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
20 05 2025 08:10:56.921:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
20 05 2025 08:10:56.977:INFO [launcher]: Starting browser Firefox
20 05 2025 08:11:00.422:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket 2NBfbmlW8nl1KQdCAAAB with id 95987316
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 121655)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:121655:21
	get@vendor.js:122185:27
	get@vendor.js:122185:27
	inject@vendor.js:177907:58
	inject@vendor.js:177750:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:30198:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:28377:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28392:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.036 secs)
Firefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 121655)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:121655:21
	get@vendor.js:122185:27
	get@vendor.js:122185:27
	inject@vendor.js:177907:58
	inject@vendor.js:177750:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:30198:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:28377:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28392:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.061 secs)
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 152982)
	verifySemanticsOfNgModuleDef@vendor.js:152982:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:152992:33
	verifySemanticsOfNgModuleDef@vendor.js:152990:58
	get@vendor.js:152947:22
	applyProviderOverridesInScope@vendor.js:177112:25
	compileTestModule@vendor.js:177423:10
	finalize@vendor.js:176936:10
	get testModuleRef@vendor.js:177999:43
	inject@vendor.js:177906:20
	inject@vendor.js:177750:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:30198:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:28377:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28392:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (2 FAILED) (0 secs / 0.068 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 152982)
	verifySemanticsOfNgModuleDef@vendor.js:152982:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:152992:33
	verifySemanticsOfNgModuleDef@vendor.js:152990:58
	get@vendor.js:152947:22
	applyProviderOverridesInScope@vendor.js:177112:25
	compileTestModule@vendor.js:177423:10
	finalize@vendor.js:176936:10
	get testModuleRef@vendor.js:177999:43
	inject@vendor.js:177906:20
	inject@vendor.js:177750:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:30198:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:28377:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28392:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 (2 FAILED) (0 secs / 0.083 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (2 FAILED) (0 secs / 0.092 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) (0 secs / 0.116 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) (0 secs / 0.116 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) (0 secs / 0.116 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) (0 secs / 0.116 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) (0 secs / 0.276 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:174793:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:174762:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:174735:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:106116:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:50937:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:12553:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:50931:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:50926:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:124185:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:124209:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:124169:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:124124:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:133687:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:133885:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:133593:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:133577:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:134412:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:176220:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30198:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:126449:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:126301:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:176217:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30198:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28377:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28392:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) ERROR (0 secs / 0.276 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:174793:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:174762:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:174735:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:106116:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:50937:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:12553:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:50931:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:50926:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:124185:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:124209:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:124169:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:124124:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:133687:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:133885:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:133593:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:133577:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:134412:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:176220:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30198:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:126449:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:126301:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:176217:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30198:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28377:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28392:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) ERROR (0.341 secs / 0.276 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) DISCONNECTED (30.353 secs / 0.276 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) DISCONNECTED (30.353 secs / 0.276 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
