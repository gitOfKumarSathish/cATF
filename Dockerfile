FROM nginx
RUN apt update && apt install -y vim nano cron python3-acme python3-certbot python3-mock python3-openssl python3-pkg-resources python3-pyparsing python3-zope.interface
RUN apt install -y python3-certbot-nginx && apt install -y procps
COPY default /default.conf
COPY build/ /var/www/html
EXPOSE 80
COPY start.sh /bin
RUN chmod +x /bin/start.sh
ENTRYPOINT ["/bin/start.sh"]
