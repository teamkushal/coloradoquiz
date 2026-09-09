```bash
yarn run v1.22.22
$ ng test
❯ Building...
✔ Building...
Application bundle generation complete. [6.411 seconds] - 2026-09-09T08:10:49.092Z


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.9 [39m[90m/home/kushal/src/angular/coloradoquiz[39m

 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/app.component.spec.ts [2m([22m[2m3 tests[22m[2m)[22m[33m 580[2mms[22m[39m
     [33m[2m✓[22m[39m creates the root component [33m 505[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/home/home.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[33m 6866[2mms[22m[39m
     [33m[2m✓[22m[39m should create [33m 6856[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/loading/loading.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[33m 2542[2mms[22m[39m
     [33m[2m✓[22m[39m should create [33m 2533[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/menu/menu.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[33m 1600[2mms[22m[39m
     [33m[2m✓[22m[39m should create [33m 1574[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/key-industries/key-industries.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 86[2mms[22m[39m
 [31m❯[39m [30m[42m coloradoquiz [49m[39m src/app/quiz/quiz.component.spec.ts [2m([22m[2m4 tests[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 6588[2mms[22m[39m
[31m     [31m×[31m creates and loads the quiz for the routed subject[39m[33m 5895[2mms[22m[39m
     [33m[2m✓[22m[39m starts at a score of zero [33m 340[2mms[22m[39m
     [32m✓[39m reaches 100% once every question is answered correctly[32m 213[2mms[22m[39m
     [32m✓[39m counts only the latest answer for a given question[32m 136[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/handle-unrecoverable-state.service.spec.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 29[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/loading.service.spec.ts [2m([22m[2m4 tests[22m[2m)[22m[32m 33[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/playground/playground.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 12[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/ipinfo.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 8[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/loader-io/loader-io.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 11[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/news.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 8[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/prompt-update.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 7[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/quiz.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 8[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/honeynut-cheerios.service.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 4[2mms[22m[39m
 [32m✓[39m [30m[42m coloradoquiz [49m[39m src/app/news/news.component.spec.ts [2m([22m[2m1 test[22m[2m)[22m[32m 99[2mms[22m[39m

[2m Test Files [22m [1m[31m1 failed[39m[22m[2m | [22m[1m[32m15 passed[39m[22m[90m (16)[39m
[2m      Tests [22m [1m[31m1 failed[39m[22m[2m | [22m[1m[32m24 passed[39m[22m[90m (25)[39m
[2m   Start at [22m 04:10:49
[2m   Duration [22m 23.19s[2m (transform 6.54s, setup 10.34s, import 22.23s, tests 18.48s, environment 85.13s)[22m

info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
