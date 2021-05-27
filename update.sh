#!/bin/bash

free -h;
source ~/.nvm/nvm.sh;
time nvm install --lts;
time nvm use --lts;
time npm install --global @angular/cli yarn;
cd ~/src/angular/angulartwelve/;
time yarn run ng --version;
export NODE_OPTIONS="--max-old-space-size=6144";
time yarn run ng update @angular/core @angular/cli @angular/material @angular/localize;
echo '' >> README.md;
date >> README.md;
echo '' >> README.md;
git add .;
git commit -m "update angular";
git pull --rebase origin master --strategy-option=ours;
git push origin master;
time yarn run ng build --configuration production;
time yarn run ng test;
