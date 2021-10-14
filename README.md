# Societe.com scraper


## Available Commands

Some useful commands:

- `make start` installs and starts the webserver and the node js application
- `make stop` stops the webserver and the node js application
- `make clean` removes node_modules and package-lock.json from project

## How to use it
Open a browser and go to http://localhost:8080/
Fill the empty text field with a valid url from Societe.com. 
For instance: 
**https://www.societe.com/societe/bnp-paribas-662042449.html**

Press the "Request Info" button, wait for a while and the required information will be displayed below.
For the https://www.societe.com/societe/bnp-paribas-662042449.html you will get:

**Company name: BNP PARIBAS**
**Number of employees: 10 000 salariés et plus**

## Some details
- the webserver listens on 8080 (https://www.npmjs.com/package/http-server)
- the REST API listens on 8081 (NodeJS and ExpressJS)
