```bash
yarn run v1.22.22
$ ng test
26 11 2025 04:10:56.907:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
26 11 2025 04:10:56.910:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
26 11 2025 04:10:56.915:INFO [launcher]: Starting browser Firefox
26 11 2025 04:11:00.059:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket WxSYT4A9NT-lbciIAAAB with id 3564346
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.046 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.066 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.129 secs)
[1A[2KFirefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 108737)
	verifySemanticsOfNgModuleDef@vendor.js:108737:13
	6124/verifySemanticsOfNgModuleDef/<@vendor.js:108747:33
	verifySemanticsOfNgModuleDef@vendor.js:108745:112
	get@vendor.js:108704:22
	applyProviderOverridesInScope@vendor.js:131039:25
	compileTestModule@vendor.js:131279:10
	finalize@vendor.js:130915:10
	get testModuleRef@vendor.js:131702:43
	inject@vendor.js:131623:20
	inject@vendor.js:131510:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30294:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28473:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28488:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.134 secs)
Firefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 108737)
	verifySemanticsOfNgModuleDef@vendor.js:108737:13
	6124/verifySemanticsOfNgModuleDef/<@vendor.js:108747:33
	verifySemanticsOfNgModuleDef@vendor.js:108745:112
	get@vendor.js:108704:22
	applyProviderOverridesInScope@vendor.js:131039:25
	compileTestModule@vendor.js:131279:10
	finalize@vendor.js:130915:10
	get testModuleRef@vendor.js:131702:43
	inject@vendor.js:131623:20
	inject@vendor.js:131510:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30294:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28473:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28488:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.165 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.819 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.819 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.819 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 140.0 (Linux x86_64): Executed 7 of 18 (1 FAILED) (0 secs / 0.875 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (1 FAILED) (0 secs / 0.875 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (1 FAILED) (0 secs / 0.875 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (1 FAILED) (0 secs / 0.875 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 8 of 18 (1 FAILED) (0 secs / 1.041 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129319:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129288:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129261:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90780:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47132:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13034:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47126:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47121:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:92006:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:92021:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:91995:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91964:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96854:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:96982:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96791:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96780:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103228:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103202:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103177:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103165:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103158:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130417:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30294:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28473:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28488:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 8 of 18 (1 FAILED) ERROR (0 secs / 1.041 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129319:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129288:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129261:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90780:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47132:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13034:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47126:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47121:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:92006:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:92021:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:91995:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91964:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96854:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:96982:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96791:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96780:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103228:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103202:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103177:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103165:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103158:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130417:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30294:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28473:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28488:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 8 of 18 (1 FAILED) ERROR (1.342 secs / 1.041 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 8 of 18 (1 FAILED) DISCONNECTED (31.363 secs / 1.041 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 8 of 18 (1 FAILED) DISCONNECTED (31.363 secs / 1.041 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
