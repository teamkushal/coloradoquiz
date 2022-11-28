#!/bin/bash

cd ~/src/angular/coloradoquiz/;
ping -A -D -c 20 -v 8.8.8.8 > ping.txt;
date > README.md;
git add .;
git commit -m "add timestamp";

echo '' >> README.md 2>&1;
echo '# Coloradoquiz' >> README.md 2>&1;
echo '' >> README.md 2>&1;

echo '' >> README.md 2>&1;
echo 'This project is live at [https://coloradoquiz.web.app](https://coloradoquiz.web.app "colorado!") thanks to Firebase.' >> README.md 2>&1;
echo '' >> README.md 2>&1;

echo 'CI Status: ' >> README.md 2>&1;
echo '' >> README.md 2>&1;

echo '[![Deploy to Firebase Hosting on merge](https://github.com/teamkushal/coloradoquiz/actions/workflows/firebase-hosting-merge.yml/badge.svg)](https://github.com/teamkushal/coloradoquiz/actions/workflows/firebase-hosting-merge.yml)' >> README.md 2>&1;
echo '' >> README.md 2>&1;

echo "\`\`\`bash" >> README.md 2>&1;
ping -A -D -c 20 -v 8.8.8.8 >> ping.txt 2>&1;
git add .;
git commit -m "begin add system status";
echo "System Memory" >> README.md 2>&1;
free -h >> README.md 2>&1;
echo "System Storage" >> README.md 2>&1;
du -sh .>> README.md 2>&1;
git add .;
git commit -m "add system status";
echo "\`\`\`" >> README.md 2>&1;
git add .;
git commit -m "end add system status";


echo "\`\`\`bash" >> README.md 2>&1;
ping -A -D -c 20 -v 8.8.8.8 >> ping.txt 2>&1;
git add .;
git commit -m "begin update node";
[[ -s $HOME/.nvm/nvm.sh ]] && . $HOME/.nvm/nvm.sh;  # This loads NVM
source ~/.nvm/nvm.sh;
time nvm install --lts;
time nvm use --lts;
export NODE_OPTIONS="--max-old-space-size=8000"; time npm install --global @angular/cli yarn;
export NODE_OPTIONS="--max-old-space-size=8000"; time yarn run ng version >> README.md 2>&1;
time yarn >> README.md 2>&1;
echo "\`\`\`" >> README.md 2>&1;
ping -A -D -c 20 -v 8.8.8.8 >> ping.txt 2>&1;
git add .;
git commit -m "end update node";

export NODE_OPTIONS="--max-old-space-size=8000";

git add .;
git commit -m "begin prepare to update angular";
export NODE_OPTIONS="--max-old-space-size=8000"; time yarn run ng update @angular/core @angular/cli @angular/material @angular/localize;
git add .;
git commit -m "end prepare to update angular";
time npx browserslist --update-db >> README.md 2>&1;

echo "\`\`\`bash" >> README.md 2>&1;
ping -A -D -c 20 -v 8.8.8.8 >> ping.txt 2>&1;
git add .;
git commit -m "begin prepare to build angular";
export NODE_OPTIONS="--max-old-space-size=8000"; time yarn run ng build --configuration production >> README.md 2>&1;
echo "\`\`\`" >> README.md 2>&1;
git add .;
git commit -m "end prepare to build angular";

echo "\`\`\`bash" > locallog/fedoratest.md;
ping -A -D -c 20 -v 8.8.8.8 >> ping.txt 2>&1;
git add .;
git commit -m "begin prepare to unit test angular";
export NODE_OPTIONS="--max-old-space-size=8000"; time yarn run ng test >> locallog/fedoratest.md;
echo "\`\`\`" >> locallog/fedoratest.md;
ping -A -D -c 20 -v 8.8.8.8 >> ping.txt 2>&1;
git add .;
git commit -m "end prepare to unit test angular";

date >> README.md 2>&1;
ping -D -c 20 -v 8.8.8.8 >> ping.txt 2>&1;
time yarn version --patch >> README.md 2>&1;
git add .;
git commit -m "add timestamp";
# git pull --rebase origin master --strategy-option=ours;
# git add .;
# git commit -m "merge from remote";
# git push origin master;
