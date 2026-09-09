```bash
yarn run v1.22.22
$ ng test
❯ Building...
✔ Building...
Application bundle generation complete. [6.224 seconds] - 2026-09-09T15:10:58.110Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.9 [39m[90m/home/kushal/src/angular/coloradoquiz[39m

 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/app.component.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[33m 671[2mms[22m[39m
     [33m[2m✓[22m[39m creates the root component [33m 505[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/home/home.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[33m 1313[2mms[22m[39m
     [33m[2m✓[22m[39m should create [33m 1306[2mms[22m[39m
 [31m❯[39m [30m[42m coloradoquiz [49m[39m src/app/menu/menu.component.spec.ts [2m([22m[2m1 test[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 19953[2mms[22m[39m
[31m     [31m×[31m should create[39m[33m 19952[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/key-industries/key-industries.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 184[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/loading.service.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 68[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/news/news.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 109[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/loading/loading.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 18[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/loader-io/loader-io.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 32[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/handle-unrecoverable-state.service.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 76[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/playground/playground.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 32[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/prompt-update.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 17[2mms[22m[39m
 [31m❯[39m [30m[42m coloradoquiz [49m[39m src/app/quiz/quiz.component.spec.ts [2m([22m[2m4 tests[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 22056[2mms[22m[39m
[31m     [31m×[31m creates and loads the quiz for the routed subject[39m[33m 21254[2mms[22m[39m
     [32m✓[39m starts at a score of zero[32m 274[2mms[22m[39m
     [33m[2m✓[22m[39m reaches 100% once every question is answered correctly [33m 337[2mms[22m[39m
     [32m✓[39m counts only the latest answer for a given question[32m 177[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/honeynut-cheerios.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 15[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/news.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 18[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/ipinfo.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 32[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/quiz.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 22[2mms[22m[39m

[2m Test Files [22m [1m[31m2 failed[39m[22m[2m | [22m[1m[32m14 passed[39m[22m[90m (16)[39m
[2m      Tests [22m [1m[31m2 failed[39m[22m[2m | [22m[1m[32m23 passed[39m[22m[90m (25)[39m
[2m   Start at [22m 11:10:59
[2m   Duration [22m 32.53s[2m (transform 24.14s, setup 11.45s, import 27.61s, tests 44.62s, environment 60.07s)[22m

info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
