```bash
yarn run v1.22.22
$ ng test
11 01 2026 07:10:52.171:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
11 01 2026 07:10:52.173:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
11 01 2026 07:10:52.178:INFO [launcher]: Starting browser Firefox
11 01 2026 07:10:55.734:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket x3oAV_cLcouVYQr8AAAB with id 96899755
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.095 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.137 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.161 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 4 of 18 SUCCESS (0 secs / 0.178 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 4 of 18 SUCCESS (0 secs / 0.178 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 4 of 18 SUCCESS (0 secs / 0.178 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 4 of 18 SUCCESS (0 secs / 0.178 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 SUCCESS (0 secs / 0.448 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129449:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129418:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129391:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90778:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47142:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13055:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47136:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47131:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:92006:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:92021:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:91995:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91964:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96890:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:97018:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96827:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96816:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103279:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103253:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103228:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103216:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103209:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130546:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30305:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28484:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28499:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 5 of 18 ERROR (0 secs / 0.448 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129449:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129418:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129391:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90778:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47142:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13055:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47136:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47131:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:92006:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:92021:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:91995:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91964:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96890:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:97018:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96827:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96816:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103279:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103253:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103228:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103216:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103209:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130546:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30305:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28484:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28499:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 ERROR (0.647 secs / 0.448 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 ERROR (0.647 secs / 0.462 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 7 of 18 ERROR (0.647 secs / 0.475 secs)
[1A[2KFirefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 108838)
	verifySemanticsOfNgModuleDef@vendor.js:108838:13
	6124/verifySemanticsOfNgModuleDef/<@vendor.js:108848:33
	verifySemanticsOfNgModuleDef@vendor.js:108846:112
	get@vendor.js:108805:22
	applyProviderOverridesInScope@vendor.js:131168:25
	compileTestModule@vendor.js:131408:10
	finalize@vendor.js:131044:10
	get testModuleRef@vendor.js:131840:43
	inject@vendor.js:131761:20
	inject@vendor.js:131648:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30305:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28484:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28499:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 8 of 18 (1 FAILED) ERROR (0.647 secs / 0.479 secs)
Firefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 108838)
	verifySemanticsOfNgModuleDef@vendor.js:108838:13
	6124/verifySemanticsOfNgModuleDef/<@vendor.js:108848:33
	verifySemanticsOfNgModuleDef@vendor.js:108846:112
	get@vendor.js:108805:22
	applyProviderOverridesInScope@vendor.js:131168:25
	compileTestModule@vendor.js:131408:10
	finalize@vendor.js:131044:10
	get testModuleRef@vendor.js:131840:43
	inject@vendor.js:131761:20
	inject@vendor.js:131648:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30305:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28484:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28499:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 9 of 18 (1 FAILED) ERROR (0.647 secs / 0.486 secs)
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 9 of 18 (1 FAILED) ERROR (0.647 secs / 0.486 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 9 of 18 (1 FAILED) DISCONNECTED (30.67 secs / 0.486 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 9 of 18 (1 FAILED) DISCONNECTED (30.67 secs / 0.486 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
