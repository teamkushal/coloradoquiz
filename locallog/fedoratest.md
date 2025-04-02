```bash
yarn run v1.22.22
$ ng test
02 04 2025 16:11:07.636:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
02 04 2025 16:11:07.640:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
02 04 2025 16:11:07.649:INFO [launcher]: Starting browser Firefox
02 04 2025 16:11:11.500:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket zSeZhC_6w7k7k3B_AAAB with id 82293412
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.044 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.044 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.044 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.044 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.214 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:174794:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:174763:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:174736:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:91860:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:42168:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11221:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:42162:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:42157:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:119531:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:119555:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:119515:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:119470:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:129011:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:129209:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:128917:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:128901:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:129736:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:176295:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:28517:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:121774:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:739:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:121626:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:176292:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:28517:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:739:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:26696:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:26711:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:739:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3057:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:993:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:792:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1164:23
Firefox 128.0 (Linux x86_64): Executed 2 of 18 ERROR (0 secs / 0.214 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:174794:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:174763:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:174736:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:91860:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:42168:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:11221:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:42162:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:42157:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:119531:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:119555:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:119515:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:119470:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:129011:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:129209:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:128917:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:128901:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:129736:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:176295:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:28517:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:121774:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:739:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:121626:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:176292:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:28517:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:739:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:26696:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:26711:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:739:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3057:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:993:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:792:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1164:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 ERROR (0.24 secs / 0.214 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 2 of 18 DISCONNECTED (30.25 secs / 0.214 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 DISCONNECTED (30.25 secs / 0.214 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
