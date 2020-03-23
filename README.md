# PetStore Swagger Exercise #

For trying my hand back in JS w/ api testing and such.

## Test Docker Vulnerabilities ##

```bash
git clone https://github.com/docker/docker-bench-security.git
cd docker-bench-security
sudo sh docker-bench-security.sh
```

## Run Test in Docker Container ##

Container will run the npm start item in package.json

```bash
docker-compose up
```

## Run tests ad-hoc

clone down the repo. cd into the directory.
`npm install`
`npm start` || `./node_modules/mocha/bin/mocha test/` || `install mocha globally and just type `mocha` in the project directory.

## Note ##

In order for this to run correctly a configuration file needs to supply secure information to the scripts. Please contact the creator for details on how to get that setup appropriately.
