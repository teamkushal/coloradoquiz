```bash
yarn run v1.22.22
$ ng test
❯ Building...
✔ Building...
Application bundle generation complete. [4.451 seconds] - 2026-11-28T13:10:55.708Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.9 [39m[90m/home/kushal/src/angular/coloradoquiz[39m

 [31m❯[39m [30m[42m coloradoquiz [49m[39m src/app/app.component.spec.ts [2m([22m[2m3 tests[22m[2m | [22m[31m3 failed[39m[2m)[22m[32m 143[2mms[22m[39m
[31m     [31m×[31m creates the root component[39m[32m 127[2mms[22m[39m
[31m     [31m×[31m fetches and caches IP information when none is stored[39m[32m 2[2mms[22m[39m
[31m     [31m×[31m does not fetch IP information when it is already cached[39m[32m 2[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/menu/menu.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[33m 908[2mms[22m[39m
     [33m[2m✓[22m[39m should create [33m 902[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/home/home.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[33m 6043[2mms[22m[39m
     [33m[2m✓[22m[39m should create [33m 6042[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/key-industries/key-industries.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[33m 886[2mms[22m[39m
     [33m[2m✓[22m[39m should create [33m 878[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/loading/loading.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 59[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/news/news.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 182[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/loader-io/loader-io.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 15[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/playground/playground.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 74[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/handle-unrecoverable-state.service.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 50[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/news.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 17[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/loading.service.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 126[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/quiz.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 10[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/prompt-update.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 4[2mms[22m[39m
 [31m❯[39m [30m[42m coloradoquiz [49m[39m src/app/quiz/quiz.component.spec.ts [2m([22m[2m4 tests[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 26355[2mms[22m[39m
[31m     [31m×[31m creates and loads the quiz for the routed subject[39m[33m 25324[2mms[22m[39m
     [33m[2m✓[22m[39m starts at a score of zero [33m 388[2mms[22m[39m
     [32m✓[39m reaches 100% once every question is answered correctly[32m 269[2mms[22m[39m
     [32m✓[39m counts only the latest answer for a given question[32m 261[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/ipinfo.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 7[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/honeynut-cheerios.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 4[2mms[22m[39m

[2m Test Files [22m [1m[31m2 failed[39m[22m[2m | [22m[1m[32m14 passed[39m[22m[90m (16)[39m
[2m      Tests [22m [1m[31m4 failed[39m[22m[2m | [22m[1m[32m21 passed[39m[22m[90m (25)[39m
[2m   Start at [22m 08:10:56
[2m   Duration [22m 32.63s[2m (transform 19.84s, setup 18.62s, import 29.87s, tests 34.88s, environment 28.08s)[22m

info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
