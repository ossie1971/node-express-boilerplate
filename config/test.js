// DEVELOPMENT environment configuration

module.exports = {
    port: 3002,
    mongodb: {
        uri: 'localhost:27017/your-database',
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