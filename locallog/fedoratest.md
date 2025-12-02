```bash
yarn run v1.22.22
$ ng test
01 12 2025 23:10:58.647:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
01 12 2025 23:10:58.650:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
01 12 2025 23:10:58.654:INFO [launcher]: Starting browser Firefox
01 12 2025 23:11:02.758:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket 6-kvUfPfwQcTSfSpAAAB with id 42727073
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
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 SUCCESS (0 secs / 0.399 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129351:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129320:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129293:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90758:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47131:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13064:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47125:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47120:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:91984:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:91999:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:91973:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91942:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96864:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:96992:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96801:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96790:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103224:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103198:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103173:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103161:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103154:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130449:24
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
Firefox 140.0 (Linux x86_64): Executed 1 of 18 ERROR (0 secs / 0.399 secs)
Firefox 140.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: can't access property "ip", ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:129351:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:129320:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:129293:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:90758:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:47131:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:13064:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:47125:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:47120:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:91984:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:91999:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:91973:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:91942:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:96864:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:96992:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:96801:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:96790:34
  synchronizeOnce@http://localhost:9876/_karma_webpack_/vendor.js:103224:30
  synchronize@http://localhost:9876/_karma_webpack_/vendor.js:103198:14
  tickImpl@http://localhost:9876/_karma_webpack_/vendor.js:103173:12
  _tick@http://localhost:9876/_karma_webpack_/vendor.js:103161:12
  tick@http://localhost:9876/_karma_webpack_/vendor.js:103154:10
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:130449:24
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
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 ERROR (0.421 secs / 0.399 secs)
[1A[2KFirefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 140.0 (Linux x86_64): Executed 1 of 18 DISCONNECTED (30.44 secs / 0.399 secs)
Firefox 140.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 140.0 (Linux x86_64): Executed 1 of 18 DISCONNECTED (30.44 secs / 0.399 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
