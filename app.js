var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myproject');

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
});

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
