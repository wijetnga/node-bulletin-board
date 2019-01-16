#!/usr/bin/env bash

# Usage: PLUGIN_FILENAME=cd.go.artifact.docker.registry.json ./create_json.sh
# used in docs.go.cd for versions < 19.1.0
artifact_name=$(sed -e 's/.*image":"\(.*\)",.*/\1/' $PLUGIN_FILENAME)
sed -i "s~#{image}~$artifact_name~g" bulletin-board-deployment.json
