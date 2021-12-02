var db = require('./databaseConfig.js');
var users = {
    addUser: function (username, email, contact, password,
        type, profile_pic_url, callback) {
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            else {
                console.log("Connected!");

                var sql = 'Insert into user(username,email,contact,password,type,profile_pic_url) values(?,?,?,?,?,?)';

                conn.query(sql, [username, email, contact, password, type, profile_pic_url], function (err, result) {
                    conn.end();
                    if (err) {
                        console.log(err);
                        return callback(err, null);

                    } else {

                        console.log(result.affectedRows);

                        return callback(null, result.affectedRows);

                    }   
                }); 
            }
        })

    },  //end of addUser


}
module.exports = users;