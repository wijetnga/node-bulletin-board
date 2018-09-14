#!/usr/bin/env bash

# Usage: PLUGIN_FILENAME=cd.go.artifact.docker.registry.json ./create_json.sh
artifact_name=$(sed -e 's/.*image":"\(.*\)",.*/\1/' $PLUGIN_FILENAME)
sed -i "s~#{image}~$artifact_name~g" bulletin-board-deployment.json
