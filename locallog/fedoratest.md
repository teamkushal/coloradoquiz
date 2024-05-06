```bash
yarn run v1.22.22
$ ng test
06 05 2024 15:09:18.669:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
06 05 2024 15:09:18.671:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
06 05 2024 15:09:18.674:INFO [launcher]: Starting browser Firefox
06 05 2024 15:09:20.580:INFO [Firefox 125.0 (Linux x86_64)]: Connected on socket CVaLD-PskcTEj9f1AAAB with id 16790
Firefox 125.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 125.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.023 secs)
[1A[2K[31mFirefox 125.0 (Linux x86_64) PromptUpdateService should be created FAILED[39m
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 105093)
	verifySemanticsOfNgModuleDef@vendor.js:105093:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:105103:33
	verifySemanticsOfNgModuleDef@vendor.js:105101:58
	get@vendor.js:105058:22
	applyProviderOverridesInScope@vendor.js:114564:25
	compileTestModule@vendor.js:114860:10
	finalize@vendor.js:114388:10
	get testModuleRef@vendor.js:115400:43
	inject@vendor.js:115302:20
	inject@vendor.js:115158:33
	1230/</<@main.js:1298:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	runInTestZone@vendor.js:5000:28
	2309/</wrapTestInZone/<@vendor.js:5015:14
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:198:35
	4124/</scheduleResolveOrReject/<@polyfills.js:1273:28
	invokeTask@polyfills.js:440:171
	runTask@polyfills.js:244:37
	drainMicroTaskQueue@polyfills.js:611:23
Firefox 125.0 (Linux x86_64): Executed 2 of 17[31m (1 FAILED)[39m (0 secs / 0.026 secs)
Firefox 125.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 105093)
	verifySemanticsOfNgModuleDef@vendor.js:105093:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:105103:33
	verifySemanticsOfNgModuleDef@vendor.js:105101:58
	get@vendor.js:105058:22
	applyProviderOverridesInScope@vendor.js:114564:25
	compileTestModule@vendor.js:114860:10
	finalize@vendor.js:114388:10
	get testModuleRef@vendor.js:115400:43
	inject@vendor.js:115302:20
	inject@vendor.js:115158:33
	1230/</<@main.js:1298:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	runInTestZone@vendor.js:5000:28
	2309/</wrapTestInZone/<@vendor.js:5015:14
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:198:35
	4124/</scheduleResolveOrReject/<@polyfills.js:1273:28
	invokeTask@polyfills.js:440:171
	runTask@polyfills.js:244:37
	drainMicroTaskQueue@polyfills.js:611:23
[1A[2KFirefox 125.0 (Linux x86_64): Executed 3 of 17[31m (1 FAILED)[39m (0 secs / 0.069 secs)
[1A[2KFirefox 125.0 (Linux x86_64): Executed 4 of 17[31m (1 FAILED)[39m (0 secs / 0.126 secs)
[1A[2KFirefox 125.0 (Linux x86_64): Executed 5 of 17[31m (1 FAILED)[39m (0 secs / 0.14 secs)
[1A[2KERROR: [36m'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 125.0 (Linux x86_64): Executed 5 of 17[31m (1 FAILED)[39m (0 secs / 0.14 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 125.0 (Linux x86_64): Executed 5 of 17[31m (1 FAILED)[39m (0 secs / 0.14 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 125.0 (Linux x86_64): Executed 6 of 17[31m (1 FAILED)[39m (0 secs / 0.163 secs)
[1A[2KFirefox 125.0 (Linux x86_64): Executed 7 of 17[31m (1 FAILED)[39m (0 secs / 0.169 secs)
[1A[2KERROR: [36m'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 125.0 (Linux x86_64): Executed 7 of 17[31m (1 FAILED)[39m (0 secs / 0.169 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 125.0 (Linux x86_64): Executed 7 of 17[31m (1 FAILED)[39m (0 secs / 0.169 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 125.0 (Linux x86_64): Executed 7 of 17[31m (1 FAILED)[39m (0 secs / 0.169 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 125.0 (Linux x86_64): Executed 8 of 17[31m (1 FAILED)[39m (0 secs / 0.294 secs)
[1A[2K[31mFirefox 125.0 (Linux x86_64) ERROR[39m
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 327)
  createReal@http://localhost:9876/_karma_webpack_/main.js:327:7
  submit@http://localhost:9876/_karma_webpack_/main.js:340:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:1606:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:4064:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1602:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1585:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:82002:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:82026:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:81986:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:81941:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:89444:35
  detectChangesInView$1@http://localhost:9876/_karma_webpack_/vendor.js:89648:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:89376:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:89360:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:89939:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:113740:30
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4734:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:95041:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:94895:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:113739:18
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1505:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4734:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:5000:28
  2309/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:5015:14
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  4124/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:1273:28
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:440:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:244:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:611:23
Firefox 125.0 (Linux x86_64): Executed 8 of 17[31m (1 FAILED)[39m[31m ERROR[39m (0 secs / 0.294 secs)
Firefox 125.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 327)
  createReal@http://localhost:9876/_karma_webpack_/main.js:327:7
  submit@http://localhost:9876/_karma_webpack_/main.js:340:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:1606:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:4064:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1602:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1585:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:82002:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:82026:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:81986:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:81941:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:89444:35
  detectChangesInView$1@http://localhost:9876/_karma_webpack_/vendor.js:89648:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:89376:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:89360:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:89939:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:113740:30
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4734:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:95041:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:94895:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:113739:18
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1505:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4734:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:5000:28
  2309/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:5015:14
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  4124/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:1273:28
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:440:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:244:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:611:23
[1A[2KFirefox 125.0 (Linux x86_64): Executed 8 of 17[31m (1 FAILED)[39m[31m ERROR[39m (0.335 secs / 0.294 secs)
[1A[2K[31mFirefox 125.0 (Linux x86_64) ERROR[39m
  Disconnected , because no message in 30000 ms.
Firefox 125.0 (Linux x86_64): Executed 8 of 17[31m (1 FAILED)[39m[31m DISCONNECTED[39m (30.348 secs / 0.294 secs)
Firefox 125.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 125.0 (Linux x86_64): Executed 8 of 17[31m (1 FAILED)[39m[31m DISCONNECTED[39m (30.348 secs / 0.294 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
