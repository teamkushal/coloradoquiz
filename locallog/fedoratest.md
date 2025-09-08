```bash
yarn run v1.22.22
$ ng test
08 09 2025 13:10:57.636:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
08 09 2025 13:10:57.640:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
08 09 2025 13:10:57.666:INFO [launcher]: Starting browser Firefox
08 09 2025 13:11:00.837:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket oMgVJfc39jQd7nn4AAAB with id 4916108
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.038 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.055 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.074 secs)
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 58845)
	verifySemanticsOfNgModuleDef@vendor.js:58845:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:58855:33
	verifySemanticsOfNgModuleDef@vendor.js:58853:118
	get@vendor.js:58810:22
	applyProviderOverridesInScope@vendor.js:180974:25
	compileTestModule@vendor.js:181292:10
	finalize@vendor.js:180805:10
	get testModuleRef@vendor.js:181877:43
	inject@vendor.js:181786:20
	inject@vendor.js:181627:33
	1230/</<@main.js:389:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29142:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27324:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27339:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.077 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 58845)
	verifySemanticsOfNgModuleDef@vendor.js:58845:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:58855:33
	verifySemanticsOfNgModuleDef@vendor.js:58853:118
	get@vendor.js:58810:22
	applyProviderOverridesInScope@vendor.js:180974:25
	compileTestModule@vendor.js:181292:10
	finalize@vendor.js:180805:10
	get testModuleRef@vendor.js:181877:43
	inject@vendor.js:181786:20
	inject@vendor.js:181627:33
	1230/</<@main.js:389:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29142:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27324:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27339:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.089 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.182 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.182 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.182 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.182 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (1 FAILED) (0 secs / 0.305 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178654:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178623:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178596:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149048:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80095:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11374:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80089:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80084:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30921:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:30945:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30905:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30860:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:38707:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:38905:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:38610:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:38599:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:39439:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180105:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29142:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:46151:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:46003:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180102:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29142:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27324:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27339:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
Firefox 128.0 (Linux x86_64): Executed 7 of 18 (1 FAILED) ERROR (0 secs / 0.305 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178654:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178623:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178596:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149048:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80095:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11374:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80089:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80084:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30921:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:30945:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30905:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30860:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:38707:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:38905:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:38610:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:38599:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:39439:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180105:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29142:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:46151:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:46003:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180102:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29142:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27324:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27339:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (1 FAILED) ERROR (0.386 secs / 0.305 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 7 of 18 (1 FAILED) DISCONNECTED (30.398 secs / 0.305 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (1 FAILED) DISCONNECTED (30.398 secs / 0.305 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
