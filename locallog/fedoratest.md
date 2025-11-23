```bash
yarn run v1.22.22
$ ng test
23 11 2025 10:10:58.460:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
23 11 2025 10:10:58.462:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
23 11 2025 10:10:58.466:INFO [launcher]: Starting browser Firefox
23 11 2025 10:11:01.610:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket _1EI8Thr-bcswx8JAAAB with id 58987497
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.077 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.077 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.077 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.077 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.248 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129211:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129180:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129153:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90769:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47104:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13032:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47098:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47093:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:91966:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:91981:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:91955:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91924:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96818:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:96943:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96755:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96744:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103168:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103144:12
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103120:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103109:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103102:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130309:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30270:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28449:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28464:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 2 of 18 ERROR (0 secs / 0.248 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129211:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129180:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129153:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90769:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47104:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13032:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47098:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47093:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:91966:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:91981:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:91955:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91924:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96818:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:96943:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96755:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96744:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103168:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103144:12
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103120:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103109:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103102:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130309:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30270:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28449:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28464:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 2 of 18 ERROR (0.546 secs / 0.248 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 3 of 18 ERROR (0.546 secs / 0.336 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 4 of 18 ERROR (0.546 secs / 0.357 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 ERROR (0.546 secs / 0.37 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 ERROR (0.546 secs / 0.38 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 7 of 18 ERROR (0.546 secs / 0.449 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v21.angular.dev/errors/NG0201 in vendor.js (line 18248)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:18753:17
	get@vendor.js:19025:39
	get@vendor.js:19377:27
	get@vendor.js:19377:27
	inject@vendor.js:131516:58
	inject@vendor.js:131402:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30270:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28449:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28464:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 8 of 18 (1 FAILED) ERROR (0.546 secs / 0.463 secs)
Firefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v21.angular.dev/errors/NG0201 in vendor.js (line 18248)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:18753:17
	get@vendor.js:19025:39
	get@vendor.js:19377:27
	get@vendor.js:19377:27
	inject@vendor.js:131516:58
	inject@vendor.js:131402:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30270:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28449:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28464:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 9 of 18 (2 FAILED) ERROR (0.546 secs / 0.464 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 10 of 18 (3 FAILED) ERROR (0.546 secs / 0.466 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 10 of 18 (3 FAILED) DISCONNECTED (30.582 secs / 0.466 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 10 of 18 (3 FAILED) DISCONNECTED (30.582 secs / 0.466 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
