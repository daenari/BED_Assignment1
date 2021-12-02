var express=require('express');
var app=express();
var data = require('../model/')

var bodyParser=require('body-parser');
var urlencodedParser=bodyParser.urlencoded({extended:false});

app.use(bodyParser.json()); //parse appilcation/json data
app.use(urlencodedParser);

app.post('/api/users', function(req,res){
    res.setHeader('Content-Type', 'application/json'); //get json response
    var username = req.body.username;
    var email = req.body.email;
    var contact = req.body.contact;
    var password = req.body.password;
    var type = req.body.type;
    var profile_pic_url = req.body.profile_pic_url;

    data.addMod(username, email, contact, password, type, profile_pic_url, function (err, result) {
        if (!err) {
            res.send({'userid': result});
        } else{
            res.status(500).send("Result: Internal Error");

        }
    });
})