```bash
yarn run v1.22.21
$ ng test
28 01 2024 10:00:10.790:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
28 01 2024 10:00:10.792:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
28 01 2024 10:00:10.796:INFO [launcher]: Starting browser Firefox
28 01 2024 10:00:12.985:INFO [Firefox 122.0 (Linux x86_64)]: Connected on socket QPxIfNOQUj2NFHe1AAAB with id 32575199
Firefox 122.0 (Linux x86_64): Executed 0 of 16[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 122.0 (Linux x86_64): Executed 1 of 16[32m SUCCESS[39m (0 secs / 0.033 secs)
[1A[2KFirefox 122.0 (Linux x86_64): Executed 2 of 16[32m SUCCESS[39m (0 secs / 0.067 secs)
[1A[2KFirefox 122.0 (Linux x86_64): Executed 3 of 16[32m SUCCESS[39m (0 secs / 0.153 secs)
[1A[2KERROR: [36m'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 122.0 (Linux x86_64): Executed 3 of 16[32m SUCCESS[39m (0 secs / 0.153 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 122.0 (Linux x86_64): Executed 3 of 16[32m SUCCESS[39m (0 secs / 0.153 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 122.0 (Linux x86_64): Executed 4 of 16[32m SUCCESS[39m (0 secs / 0.177 secs)
[1A[2K[31mFirefox 122.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED[39m
	NullInjectorError: R3InjectorError[HandleUnrecoverableStateService -> HandleUnrecoverableStateService]: 
	  NullInjectorError: No provider for HandleUnrecoverableStateService! in vendor.js (line 80763)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HandleUnrecoverableStateService', 'HandleUnrecoverableStateService' ] })
	get@vendor.js:80763:21
	get@vendor.js:81214:27
	get@vendor.js:81214:27
	inject@vendor.js:112236:58
	inject@vendor.js:112091:33
	6076/</<@main.js:119:74
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
Firefox 122.0 (Linux x86_64): Executed 5 of 16[31m (1 FAILED)[39m (0 secs / 0.185 secs)
Firefox 122.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	NullInjectorError: R3InjectorError[HandleUnrecoverableStateService -> HandleUnrecoverableStateService]: 
	  NullInjectorError: No provider for HandleUnrecoverableStateService! in vendor.js (line 80763)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HandleUnrecoverableStateService', 'HandleUnrecoverableStateService' ] })
	get@vendor.js:80763:21
	get@vendor.js:81214:27
	get@vendor.js:81214:27
	inject@vendor.js:112236:58
	inject@vendor.js:112091:33
	6076/</<@main.js:119:74
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
[1A[2KFirefox 122.0 (Linux x86_64): Executed 6 of 16[31m (1 FAILED)[39m (0 secs / 0.191 secs)
[1A[2K[31mFirefox 122.0 (Linux x86_64) PromptUpdateService should be created FAILED[39m
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 103475)
	verifySemanticsOfNgModuleDef@vendor.js:103475:13
	1699/verifySemanticsOfNgModuleDef/<@vendor.js:103485:33
	verifySemanticsOfNgModuleDef@vendor.js:103483:58
	get@vendor.js:103440:22
	applyProviderOverridesInScope@vendor.js:111505:25
	compileTestModule@vendor.js:111792:10
	finalize@vendor.js:111329:10
	get testModuleRef@vendor.js:112328:43
	inject@vendor.js:112235:20
	inject@vendor.js:112091:33
	9148/</<@main.js:1178:74
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
Firefox 122.0 (Linux x86_64): Executed 7 of 16[31m (2 FAILED)[39m (0 secs / 0.193 secs)
Firefox 122.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 103475)
	verifySemanticsOfNgModuleDef@vendor.js:103475:13
	1699/verifySemanticsOfNgModuleDef/<@vendor.js:103485:33
	verifySemanticsOfNgModuleDef@vendor.js:103483:58
	get@vendor.js:103440:22
	applyProviderOverridesInScope@vendor.js:111505:25
	compileTestModule@vendor.js:111792:10
	finalize@vendor.js:111329:10
	get testModuleRef@vendor.js:112328:43
	inject@vendor.js:112235:20
	inject@vendor.js:112091:33
	9148/</<@main.js:1178:74
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
[1A[2K[31mFirefox 122.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED[39m
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 80763)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:80763:21
	get@vendor.js:81214:27
	get@vendor.js:81214:27
	inject@vendor.js:112236:58
	inject@vendor.js:112091:33
	3130/</<@main.js:260:74
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
Firefox 122.0 (Linux x86_64): Executed 8 of 16[31m (3 FAILED)[39m (0 secs / 0.199 secs)
Firefox 122.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	NullInjectorError: R3InjectorError[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService! in vendor.js (line 80763)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	get@vendor.js:80763:21
	get@vendor.js:81214:27
	get@vendor.js:81214:27
	inject@vendor.js:112236:58
	inject@vendor.js:112091:33
	3130/</<@main.js:260:74
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
[1A[2KFirefox 122.0 (Linux x86_64): Executed 9 of 16[31m (3 FAILED)[39m (0 secs / 0.206 secs)
[1A[2KFirefox 122.0 (Linux x86_64): Executed 10 of 16[31m (3 FAILED)[39m (0 secs / 0.218 secs)
[1A[2KFirefox 122.0 (Linux x86_64): Executed 11 of 16[31m (3 FAILED)[39m (0 secs / 0.223 secs)
[1A[2KERROR: [36m'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 122.0 (Linux x86_64): Executed 11 of 16[31m (3 FAILED)[39m (0 secs / 0.223 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 122.0 (Linux x86_64): Executed 11 of 16[31m (3 FAILED)[39m (0 secs / 0.223 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 122.0 (Linux x86_64): Executed 11 of 16[31m (3 FAILED)[39m (0 secs / 0.223 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 122.0 (Linux x86_64): Executed 12 of 16[31m (3 FAILED)[39m (0 secs / 0.319 secs)
28 01 2024 10:00:15.014:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2K[31mFirefox 122.0 (Linux x86_64) AppComponent should create the app FAILED[39m
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 80763)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:80763:21
	get@vendor.js:81214:27
	get@vendor.js:81214:27
	injectInjectorOnly@vendor.js:76227:36
	ɵɵinject@vendor.js:76233:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:41
	1699/hydrate/<@vendor.js:81328:33
	runInInjectorProfilerContext@vendor.js:76188:5
	hydrate@vendor.js:81327:37
	get@vendor.js:81205:23
	get@vendor.js:90214:32
	lookupTokenUsingModuleInjector@vendor.js:79325:31
	getOrCreateInjectable@vendor.js:79371:10
	ɵɵdirectiveInject@vendor.js:86908:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:79565:38
	createRootComponent@vendor.js:90464:48
	create@vendor.js:90332:19
	initComponent@vendor.js:112303:45
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	onInvoke@vendor.js:89579:25
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	run@vendor.js:89433:24
	createComponent@vendor.js:112308:37
	createComponent@vendor.js:112106:33
	7288/</<@main.js:38:80
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
Firefox 122.0 (Linux x86_64): Executed 13 of 16[31m (4 FAILED)[39m (0 secs / 0.343 secs)
Firefox 122.0 (Linux x86_64) AppComponent should create the app FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[IpinfoService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 80763)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'IpinfoService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:80763:21
	get@vendor.js:81214:27
	get@vendor.js:81214:27
	injectInjectorOnly@vendor.js:76227:36
	ɵɵinject@vendor.js:76233:59
	IpinfoService_Factory@ng:///IpinfoService/ɵfac.js:5:41
	1699/hydrate/<@vendor.js:81328:33
	runInInjectorProfilerContext@vendor.js:76188:5
	hydrate@vendor.js:81327:37
	get@vendor.js:81205:23
	get@vendor.js:90214:32
	lookupTokenUsingModuleInjector@vendor.js:79325:31
	getOrCreateInjectable@vendor.js:79371:10
	ɵɵdirectiveInject@vendor.js:86908:38
	AppComponent_Factory@ng:///AppComponent/ɵfac.js:6:7
	getNodeInjectable@vendor.js:79565:38
	createRootComponent@vendor.js:90464:48
	create@vendor.js:90332:19
	initComponent@vendor.js:112303:45
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:4734:33
	invoke@polyfills.js:413:46
	onInvoke@vendor.js:89579:25
	invoke@polyfills.js:413:46
	run@polyfills.js:198:35
	run@vendor.js:89433:24
	createComponent@vendor.js:112308:37
	createComponent@vendor.js:112106:33
	7288/</<@main.js:38:80
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
[1A[2KFirefox 122.0 (Linux x86_64): Executed 14 of 16[31m (4 FAILED)[39m (0 secs / 0.353 secs)
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 122.0 (Linux x86_64): Executed 14 of 16[31m (4 FAILED)[39m (0 secs / 0.353 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

[1A[2KFirefox 122.0 (Linux x86_64): Executed 15 of 16[31m (4 FAILED)[39m (0 secs / 0.379 secs)
[1A[2KERROR: [36m'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 122.0 (Linux x86_64): Executed 15 of 16[31m (4 FAILED)[39m (0 secs / 0.379 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 122.0 (Linux x86_64): Executed 15 of 16[31m (4 FAILED)[39m (0 secs / 0.379 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 122.0 (Linux x86_64): Executed 15 of 16[31m (4 FAILED)[39m (0 secs / 0.379 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 122.0 (Linux x86_64): Executed 15 of 16[31m (4 FAILED)[39m (0 secs / 0.379 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 122.0 (Linux x86_64): Executed 15 of 16[31m (4 FAILED)[39m (0 secs / 0.379 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 122.0 (Linux x86_64): Executed 16 of 16[31m (4 FAILED)[39m (0 secs / 0.426 secs)
[1A[2KFirefox 122.0 (Linux x86_64): Executed 16 of 16[31m (4 FAILED)[39m (0.452 secs / 0.426 secs)
[31mTOTAL: 4 FAILED, 12 SUCCESS[39m
TOTAL: 4 FAILED, 12 SUCCESS
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
