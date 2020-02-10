#!/bin/sh
export GH_TOKEN=`cat .gh-token` && yarn storybook-to-ghpages
