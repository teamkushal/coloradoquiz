```bash
yarn run v1.22.22
$ ng test
28 10 2025 04:10:58.279:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
28 10 2025 04:10:58.289:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
28 10 2025 04:10:58.294:INFO [launcher]: Starting browser Firefox
28 10 2025 04:11:02.540:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket OIy2XCu5BT3a46CWAAAB with id 49540620
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.057 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.066 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.076 secs)
[1A[2KFirefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 59053)
	verifySemanticsOfNgModuleDef@vendor.js:59053:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:59063:33
	verifySemanticsOfNgModuleDef@vendor.js:59061:118
	get@vendor.js:59018:22
	applyProviderOverridesInScope@vendor.js:181293:25
	compileTestModule@vendor.js:181611:10
	finalize@vendor.js:181124:10
	get testModuleRef@vendor.js:182196:43
	inject@vendor.js:182105:20
	inject@vendor.js:181946:33
	1230/</<@main.js:389:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29192:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27374:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27389:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.08 secs)
Firefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 59053)
	verifySemanticsOfNgModuleDef@vendor.js:59053:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:59063:33
	verifySemanticsOfNgModuleDef@vendor.js:59061:118
	get@vendor.js:59018:22
	applyProviderOverridesInScope@vendor.js:181293:25
	compileTestModule@vendor.js:181611:10
	finalize@vendor.js:181124:10
	get testModuleRef@vendor.js:182196:43
	inject@vendor.js:182105:20
	inject@vendor.js:181946:33
	1230/</<@main.js:389:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29192:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27374:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27389:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.097 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.097 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.097 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.097 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.29 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178973:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178942:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178915:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149333:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80304:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11413:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80298:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80293:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30971:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:30995:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30955:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30910:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:39847:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:40045:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:39750:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:39739:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:40579:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180424:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29192:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:37717:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:37569:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180421:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29192:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27374:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27389:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
Firefox 140.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) ERROR (0 secs / 0.29 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178973:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178942:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178915:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149333:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80304:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11413:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80298:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80293:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30971:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:30995:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30955:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30910:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:39847:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:40045:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:39750:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:39739:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:40579:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180424:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29192:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:37717:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:37569:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180421:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29192:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27374:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27389:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) ERROR (0.251 secs / 0.29 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) DISCONNECTED (30.278 secs / 0.29 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) DISCONNECTED (30.278 secs / 0.29 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
