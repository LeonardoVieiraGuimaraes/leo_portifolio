FROM nginx:latest

COPY ./dist/assets/ /usr/share/nginx/html/leo-portifolio/assets
COPY ./dist/imagens /usr/share/nginx/html/leo-portifolio/imagens
COPY ./dist/index.html /usr/share/nginx/html

# COPY ./nginx.conf /etc/nginx/conf.d/default.conf

