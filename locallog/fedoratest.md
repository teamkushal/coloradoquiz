```bash
yarn run v1.22.22
$ ng test
17 10 2025 07:10:57.318:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
17 10 2025 07:10:57.324:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
17 10 2025 07:10:57.328:INFO [launcher]: Starting browser Firefox
17 10 2025 07:11:00.846:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket mZVL713PDLKfXEASAAAB with id 92737573
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
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.222 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178938:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178907:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178880:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149298:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80272:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11389:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80266:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80261:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30947:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:30971:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30931:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30886:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:39823:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:40021:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:39726:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:39715:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:40555:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180389:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29168:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:37693:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:37545:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180386:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29168:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27350:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27365:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
Firefox 140.0 (Linux x86_64): Executed 1 of 18 ERROR (0 secs / 0.222 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178938:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178907:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178880:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149298:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80272:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11389:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80266:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80261:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30947:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:30971:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30931:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30886:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:39823:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:40021:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:39726:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:39715:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:40555:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180389:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29168:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:37693:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:37545:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180386:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29168:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27350:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27365:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 ERROR (0.162 secs / 0.222 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 1 of 18 DISCONNECTED (30.177 secs / 0.222 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 DISCONNECTED (30.177 secs / 0.222 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
