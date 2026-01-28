```bash
yarn run v1.22.22
$ ng test
28 01 2026 11:11:08.646:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
28 01 2026 11:11:08.648:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
28 01 2026 11:11:08.652:INFO [launcher]: Starting browser Firefox
28 01 2026 11:11:11.806:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket H9XVKIWwxhU3SsLUAAAB with id 69811481
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 108782)
	verifySemanticsOfNgModuleDef@vendor.js:108782:13
	6124/verifySemanticsOfNgModuleDef/<@vendor.js:108792:33
	verifySemanticsOfNgModuleDef@vendor.js:108790:112
	get@vendor.js:108749:22
	applyProviderOverridesInScope@vendor.js:131390:25
	compileTestModule@vendor.js:131630:10
	finalize@vendor.js:131266:10
	get testModuleRef@vendor.js:132062:43
	inject@vendor.js:131983:20
	inject@vendor.js:131870:33
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
Firefox 140.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.017 secs)
Firefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 108782)
	verifySemanticsOfNgModuleDef@vendor.js:108782:13
	6124/verifySemanticsOfNgModuleDef/<@vendor.js:108792:33
	verifySemanticsOfNgModuleDef@vendor.js:108790:112
	get@vendor.js:108749:22
	applyProviderOverridesInScope@vendor.js:131390:25
	compileTestModule@vendor.js:131630:10
	finalize@vendor.js:131266:10
	get testModuleRef@vendor.js:132062:43
	inject@vendor.js:131983:20
	inject@vendor.js:131870:33
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
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.017 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.017 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.017 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 140.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.017 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 140.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.017 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.287 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.303 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.385 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.399 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.399 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.399 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.433 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (2 FAILED) (0 secs / 0.435 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) (0 secs / 0.436 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64): Executed 9 of 18 (3 FAILED) (0 secs / 0.457 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 10 of 18 (3 FAILED) (0 secs / 0.467 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 10 of 18 (3 FAILED) (0 secs / 0.467 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 10 of 18 (3 FAILED) (0 secs / 0.467 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 10 of 18 (3 FAILED) (0 secs / 0.467 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 11 of 18 (3 FAILED) (0 secs / 0.61 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129671:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129640:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129613:12
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
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96826:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:96954:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96763:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96752:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103215:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103189:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103164:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103152:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103145:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130768:24
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
Firefox 140.0 (Linux x86_64): Executed 11 of 18 (3 FAILED) ERROR (0 secs / 0.61 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129671:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129640:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129613:12
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
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96826:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:96954:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96763:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96752:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103215:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103189:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103164:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103152:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103145:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130768:24
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
[1A[2KFirefox 140.0 (Linux x86_64): Executed 11 of 18 (3 FAILED) ERROR (0.747 secs / 0.61 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v21.angular.dev/errors/NG0201 in vendor.js (line 18383)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:18927:17
	get@vendor.js:19199:39
	get@vendor.js:19521:27
	get@vendor.js:19521:27
	inject@vendor.js:131984:58
	inject@vendor.js:131870:33
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
Firefox 140.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) ERROR (0.747 secs / 0.62 secs)
Firefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v21.angular.dev/errors/NG0201 in vendor.js (line 18383)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:18927:17
	get@vendor.js:19199:39
	get@vendor.js:19521:27
	get@vendor.js:19521:27
	inject@vendor.js:131984:58
	inject@vendor.js:131870:33
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
[1A[2KFirefox 140.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) ERROR (0.747 secs / 0.625 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 14 of 18 (4 FAILED) ERROR (0.747 secs / 0.643 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 15 of 18 (4 FAILED) ERROR (0.747 secs / 0.652 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 15 of 18 (4 FAILED) DISCONNECTED (30.804 secs / 0.652 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 15 of 18 (4 FAILED) DISCONNECTED (30.804 secs / 0.652 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
