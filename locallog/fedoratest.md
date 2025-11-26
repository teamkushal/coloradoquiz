```bash
yarn run v1.22.22
$ ng test
26 11 2025 07:10:58.025:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
26 11 2025 07:10:58.028:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
26 11 2025 07:10:58.032:INFO [launcher]: Starting browser Firefox
26 11 2025 07:11:01.887:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket FdRUIWLSAnuumBlqAAAB with id 61248470
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.019 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 2 of 18 (2 FAILED) (0 secs / 0.023 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64): Executed 3 of 18 (2 FAILED) (0 secs / 0.061 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v21.angular.dev/errors/NG0201 in vendor.js (line 18250)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:18755:17
	get@vendor.js:19027:39
	get@vendor.js:19379:27
	get@vendor.js:19379:27
	inject@vendor.js:131624:58
	inject@vendor.js:131510:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30294:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28473:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28488:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 4 of 18 (3 FAILED) (0 secs / 0.082 secs)
Firefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v21.angular.dev/errors/NG0201 in vendor.js (line 18250)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:18755:17
	get@vendor.js:19027:39
	get@vendor.js:19379:27
	get@vendor.js:19379:27
	inject@vendor.js:131624:58
	inject@vendor.js:131510:33
	9074/</<@main.js:1982:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30294:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28473:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28488:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 (3 FAILED) (0 secs / 0.095 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.217 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.249 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) (0 secs / 0.276 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 9 of 18 (3 FAILED) (0 secs / 0.297 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 10 of 18 (3 FAILED) (0 secs / 0.306 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 11 of 18 (3 FAILED) (0 secs / 0.325 secs)
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 11 of 18 (3 FAILED) (0 secs / 0.325 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 11 of 18 (3 FAILED) (0 secs / 0.325 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 140.0 (Linux x86_64): Executed 12 of 18 (3 FAILED) (0 secs / 0.381 secs)
[1A[2KFirefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 108737)
	verifySemanticsOfNgModuleDef@vendor.js:108737:13
	6124/verifySemanticsOfNgModuleDef/<@vendor.js:108747:33
	verifySemanticsOfNgModuleDef@vendor.js:108745:112
	get@vendor.js:108704:22
	applyProviderOverridesInScope@vendor.js:131039:25
	compileTestModule@vendor.js:131279:10
	finalize@vendor.js:130915:10
	get testModuleRef@vendor.js:131702:43
	inject@vendor.js:131623:20
	inject@vendor.js:131510:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30294:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28473:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28488:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
Firefox 140.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) (0 secs / 0.385 secs)
Firefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 108737)
	verifySemanticsOfNgModuleDef@vendor.js:108737:13
	6124/verifySemanticsOfNgModuleDef/<@vendor.js:108747:33
	verifySemanticsOfNgModuleDef@vendor.js:108745:112
	get@vendor.js:108704:22
	applyProviderOverridesInScope@vendor.js:131039:25
	compileTestModule@vendor.js:131279:10
	finalize@vendor.js:130915:10
	get testModuleRef@vendor.js:131702:43
	inject@vendor.js:131623:20
	inject@vendor.js:131510:33
	1230/</<@main.js:392:74
	invoke@polyfills.js:436:158
	onInvoke@vendor.js:30294:33
	invoke@polyfills.js:436:46
	run@polyfills.js:207:35
	runInTestZone@vendor.js:28473:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:28488:16
	<Jasmine>
	invoke@polyfills.js:436:158
	run@polyfills.js:207:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2525:30
	invokeTask@polyfills.js:461:171
	runTask@polyfills.js:260:37
	drainMicroTaskQueue@polyfills.js:632:23
[1A[2KFirefox 140.0 (Linux x86_64): Executed 14 of 18 (4 FAILED) (0 secs / 0.397 secs)
26 11 2025 07:11:04.019:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 14 of 18 (4 FAILED) (0 secs / 0.397 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 14 of 18 (4 FAILED) (0 secs / 0.397 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 14 of 18 (4 FAILED) (0 secs / 0.397 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 15 of 18 (4 FAILED) (0 secs / 0.665 secs)
[1A[2KERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
Firefox 140.0 (Linux x86_64): Executed 15 of 18 (4 FAILED) (0 secs / 0.665 secs)
ERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
[1A[2KFirefox 140.0 (Linux x86_64): Executed 16 of 18 (4 FAILED) (0 secs / 0.735 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 17 of 18 (4 FAILED) (0 secs / 0.813 secs)
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 17 of 18 (4 FAILED) (0 secs / 0.813 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 17 of 18 (4 FAILED) (0 secs / 0.813 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 17 of 18 (4 FAILED) (0 secs / 0.813 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 140.0 (Linux x86_64): Executed 17 of 18 (4 FAILED) (0 secs / 0.813 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 140.0 (Linux x86_64): Executed 17 of 18 (4 FAILED) (0 secs / 0.813 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 18 of 18 (4 FAILED) (0 secs / 0.912 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 18 of 18 (4 FAILED) (1.163 secs / 0.912 secs)
TOTAL: 4 FAILED, 14 SUCCESS
TOTAL: 4 FAILED, 14 SUCCESS
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
