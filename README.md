node-boilerplate
=========

Boilerplate for Node.js Express applications

* Logging via morgan
* MongoDb via mongoose
* Mysql via node-mysql
* Testing via jest
* Front end via pug / bootstrap

#### Installation

    git clone

#### Preparation

Copy / Rename Folder

    cp -r node-boilerplate YOUR_APP_NAME

Switch to new Directory  

    cd YOUR_APP_NAME

Remove git folder

    rm -rf .git

Install all packages

    npm install

Remove the duplicated folder    

    cd ../ && rm -rf node-boilerplate && cd YOUR_APP_NAME

..Add to your own git repo    

#### Dependencies
* async: ^2.0.1,
* body-parser: ^1.13.2,
* cookie-parser: ^1.3.5,
* express: ^4.13.1,
* express-flash: 0.0.2,
* express-session: ^1.13.0,
* moment: ^2.13.0,
* mongoose: ^4.12.0,
* morgan: ^1.6.1,
* mysql: ^2.14.1,
* node-cron: ^1.2.1,
* node-oauth: ^0.1.3,
* node-sass-middleware: ^0.11.0,
* npm: ^3.9.5,
* pug: ^2.0.0-rc.1,
* request: ^2.67.0

#### Usage

run ALL the tests!

    npm run test

set DEVELOPMENT environment and run the application

    npm run development

set UAT environment and run the application

    npm run uat

set PRODUCTION environment and run the application

    npm run production
