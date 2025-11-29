```bash
yarn run v1.22.22
$ ng test
29 11 2025 02:10:57.703:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
29 11 2025 02:10:57.706:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
29 11 2025 02:10:57.710:INFO [launcher]: Starting browser Firefox
29 11 2025 02:11:01.678:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket W1kr5cIcWn7pqwjPAAAB with id 75746068
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.053 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.079 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v21.angular.dev/errors/NG0201 in vendor.js (line 18264)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:18769:17
	get@vendor.js:19041:39
	get@vendor.js:19393:27
	get@vendor.js:19393:27
	inject@vendor.js:131659:58
	inject@vendor.js:131545:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30308:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28487:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28502:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.098 secs)
Firefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v21.angular.dev/errors/NG0201 in vendor.js (line 18264)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:18769:17
	get@vendor.js:19041:39
	get@vendor.js:19393:27
	get@vendor.js:19393:27
	inject@vendor.js:131659:58
	inject@vendor.js:131545:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30308:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28487:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28502:16
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
Firefox 140.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.098 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.098 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 3 of 18 (1 FAILED) (0 secs / 0.098 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) (0 secs / 0.338 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129354:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129323:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129296:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90779:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47131:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13064:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47125:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47120:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:92005:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:92020:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:91994:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91963:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96853:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:96981:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96790:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96779:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103227:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103201:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103176:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103164:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103157:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130452:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30308:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28487:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28502:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) ERROR (0 secs / 0.338 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129354:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129323:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129296:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90779:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47131:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13064:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47125:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47120:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:92005:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:92020:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:91994:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91963:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96853:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:96981:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96790:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96779:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103227:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103201:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103176:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103164:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103157:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130452:24
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30308:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28487:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28502:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:436:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:207:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2525:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:461:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:260:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:632:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) ERROR (0.558 secs / 0.338 secs)
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) ERROR (0.558 secs / 0.338 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) ERROR (0.558 secs / 0.338 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) ERROR (0.558 secs / 0.338 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) ERROR (0.558 secs / 0.338 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (1 FAILED) ERROR (0.558 secs / 0.338 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) ERROR (0.558 secs / 0.468 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) DISCONNECTED (30.596 secs / 0.468 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 (1 FAILED) DISCONNECTED (30.596 secs / 0.468 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
