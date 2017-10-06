const helper = require('../lib/home-helper');

module.exports = () => {
    return {
        get: (req, res, next) => {
            res.render('index');
            next();
        },
        dbTest: (req, res, next) => {
            helper.mySqlTest({}, (err, result) => {
                if (err) return next(err);
                res.render('db-test', {
                    data: result
                });
                next();
            });
        },
        mongoTest: (req, res, next) => {
            helper.mongoTest({}, (err, result) => {
                if (err) return next(err);
                res.render('db-test', {
                    data: result
                });
                next();
            });
        }
    };
};