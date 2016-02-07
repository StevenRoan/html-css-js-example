#/bin/bash
docker run -it -v "$PWD":/usr/src/html-basic -p 8080:8080 -p 35729:35729 node-4.2.4-fe1