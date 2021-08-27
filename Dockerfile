# builder part
FROM node:16 AS builder

WORKDIR /app

RUN apt-get update -qq && apt-get install -y build-essential
RUN npm install -g sass
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock


COPY src /app/src
COPY public /app/public

RUN yarn install
RUN yarn build


# runtime part
FROM nginxinc/nginx-unprivileged:1.20-alpine
COPY --from=builder  /app/build /usr/share/nginx/html
