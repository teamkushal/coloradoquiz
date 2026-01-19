```bash
yarn run v1.22.22
$ ng test
19 01 2026 02:10:58.253:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
19 01 2026 02:10:58.255:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
19 01 2026 02:10:58.259:INFO [launcher]: Starting browser Firefox
19 01 2026 02:11:01.386:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket 4HlnD5GDjApCdm0fAAAB with id 55103775
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.036 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.071 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.074 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (2 FAILED) (0 secs / 0.076 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (2 FAILED) (0 secs / 0.076 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (2 FAILED) (0 secs / 0.076 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (2 FAILED) (0 secs / 0.076 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 (2 FAILED) (0 secs / 0.367 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129734:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129703:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129676:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90718:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:46920:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13173:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:46914:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:46909:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:91947:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:91962:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:91936:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91905:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96831:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:96959:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96768:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96757:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103220:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103194:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103169:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103157:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103150:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130831:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30395:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28574:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28589:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 5 of 18 (2 FAILED) ERROR (0 secs / 0.367 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129734:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129703:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129676:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90718:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:46920:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13173:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:46914:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:46909:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:91947:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:91962:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:91936:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91905:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96831:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:96959:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96768:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96757:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103220:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103194:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103169:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103157:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103150:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130831:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30395:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28574:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28589:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 (2 FAILED) ERROR (0.556 secs / 0.367 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 (2 FAILED) ERROR (0.556 secs / 0.426 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v21.angular.dev/errors/NG0201 in vendor.js (line 18381)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:18925:17
	get@vendor.js:19197:39
	get@vendor.js:19519:27
	get@vendor.js:19519:27
	inject@vendor.js:132047:58
	inject@vendor.js:131933:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30395:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28574:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28589:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) ERROR (0.556 secs / 0.434 secs)
Firefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v21.angular.dev/errors/NG0201 in vendor.js (line 18381)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:18925:17
	get@vendor.js:19197:39
	get@vendor.js:19519:27
	get@vendor.js:19519:27
	inject@vendor.js:132047:58
	inject@vendor.js:131933:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30395:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28574:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28589:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) ERROR (0.556 secs / 0.48 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) DISCONNECTED (30.594 secs / 0.48 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) DISCONNECTED (30.594 secs / 0.48 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
