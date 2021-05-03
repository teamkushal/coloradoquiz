#!/bin/bash

cd ~/src/angular/coloradoquiz/;
time yarn run ng update @angular/core @angular/cli @angular/material @angular/localize;
date >> README.md;
git add .;
git commit -m "update angular";
git pull --rebase origin master --strategy-option=ours;
git push origin master;
time yarn run ng build --prod;
time yarn run ng test;
