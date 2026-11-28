```bash
yarn run v1.22.22
$ ng test
❯ Building...
✔ Building...
Application bundle generation complete. [4.434 seconds] - 2026-11-28T05:10:43.364Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.9 [39m[90m/home/kushal/src/angular/coloradoquiz[39m

 [31m❯[39m [30m[42m coloradoquiz [49m[39m src/app/app.component.spec.ts [2m([22m[2m3 tests[22m[2m | [22m[31m3 failed[39m[2m)[22m[32m 46[2mms[22m[39m
[31m     [31m×[31m creates the root component[39m[32m 37[2mms[22m[39m
[31m     [31m×[31m fetches and caches IP information when none is stored[39m[32m 3[2mms[22m[39m
[31m     [31m×[31m does not fetch IP information when it is already cached[39m[32m 3[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/home/home.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[33m 2066[2mms[22m[39m
     [33m[2m✓[22m[39m should create [33m 2059[2mms[22m[39m
 [31m❯[39m [30m[42m coloradoquiz [49m[39m src/app/menu/menu.component.spec.ts [2m([22m[2m1 test[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 25956[2mms[22m[39m
[31m     [31m×[31m should create[39m[33m 25955[2mms[22m[39m
 [31m❯[39m [30m[42m coloradoquiz [49m[39m src/app/key-industries/key-industries.component.spec.ts [2m([22m[2m1 test[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 13127[2mms[22m[39m
[31m     [31m×[31m should create[39m[33m 13095[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/loader-io/loader-io.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 107[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/loading/loading.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 170[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/handle-unrecoverable-state.service.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 22[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/loading.service.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 98[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/playground/playground.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 27[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/news/news.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 177[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/honeynut-cheerios.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 9[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/news.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 19[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/ipinfo.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 8[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/quiz.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 5[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/prompt-update.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 16[2mms[22m[39m
 [31m❯[39m [30m[42m coloradoquiz [49m[39m src/app/quiz/quiz.component.spec.ts [2m([22m[2m4 tests[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 15909[2mms[22m[39m
[31m     [31m×[31m creates and loads the quiz for the routed subject[39m[33m 14773[2mms[22m[39m
     [33m[2m✓[22m[39m starts at a score of zero [33m 620[2mms[22m[39m
     [32m✓[39m reaches 100% once every question is answered correctly[32m 257[2mms[22m[39m
     [32m✓[39m counts only the latest answer for a given question[32m 225[2mms[22m[39m

[2m Test Files [22m [1m[31m4 failed[39m[22m[2m | [22m[1m[32m12 passed[39m[22m[90m (16)[39m
[2m      Tests [22m [1m[31m6 failed[39m[22m[2m | [22m[1m[32m19 passed[39m[22m[90m (25)[39m
[2m   Start at [22m 00:10:43
[2m   Duration [22m 32.79s[2m (transform 10.54s, setup 3.41s, import 25.81s, tests 57.76s, environment 27.23s)[22m

info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
