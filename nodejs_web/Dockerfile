FROM node:carbon

# File Author / Maintainer
MAINTAINER Ranjitha R

# Define working directory.
WORKDIR /usr/app

COPY ./package.json .
COPY ./ .

RUN npm install

EXPOSE 3000
CMD [ "node", "server.js" ]
