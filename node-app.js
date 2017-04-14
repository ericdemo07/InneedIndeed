var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var empty = require('is-empty');
var randomstring = require("randomstring");
var StringBuilder = require("string-builder");
var moment = require('moment');
var multer = require('multer')
var async = require('async');
var app = express();
var progress = require('progress-stream');

app.use(express.static(__dirname + '/src'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var authorisedUsers = ["ayush.shukla", "kadam.adalja", "sandeep.siva",
  "neeraj.sharma", "itaru.takahashi", "shinjiro.sato"
];

app.post("/generateyaml", multer({
  dest: "./uploads/"
}).single("inputfile"), function(req, res) {
  if (typeof req.file == 'undefined') {
    res.send({
      message: "Input file not found"
    });
    return;
  }
  var yamlData = JSON.parse(req.body.modelData);
  async.waterfall(
    [
      async.apply(userValidation, yamlData, res),
      async.apply(moveInputCsv, req.file, yamlData, res),
      async.apply(prepareYaml, yamlData, req.file.filename, req.file.originalname,
        res)
    ],
    function(err) {
      if (err) {
        console.error(err);
      }
      console.log('success');
    }
  );
});

function userValidation(yamlData, res, callback) {
  var userId = yamlData.userid;
  if (authorisedUsers.indexOf(userId) > -1) {
    console.log("User with userid " + userId +
      " authorized to access BI-Tool ");
    callback(null, '200');
  } else {
    console.log("User with userid " + userId +
      " not authorized to access BI-Tool\n");
    res.send({
      message: "User with userid [" + userId +
        "] not authorized to access BI-Tool  \n In case you need further assistance, please contact us at [tech-mp-asia-da@mail.rakuten.com]"
    });
    callback(null, '403');
  }
}

function moveInputCsv(file, yamlData, res, arg1, callback) {
  if (arg1 == 403) {
    callback(null, '403');
  } else {
    var stat = fs.statSync(__dirname + '/uploads/' + file.filename);
    var str = progress({
      length: stat.size,
      time: 1500 /* ms */
    });
    str.on('progress', function(progress) {
      var a = progress.percentage.toString();
      res.write(a);
      //  res.pipe(wstream);
      console.log(progress.percentage);
      if (progress.percentage == 100) {
        try {
          callback(null, '200');
        } catch (err) {}
      }
    });
    fs.createReadStream(__dirname + '/uploads/' + file.filename).pipe(str).pipe(
      fs.createWriteStream(
        "//ngate301/datahub/bi_extractor/inputcsv/" + yamlData.userid + "/" +
        file.originalname));
  }
}

function prepareYaml(yamlData, filename, originalfilename, res, arg1, callback) {
  if (arg1 == 403) {
    callback(null, '403');
  } else {
    var yamlAsStringBuilder = new StringBuilder();
    //clean up uploads folder
    fs.unlinkSync(__dirname + '/uploads/' + filename);
    var date = yamlData.date;
    yamlAsStringBuilder.append("date:\n");
    yamlAsStringBuilder.append(
      " date1:\n");
    yamlAsStringBuilder.append(
      "  start: " + moment(date.beginDate).subtract(1, 'months')
      .format('YYYY/MM/DD') + "\n");
    yamlAsStringBuilder.append(
      "  end: " +
      moment(date.endDate).subtract(1, 'months')
      .format('YYYY/MM/DD') + "\n");
    yamlAsStringBuilder.append(
      "input:\n");
    yamlAsStringBuilder.append(
      " type: " + yamlData.inputtype +
      "\n");
    yamlAsStringBuilder.append(" device: " + yamlData.devicetype +
      "\n");
    yamlAsStringBuilder.append(
      " path1: " + originalfilename + "\n");
    yamlAsStringBuilder.append(
      "user.id: " + yamlData.userid + "\n");
    yamlAsStringBuilder.append(
      "mail.id: " + yamlData.mailid + "\n");
    yamlAsStringBuilder.append(
      "flagunique: " + yamlData.unique + "\n");
    yamlAsStringBuilder.append(
      "flaguniquecount: " + yamlData.uniquecount +
      "\n");
    yamlAsStringBuilder.append("flagcompletematch: " +
      yamlData.completematch +
      "\n");
    yamlAsStringBuilder.append("flagonlyeasyid: " +
      yamlData.onlyeasyid +
      "\n");

    console.log("\n\n" + yamlAsStringBuilder.toString() + "\n\n");

    var yamlPath = new StringBuilder();
    yamlPath.append(
      "//ngate301/datahub/bi_extractor/yaml/test/");
    yamlPath.append(
      yamlData.userid);
    yamlPath.append(randomstring.generate());
    yamlPath.append(
      ".yaml");
    fs.writeFile(yamlPath.toString(), yamlAsStringBuilder.toString(),
      function(err) {
        if (err) {
          callback(null, '403');
          return console.log(err);
        }
        console.log("The file was saved!");
      });
    callback(null, '200');
    // res.send({
    //   message: "Success"
    // });
    res.end();
  }
}

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
