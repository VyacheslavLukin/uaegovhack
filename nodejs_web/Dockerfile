FROM node:carbon

# File Author / Maintainer
MAINTAINER Ranjitha R

# Define working directory.
WORKDIR /usr/app

COPY ./package.json .

RUN npm install

COPY ./ .

EXPOSE 5000
CMD [ "npm", "start" ]
