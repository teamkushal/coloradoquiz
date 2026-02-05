```bash
yarn run v1.22.22
$ ng test
05 02 2026 05:10:56.662:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
05 02 2026 05:10:56.664:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
05 02 2026 05:10:56.669:INFO [launcher]: Starting browser Firefox
05 02 2026 05:10:59.912:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket ik5hxroaP3Z0gQbeAAAB with id 32115921
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.036 secs)
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.036 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.036 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.036 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.036 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.036 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.315 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.391 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.396 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 5 of 18 (2 FAILED) (0 secs / 0.397 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) (0 secs / 0.414 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) (0 secs / 0.424 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 8 of 18 (2 FAILED) (0 secs / 0.438 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v21.angular.dev/errors/NG0201 in vendor.js (line 18388)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:18932:17
	get@vendor.js:19204:39
	get@vendor.js:19526:27
	get@vendor.js:19526:27
	inject@vendor.js:132003:58
	inject@vendor.js:131889:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30402:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28581:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28596:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 9 of 18 (3 FAILED) (0 secs / 0.447 secs)
Firefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v21.angular.dev/errors/NG0201 in vendor.js (line 18388)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:18932:17
	get@vendor.js:19204:39
	get@vendor.js:19526:27
	get@vendor.js:19526:27
	inject@vendor.js:132003:58
	inject@vendor.js:131889:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30402:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28581:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28596:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 10 of 18 (3 FAILED) (0 secs / 0.453 secs)
[1A[2KFirefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 108802)
	verifySemanticsOfNgModuleDef@vendor.js:108802:13
	6124/verifySemanticsOfNgModuleDef/<@vendor.js:108812:33
	verifySemanticsOfNgModuleDef@vendor.js:108810:112
	get@vendor.js:108769:22
	applyProviderOverridesInScope@vendor.js:131409:25
	compileTestModule@vendor.js:131649:10
	finalize@vendor.js:131285:10
	get testModuleRef@vendor.js:132081:43
	inject@vendor.js:132002:20
	inject@vendor.js:131889:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30402:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28581:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28596:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
	invokeTask@polyfills.js:541:11
	4124/initZone/ZoneTask/this.invoke@polyfills.js:527:38
	4124/patchTimer/scheduleTask/data.args[0]@polyfills.js:1816:26
Firefox 140.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) (0 secs / 0.458 secs)
Firefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 108802)
	verifySemanticsOfNgModuleDef@vendor.js:108802:13
	6124/verifySemanticsOfNgModuleDef/<@vendor.js:108812:33
	verifySemanticsOfNgModuleDef@vendor.js:108810:112
	get@vendor.js:108769:22
	applyProviderOverridesInScope@vendor.js:131409:25
	compileTestModule@vendor.js:131649:10
	finalize@vendor.js:131285:10
	get testModuleRef@vendor.js:132081:43
	inject@vendor.js:132002:20
	inject@vendor.js:131889:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30402:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28581:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28596:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
	invokeTask@polyfills.js:541:11
	4124/initZone/ZoneTask/this.invoke@polyfills.js:527:38
	4124/patchTimer/scheduleTask/data.args[0]@polyfills.js:1816:26
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) (0 secs / 0.458 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) (0 secs / 0.458 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) (0 secs / 0.458 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) (0 secs / 0.596 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129690:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129659:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129632:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90719:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:46934:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13180:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:46928:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:46923:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:91948:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:91963:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:91937:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91906:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96846:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:96974:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96783:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96772:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103235:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103209:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103184:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103172:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103165:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130787:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30402:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28581:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28596:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) ERROR (0 secs / 0.596 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129690:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129659:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129632:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90719:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:46934:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13180:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:46928:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:46923:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:91948:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:91963:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:91937:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91906:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96846:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:96974:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96783:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96772:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103235:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103209:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103184:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103172:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103165:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130787:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30402:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28581:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28596:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) ERROR (0.744 secs / 0.596 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) ERROR (0.744 secs / 0.609 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 14 of 18 (4 FAILED) ERROR (0.744 secs / 0.628 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 15 of 18 (4 FAILED) ERROR (0.744 secs / 0.641 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 15 of 18 (4 FAILED) DISCONNECTED (30.769 secs / 0.641 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 15 of 18 (4 FAILED) DISCONNECTED (30.769 secs / 0.641 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
