```bash
yarn run v1.22.22
$ ng test
❯ Building...
✔ Building...
Application bundle generation complete. [5.222 seconds] - 2026-09-09T07:10:54.670Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.9 [39m[90m/home/kushal/src/angular/coloradoquiz[39m

 [31m❯[39m [30m[42m coloradoquiz [49m[39m src/app/app.component.spec.ts [2m([22m[2m3 tests[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 24600[2mms[22m[39m
     [33m[2m✓[22m[39m creates the root component [33m 608[2mms[22m[39m
     [33m[2m✓[22m[39m fetches and caches IP information when none is stored [33m 1094[2mms[22m[39m
[31m     [31m×[31m does not fetch IP information when it is already cached[39m[33m 19146[2mms[22m[39m
 [31m❯[39m [30m[42m coloradoquiz [49m[39m src/app/home/home.component.spec.ts [2m([22m[2m1 test[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 28460[2mms[22m[39m
[31m     [31m×[31m should create[39m[33m 28457[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/news/news.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 93[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/key-industries/key-industries.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 86[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/handle-unrecoverable-state.service.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 74[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/loading.service.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 71[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/playground/playground.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 58[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/loading/loading.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 113[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/menu/menu.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[33m 974[2mms[22m[39m
     [33m[2m✓[22m[39m should create [33m 974[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/loader-io/loader-io.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 27[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/news.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 20[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/ipinfo.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 48[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/quiz.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 7[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/prompt-update.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 10[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/honeynut-cheerios.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 5[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/quiz/quiz.component.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[33m 2035[2mms[22m[39m
     [33m[2m✓[22m[39m creates and loads the quiz for the routed subject [33m 1217[2mms[22m[39m
     [33m[2m✓[22m[39m reaches 100% once every question is answered correctly [33m 323[2mms[22m[39m

[2m Test Files [22m [1m[31m2 failed[39m[22m[2m | [22m[1m[32m14 passed[39m[22m[90m (16)[39m
[2m      Tests [22m [1m[31m2 failed[39m[22m[2m | [22m[1m[32m23 passed[39m[22m[90m (25)[39m
[2m   Start at [22m 03:10:55
[2m   Duration [22m 41.96s[2m (transform 2.52s, setup 5.29s, import 34.52s, tests 56.68s, environment 123.27s)[22m

info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
