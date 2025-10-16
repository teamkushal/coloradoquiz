```bash
yarn run v1.22.22
$ ng test
16 10 2025 06:10:55.392:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
16 10 2025 06:10:55.394:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
16 10 2025 06:10:55.400:INFO [launcher]: Starting browser Firefox
16 10 2025 06:10:58.727:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket P76sEdeCu8RK3rrFAAAB with id 9146009
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.155 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.198 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.223 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 4 of 18 SUCCESS (0 secs / 0.321 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 4 of 18 SUCCESS (0 secs / 0.321 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 4 of 18 SUCCESS (0 secs / 0.321 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 4 of 18 SUCCESS (0 secs / 0.321 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 SUCCESS (0 secs / 0.462 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178919:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178888:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178861:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149286:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80307:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11389:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80301:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80296:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30983:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:31007:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30967:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30922:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:39004:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:39202:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:38907:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:38896:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:39736:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180370:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29204:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:46457:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:46309:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180367:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29204:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27386:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27401:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
Firefox 140.0 (Linux x86_64): Executed 5 of 18 ERROR (0 secs / 0.462 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1195)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1195:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1208:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:534:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:178919:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:178888:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:178861:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149286:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:80307:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11389:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:80301:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:80296:69
  getData@http://localhost:9876/_karma_webpack_/main.js:530:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:513:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:30983:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:31007:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:30967:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:30922:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:39004:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:39202:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:38907:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:38896:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:39736:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180370:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29204:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:46457:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:46309:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180367:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1678:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:29204:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:27386:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:27401:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:969:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:738:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3058:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:994:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:791:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1165:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 ERROR (0.322 secs / 0.462 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 5 of 18 DISCONNECTED (30.345 secs / 0.462 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 DISCONNECTED (30.345 secs / 0.462 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
