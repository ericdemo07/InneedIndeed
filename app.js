var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
var db = require('./util/db_conn');
var save = require('./dao/addperson');
var get = require('./dao/getperson');
var update = require('./dao/updateperson');
var remove = require('./dao/deleteperson');

db.connect_to_database();

//save.save();
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
  console.log("Hello 111");
  get.get_all(function(err, user) {
    if (err) {
      console.log(err);
    }
    res.send({
      message: user
    });
  });
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
