```bash
yarn run v1.22.22
$ ng test
[32m08 11 2024 14:21:15.050:INFO [karma-server]: [39mKarma v6.4.2 server started at http://localhost:9876/
[32m08 11 2024 14:21:15.053:INFO [launcher]: [39mLaunching browsers FirefoxHeadless with concurrency unlimited
[32m08 11 2024 14:21:15.059:INFO [launcher]: [39mStarting browser Firefox
[32m08 11 2024 14:21:17.801:INFO [Firefox 115.0 (Linux x86_64)]: [39mConnected on socket FJYsfsbuhPwrtk-2AAAB with id 41180453
Firefox 115.0 (Linux x86_64): Executed 0 of 18[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 115.0 (Linux x86_64): Executed 1 of 18[32m SUCCESS[39m (0 secs / 0.201 secs)
[1A[2KFirefox 115.0 (Linux x86_64): Executed 2 of 18[32m SUCCESS[39m (0 secs / 0.251 secs)
[1A[2KERROR: [36m'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 115.0 (Linux x86_64): Executed 2 of 18[32m SUCCESS[39m (0 secs / 0.251 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 115.0 (Linux x86_64): Executed 2 of 18[32m SUCCESS[39m (0 secs / 0.251 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 115.0 (Linux x86_64): Executed 2 of 18[32m SUCCESS[39m (0 secs / 0.251 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 115.0 (Linux x86_64): Executed 3 of 18[32m SUCCESS[39m (0 secs / 0.411 secs)
[1A[2K[31mFirefox 115.0 (Linux x86_64) ERROR[39m
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 353)
  createReal@http://localhost:9876/_karma_webpack_/main.js:353:7
  submit@http://localhost:9876/_karma_webpack_/main.js:366:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:1677:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:4064:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1673:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1656:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:80679:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:80703:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:80663:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:80618:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:89020:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:89214:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:88925:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:88906:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:89514:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:116228:30
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6489:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:82719:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:82571:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:116227:18
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1576:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6489:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:4669:30
  wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:4684:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2502:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:438:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:237:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:609:23
Firefox 115.0 (Linux x86_64): Executed 3 of 18[31m ERROR[39m (0 secs / 0.411 secs)
Firefox 115.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 353)
  createReal@http://localhost:9876/_karma_webpack_/main.js:353:7
  submit@http://localhost:9876/_karma_webpack_/main.js:366:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:1677:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:675:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:644:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:617:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:145:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:246:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:499:18
  subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:240:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:4064:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:235:69
  getData@http://localhost:9876/_karma_webpack_/main.js:1673:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:1656:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:80679:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:80703:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:80663:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:80618:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:89020:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:89214:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:88925:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:88906:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:89514:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:116228:30
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6489:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:82719:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:82571:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:116227:18
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1576:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:6489:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:4669:30
  wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:4684:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:413:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:184:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2502:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:438:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:237:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:609:23
[1A[2KFirefox 115.0 (Linux x86_64): Executed 3 of 18[31m ERROR[39m (0.419 secs / 0.411 secs)
[1A[2K[31mFirefox 115.0 (Linux x86_64) ERROR[39m
  Disconnected , because no message in 30000 ms.
Firefox 115.0 (Linux x86_64): Executed 3 of 18[31m DISCONNECTED[39m (30.453 secs / 0.411 secs)
Firefox 115.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 115.0 (Linux x86_64): Executed 3 of 18[31m DISCONNECTED[39m (30.453 secs / 0.411 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
