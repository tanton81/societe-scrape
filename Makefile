.PHONY: webserver api start

webserver:
	cd webserver/ && npm install  && (./node_modules/.bin/http-server &)

api:
	cd node/ && npm install && (node SocieteApp.js &)

start: webserver api

stop:
	killall node

clean:
	cd webserver/ && rm -rf node_modules package-lock.json && cd ../node && rm -rf node_modules package-lock.json
