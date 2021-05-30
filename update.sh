#!/bin/bash

cd ~/src/angular/coloradoquiz/;
date > README.md;
git add .;
git commit -m "add timestamp";

echo "\`\`\`bash" >> README.md;
git add .;
git commit -m "begin add system status";
echo "System Memory" >> README.md;
free -h >> README.md;
echo "System Storage" >> README.md;
du -sh .>> README.md;
git add .;
git commit -m "add system status";
echo "\`\`\`" >> README.md;
git add .;
git commit -m "end add system status";


echo "\`\`\`bash" >> README.md;
git add .;
git commit -m "begin update node";
[[ -s $HOME/.nvm/nvm.sh ]] && . $HOME/.nvm/nvm.sh;  # This loads NVM
source ~/.nvm/nvm.sh;
time nvm install --lts;
time nvm use --lts;
time npm install --global @angular/cli yarn;
time yarn run ng --version >> README.md;
time yarn >> README.md;
echo "\`\`\`" >> README.md;
git add .;
git commit -m "end update node";

export NODE_OPTIONS="--max-old-space-size=6144";

git add .;
git commit -m "begin prepare to update angular";
time yarn run ng update @angular/core @angular/cli @angular/material @angular/localize;
git add .;
git commit -m "end prepare to update angular";

echo "\`\`\`bash" >> README.md;
git add .;
git commit -m "begin prepare to build angular";
time yarn run ng build --configuration production >> README.md;
echo "\`\`\`" >> README.md;
git add .;
git commit -m "end prepare to build angular";

echo "\`\`\`bash" >> README.md;
git add .;
git commit -m "begin prepare to unit test angular";
time yarn run ng test >> README.md;
echo "\`\`\`" >> README.md;
git add .;
git commit -m "end prepare to unit test angular";

date >> README.md;
git add .;
git commit -m "add timestamp";
git pull --rebase origin master --strategy-option=ours;
git add .;
git commit -m "merge from remote";
git push origin master;


du -sh dist/angulartwelve/;
time rsync -av /home/kushal/src/angular/angulartwelve/dist/angulartwelve/ /home/kushal/src/angular/angulrtwelvegithubio;
du -sh /home/kushal/src/angular/angulrtwelvegithubio;
cd /home/kushal/src/angular/angulrtwelvegithubio/;
git add .;
git commit -m "build and deploy";
COMMIT_ID=$(git rev-parse --verify HEAD)
curl https://sentry.io/api/hooks/release/builtin/5768670/b50116ba5ad9986947365aded6efb721e66310c9557954a43fe58fe0c27df2a4/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{"version": "'"$COMMIT_ID"'"}'
time git push origin master;
