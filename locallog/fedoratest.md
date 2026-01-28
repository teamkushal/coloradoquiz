```bash
yarn run v1.22.22
$ ng test
28 01 2026 16:11:56.540:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
28 01 2026 16:11:56.544:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
28 01 2026 16:11:56.548:INFO [launcher]: Starting browser Firefox
28 01 2026 16:12:01.706:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket HnEZErKImXIUTSD0AAAB with id 44264704
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.014 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 2 of 18 (2 FAILED) (0 secs / 0.017 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64): Executed 3 of 18 (2 FAILED) (0 secs / 0.057 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v21.angular.dev/errors/NG0201 in vendor.js (line 18383)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:18927:17
	get@vendor.js:19199:39
	get@vendor.js:19521:27
	get@vendor.js:19521:27
	inject@vendor.js:131985:58
	inject@vendor.js:131871:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30397:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28576:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28591:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (3 FAILED) (0 secs / 0.09 secs)
Firefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v21.angular.dev/errors/NG0201 in vendor.js (line 18383)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:18927:17
	get@vendor.js:19199:39
	get@vendor.js:19521:27
	get@vendor.js:19521:27
	inject@vendor.js:131985:58
	inject@vendor.js:131871:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30397:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28576:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28591:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) (0 secs / 0.113 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.129 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.16 secs)
[1A[2KFirefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 108783)
	verifySemanticsOfNgModuleDef@vendor.js:108783:13
	6124/verifySemanticsOfNgModuleDef/<@vendor.js:108793:33
	verifySemanticsOfNgModuleDef@vendor.js:108791:112
	get@vendor.js:108750:22
	applyProviderOverridesInScope@vendor.js:131391:25
	compileTestModule@vendor.js:131631:10
	finalize@vendor.js:131267:10
	get testModuleRef@vendor.js:132063:43
	inject@vendor.js:131984:20
	inject@vendor.js:131871:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30397:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28576:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28591:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 8 of 18 (4 FAILED) (0 secs / 0.165 secs)
Firefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 108783)
	verifySemanticsOfNgModuleDef@vendor.js:108783:13
	6124/verifySemanticsOfNgModuleDef/<@vendor.js:108793:33
	verifySemanticsOfNgModuleDef@vendor.js:108791:112
	get@vendor.js:108750:22
	applyProviderOverridesInScope@vendor.js:131391:25
	compileTestModule@vendor.js:131631:10
	finalize@vendor.js:131267:10
	get testModuleRef@vendor.js:132063:43
	inject@vendor.js:131984:20
	inject@vendor.js:131871:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30397:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28576:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28591:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 9 of 18 (4 FAILED) (0 secs / 0.178 secs)
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 9 of 18 (4 FAILED) (0 secs / 0.178 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 9 of 18 (4 FAILED) (0 secs / 0.178 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 9 of 18 (4 FAILED) (0 secs / 0.178 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 140.0 (Linux x86_64): Executed 9 of 18 (4 FAILED) (0 secs / 0.178 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 140.0 (Linux x86_64): Executed 9 of 18 (4 FAILED) (0 secs / 0.178 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 10 of 18 (4 FAILED) (0 secs / 0.487 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 10 of 18 (4 FAILED) (0 secs / 0.487 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 10 of 18 (4 FAILED) (0 secs / 0.487 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 10 of 18 (4 FAILED) (0 secs / 0.487 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) (0 secs / 0.739 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129672:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129641:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129614:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90713:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:46928:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13175:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:46922:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:46917:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:91942:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:91957:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:91931:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91900:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96827:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:96955:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96764:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96753:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103216:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103190:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103165:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103153:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103146:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130769:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30397:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28576:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28591:16
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
Firefox 140.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) ERROR (0 secs / 0.739 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129672:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129641:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129614:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90713:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:46928:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13175:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:46922:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:46917:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:91942:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:91957:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:91931:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91900:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96827:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:96955:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96764:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96753:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103216:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103190:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103165:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103153:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103146:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130769:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30397:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28576:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28591:16
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
[1A[2KFirefox 140.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) ERROR (0.902 secs / 0.739 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) DISCONNECTED (30.932 secs / 0.739 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) DISCONNECTED (30.932 secs / 0.739 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
