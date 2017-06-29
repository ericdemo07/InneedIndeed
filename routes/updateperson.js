var Person = require('../models/person');

function update_one(id) {
  Person.findById(id, function(err, person) {
    if (err) throw err;

    person.city = 'uk';

    person.save(function(err) {
      if (err) throw err;
      console.log('User successfully updated!');
    });
  });
}

exports.update_one = update_one
