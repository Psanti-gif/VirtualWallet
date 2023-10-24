const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'bey3qh9dwr6jwnho0kly-mysql.services.clever-cloud.com',
    user: 'uuujf1ahpvnfo5rc',
    password: 't8dqjnZw36Wz9IQFIeTg',
    database: 'bey3qh9dwr6jwnho0kly',
    multipleStatements: true
});

mysqlConnection.connect( function(err){
    if(err){
        console.error(err);
        return;
    } else {
        console.log('Base de datos conectada!');
    }
})

module.exports = mysqlConnection;