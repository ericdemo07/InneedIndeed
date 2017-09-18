var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./util/db_conn');
var saveperson = require('./dao/addperson');
var saveuser = require('./dao/adduser');
var get = require('./dao/getperson');
var updateperson = require('./dao/updateperson');
var remove = require('./dao/deleteperson');
var util = require('util')

db.connect_to_database();

//saveuser.save1();
//get.get_all();
// get.get_one('firstName','Chris');
// get.get_by_id('595617f17d0d182f140cad5e');
// update.update_by_id('5955d6f8d5c9712ae85cc8af', 'city', 'uk');
// update.update_many('firstName', 'Chris', 'Jordan');
// remove.delete_many('firstName','Jordan');
// remove.delete_by_id('5956160f7483cc29746e49f2');


/*Static fields*/
app.use(express.static(__dirname + '/src'));
app.use(bodyParser.json());

app.post('/getall', function(req, res) {
  console.log("fetching all person records from database [" + req);
  get.get_all(function(err, user) {
    if (err) {
      console.log(err);
    }
    res.send({
      message: user
    });
  });
});


app.get('/get_by_id/:id', function(req, res) {
  console.log("fetching record based on id");
  get.get_by_id(req.params.id, function(err, user) {
    if (err) {
      console.log(err);
    }
    res.send({
      message: user
    });
  });
});

app.post('/save_by_id', function(req, res) {
  console.log("saving record based on id");
  console.log("\n\n [" + req.body);
  if (req.body['id'] === null || req.body['id'] === "") {
    saveperson.save(req.body, function(err, user) {
      if (err) {
        console.log(err);
      }
      res.send({
        message: user
      });
    });
  } else {
    updateperson.update_by_id(req.body, function(err, user) {
      if (err) {
        console.log(err);
      }
      res.send({
        message: user
      });
    });
  }
});

app.post('/login_signup', function(req, res) {
  console.log("\n\nlogin check");
  saveuser.login_signup(req.body, function(err, user) {
    if (err) {
      console.log(err);
    }
    res.send({
      message: user
    });
  });
  //saveuser.login_signup(req.body);
});

// load the single view file (angular will handle the page changes on the
// front-end)
app.get('*', function(req, res) {
  res.sendFile('./src/index.html', {
    root: __dirname
  });
});

// to start express server
app.listen(4000, function() {
  console.log('yamlgenerator service started on port 4000!');
});
