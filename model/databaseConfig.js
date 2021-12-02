var mysql = require('mysql');
var dbconnect = {
    getConnection: function () {
        var conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "*IAyame123",
            database: "information"
        });     
        return conn;
    }
};
module.exports = dbconnect
