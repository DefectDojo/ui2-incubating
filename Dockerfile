FROM node:16

WORKDIR /app

RUN apt-get update -qq && apt-get install -y build-essential
RUN npm install -g sass
#RUN npm update
#RUN npm install --unsafe-perm node-sass
#RUN npm install -g sass
#RUN npm install --force -g yarn
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock


COPY src /app/src
COPY public /app/public

RUN yarn install
RUN yarn build
