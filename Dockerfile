FROM nginx:latest

COPY ./dist/index.html /usr/share/nginx/html
COPY ./dist/assets/ /usr/share/nginx/html/leo-portifolio/assets/
COPY ./dist/images/ /usr/share/nginx/html/images/


# COPY ./nginx.conf /etc/nginx/conf.d/default.conf

