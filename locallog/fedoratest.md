```bash
yarn run v1.22.22
$ ng test
23 03 2025 05:10:59.366:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
23 03 2025 05:10:59.370:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
23 03 2025 05:10:59.377:INFO [launcher]: Starting browser Firefox
23 03 2025 05:11:02.464:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket VA3HDKkVJhI6DmPfAAAB with id 55104759
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 162093)
	verifySemanticsOfNgModuleDef@vendor.js:162093:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:162103:33
	verifySemanticsOfNgModuleDef@vendor.js:162101:58
	get@vendor.js:162058:22
	applyProviderOverridesInScope@vendor.js:180561:25
	compileTestModule@vendor.js:180872:10
	finalize@vendor.js:180385:10
	get testModuleRef@vendor.js:181448:43
	inject@vendor.js:181355:20
	inject@vendor.js:181199:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34079:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32258:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32273:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.01 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 162093)
	verifySemanticsOfNgModuleDef@vendor.js:162093:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:162103:33
	verifySemanticsOfNgModuleDef@vendor.js:162101:58
	get@vendor.js:162058:22
	applyProviderOverridesInScope@vendor.js:180561:25
	compileTestModule@vendor.js:180872:10
	finalize@vendor.js:180385:10
	get testModuleRef@vendor.js:181448:43
	inject@vendor.js:181355:20
	inject@vendor.js:181199:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:34079:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:32258:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:32273:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.01 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.01 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.01 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.212 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178168:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178137:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178110:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:111164:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:46977:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:18782:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:46971:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:46966:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:133344:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:133368:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:133328:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:133283:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:142876:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:143074:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:142782:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:142766:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:143601:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:179669:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34079:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:135639:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:135491:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:179666:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34079:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:32258:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:32273:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) ERROR (0 secs / 0.212 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178168:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178137:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178110:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:111164:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:46977:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:18782:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:46971:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:46966:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:133344:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:133368:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:133328:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:133283:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:142876:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:143074:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:142782:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:142766:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:143601:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:179669:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34079:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:135639:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:135491:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:179666:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:34079:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:32258:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:32273:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) ERROR (0.23 secs / 0.212 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) ERROR (0.23 secs / 0.227 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) DISCONNECTED (30.306 secs / 0.227 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) DISCONNECTED (30.306 secs / 0.227 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
