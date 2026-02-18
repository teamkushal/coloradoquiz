```bash
yarn run v1.22.22
$ ng test
18 02 2026 14:11:02.815:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
18 02 2026 14:11:02.817:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
18 02 2026 14:11:02.821:INFO [launcher]: Starting browser Firefox
18 02 2026 14:11:06.895:INFO [Firefox 140.0 (Linux x86_64)]: Connected on socket TqmXV9rNIZE4cnk9AAAB with id 52444280
Firefox 140.0 (Linux x86_64): Executed 0 of 18 SUCCESS (0 secs / 0 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 1 of 18 (1 FAILED) (0 secs / 0.013 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should notify user on unrecoverable event FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
Firefox 140.0 (Linux x86_64): Executed 2 of 18 (2 FAILED) (0 secs / 0.015 secs)
Firefox 140.0 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED
	createSpyObj requires a non-empty array or object of method names to create spies for thrown
[1A[2KFirefox 140.0 (Linux x86_64): Executed 3 of 18 (2 FAILED) (0 secs / 0.05 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 4 of 18 (2 FAILED) (0 secs / 0.197 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 5 of 18 (2 FAILED) (0 secs / 0.308 secs)
[1A[2KFirefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v21.angular.dev/errors/NG0201 in vendor.js (line 82009)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:82553:17
	get@vendor.js:82825:39
	get@vendor.js:83147:27
	get@vendor.js:83147:27
	inject@vendor.js:90557:58
	inject@vendor.js:90443:33
	9074/</<@main.js:413:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6270:33
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	runInTestZone@vendor.js:4449:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:4464:16
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:184:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2502:30
	invokeTask@polyfills.js:438:171
	runTask@polyfills.js:237:37
	drainMicroTaskQueue@polyfills.js:609:23
	invokeTask@polyfills.js:518:11
	4124/initZone/ZoneTask/this.invoke@polyfills.js:504:38
	4124/patchTimer/scheduleTask/data.args[0]@polyfills.js:1793:26
Firefox 140.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.322 secs)
Firefox 140.0 (Linux x86_64) HttpRequestInterceptorService should be created FAILED
	ɵNotFound: NG0201: No provider found for `HttpRequestInterceptorService`. Find more at https://v21.angular.dev/errors/NG0201 in vendor.js (line 82009)
	error properties: Object({ code: -201, ngErrorCode: -201, ngErrorMessage: 'No provider found for `HttpRequestInterceptorService`.', ngTokenPath: [ 'HttpRequestInterceptorService' ] })
	createRuntimeError@vendor.js:82553:17
	get@vendor.js:82825:39
	get@vendor.js:83147:27
	get@vendor.js:83147:27
	inject@vendor.js:90557:58
	inject@vendor.js:90443:33
	9074/</<@main.js:413:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6270:33
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	runInTestZone@vendor.js:4449:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:4464:16
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:184:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2502:30
	invokeTask@polyfills.js:438:171
	runTask@polyfills.js:237:37
	drainMicroTaskQueue@polyfills.js:609:23
	invokeTask@polyfills.js:518:11
	4124/initZone/ZoneTask/this.invoke@polyfills.js:504:38
	4124/patchTimer/scheduleTask/data.args[0]@polyfills.js:1793:26
[1A[2KERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.322 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 6 of 18 (3 FAILED) (0 secs / 0.322 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'HomeComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 140.0 (Linux x86_64): Executed 7 of 18 (3 FAILED) (0 secs / 0.365 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 8 of 18 (3 FAILED) (0 secs / 0.374 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 9 of 18 (3 FAILED) (0 secs / 0.391 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 10 of 18 (3 FAILED) (0 secs / 0.401 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 11 of 18 (3 FAILED) (0 secs / 0.413 secs)
18 02 2026 14:11:09.233:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 140.0 (Linux x86_64): Executed 12 of 18 (3 FAILED) (0 secs / 0.432 secs)
[1A[2KFirefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 79401)
	verifySemanticsOfNgModuleDef@vendor.js:79401:13
	6124/verifySemanticsOfNgModuleDef/<@vendor.js:79411:33
	verifySemanticsOfNgModuleDef@vendor.js:79409:112
	get@vendor.js:79368:22
	applyProviderOverridesInScope@vendor.js:89963:25
	compileTestModule@vendor.js:90203:10
	finalize@vendor.js:89839:10
	get testModuleRef@vendor.js:90635:43
	inject@vendor.js:90556:20
	inject@vendor.js:90443:33
	1230/</<@main.js:1369:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6270:33
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	runInTestZone@vendor.js:4449:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:4464:16
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:184:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2502:30
	invokeTask@polyfills.js:438:171
	runTask@polyfills.js:237:37
	drainMicroTaskQueue@polyfills.js:609:23
Firefox 140.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) (0 secs / 0.436 secs)
Firefox 140.0 (Linux x86_64) PromptUpdateService should be created FAILED
	Error: Unexpected value 'PromptUpdateService' imported by the module 'DynamicTestModule'. Please add an @NgModule annotation. in vendor.js (line 79401)
	verifySemanticsOfNgModuleDef@vendor.js:79401:13
	6124/verifySemanticsOfNgModuleDef/<@vendor.js:79411:33
	verifySemanticsOfNgModuleDef@vendor.js:79409:112
	get@vendor.js:79368:22
	applyProviderOverridesInScope@vendor.js:89963:25
	compileTestModule@vendor.js:90203:10
	finalize@vendor.js:89839:10
	get testModuleRef@vendor.js:90635:43
	inject@vendor.js:90556:20
	inject@vendor.js:90443:33
	1230/</<@main.js:1369:74
	invoke@polyfills.js:413:158
	onInvoke@vendor.js:6270:33
	invoke@polyfills.js:413:46
	run@polyfills.js:184:35
	runInTestZone@vendor.js:4449:30
	2309/patchJasmine/</wrapTestInZone/<@vendor.js:4464:16
	<Jasmine>
	invoke@polyfills.js:413:158
	run@polyfills.js:184:35
	4124/patchPromise/</scheduleResolveOrReject/<@polyfills.js:2502:30
	invokeTask@polyfills.js:438:171
	runTask@polyfills.js:237:37
	drainMicroTaskQueue@polyfills.js:609:23
[1A[2KERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
Firefox 140.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) (0 secs / 0.436 secs)
ERROR: 'NG05604: Service worker registration failed with: TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) (0 secs / 0.436 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) (0 secs / 0.436 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) (0 secs / 0.436 secs)
ERROR: 'NG0304: 'app-hello-world' is not a known element (used in the 'NewsComponent' component template):
1. If 'app-hello-world' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'top-stories'}
Firefox 140.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) (0 secs / 0.436 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
Firefox 140.0 (Linux x86_64): Executed 13 of 18 (4 FAILED) (0 secs / 0.436 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 14 of 18 (4 FAILED) (0 secs / 0.603 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 15 of 18 (4 FAILED) (0 secs / 0.681 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 16 of 18 (4 FAILED) (0 secs / 0.693 secs)
[1A[2KERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
Firefox 140.0 (Linux x86_64): Executed 16 of 18 (4 FAILED) (0 secs / 0.693 secs)
ERROR: 'NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 16 of 18 (4 FAILED) (0 secs / 0.693 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: Object{title: 'history'}
Firefox 140.0 (Linux x86_64): Executed 16 of 18 (4 FAILED) (0 secs / 0.693 secs)
LOG: Object{title: 'history'}
[1A[2KFirefox 140.0 (Linux x86_64): Executed 17 of 18 (4 FAILED) (0 secs / 0.788 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 18 of 18 (4 FAILED) (0 secs / 0.808 secs)
[1A[2KFirefox 140.0 (Linux x86_64): Executed 18 of 18 (4 FAILED) (1.01 secs / 0.808 secs)
TOTAL: 4 FAILED, 14 SUCCESS
TOTAL: 4 FAILED, 14 SUCCESS
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
