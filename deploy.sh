#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# если вы деплоите на кастомный домен
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# если вы деплоите на https://d-tysh.github.io
# git push -f git@github.com:d-tysh/d-tysh.github.io.git master

# если вы деплоите на https:d-tysh.github.io/IGG-project
# git push -f git@github.com:d-tysh/IGG-project.git master:gh-pages

cd -