```bash
yarn run v1.22.22
$ ng test
10 12 2025 17:11:01.205:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
10 12 2025 17:11:01.208:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
10 12 2025 17:11:01.213:INFO [launcher]: Starting browser Firefox
10 12 2025 17:11:05.581:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket w4nscb0LrMNeFhGiAAAB with id 9497630
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.035 secs)
[1A[2KFirefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 108786)
	verifySemanticsOfNgModuleDef@vendor.js:108786:13
	6124/verifySemanticsOfNgModuleDef/<@vendor.js:108796:33
	verifySemanticsOfNgModuleDef@vendor.js:108794:112
	get@vendor.js:108753:22
	applyProviderOverridesInScope@vendor.js:131148:25
	compileTestModule@vendor.js:131388:10
	finalize@vendor.js:131024:10
	get testModuleRef@vendor.js:131820:43
	inject@vendor.js:131741:20
	inject@vendor.js:131628:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30326:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28505:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28520:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.039 secs)
Firefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 108786)
	verifySemanticsOfNgModuleDef@vendor.js:108786:13
	6124/verifySemanticsOfNgModuleDef/<@vendor.js:108796:33
	verifySemanticsOfNgModuleDef@vendor.js:108794:112
	get@vendor.js:108753:22
	applyProviderOverridesInScope@vendor.js:131148:25
	compileTestModule@vendor.js:131388:10
	finalize@vendor.js:131024:10
	get testModuleRef@vendor.js:131820:43
	inject@vendor.js:131741:20
	inject@vendor.js:131628:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30326:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28505:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28520:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.057 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (2 FAILED) (0 secs / 0.06 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) (0 secs / 0.061 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.224 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.25 secs)
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.25 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.25 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.25 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.25 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.25 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) (0 secs / 0.416 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 9 of 18 (3 FAILED) (0 secs / 0.437 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 10 of 18 (3 FAILED) (0 secs / 0.455 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 10 of 18 (3 FAILED) (0 secs / 0.455 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 10 of 18 (3 FAILED) (0 secs / 0.455 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 10 of 18 (3 FAILED) (0 secs / 0.455 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 11 of 18 (3 FAILED) (0 secs / 0.589 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129428:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129397:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129370:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90766:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47158:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13079:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47152:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47147:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:91993:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:92008:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:91982:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91951:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96874:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:97002:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96811:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96800:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103263:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103237:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103212:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103200:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103193:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130526:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30326:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28505:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28520:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:541:11
  4124/initZone/ZoneTask/this.invoke@http://localhost:9876/_karma_webpack_/polyfills.js:527:38
  4124/patchTimer/scheduleTask/data.args[0]@http://localhost:9876/_karma_webpack_/polyfills.js:1816:26
Firefox 140.0 (Linux x86_64): Executed 11 of 18 (3 FAILED) ERROR (0 secs / 0.589 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129428:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129397:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129370:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90766:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47158:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13079:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47152:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47147:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:91993:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:92008:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:91982:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91951:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96874:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:97002:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96811:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96800:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103263:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103237:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103212:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103200:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103193:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130526:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30326:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28505:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28520:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:541:11
  4124/initZone/ZoneTask/this.invoke@http://localhost:9876/_karma_webpack_/polyfills.js:527:38
  4124/patchTimer/scheduleTask/data.args[0]@http://localhost:9876/_karma_webpack_/polyfills.js:1816:26
[1A[2KFirefox 140.0 (Linux x86_64): Executed 11 of 18 (3 FAILED) ERROR (0.68 secs / 0.589 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 11 of 18 (3 FAILED) DISCONNECTED (30.698 secs / 0.589 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 11 of 18 (3 FAILED) DISCONNECTED (30.698 secs / 0.589 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
