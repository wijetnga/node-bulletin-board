#!/usr/bin/env bash

docker build -t bulletin-board:${GO_PIPELINE_LABEL} . Dockerfile.application
docker run bulletin-board:${GO_PIPELINE_LABEL} npm test