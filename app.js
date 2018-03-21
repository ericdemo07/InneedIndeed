//loading common libraries
var express = require('express');
var bodyParser = require('body-parser');
var util = require('util')
var app = express();
var moment = require('moment');

var db = require('./util/db_conn');

//loading app related files
var saveUser = require('./dao/adduser');
var saveArticle = require('./dao/addarticle');
var getArticle = require('./dao/getarticle');
var updateArticle = require('./dao/updateArticle');
var deleteArticle = require('./dao/deleteArticle');

db.connect_to_database();

console.log("test112");
var a11 = moment.parseZone("2018/07/10 13:59:59+000");
var a22 = moment.parseZone("2018-07-09T15:59:59Z");
console.log(a11.format());
console.log(a22.format());

//saveArticle.save1();
// get.get_all();
// get.get_one('firstName','Chris');
// get.get_by_id('595617f17d0d182f140cad5e');
// update.update_by_id('5955d6f8d5c9712ae85cc8af', 'city', 'uk');
// update.update_many('firstName', 'Chris', 'Jordan');
// remove.delete_many('firstName','Jordan');
// remove.delete_by_id('5956160f7483cc29746e49f2');


/*Static fields*/
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());


//get call
app.post('/fetchallarticles', function(req, res) {
  console.log("fetching all article from database [" + req);
  getArticle.get_all(function(err, user) {
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
  getArticle.get_by_id(req.params.id, function(err, user) {
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
  if (req.body['id'] === null || req.body['id'] === "") {
    saveArticle.save(req.body, function(err, user) {
      if (err) {
        console.log(err);
      }
      res.send({
        message: user
      });
    });
  } else {
    updateArticle.update_by_id(req.body, function(err, user) {
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
  saveUser.login_signup(req.body, function(err, user) {
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
  console.log('\n\n----------------InneedIndeed------------------\nservice started on port 4000!\n\n');
});
