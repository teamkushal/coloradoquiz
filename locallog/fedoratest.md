```bash
yarn run v1.22.22
$ ng test
06 03 2025 10:11:01.376:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
06 03 2025 10:11:01.384:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
06 03 2025 10:11:01.397:INFO [launcher]: Starting browser Firefox
06 03 2025 10:11:04.482:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket 94o35m0_hAANnHgiAAAB with id 26712368
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.185 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1201)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1201:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1214:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:536:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178742:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178711:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178684:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:115368:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:51507:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:19748:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:51501:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:51496:69
  getData@http://localhost:9876/_karma_webpack_/main.js:532:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:515:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:133739:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:133763:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:133723:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:133678:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:143402:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:143600:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:143308:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:143292:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:144127:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180179:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:40531:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:136069:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:135921:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180176:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1679:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:40531:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:38710:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:38725:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 1 of 18 ERROR (0 secs / 0.185 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1201)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1201:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1214:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:536:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178742:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178711:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178684:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:115368:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:51507:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:19748:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:51501:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:51496:69
  getData@http://localhost:9876/_karma_webpack_/main.js:532:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:515:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:133739:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:133763:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:133723:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:133678:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:143402:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:143600:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:143308:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:143292:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:144127:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180179:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:40531:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:136069:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:135921:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180176:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1679:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:40531:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:38710:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:38725:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 ERROR (0.244 secs / 0.185 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 ERROR (0.244 secs / 0.207 secs)
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 162808)
	verifySemanticsOfNgModuleDef@vendor.js:162808:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:162818:33
	verifySemanticsOfNgModuleDef@vendor.js:162816:58
	get@vendor.js:162773:22
	applyProviderOverridesInScope@vendor.js:181071:25
	compileTestModule@vendor.js:181382:10
	finalize@vendor.js:180895:10
	get testModuleRef@vendor.js:181956:43
	inject@vendor.js:181863:20
	inject@vendor.js:181707:33
	1230/</<@main.js:391:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:40531:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:38710:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:38725:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) ERROR (0.244 secs / 0.21 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 162808)
	verifySemanticsOfNgModuleDef@vendor.js:162808:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:162818:33
	verifySemanticsOfNgModuleDef@vendor.js:162816:58
	get@vendor.js:162773:22
	applyProviderOverridesInScope@vendor.js:181071:25
	compileTestModule@vendor.js:181382:10
	finalize@vendor.js:180895:10
	get testModuleRef@vendor.js:181956:43
	inject@vendor.js:181863:20
	inject@vendor.js:181707:33
	1230/</<@main.js:391:74
	invoke@polyfills.js:438:158
	onInvoke@vendor.js:40531:33
	invoke@polyfills.js:438:46
	run@polyfills.js:209:35
	runInTestZone@vendor.js:38710:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:38725:16
	<Jasmine>
	invoke@polyfills.js:438:158
	run@polyfills.js:209:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2527:30
	invokeTask@polyfills.js:463:171
	runTask@polyfills.js:262:37
	drainMicroTaskQueue@polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) DISCONNECTED (30.278 secs / 0.21 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) DISCONNECTED (30.278 secs / 0.21 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
