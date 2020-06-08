FROM nginx:stable
MAINTAINER Abdullah Romli  "romli@alterra.id"

RUN mkdir -p /home/coba-coba/www/sahabat-tani/build
RUN mkdir -p /home/coba-coba/log/nginx


COPY default.conf /etc/nginx/conf.d/
COPY build/. /home/coba-coba/www/sahabat-tani/build


WORKDIR /home/coba-coba/www/sahabat-tani/build
