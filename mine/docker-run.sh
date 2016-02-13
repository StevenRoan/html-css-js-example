#!/bin/bash
docker run -it -v "$PWD":/usr/src/mine -p 8080:8080 -p 35729:35729 tzuchuan/node-5.6.0-fe-base
