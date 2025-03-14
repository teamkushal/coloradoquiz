```bash
yarn run v1.22.22
$ ng test
14 03 2025 15:11:03.486:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
14 03 2025 15:11:03.501:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
14 03 2025 15:11:03.507:INFO [launcher]: Starting browser Firefox
14 03 2025 15:11:07.238:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket FUfQ1qsHpHF0yD1RAAAB with id 82614179
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.21 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1201)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1201:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1214:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:536:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:176203:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:176172:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:176145:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:114818:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:51363:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:19648:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:51357:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:51352:69
  getData@http://localhost:9876/_karma_webpack_/main.js:532:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:515:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:132425:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:132449:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:132409:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:132364:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:141917:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:142115:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:141823:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:141807:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:142642:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:177624:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:40455:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:134720:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:134572:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:177621:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1679:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:40455:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:38634:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:38649:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 1 of 18 ERROR (0 secs / 0.21 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1201)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1201:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1214:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:536:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:176203:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:176172:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:176145:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:114818:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:51363:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:19648:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:51357:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:51352:69
  getData@http://localhost:9876/_karma_webpack_/main.js:532:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:515:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:132425:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:132449:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:132409:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:132364:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:141917:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:142115:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:141823:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:141807:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:142642:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:177624:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:40455:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:134720:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:134572:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:177621:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1679:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:40455:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:38634:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:38649:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 ERROR (0.231 secs / 0.21 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 1 of 18 DISCONNECTED (30.243 secs / 0.21 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 DISCONNECTED (30.243 secs / 0.21 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
