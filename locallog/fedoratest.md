```bash
yarn run v1.22.22
$ ng test
29 12 2025 19:10:53.008:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
29 12 2025 19:10:53.010:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
29 12 2025 19:10:53.015:INFO [launcher]: Starting browser Firefox
29 12 2025 19:10:56.180:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket g-4-6XPkhqxsauYiAAAB with id 18904057
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.419 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129392:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129361:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129334:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90747:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47128:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13055:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47122:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47117:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:91974:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:91989:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:91963:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91932:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96855:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:96983:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96792:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96781:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103244:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103218:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103193:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103181:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103174:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130489:24
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
Firefox 140.0 (Linux x86_64): Executed 1 of 18 ERROR (0 secs / 0.419 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129392:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129361:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129334:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90747:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47128:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13055:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47122:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47117:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:91974:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:91989:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:91963:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91932:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96855:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:96983:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96792:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96781:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103244:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103218:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103193:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103181:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103174:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130489:24
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
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 ERROR (0.831 secs / 0.419 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 2 of 18 ERROR (0.831 secs / 0.444 secs)
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 2 of 18 ERROR (0.831 secs / 0.444 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 2 of 18 ERROR (0.831 secs / 0.444 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 2 of 18 ERROR (0.831 secs / 0.444 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 140.0 (Linux x86_64): Executed 2 of 18 ERROR (0.831 secs / 0.444 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 140.0 (Linux x86_64): Executed 2 of 18 ERROR (0.831 secs / 0.444 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 3 of 18 ERROR (0.831 secs / 0.588 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 4 of 18 ERROR (0.831 secs / 0.6 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 4 of 18 ERROR (0.831 secs / 0.6 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 4 of 18 ERROR (0.831 secs / 0.6 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 ERROR (0.831 secs / 0.638 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 ERROR (0.831 secs / 0.651 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 7 of 18 ERROR (0.831 secs / 0.671 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v21.angular.dev/errors/NG0201 in vendor.js (line 18249)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:18793:17
	get@vendor.js:19065:39
	get@vendor.js:19387:27
	get@vendor.js:19387:27
	inject@vendor.js:131705:58
	inject@vendor.js:131591:33
	9074/</<@main.js:1982:74
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
Firefox 140.0 (Linux x86_64): Executed 8 of 18 (1 FAILED) ERROR (0.831 secs / 0.682 secs)
Firefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v21.angular.dev/errors/NG0201 in vendor.js (line 18249)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:18793:17
	get@vendor.js:19065:39
	get@vendor.js:19387:27
	get@vendor.js:19387:27
	inject@vendor.js:131705:58
	inject@vendor.js:131591:33
	9074/</<@main.js:1982:74
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
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) ERROR (0.831 secs / 0.683 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 10 of 18 (3 FAILED) ERROR (0.831 secs / 0.685 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64): Executed 11 of 18 (3 FAILED) ERROR (0.831 secs / 0.704 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 12 of 18 (3 FAILED) ERROR (0.831 secs / 0.709 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 13 of 18 (3 FAILED) ERROR (0.831 secs / 0.758 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 13 of 18 (3 FAILED) DISCONNECTED (30.88 secs / 0.758 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 13 of 18 (3 FAILED) DISCONNECTED (30.88 secs / 0.758 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
