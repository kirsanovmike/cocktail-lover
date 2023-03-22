#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка
npm run build

# переход в каталог сборки
cd dist

git init
git add -A
git commit -m 'deploy'

# публикация в ветку gh-pages
git push -f git@github.com:kirsanovmike/cocktail-lover.git master:gh-pages

cd -