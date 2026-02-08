```bash
yarn run v1.22.22
$ ng test
08 02 2026 06:10:57.415:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
08 02 2026 06:10:57.418:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
08 02 2026 06:10:57.421:INFO [launcher]: Starting browser Firefox
08 02 2026 06:11:01.337:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket C3aImDNRJZDjjGR-AAAB with id 95730603
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.097 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.124 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v21.angular.dev/errors/NG0201 in vendor.js (line 81981)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:82525:17
	get@vendor.js:82797:39
	get@vendor.js:83119:27
	get@vendor.js:83119:27
	inject@vendor.js:90529:58
	inject@vendor.js:90415:33
	9074/</<@main.js:413:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6270:33
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	runInTestZone@vendor.js:4449:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:4464:16
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:184:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2502:30
	invokeTask@polyfills.js:438:171
	runTask@polyfills.js:237:37
	drainMicroTaskQueue@polyfills.js:609:23
Firefox 140.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.156 secs)
Firefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v21.angular.dev/errors/NG0201 in vendor.js (line 81981)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:82525:17
	get@vendor.js:82797:39
	get@vendor.js:83119:27
	get@vendor.js:83119:27
	inject@vendor.js:90529:58
	inject@vendor.js:90415:33
	9074/</<@main.js:413:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6270:33
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	runInTestZone@vendor.js:4449:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:4464:16
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:184:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2502:30
	invokeTask@polyfills.js:438:171
	runTask@polyfills.js:237:37
	drainMicroTaskQueue@polyfills.js:609:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.292 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) (0 secs / 0.316 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) (0 secs / 0.326 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 7 of 18 (1 FAILED) (0 secs / 0.333 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (1 FAILED) (0 secs / 0.333 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (1 FAILED) (0 secs / 0.333 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 140.0 (Linux x86_64): Executed 8 of 18 (1 FAILED) (0 secs / 0.373 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 9 of 18 (1 FAILED) (0 secs / 0.391 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 10 of 18 (1 FAILED) (0 secs / 0.405 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 11 of 18 (1 FAILED) (0 secs / 0.419 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 12 of 18 (1 FAILED) (0 secs / 0.503 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 13 of 18 (2 FAILED) (0 secs / 0.507 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 14 of 18 (3 FAILED) (0 secs / 0.509 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 14 of 18 (3 FAILED) (0 secs / 0.509 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 14 of 18 (3 FAILED) (0 secs / 0.509 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 14 of 18 (3 FAILED) (0 secs / 0.509 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 15 of 18 (3 FAILED) (0 secs / 0.647 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 355)
  createReal@http://localhost:9876/_karma_webpack_/main.js:355:7
  submit@http://localhost:9876/_karma_webpack_/main.js:368:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:1686:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:3844:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1682:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1665:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:62519:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:62534:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:62508:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:62477:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:67417:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:67545:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:67354:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:67343:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:73806:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:73780:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:73755:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:73743:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:73736:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:89313:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1585:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6270:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:4449:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:4464:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2502:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:438:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:237:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:609:23
Firefox 140.0 (Linux x86_64): Executed 15 of 18 (3 FAILED) ERROR (0 secs / 0.647 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 355)
  createReal@http://localhost:9876/_karma_webpack_/main.js:355:7
  submit@http://localhost:9876/_karma_webpack_/main.js:368:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:1686:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:3844:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1682:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1665:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:62519:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:62534:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:62508:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:62477:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:67417:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:67545:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:67354:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:67343:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:73806:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:73780:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:73755:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:73743:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:73736:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:89313:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1585:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6270:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:4449:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:4464:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2502:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:438:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:237:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:609:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 15 of 18 (3 FAILED) ERROR (0.775 secs / 0.647 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 15 of 18 (3 FAILED) DISCONNECTED (30.8 secs / 0.647 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 15 of 18 (3 FAILED) DISCONNECTED (30.8 secs / 0.647 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
