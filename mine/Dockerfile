FROM tzuchuan/node-5.5-gulp
RUN mkdir /usr/src/node_modules
COPY node_modules/* /usr/src/node_modules/
RUN   cd /usr/src \
  && ls \
  && cd /usr/src/node_modules \
  && touch tmp.txt \
  && npm rebuild
EXPOSE 8080
EXPOSE 35729
ENTRYPOINT ["/bin/bash"]
