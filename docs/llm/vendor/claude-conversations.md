00
00

Colorado Quiz is an older Angular application, 
it started with Angular 11 
on December 31, 2020 
https://github.com/teamkushal/coloradoquiz/commit/c5b1c4de41568dc1e2e7f0add48bbaa71e6da072
The code is on github at https://github.com/teamkushal/coloradoquiz
and the deployed version is on Firebase at https://coloradoquiz.web.app 
as you can imagine, it is terribly out of date 
I have added an export.sh to generate a dump so you can see the current condition of the app 
but basically it is very brittle and `update.sh` was built for a very specific configuration I had. 
so for example, it assumes you are in a certain directory structure
it assumes I use `nvm` 
and all sorts of things
that break 
also angular itself has had a massive paradigm shift 
long story short 
this app needs a complete rewrite 
can you please write this with the latest standards such as angular signal, vitest, etc 
and give me the FULL project so I an copy paste the whole thing on top of the current project? 
I have made a new branch so it won't automatically deploy what I do here anymore. 
also can you please generate a modern version of this update.sh as well? 
the update.sh should work with either nvm or fnm 
it should not assume the current directory is a specific directory
it should run export.sh 
it should not lose any functionality of the current implementation
it should not assume we are working on any particular git branch 

also I failed to explain this but we should exclude yarn.lock from our dump.txt 
also we should exclude all orphaned code from our output 
