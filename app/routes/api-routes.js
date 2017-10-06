
var controller = require('../controllers/api-controller')();

module.exports = (router)  =>{
    router.get('/api', controller.get);
};