```bash
yarn run v1.22.21
$ ng test
28 02 2024 05:46:13.950:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
28 02 2024 05:46:13.952:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
28 02 2024 05:46:13.955:INFO [launcher]: Starting browser Firefox
28 02 2024 05:46:15.454:INFO [Firefox 122.0 (Linux x86_64)]: Connected on socket zk-UL7Ij040E1XZxAAAB with id 57162522
Firefox 122.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 122.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.029 secs)
[1A[2KFirefox 122.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.095 secs)
[1A[2KERROR: [36m'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 122.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.095 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 122.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.095 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 122.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.095 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 122.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.196 secs)
[1A[2K[31mFirefox 122.0 (Linux x86_64) ERROR[39m
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 327)
  createReal@http://localhost:9876/_karma_webpack_/main.js:327:7
  submit@http://localhost:9876/_karma_webpack_/main.js:340:25
  4092/getData/<@http://localhost:9876/_karma_webpack_/main.js:1606:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  1296/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:4064:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1602:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1585:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:82813:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:82837:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:82797:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:82752:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:88592:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:88796:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:88524:22
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:88508:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:89087:26
  4820/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:113104:30
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4734:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:91988:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:91842:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:113103:18
  7384/</<@http://localhost:9876/_karma_webpack_/main.js:1505:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4734:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:5000:28
  9088/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:5015:14
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  8120/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:1273:28
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:440:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:244:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:611:23
Firefox 122.0 (Linux x86_64): Executed 3 of 17[31m ERROR[39m (0 secs / 0.196 secs)
Firefox 122.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 327)
  createReal@http://localhost:9876/_karma_webpack_/main.js:327:7
  submit@http://localhost:9876/_karma_webpack_/main.js:340:25
  4092/getData/<@http://localhost:9876/_karma_webpack_/main.js:1606:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  1296/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:4064:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1602:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1585:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:82813:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:82837:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:82797:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:82752:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:88592:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:88796:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:88524:22
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:88508:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:89087:26
  4820/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:113104:30
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4734:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:91988:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:91842:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:113103:18
  7384/</<@http://localhost:9876/_karma_webpack_/main.js:1505:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:4734:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:5000:28
  9088/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:5015:14
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:198:35
  8120/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:1273:28
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:440:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:244:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:611:23
[1A[2KFirefox 122.0 (Linux x86_64): Executed 3 of 17[31m ERROR[39m (0.24 secs / 0.196 secs)
[1A[2KFirefox 122.0 (Linux x86_64): Executed 4 of 17[31m ERROR[39m (0.24 secs / 0.203 secs)
[1A[2KFirefox 122.0 (Linux x86_64): Executed 5 of 17[31m ERROR[39m (0.24 secs / 0.21 secs)
[1A[2K[31mFirefox 122.0 (Linux x86_64) ERROR[39m
  Disconnected , because no message in 30000 ms.
Firefox 122.0 (Linux x86_64): Executed 5 of 17[31m DISCONNECTED[39m (30.254 secs / 0.21 secs)
Firefox 122.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 122.0 (Linux x86_64): Executed 5 of 17[31m DISCONNECTED[39m (30.254 secs / 0.21 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
