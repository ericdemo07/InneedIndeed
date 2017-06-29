var mongoose = require('mongoose');

function connect_to_database() {
  mongoose.connect('mongodb://localhost:27017/inneed_indeed');
}

exports.connect_to_database = connect_to_database
