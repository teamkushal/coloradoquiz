```bash
yarn run v1.22.22
$ ng test
08 07 2025 04:10:55.799:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
08 07 2025 04:10:55.804:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
08 07 2025 04:10:55.808:INFO [launcher]: Starting browser Firefox
08 07 2025 04:10:59.647:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket qslX20XK6SJ_x8lRAAAB with id 58395767
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.024 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.037 secs)
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 61628)
	verifySemanticsOfNgModuleDef@vendor.js:61628:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:61638:33
	verifySemanticsOfNgModuleDef@vendor.js:61636:118
	get@vendor.js:61593:22
	applyProviderOverridesInScope@vendor.js:179424:25
	compileTestModule@vendor.js:179739:10
	finalize@vendor.js:179255:10
	get testModuleRef@vendor.js:180310:43
	inject@vendor.js:180221:20
	inject@vendor.js:180066:33
	1230/</<@main.js:386:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:32903:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:31086:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:31101:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.041 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 61628)
	verifySemanticsOfNgModuleDef@vendor.js:61628:13
	2481/verifySemanticsOfNgModuleDef/<@vendor.js:61638:33
	verifySemanticsOfNgModuleDef@vendor.js:61636:118
	get@vendor.js:61593:22
	applyProviderOverridesInScope@vendor.js:179424:25
	compileTestModule@vendor.js:179739:10
	finalize@vendor.js:179255:10
	get testModuleRef@vendor.js:180310:43
	inject@vendor.js:180221:20
	inject@vendor.js:180066:33
	1230/</<@main.js:386:74
	invoke@polyfills.js:966:158
	onInvoke@vendor.js:32903:33
	invoke@polyfills.js:966:46
	run@polyfills.js:737:35
	runInTestZone@vendor.js:31086:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:31101:16
	<Jasmine>
	invoke@polyfills.js:966:158
	run@polyfills.js:737:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3055:30
	invokeTask@polyfills.js:991:171
	runTask@polyfills.js:790:37
	drainMicroTaskQueue@polyfills.js:1162:23
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.041 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.041 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.041 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.191 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:177065:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:177034:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:177007:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:148168:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:83024:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:12716:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:83018:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:83013:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:34766:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:34790:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:34750:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:34705:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:42472:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:42670:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:42375:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:42364:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:43204:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:178547:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:32903:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:49803:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:49655:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:178544:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:32903:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:31086:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:31101:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3055:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:991:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:790:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) ERROR (0 secs / 0.191 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:177065:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:177034:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:177007:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:148168:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:83024:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:12716:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:83018:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:83013:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:34766:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:34790:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:34750:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:34705:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:42472:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:42670:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:42375:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:42364:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:43204:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:178547:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:32903:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:49803:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:49655:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:178544:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:32903:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:31086:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:31101:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3055:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:991:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:790:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1162:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) ERROR (0.234 secs / 0.191 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) DISCONNECTED (30.255 secs / 0.191 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) DISCONNECTED (30.255 secs / 0.191 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
