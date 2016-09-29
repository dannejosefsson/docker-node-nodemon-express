# docker build -t io.josefsson/docker-node-nodemon-express .
FROM node:slim
ENV WORKDIR /usr/app
RUN  mkdir -p $WORKDIR
WORKDIR $WORKDIR
COPY package.json .
RUN  npm install
RUN  mkdir -p src/js
COPY src/js/server.js src/js
COPY src/ src
ENV NPM_CONFIG_PORT 80
RUN npm config set example-server:port $NPM_CONFIG_PORT
EXPOSE $NPM_CONFIG_PORT
CMD [ "npm", "start" ]
