```bash
yarn run v1.22.22
$ ng test
09 08 2025 01:10:58.577:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
09 08 2025 01:10:58.580:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
09 08 2025 01:10:58.584:INFO [launcher]: Starting browser Firefox
09 08 2025 01:11:02.224:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket 2n--MvyqTclnzkMuAAAB with id 94134360
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.07 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.09 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.09 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.09 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 2 of 18 SUCCESS (0 secs / 0.09 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 SUCCESS (0 secs / 0.269 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:179150:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:179119:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:179092:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149816:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:83999:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:12800:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:83993:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:83988:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:34089:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:34113:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:34073:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:34028:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:41866:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:42064:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:41769:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:41758:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:42598:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180632:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:32216:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:49301:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:49153:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180629:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:32216:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:30399:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:30414:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3055:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:991:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:790:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1162:23
Firefox 128.0 (Linux x86_64): Executed 3 of 18 ERROR (0 secs / 0.269 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1186)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1186:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1199:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:529:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:179150:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:179119:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:179092:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:149816:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:83999:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:12800:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:83993:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:83988:69
  getData@http://localhost:9876/_karma_webpack_/main.js:525:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:508:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:34089:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:34113:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:34073:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:34028:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:41866:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:42064:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:41769:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:41758:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:42598:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:180632:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:32216:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:49301:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:49153:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:180629:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1654:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:32216:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:30399:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:30414:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:966:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:737:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3055:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:991:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:790:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1162:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 ERROR (0.359 secs / 0.269 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
