var Person = require('../models/person');

function delete_by_id(id) {
  Person.person_save.findByIdAndRemove(id, function(err) {
    if (err) throw err;
    console.log('User deleted!');
  });
}

function delete_many(type,value)
{
  if (type == 'firstName') {
    var inputnew = {
      firstName: value
    };
  }
  Person.person_save.findOneAndRemove(inputnew, function(err) {
    if (err) throw err;
    console.log('User deleted!');
  });
}


module.exports = {
  delete_many : delete_many,
  delete_by_id: delete_by_id
}
