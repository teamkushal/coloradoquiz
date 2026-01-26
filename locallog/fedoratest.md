```bash
yarn run v1.22.22
$ ng test
26 01 2026 14:11:04.024:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
26 01 2026 14:11:04.026:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
26 01 2026 14:11:04.030:INFO [launcher]: Starting browser Firefox
26 01 2026 14:11:07.202:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket A4-N8FjPOHf53VZ2AAAB with id 45760008
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.013 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 2 of 18 (2 FAILED) (0 secs / 0.015 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64): Executed 3 of 18 (2 FAILED) (0 secs / 0.065 secs)
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
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (3 FAILED) (0 secs / 0.085 secs)
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
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (3 FAILED) (0 secs / 0.085 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (3 FAILED) (0 secs / 0.085 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (3 FAILED) (0 secs / 0.085 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) (0 secs / 0.365 secs)
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
Firefox 140.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) ERROR (0 secs / 0.365 secs)
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
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) ERROR (0.472 secs / 0.365 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) DISCONNECTED (30.499 secs / 0.365 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) DISCONNECTED (30.499 secs / 0.365 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
