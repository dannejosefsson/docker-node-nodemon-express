

# docker-node-nodemon-express
This is a skeleton project for the combination of docker together with node and nodemon that serves a express server.


## Usage
First you have to build your images:

    docker-compose -f docker-compose.yml build && docker-compose build 

After that, it is just to start your container:

    docker-compose up -d

## Developing
Since `nodemon` is listening on changes in `node-app/src`, it is just to start coding.


### Tools
