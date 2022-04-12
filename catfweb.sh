Directory=/var/www/html/static
echo "Passed $1 as parameter"
echo "!!!Please make sure you are inside CloudATFWeb before running this script!!!"

buildstep(){
	echo "Starting build process"
	echo "Cleaning /var/www/html"
	sudo rm -r /var/www/html/*
	echo "Going to Web Project"
	npm i
	npm run build
	cd build
	echo "Copying the build folder"
	sudo cp -r * /var/www/html
	echo "Removing Config file from nginx"
	sudo rm /etc/nginx/sites-enabled/default
	echo "Copying New Config file to nginx"
	sudo cp ../default /etc/nginx/sites-enabled/default
	echo "Checking nginx Config"
	sudo nginx -t
}

if [ "$1" == "build" ]
then
	buildstep
elif [ "$1" == "start" ];
then 
	if [ -d "$Directory" ]
	then
	    echo "Build exists...Starting CloudATFWeb Server "
	else 
	    echo "Build does not exist...Starting Build"
	    buildstep
	fi
	echo "Starting CloudATFWeb Server"
	sudo /etc/init.d/nginx restart 
elif [ "$1" == "stop" ]
then
	echo "Stoping CloudATFWeb Server"
	sudo /etc/init.d/nginx  stop 
elif [ "$1" == "restart" ]
then
	echo "Restarting CloudATFWeb Server"
	sudo /etc/init.d/nginx  restart 
else
	echo "Passed Unknown Parameter"
fi

