// DEVELOPMENT environment configuration

module.exports = {
    port: 3001,
    mongodb: {
        uri: 'localhost:27017/test',
        options: {}
    },
    mySql: {
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'your-mysql-db'
    },
    useMongo: true // enable mongoDb bootstrapping
};