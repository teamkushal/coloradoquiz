```bash
yarn run v1.22.22
$ ng test
04 04 2025 21:11:00.300:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
04 04 2025 21:11:00.313:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
04 04 2025 21:11:00.319:INFO [launcher]: Starting browser Firefox
04 04 2025 21:11:03.851:INFO [Firefox 128.0 (Linux x86_64)]: Connected on socket udvVaBeMzK8i2pwnAAAB with id 7570699
Firefox 128.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.011 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 128.0 (Linux x86_64): Executed 2 of 18 (2 FAILED) (0 secs / 0.013 secs)
Firefox 128.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 128.0 (Linux x86_64): Executed 3 of 18 (2 FAILED) (0 secs / 0.033 secs)
[1A[2KFirefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 121511)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:121511:21
	get@vendor.js:122039:27
	get@vendor.js:122039:27
	inject@vendor.js:181098:58
	inject@vendor.js:180941:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:968:158
	onInvoke@vendor.js:36571:33
	invoke@polyfills.js:968:46
	run@polyfills.js:739:35
	runInTestZone@vendor.js:34750:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:34765:16
	<Jasmine>
	invoke@polyfills.js:968:158
	run@polyfills.js:739:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3057:30
	invokeTask@polyfills.js:993:171
	runTask@polyfills.js:792:37
	drainMicroTaskQueue@polyfills.js:1164:23
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (3 FAILED) (0 secs / 0.049 secs)
Firefox 128.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 121511)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:121511:21
	get@vendor.js:122039:27
	get@vendor.js:122039:27
	inject@vendor.js:181098:58
	inject@vendor.js:180941:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:968:158
	onInvoke@vendor.js:36571:33
	invoke@polyfills.js:968:46
	run@polyfills.js:739:35
	runInTestZone@vendor.js:34750:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:34765:16
	<Jasmine>
	invoke@polyfills.js:968:158
	run@polyfills.js:739:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3057:30
	invokeTask@polyfills.js:993:171
	runTask@polyfills.js:792:37
	drainMicroTaskQueue@polyfills.js:1164:23
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (3 FAILED) (0 secs / 0.049 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 4 of 18 (3 FAILED) (0 secs / 0.049 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 128.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) (0 secs / 0.123 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.142 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.149 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) (0 secs / 0.212 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 9 of 18 (3 FAILED) (0 secs / 0.286 secs)
[1A[2KFirefox 128.0 (Linux x86_64): Executed 10 of 18 (3 FAILED) (0 secs / 0.302 secs)
[1A[2KFirefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 152804)
	verifySemanticsOfNgModuleDef@vendor.js:152804:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:152814:33
	verifySemanticsOfNgModuleDef@vendor.js:152812:58
	get@vendor.js:152769:22
	applyProviderOverridesInScope@vendor.js:180303:25
	compileTestModule@vendor.js:180614:10
	finalize@vendor.js:180127:10
	get testModuleRef@vendor.js:181190:43
	inject@vendor.js:181097:20
	inject@vendor.js:180941:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:968:158
	onInvoke@vendor.js:36571:33
	invoke@polyfills.js:968:46
	run@polyfills.js:739:35
	runInTestZone@vendor.js:34750:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:34765:16
	<Jasmine>
	invoke@polyfills.js:968:158
	run@polyfills.js:739:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3057:30
	invokeTask@polyfills.js:993:171
	runTask@polyfills.js:792:37
	drainMicroTaskQueue@polyfills.js:1164:23
	invokeTask@polyfills.js:1073:11
	4124/initZone/ZoneTask/this.invoke@polyfills.js:1059:38
	4124/patchTimer/scheduleTask/data.args[0]@polyfills.js:2348:26
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) (0 secs / 0.306 secs)
Firefox 128.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 152804)
	verifySemanticsOfNgModuleDef@vendor.js:152804:13
	7580/verifySemanticsOfNgModuleDef/<@vendor.js:152814:33
	verifySemanticsOfNgModuleDef@vendor.js:152812:58
	get@vendor.js:152769:22
	applyProviderOverridesInScope@vendor.js:180303:25
	compileTestModule@vendor.js:180614:10
	finalize@vendor.js:180127:10
	get testModuleRef@vendor.js:181190:43
	inject@vendor.js:181097:20
	inject@vendor.js:180941:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:968:158
	onInvoke@vendor.js:36571:33
	invoke@polyfills.js:968:46
	run@polyfills.js:739:35
	runInTestZone@vendor.js:34750:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:34765:16
	<Jasmine>
	invoke@polyfills.js:968:158
	run@polyfills.js:739:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:3057:30
	invokeTask@polyfills.js:993:171
	runTask@polyfills.js:792:37
	drainMicroTaskQueue@polyfills.js:1164:23
	invokeTask@polyfills.js:1073:11
	4124/initZone/ZoneTask/this.invoke@polyfills.js:1059:38
	4124/patchTimer/scheduleTask/data.args[0]@polyfills.js:2348:26
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) (0 secs / 0.306 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) (0 secs / 0.306 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 128.0 (Linux x86_64): Executed 11 of 18 (4 FAILED) (0 secs / 0.306 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 128.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) (0 secs / 0.401 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:177984:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:177953:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:177926:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:98742:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:48931:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:14392:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:48925:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:48920:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:124039:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:124063:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:124023:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:123978:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:133519:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:133717:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:133425:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:133409:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:134244:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:179411:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:36571:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:126282:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:739:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:126134:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:179408:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:36571:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:739:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:34750:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:34765:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:739:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3057:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:993:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:792:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1164:23
Firefox 128.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) ERROR (0 secs / 0.401 secs)
Firefox 128.0 (Linux x86_64) ERROR
  An error was thrown in afterAll
  TypeError: ipinfo is null in http://localhost:9876/_karma_webpack_/main.js (line 1202)
  createReal@http://localhost:9876/_karma_webpack_/main.js:1202:7
  submit@http://localhost:9876/_karma_webpack_/main.js:1215:25
  1400/getData/<@http://localhost:9876/_karma_webpack_/main.js:537:34
  next@http://localhost:9876/_karma_webpack_/vendor.js:177984:25
  _next@http://localhost:9876/_karma_webpack_/vendor.js:177953:22
  next@http://localhost:9876/_karma_webpack_/vendor.js:177926:12
  _subscribe@http://localhost:9876/_karma_webpack_/vendor.js:98742:40
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:48931:19
  _trySubscribe@http://localhost:9876/_karma_webpack_/vendor.js:14392:18
  3942/subscribe/<@http://localhost:9876/_karma_webpack_/vendor.js:48925:113
  errorContext@http://localhost:9876/_karma_webpack_/vendor.js:39:5
  subscribe@http://localhost:9876/_karma_webpack_/vendor.js:48920:69
  getData@http://localhost:9876/_karma_webpack_/main.js:533:30
  ngOnInit@http://localhost:9876/_karma_webpack_/main.js:516:10
  callHookInternal@http://localhost:9876/_karma_webpack_/vendor.js:124039:10
  callHook@http://localhost:9876/_karma_webpack_/vendor.js:124063:23
  callHooks@http://localhost:9876/_karma_webpack_/vendor.js:124023:17
  executeInitAndCheckHooks@http://localhost:9876/_karma_webpack_/vendor.js:123978:14
  refreshView@http://localhost:9876/_karma_webpack_/vendor.js:133519:35
  detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:133717:16
  detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:133425:24
  detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:133409:34
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:134244:26
  9399/detectChanges/<@http://localhost:9876/_karma_webpack_/vendor.js:179411:34
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:36571:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:46
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:126282:25
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:739:35
  run@http://localhost:9876/_karma_webpack_/vendor.js:126134:24
  detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:179408:22
  7791/</<@http://localhost:9876/_karma_webpack_/main.js:1680:13
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:158
  onInvoke@http://localhost:9876/_karma_webpack_/vendor.js:36571:33
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:46
  run@http://localhost:9876/_karma_webpack_/polyfills.js:739:35
  runInTestZone@http://localhost:9876/_karma_webpack_/vendor.js:34750:30
  2309/patchJasmine/</wrapTestInZone/<@http://localhost:9876/_karma_webpack_/vendor.js:34765:16
  <Jasmine>
  invoke@http://localhost:9876/_karma_webpack_/polyfills.js:968:158
  run@http://localhost:9876/_karma_webpack_/polyfills.js:739:35
  4124/patchPromise/</scheduleResolveOrReject/<@http://localhost:9876/_karma_webpack_/polyfills.js:3057:30
  invokeTask@http://localhost:9876/_karma_webpack_/polyfills.js:993:171
  runTask@http://localhost:9876/_karma_webpack_/polyfills.js:792:37
  drainMicroTaskQueue@http://localhost:9876/_karma_webpack_/polyfills.js:1164:23
[1A[2KFirefox 128.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) ERROR (0.479 secs / 0.401 secs)
[1A[2KFirefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
Firefox 128.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) DISCONNECTED (30.538 secs / 0.401 secs)
Firefox 128.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 128.0 (Linux x86_64): Executed 12 of 18 (4 FAILED) DISCONNECTED (30.538 secs / 0.401 secs)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
