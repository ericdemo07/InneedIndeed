var Person = require('../models/person');

function update_by_id(id, type, newvalue) {
  if (type == 'firstName') {
    var inputnew = {
      firstName: newvalue
    };
  }
  Person.person_save.findByIdAndUpdate(id, inputnew, function(err, user) {
  if (err) throw err;
  console.log(user);
});
}

function update_many(type,oldvalue,newvalue)
{
  if (type == 'firstName') {
    var inputold = {
      firstName: oldvalue
    };
    var inputnew = {
      firstName: newvalue
    };
  }
  Person.person_save.findOneAndUpdate(inputold, inputnew, function(err, person) {
    if (err) throw err;

    // we have the updated user returned to us
    console.log(person);
  });
}

module.exports = {
  update_by_id : update_by_id,
  update_many: update_many
}
