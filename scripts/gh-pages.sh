#!/bin/sh

rm -rf build || exit 0;
if [ "$TRAVIS_BRANCH" = "master" ] && [ "$TRAVIS_PULL_REQUEST" = "false" ]; then
  npm run build;
  npm run create-htmls;
  ( cd build
    git init
    git config user.name "sarbbottam"
    git config user.email "sarbbottam@gmail.com"
    git add .
    git commit -m "initial commit"
    git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
  )
else
   echo "not publising to gh-pages"
fi
