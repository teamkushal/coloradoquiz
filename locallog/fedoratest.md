```bash
yarn run v1.22.22
$ ng test
07 01 2026 21:10:55.589:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
07 01 2026 21:10:55.591:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
07 01 2026 21:10:55.596:INFO [launcher]: Starting browser Firefox
07 01 2026 21:10:58.936:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket m9eWmAbQT5LO__JOAAAB with id 27309540
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
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.203 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129418:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129387:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129360:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90754:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47131:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13055:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47125:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47120:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:91981:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:91996:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:91970:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91939:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96862:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:96990:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96799:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96788:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103251:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103225:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103200:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103188:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103181:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130515:24
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
Firefox 140.0 (Linux x86_64): Executed 1 of 18 ERROR (0 secs / 0.203 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129418:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129387:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129360:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90754:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47131:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13055:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47125:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47120:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:91981:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:91996:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:91970:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91939:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96862:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:96990:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96799:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96788:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103251:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103225:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103200:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103188:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103181:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130515:24
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
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 ERROR (0.34 secs / 0.203 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 2 of 18 ERROR (0.34 secs / 0.213 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v21.angular.dev/errors/NG0201 in vendor.js (line 18249)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:18793:17
	get@vendor.js:19065:39
	get@vendor.js:19387:27
	get@vendor.js:19387:27
	inject@vendor.js:131731:58
	inject@vendor.js:131617:33
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
Firefox 140.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) ERROR (0.34 secs / 0.222 secs)
Firefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v21.angular.dev/errors/NG0201 in vendor.js (line 18249)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:18793:17
	get@vendor.js:19065:39
	get@vendor.js:19387:27
	get@vendor.js:19387:27
	inject@vendor.js:131731:58
	inject@vendor.js:131617:33
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
[1A[2KFirefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) ERROR (0.34 secs / 0.229 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) ERROR (0.34 secs / 0.279 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) ERROR (0.34 secs / 0.304 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) DISCONNECTED (30.373 secs / 0.304 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 (1 FAILED) DISCONNECTED (30.373 secs / 0.304 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
