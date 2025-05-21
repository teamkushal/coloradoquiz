```bash
yarn run v1.22.22
$ ng test
21 05 2025 15:11:31.158:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
21 05 2025 15:11:31.162:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
21 05 2025 15:11:31.176:INFO [launcher]: Starting browser Firefox
21 05 2025 15:11:35.505:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket fX3LO9m8VmzltZHbAAAB with id 4675069
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.034 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.057 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.087 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.087 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.087 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.087 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 SUCCESS (0 secs / 0.346 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:174809:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:174778:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:174751:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:106123:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:50944:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:12553:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:50938:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:50933:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:124196:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:124220:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:124180:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:124135:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:133698:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:133896:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:133604:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:133588:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:134423:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:176236:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30202:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:126460:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:126312:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:176233:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30202:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28381:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28396:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
Firefox 128.0 (Linux x86_64): Executed 4 of 18 ERROR (0 secs / 0.346 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:174809:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:174778:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:174751:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:106123:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:50944:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:12553:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:50938:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:50933:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:124196:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:124220:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:124180:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:124135:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:133698:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:133896:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:133604:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:133588:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:134423:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:176236:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30202:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:126460:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:126312:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:176233:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:30202:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:28381:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:28396:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:438:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:209:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:2527:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:463:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:262:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:634:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 ERROR (0.426 secs / 0.346 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 4 of 18 DISCONNECTED (30.434 secs / 0.346 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 4 of 18 DISCONNECTED (30.434 secs / 0.346 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
