```bash
yarn run v1.22.22
$ ng test
25 11 2025 22:10:57.903:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
25 11 2025 22:10:57.906:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
25 11 2025 22:10:57.910:INFO [launcher]: Starting browser Firefox
25 11 2025 22:11:01.246:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket c97bmIeZfIZ2UxsLAAAB with id 43770261
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v21.angular.dev/errors/NG0201 in vendor.js (line 18250)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:18755:17
	get@vendor.js:19027:39
	get@vendor.js:19379:27
	get@vendor.js:19379:27
	inject@vendor.js:131624:58
	inject@vendor.js:131510:33
	9074/</<@main.js:1982:74
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
Firefox 140.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.029 secs)
Firefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v21.angular.dev/errors/NG0201 in vendor.js (line 18250)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:18755:17
	get@vendor.js:19027:39
	get@vendor.js:19379:27
	get@vendor.js:19379:27
	inject@vendor.js:131624:58
	inject@vendor.js:131510:33
	9074/</<@main.js:1982:74
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
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.029 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.029 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.029 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) (0 secs / 0.378 secs)
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
Firefox 140.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) ERROR (0 secs / 0.378 secs)
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
[1A[2KFirefox 140.0 (Linux x86_64): Executed 2 of 18 (1 FAILED) ERROR (0.5 secs / 0.378 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 3 of 18 (2 FAILED) ERROR (0.5 secs / 0.39 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (3 FAILED) ERROR (0.5 secs / 0.392 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) ERROR (0.5 secs / 0.403 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) DISCONNECTED (30.529 secs / 0.403 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) DISCONNECTED (30.529 secs / 0.403 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
