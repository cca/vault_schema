#!/usr/bin/env bash
git checkout gh-pages
git merge master --ff-only
git push
git checkout master
