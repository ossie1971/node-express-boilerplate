'use strict';
const mongoose = require('mongoose');
const mysql = require('../dal/mysql-connect');
const sql = require('../dal/sql');

module.exports.mongoTest = (args, callback) => {
    const model = mongoose.get('db').model('exampleModel');
    model.find(args.query, (err, result) => {
        callback(err, result);
    });
};

module.exports.mySqlTest = (args, callback) => {
    mysql.query({
        query: sql.get_something
    }, (err, result) => {
        callback(err, result);
    });
};

module.exports.sum = (a,b) => {
    return a+b;
};