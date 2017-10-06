'use strict';

var controller = require('../controllers/home-controller')();

module.exports = (router)  =>{
    router.get('/', controller.get);
    router.get('/mysql-test', controller.dbTest);
    router.get('/mongo-test', controller.mongoTest);
};