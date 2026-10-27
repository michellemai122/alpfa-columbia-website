#!/bin/sh
# Builds the site and publishes dist/ to the gh-pages branch (served by GitHub Pages).
set -e
cd "$(dirname "$0")/.."
npm run build
cp dist/index.html dist/404.html   # lets deep links like /team load the app
touch dist/.nojekyll
remote=$(git remote get-url origin)
cd dist
rm -rf .git
git init -q
git checkout -q -b gh-pages
git add -A
git commit -q -m "Deploy $(cd .. && git rev-parse --short HEAD)"
git push -q -f "$remote" gh-pages
rm -rf .git
echo "Deployed to https://michellemai122.github.io/alpfa-columbia-website/"
