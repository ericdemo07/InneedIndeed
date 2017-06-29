var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
var db = require('./util/db_conn');
var save = require('./routes/addperson');
var get = require('./routes/getperson');
var update = require('./routes/updateperson');

db.connect_to_database();

//save.save();
//get.get_all();
//get.get_one('firstName','Chris');
get.get_by_id('5954d09077f94929c49331c1');
//update.update_one('5954d09077f94929c49331c1');


/*Static fields*/
app.use(express.static(__dirname + '/src'));
app.use(bodyParser.json());

app.get('/arrow/searchbrand', function(req, res) {
  var brandName;
  res.send(brandName);
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
