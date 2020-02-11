#!/bin/sh
# the point of this script is to read the github token from file and provide it as env var
# it didn't seem to work directly within package scripts, also not using cross-env
# it does, however, easily work using a shellscript

export GH_TOKEN=`cat .gh-token` && yarn storybook-to-ghpages --existing-output-dir=storybook-static
