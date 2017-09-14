var Person = require('../models/person');
var moment = require('moment');

function update_by_id(ob) {
  var id = ob['id'];
  console.log("\n\n id[" + id);
  var updateObject = {
    firstName: ob['firstName'],
    lastName: ob['lastName'],
    city: ob['city'],
    state: ob['state'],
    postalCode: ob['postalCode'],
    addressLine1: ob['addressLine1'],
    addressLine2: ob['addressLine2'],
    donationAmount: ob['donationAmount'],
    content: ob['content'],
    img: ob['img'],
    mailId: ob['mailId'],
    phone: ob['phone'],
    representativeId: ob['representativeId'],
    likesCount: ob['likesCount'],
    shareCount: ob['shareCount'],
    dob: moment(ob['dob']).format('YYYY-MM-DD'),
    updated_at: new Date()
  };
  Person.person_save.findByIdAndUpdate(id, updateObject, function(err, user) {
    if (err) throw err;
    console.log(user);
  });
}

function update_many(type, oldvalue, newvalue) {
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
  update_by_id: update_by_id,
  update_many: update_many
}
