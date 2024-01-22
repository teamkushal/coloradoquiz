```bash
yarn run v1.22.21
$ ng test
22 01 2024 16:36:30.145:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
22 01 2024 16:36:30.147:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
22 01 2024 16:36:30.150:INFO [launcher]: Starting browser Firefox
22 01 2024 16:36:32.126:INFO [Firefox 121.0 (Linux x86_64)]: Connected on socket r6pkzvy7cJ7VRXrgAAAB with id 77783928
Firefox 121.0 (Linux x86_64): Executed 0 of 15[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 121.0 (Linux x86_64): Executed 1 of 15[32m SUCCESS[39m (0 secs / 0.094 secs)
[1A[2KERROR: [36m'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 121.0 (Linux x86_64): Executed 1 of 15[32m SUCCESS[39m (0 secs / 0.094 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 121.0 (Linux x86_64): Executed 1 of 15[32m SUCCESS[39m (0 secs / 0.094 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 121.0 (Linux x86_64): Executed 1 of 15[32m SUCCESS[39m (0 secs / 0.094 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 121.0 (Linux x86_64): Executed 1 of 15[32m SUCCESS[39m (0 secs / 0.094 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 121.0 (Linux x86_64): Executed 1 of 15[32m SUCCESS[39m (0 secs / 0.094 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 121.0 (Linux x86_64): Executed 2 of 15[32m SUCCESS[39m (0 secs / 0.206 secs)
[1A[2K[31mFirefox 121.0 (Linux x86_64) PromptUpdateService should be created FAILED[39m
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 103476)
	verifySemanticsOfNgModuleDef@vendor.js:103476:13
	1699/verifySemanticsOfNgModuleDef/<@vendor.js:103486:33
	verifySemanticsOfNgModuleDef@vendor.js:103484:58
	get@vendor.js:103441:22
	applyProviderOverridesInScope@vendor.js:111505:25
	compileTestModule@vendor.js:111792:10
	finalize@vendor.js:111329:10
	get testModuleRef@vendor.js:112328:43
	inject@vendor.js:112235:20
	inject@vendor.js:112091:33
	9148/</<@main.js:1071:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	runInTestZone@vendor.js:5000:28
	7681/</wrapTestInZone/<@vendor.js:5015:14
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:198:35
	6657/</scheduleResolveOrReject/<@polyfills.js:1273:28
	invokeTask@polyfills.js:440:171
	runTask@polyfills.js:244:37
	drainMicroTaskQueue@polyfills.js:611:23
Firefox 121.0 (Linux x86_64): Executed 3 of 15[31m (1 FAILED)[39m (0 secs / 0.21 secs)
Firefox 121.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 103476)
	verifySemanticsOfNgModuleDef@vendor.js:103476:13
	1699/verifySemanticsOfNgModuleDef/<@vendor.js:103486:33
	verifySemanticsOfNgModuleDef@vendor.js:103484:58
	get@vendor.js:103441:22
	applyProviderOverridesInScope@vendor.js:111505:25
	compileTestModule@vendor.js:111792:10
	finalize@vendor.js:111329:10
	get testModuleRef@vendor.js:112328:43
	inject@vendor.js:112235:20
	inject@vendor.js:112091:33
	9148/</<@main.js:1071:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	runInTestZone@vendor.js:5000:28
	7681/</wrapTestInZone/<@vendor.js:5015:14
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:198:35
	6657/</scheduleResolveOrReject/<@polyfills.js:1273:28
	invokeTask@polyfills.js:440:171
	runTask@polyfills.js:244:37
	drainMicroTaskQueue@polyfills.js:611:23
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 15[31m (1 FAILED)[39m (0 secs / 0.217 secs)
[1A[2KERROR: [36m'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 121.0 (Linux x86_64): Executed 4 of 15[31m (1 FAILED)[39m (0 secs / 0.217 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 121.0 (Linux x86_64): Executed 4 of 15[31m (1 FAILED)[39m (0 secs / 0.217 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 121.0 (Linux x86_64): Executed 5 of 15[31m (1 FAILED)[39m (0 secs / 0.239 secs)
[1A[2KFirefox 121.0 (Linux x86_64): Executed 6 of 15[31m (1 FAILED)[39m (0 secs / 0.27 secs)
[1A[2KFirefox 121.0 (Linux x86_64): Executed 7 of 15[31m (1 FAILED)[39m (0 secs / 0.281 secs)
[1A[2KFirefox 121.0 (Linux x86_64): Executed 8 of 15[31m (1 FAILED)[39m (0 secs / 0.289 secs)
[1A[2KERROR: [36m'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 121.0 (Linux x86_64): Executed 8 of 15[31m (1 FAILED)[39m (0 secs / 0.289 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 121.0 (Linux x86_64): Executed 8 of 15[31m (1 FAILED)[39m (0 secs / 0.289 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 121.0 (Linux x86_64): Executed 8 of 15[31m (1 FAILED)[39m (0 secs / 0.289 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 121.0 (Linux x86_64): Executed 9 of 15[31m (1 FAILED)[39m (0 secs / 0.346 secs)
[1A[2KFirefox 121.0 (Linux x86_64): Executed 10 of 15[31m (1 FAILED)[39m (0 secs / 0.355 secs)
[1A[2KFirefox 121.0 (Linux x86_64): Executed 11 of 15[31m (1 FAILED)[39m (0 secs / 0.371 secs)
[1A[2K[31mFirefox 121.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED[39m
	NullInjectorError: R3InjectorError[HandleUnrecoverableStateService -> HandleUnrecoverableStateService]: 
	  NullInjectorError: No provider for HandleUnrecoverableStateService! in vendor.js (line 80761)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HandleUnrecoverableStateService', 'HandleUnrecoverableStateService' ] })
	get@vendor.js:80761:21
	get@vendor.js:81212:27
	get@vendor.js:81212:27
	inject@vendor.js:112236:58
	inject@vendor.js:112091:33
	6076/</<@main.js:105:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	runInTestZone@vendor.js:5000:28
	7681/</wrapTestInZone/<@vendor.js:5015:14
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:198:35
	6657/</scheduleResolveOrReject/<@polyfills.js:1273:28
	invokeTask@polyfills.js:440:171
	runTask@polyfills.js:244:37
	drainMicroTaskQueue@polyfills.js:611:23
Firefox 121.0 (Linux x86_64): Executed 12 of 15[31m (2 FAILED)[39m (0 secs / 0.376 secs)
Firefox 121.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	NullInjectorError: R3InjectorError[HandleUnrecoverableStateService -> HandleUnrecoverableStateService]: 
	  NullInjectorError: No provider for HandleUnrecoverableStateService! in vendor.js (line 80761)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HandleUnrecoverableStateService', 'HandleUnrecoverableStateService' ] })
	get@vendor.js:80761:21
	get@vendor.js:81212:27
	get@vendor.js:81212:27
	inject@vendor.js:112236:58
	inject@vendor.js:112091:33
	6076/</<@main.js:105:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	runInTestZone@vendor.js:5000:28
	7681/</wrapTestInZone/<@vendor.js:5015:14
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:198:35
	6657/</scheduleResolveOrReject/<@polyfills.js:1273:28
	invokeTask@polyfills.js:440:171
	runTask@polyfills.js:244:37
	drainMicroTaskQueue@polyfills.js:611:23
[1A[2KFirefox 121.0 (Linux x86_64): Executed 13 of 15[31m (2 FAILED)[39m (0 secs / 0.38 secs)
[1A[2KFirefox 121.0 (Linux x86_64): Executed 14 of 15[31m (2 FAILED)[39m (0 secs / 0.384 secs)
[1A[2K[31mFirefox 121.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED[39m
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 80761)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:80761:21
	get@vendor.js:81212:27
	get@vendor.js:81212:27
	inject@vendor.js:112236:58
	inject@vendor.js:112091:33
	3130/</<@main.js:246:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	runInTestZone@vendor.js:5000:28
	7681/</wrapTestInZone/<@vendor.js:5015:14
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:198:35
	6657/</scheduleResolveOrReject/<@polyfills.js:1273:28
	invokeTask@polyfills.js:440:171
	runTask@polyfills.js:244:37
	drainMicroTaskQueue@polyfills.js:611:23
Firefox 121.0 (Linux x86_64): Executed 15 of 15[31m (3 FAILED)[39m (0 secs / 0.389 secs)
Firefox 121.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 80761)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:80761:21
	get@vendor.js:81212:27
	get@vendor.js:81212:27
	inject@vendor.js:112236:58
	inject@vendor.js:112091:33
	3130/</<@main.js:246:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	runInTestZone@vendor.js:5000:28
	7681/</wrapTestInZone/<@vendor.js:5015:14
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:198:35
	6657/</scheduleResolveOrReject/<@polyfills.js:1273:28
	invokeTask@polyfills.js:440:171
	runTask@polyfills.js:244:37
	drainMicroTaskQueue@polyfills.js:611:23
[1A[2KFirefox 121.0 (Linux x86_64): Executed 15 of 15[31m (3 FAILED)[39m (0.451 secs / 0.389 secs)
[31mTOTAL: 3 FAILED, 12 SUCCESS[39m
TOTAL: 3 FAILED, 12 SUCCESS
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
