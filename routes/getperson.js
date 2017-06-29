var Person = require('../models/person');

function get_all() {
  Person.find({}, function(err, users) {
    if (err) throw err;
    console.log(users);
  });
}

function get_one(type, value) {
  if (type == 'firstName') {
    var input = {
      firstName: value
    };
  }
  Person.find(input, function(err, user) {
    if (err) throw err;
    console.log(user);
  });
}

function get_by_id(id) {
  Person.findById(id, function(err, user) {
    if (err) throw err;
    console.log(user);
  });
}
module.exports = {
  get_all: get_all,
  get_one: get_one,
  get_by_id: get_by_id
}
