FROM nginx:latest

COPY ./dist/ /usr/share/nginx/html/leo-portifolio
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

