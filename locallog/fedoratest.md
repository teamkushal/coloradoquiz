```bash
yarn run v1.22.21
$ ng test
11 01 2024 09:05:21.793:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
11 01 2024 09:05:21.795:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
11 01 2024 09:05:21.799:INFO [launcher]: Starting browser Firefox
11 01 2024 09:05:23.801:INFO [Firefox 121.0 (Linux x86_64)]: Connected on socket PhsbMh9-ZJX0vnJ-AAAB with id 31199993
Firefox 121.0 (Linux x86_64): Executed 0 of 15[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2K[31mFirefox 121.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED[39m
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 79998)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:79998:21
	get@vendor.js:80449:27
	get@vendor.js:80449:27
	inject@vendor.js:111399:58
	inject@vendor.js:111254:33
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
Firefox 121.0 (Linux x86_64): Executed 1 of 15[31m (1 FAILED)[39m (0 secs / 0.03 secs)
Firefox 121.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 79998)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:79998:21
	get@vendor.js:80449:27
	get@vendor.js:80449:27
	inject@vendor.js:111399:58
	inject@vendor.js:111254:33
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
[1A[2K[31mFirefox 121.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED[39m
	NullInjectorError: R3InjectorError[HandleUnrecoverableStateService -> HandleUnrecoverableStateService]: 
	  NullInjectorError: No provider for HandleUnrecoverableStateService! in vendor.js (line 79998)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HandleUnrecoverableStateService', 'HandleUnrecoverableStateService' ] })
	get@vendor.js:79998:21
	get@vendor.js:80449:27
	get@vendor.js:80449:27
	inject@vendor.js:111399:58
	inject@vendor.js:111254:33
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
Firefox 121.0 (Linux x86_64): Executed 2 of 15[31m (2 FAILED)[39m (0 secs / 0.043 secs)
Firefox 121.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	NullInjectorError: R3InjectorError[HandleUnrecoverableStateService -> HandleUnrecoverableStateService]: 
	  NullInjectorError: No provider for HandleUnrecoverableStateService! in vendor.js (line 79998)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HandleUnrecoverableStateService', 'HandleUnrecoverableStateService' ] })
	get@vendor.js:79998:21
	get@vendor.js:80449:27
	get@vendor.js:80449:27
	inject@vendor.js:111399:58
	inject@vendor.js:111254:33
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
11 01 2024 09:05:25.025:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 121.0 (Linux x86_64): Executed 3 of 15[31m (2 FAILED)[39m (0 secs / 0.101 secs)
[1A[2KERROR: [36m'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 121.0 (Linux x86_64): Executed 3 of 15[31m (2 FAILED)[39m (0 secs / 0.101 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 121.0 (Linux x86_64): Executed 3 of 15[31m (2 FAILED)[39m (0 secs / 0.101 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 121.0 (Linux x86_64): Executed 4 of 15[31m (2 FAILED)[39m (0 secs / 0.138 secs)
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 121.0 (Linux x86_64): Executed 4 of 15[31m (2 FAILED)[39m (0 secs / 0.138 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

[1A[2KFirefox 121.0 (Linux x86_64): Executed 5 of 15[31m (2 FAILED)[39m (0 secs / 0.2 secs)
[1A[2KFirefox 121.0 (Linux x86_64): Executed 6 of 15[31m (2 FAILED)[39m (0 secs / 0.208 secs)
[1A[2KERROR: [36m'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 121.0 (Linux x86_64): Executed 6 of 15[31m (2 FAILED)[39m (0 secs / 0.208 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 121.0 (Linux x86_64): Executed 6 of 15[31m (2 FAILED)[39m (0 secs / 0.208 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 121.0 (Linux x86_64): Executed 6 of 15[31m (2 FAILED)[39m (0 secs / 0.208 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 121.0 (Linux x86_64): Executed 6 of 15[31m (2 FAILED)[39m (0 secs / 0.208 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 121.0 (Linux x86_64): Executed 6 of 15[31m (2 FAILED)[39m (0 secs / 0.208 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 121.0 (Linux x86_64): Executed 7 of 15[31m (2 FAILED)[39m (0 secs / 0.264 secs)
[1A[2KFirefox 121.0 (Linux x86_64): Executed 8 of 15[31m (2 FAILED)[39m (0 secs / 0.272 secs)
[1A[2KFirefox 121.0 (Linux x86_64): Executed 9 of 15[31m (2 FAILED)[39m (0 secs / 0.278 secs)
[1A[2KFirefox 121.0 (Linux x86_64): Executed 10 of 15[31m (2 FAILED)[39m (0 secs / 0.295 secs)
[1A[2KFirefox 121.0 (Linux x86_64): Executed 11 of 15[31m (2 FAILED)[39m (0 secs / 0.3 secs)
[1A[2K[31mFirefox 121.0 (Linux x86_64) PromptUpdateService should be created FAILED[39m
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 102610)
	verifySemanticsOfNgModuleDef@vendor.js:102610:13
	1699/verifySemanticsOfNgModuleDef/<@vendor.js:102620:33
	verifySemanticsOfNgModuleDef@vendor.js:102618:58
	get@vendor.js:102575:22
	applyProviderOverridesInScope@vendor.js:110669:25
	compileTestModule@vendor.js:110956:10
	finalize@vendor.js:110493:10
	get testModuleRef@vendor.js:111491:43
	inject@vendor.js:111398:20
	inject@vendor.js:111254:33
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
Firefox 121.0 (Linux x86_64): Executed 12 of 15[31m (3 FAILED)[39m (0 secs / 0.302 secs)
Firefox 121.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 102610)
	verifySemanticsOfNgModuleDef@vendor.js:102610:13
	1699/verifySemanticsOfNgModuleDef/<@vendor.js:102620:33
	verifySemanticsOfNgModuleDef@vendor.js:102618:58
	get@vendor.js:102575:22
	applyProviderOverridesInScope@vendor.js:110669:25
	compileTestModule@vendor.js:110956:10
	finalize@vendor.js:110493:10
	get testModuleRef@vendor.js:111491:43
	inject@vendor.js:111398:20
	inject@vendor.js:111254:33
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
[1A[2KFirefox 121.0 (Linux x86_64): Executed 13 of 15[31m (3 FAILED)[39m (0 secs / 0.306 secs)
[1A[2KERROR: [36m'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 121.0 (Linux x86_64): Executed 13 of 15[31m (3 FAILED)[39m (0 secs / 0.306 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 121.0 (Linux x86_64): Executed 13 of 15[31m (3 FAILED)[39m (0 secs / 0.306 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 121.0 (Linux x86_64): Executed 13 of 15[31m (3 FAILED)[39m (0 secs / 0.306 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 121.0 (Linux x86_64): Executed 14 of 15[31m (3 FAILED)[39m (0 secs / 0.362 secs)
[1A[2KFirefox 121.0 (Linux x86_64): Executed 15 of 15[31m (3 FAILED)[39m (0 secs / 0.371 secs)
[1A[2KFirefox 121.0 (Linux x86_64): Executed 15 of 15[31m (3 FAILED)[39m (0.471 secs / 0.371 secs)
[31mTOTAL: 3 FAILED, 12 SUCCESS[39m
TOTAL: 3 FAILED, 12 SUCCESS
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
