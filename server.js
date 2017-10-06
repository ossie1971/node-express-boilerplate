/* Dependencies */
var fs = require('fs');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var base_route = '';
var router = express.Router();
var session = require('express-session');
var path = require('path');
var flash = require('express-flash');

/* Load env configuration */
var config = require(['./config', process.env.NODE_ENV].join('/'));
var port = config.port;

/* Main app */
var app = express();

/* Middleware */
app.set('views', [__dirname, 'app', 'views'].join('/'));
app.set('view engine', 'pug');
app.use(express.static([__dirname, 'public'].join('/')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(morgan('dev'));


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    }
}));



app.use(flash());

app.use(function (req, res, next) {
    app.locals._ = require('lodash');
    app.locals.moment = require('moment');

    next();
});

app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: 31557600000
}));

/* Bootstrap DB Connection */
if (config.useMongo) {
    require([__dirname, 'app/dal/mongodb-connect'].join('/'))(config.mongodb);
    fs.readdirSync([__dirname, 'app/models'].join('/'))
        .forEach(function (model) {
            if (~model.indexOf('.js') && !(model.indexOf('.') === 0)) {
                require([__dirname, 'app/models', model].join('/'));
            }
        });

}



/* Bootstrap routes */
fs.readdirSync([__dirname, 'app/routes'].join('/'))
    .forEach(function (route) {
        if (~route.indexOf('.js') && !(route.indexOf('.') === 0)) {
            require([__dirname, 'app/routes', route].join('/'))(router);
        }
    });
app.use(base_route, router);

// Bootstrap CRON
require('./app/lib/cron');

// Exception handling process.env.NODE_ENV === 'development'
app.use(function (err, req, res, next) {

    // exit if we don't have an error, or we have already returned
    if (!err || res.headersSent) return next();

    console.log(err);

    if (req.url.indexOf('api') >= 0) {
        res.send({
            message: err.message || 'Whoops  - something has gone wrong with your API call',
            stack: err.stack || 'No stack trace available'
        });
    } else {
        res.render('500', {
            message: err.message || 'Whoops  - something has gone wrong',
            stack: err.stack || 'No stack trace available'
        });
    }

    next();
});

// Handle 404
app.use(function (req, res, next) {

    if (res.headersSent) return next();

    if (req.url.indexOf('api') > 0) {
        res.status(404).send({
            error: 'Resource Not Found'
        });
    } else {
        res.status(404).render('404');
    }
    next();
});

/* Start the server */
app.listen(port, function () {
    console.log('listening on ', port);
});

/* Export app for testing */
module.exports = app;