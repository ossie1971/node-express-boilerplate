'use strict';
const mongoose = require('mongoose');

module.exports = function (config) {
    if (!config.uri) return;
    let _connect = () => {
        let db = mongoose.createConnection(config.uri, config.options || {});

        db.on('error', function (err) {
            console.log('mongodb connection error', err);
        });

        db.on('connected', () => {
            console.log('Connected to mongoDB');
        });

        db.on('disconnect', _connect);

        process.on('SIGINT', function () {
            db.close(function () {
                process.exit(0);
            });
        });

        mongoose.set('db', db);
    };

    _connect();
};