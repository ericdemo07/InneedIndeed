var Person = require('../models/person');

function get_all(callback) {
   Person.person_save.find({}, function(err, users) {
    if (err) throw err;
    callback(err, users);
  });
}

function get_one(type, value) {
  if (type == 'firstName') {
    var input = {
      firstName: value
    };
  }
  Person.person_save.find(input, function(err, user) {
    if (err) throw err;
    console.log(user);
  });
}

function get_by_id(callback,id) {
  Person.person_save.findById(id, function(err, user) {
    if (err) throw err;
    callback(err, user);
  });
}

module.exports = {
  get_all: get_all,
  get_one: get_one,
  get_by_id: get_by_id
}
