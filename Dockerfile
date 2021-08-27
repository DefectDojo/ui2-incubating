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





FROM ubuntu:latest

RUN apt-get update
RUN apt-get install -y nginx

# Remove the default Nginx configuration file
RUN rm -v /etc/nginx/nginx.conf

# Copy a configuration file from the current directory
ADD nginx.conf /etc/nginx/

COPY --from=builder  /app/build/ /usr/share/nginx/html/
COPY --from=builder  /app/build/ /var/www/html/

# Append "daemon off;" to the beginning of the configuration
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

# Expose ports
EXPOSE 9000

# Set the default command to execute
# when creating a new container
CMD service nginx start
