const helper = require('../lib/api-helper');
module.exports = () => {
    return {
        get: (req, res, next) => {
            helper.get({}, (err, result) => {
                if (err) return next(err);
                res.status(200).send(result);
                next();
            });
        }
    }
}