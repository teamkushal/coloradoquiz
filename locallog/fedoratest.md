```bash
yarn run v1.22.22
$ ng test
12 02 2025 05:11:01.231:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
12 02 2025 05:11:01.236:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
12 02 2025 05:11:01.242:INFO [launcher]: Starting browser Firefox
12 02 2025 05:11:04.960:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket Hw0r3E880XfMxt8mAAAB with id 81876588
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.066 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.081 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.163 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 SUCCESS (0 secs / 0.177 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 SUCCESS (0 secs / 0.192 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 SUCCESS (0 secs / 0.204 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 SUCCESS (0 secs / 0.261 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 SUCCESS (0 secs / 0.281 secs)
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 109018)
	verifySemanticsOfNgModuleDef@vendor.js:109018:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:109028:33
	verifySemanticsOfNgModuleDef@vendor.js:109026:58
	get@vendor.js:108983:22
	applyProviderOverridesInScope@vendor.js:120506:25
	compileTestModule@vendor.js:120817:10
	finalize@vendor.js:120330:10
	get testModuleRef@vendor.js:121391:43
	inject@vendor.js:121298:20
	inject@vendor.js:121142:33
	1230/</<@main.js:1368:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6490:33
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	runInTestZone@vendor.js:4669:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:4684:16
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:184:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2502:30
	invokeTask@polyfills.js:438:171
	runTask@polyfills.js:237:37
	drainMicroTaskQueue@polyfills.js:609:23
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (1 FAILED) (0 secs / 0.284 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 109018)
	verifySemanticsOfNgModuleDef@vendor.js:109018:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:109028:33
	verifySemanticsOfNgModuleDef@vendor.js:109026:58
	get@vendor.js:108983:22
	applyProviderOverridesInScope@vendor.js:120506:25
	compileTestModule@vendor.js:120817:10
	finalize@vendor.js:120330:10
	get testModuleRef@vendor.js:121391:43
	inject@vendor.js:121298:20
	inject@vendor.js:121142:33
	1230/</<@main.js:1368:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6490:33
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	runInTestZone@vendor.js:4669:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:4684:16
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:184:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2502:30
	invokeTask@polyfills.js:438:171
	runTask@polyfills.js:237:37
	drainMicroTaskQueue@polyfills.js:609:23
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (1 FAILED) (0 secs / 0.284 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (1 FAILED) (0 secs / 0.284 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 9 of 18 (1 FAILED) (0 secs / 0.284 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 10 of 18 (1 FAILED) (0 secs / 0.399 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 355)
  createReal@http://localhost:9876/_karma_webpack_/main.js:355:7
  submit@http://localhost:9876/_karma_webpack_/main.js:368:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:1685:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:4064:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1681:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1664:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:80227:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:80251:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:80211:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:80166:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:89946:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:90141:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:89852:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:89836:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:90488:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:119614:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6490:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:82560:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:82412:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:119611:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1584:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6490:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:4669:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:4684:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2502:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:438:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:237:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:609:23
Firefox 128.0 (Linux x86_64): Executed 10 of 18 (1 FAILED) ERROR (0 secs / 0.399 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 355)
  createReal@http://localhost:9876/_karma_webpack_/main.js:355:7
  submit@http://localhost:9876/_karma_webpack_/main.js:368:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:1685:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:4064:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1681:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1664:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:80227:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:80251:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:80211:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:80166:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:89946:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:90141:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:89852:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:89836:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:90488:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:119614:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6490:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:82560:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:82412:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:119611:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1584:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6490:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:4669:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:4684:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2502:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:438:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:237:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:609:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 10 of 18 (1 FAILED) ERROR (0.446 secs / 0.399 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 10 of 18 (1 FAILED) DISCONNECTED (30.536 secs / 0.399 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 10 of 18 (1 FAILED) DISCONNECTED (30.536 secs / 0.399 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
