```bash
yarn run v1.22.22
$ ng test
08 10 2025 15:11:00.219:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
08 10 2025 15:11:00.234:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
08 10 2025 15:11:00.241:INFO [launcher]: Starting browser Firefox
08 10 2025 15:11:04.275:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket 0qKrHb7Ruw14VOuBAAAB with id 90197334
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.023 secs)
[1A[2KFirefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 59039)
	verifySemanticsOfNgModuleDef@vendor.js:59039:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:59049:33
	verifySemanticsOfNgModuleDef@vendor.js:59047:118
	get@vendor.js:59004:22
	applyProviderOverridesInScope@vendor.js:181108:25
	compileTestModule@vendor.js:181426:10
	finalize@vendor.js:180939:10
	get testModuleRef@vendor.js:182011:43
	inject@vendor.js:181920:20
	inject@vendor.js:181761:33
	1230/</<@main.js:389:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29203:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27385:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27400:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
Firefox 140.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.026 secs)
Firefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 59039)
	verifySemanticsOfNgModuleDef@vendor.js:59039:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:59049:33
	verifySemanticsOfNgModuleDef@vendor.js:59047:118
	get@vendor.js:59004:22
	applyProviderOverridesInScope@vendor.js:181108:25
	compileTestModule@vendor.js:181426:10
	finalize@vendor.js:180939:10
	get testModuleRef@vendor.js:182011:43
	inject@vendor.js:181920:20
	inject@vendor.js:181761:33
	1230/</<@main.js:389:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29203:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27385:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27400:16
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
Firefox 140.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.026 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.026 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.026 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.25 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178788:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178757:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178730:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149156:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80290:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11388:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80284:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80279:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30981:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:31005:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30965:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30920:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:38996:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:39194:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:38899:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:38888:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:39728:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180239:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29203:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:46449:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:46301:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180236:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29203:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27385:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27400:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
Firefox 140.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) ERROR (0 secs / 0.25 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178788:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178757:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178730:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149156:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80290:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11388:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80284:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80279:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30981:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:31005:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30965:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30920:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:38996:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:39194:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:38899:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:38888:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:39728:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180239:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29203:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:46449:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:46301:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180236:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29203:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27385:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27400:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) ERROR (0.192 secs / 0.25 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) DISCONNECTED (30.213 secs / 0.25 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) DISCONNECTED (30.213 secs / 0.25 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
