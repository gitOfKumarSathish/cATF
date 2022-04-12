#!/bin/bash
count="$(certbot certificates | grep example.com | wc -l)"
if [ $count -ge 4 ];then
        dater="$(certbot certificates | grep "Expiry Date")"
        echo "$dater"
        expiry="$(echo $dater | grep Expiry | cut -d ' ' -f 3)"
        echo "$expiry"
        today="$(date +%Y-%m-%d)"
        echo "$today"
        date1="$(date -d $expiry +%s)"
        echo $date1
        date2="$(date -d $today +%s)"
        echo $date2
        validity="$(( (date1 - date2) / 86400 ))"
        echo "$validity"
        if [ $validity -le 60 ];then
                certbot renew
        fi
else
        certbot run -n --nginx --agree-tos -d example.com  -m  catf-internal@alethea.in  --redirect
        #certbot run -n --nginx --agree-tos -d lab.disangtech.com  -m  vinay@alethea.in --test-cert  --redirect
        cp /default.conf /etc/nginx/conf.d/default.conf
        nginx -s reload
        sleep infinity
fi
cp /default.conf /etc/nginx/conf.d/default.conf
crontab /etc/cron.d/certbot
crontab -u root -l
service cron start
nginx -g 'daemon off;'