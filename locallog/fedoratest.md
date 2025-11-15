```bash
yarn run v1.22.22
$ ng test
15 11 2025 14:10:55.797:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
15 11 2025 14:10:55.800:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
15 11 2025 14:10:55.807:INFO [launcher]: Starting browser Firefox
15 11 2025 14:10:59.145:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket jaSyHLcu7qedSYcxAAAB with id 31658149
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.044 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.075 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v20.angular.dev/errors/NG0201 in vendor.js (line 84580)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:85433:17
	get@vendor.js:85974:39
	get@vendor.js:86528:27
	get@vendor.js:86528:27
	inject@vendor.js:182216:58
	inject@vendor.js:182056:33
	9074/</<@main.js:1966:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29211:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27393:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27408:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
Firefox 140.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.101 secs)
Firefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v20.angular.dev/errors/NG0201 in vendor.js (line 84580)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:85433:17
	get@vendor.js:85974:39
	get@vendor.js:86528:27
	get@vendor.js:86528:27
	inject@vendor.js:182216:58
	inject@vendor.js:182056:33
	9074/</<@main.js:1966:74
	invoke@polyfills.js:969:158
	onInvoke@vendor.js:29211:33
	invoke@polyfills.js:969:46
	run@polyfills.js:738:35
	runInTestZone@vendor.js:27393:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:27408:16
	<Jasmine>
	invoke@polyfills.js:969:158
	run@polyfills.js:738:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3058:30
	invokeTask@polyfills.js:994:171
	runTask@polyfills.js:791:37
	drainMicroTaskQueue@polyfills.js:1165:23
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.101 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.101 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.101 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.387 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:179083:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:179052:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:179025:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149430:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80382:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11432:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80376:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80371:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30990:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:31014:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30974:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30929:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:39878:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:40076:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:39781:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:39770:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:40610:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180534:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29211:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:37736:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:37588:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180531:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29211:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27393:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27408:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) ERROR (0 secs / 0.387 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:179083:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:179052:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:179025:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149430:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80382:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11432:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80376:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80371:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30990:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:31014:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30974:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30929:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:39878:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:40076:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:39781:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:39770:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:40610:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180534:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29211:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:37736:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:37588:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180531:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29211:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27393:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27408:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) ERROR (0.451 secs / 0.387 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) DISCONNECTED (30.464 secs / 0.387 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) DISCONNECTED (30.464 secs / 0.387 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
