'use strict';

const mysql = require('mysql');
const config = require(['../../config', process.env.NODE_ENV || 'development'].join('/'));


const pool = mysql.createPool({
    connectionLimit: 10,
    host: config.mySql.host,
    user: config.mySql.user, 
    password: config.mySql.password, 
    database: config.mySql.database
});

module.exports.query= function (args, callback) {
    pool.getConnection(function(err, connection) {
        if (err) throw err;
        
        // Use the connection 
        connection.query(args.query, function (err, results, fields) {
            // And done with the connection. 
            if(!err && fields){
                callback(null, results);
            }

            connection.release();
       
            // Handle error after the release. 
            if (err) return callback(err);
        });
    });
};