var User = require('../models/user');
var moment = require('moment');

var dummy_user1 = new User.user_save({
  firstName: 'Sandeep',
  lastName: 'Rao',
  mailId: 'sandeep.rao@gmail.com',
  phone: 44476565,
  password: '12345678',
  created_at: new Date(),
  updated_at: new Date()
});

var dummy_user2 = new User.user_save({
  firstName: 'Sachin',
  lastName: 'Bansal',
  mailId: 'sachinb@yahoo.com',
  phone: 2342545443,
  password: '44445555',
  created_at: new Date(),
  updated_at: new Date()
});


function save1() {
  dummy_user1.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('User added');
    }
  });
  dummy_user2.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('User added');
    }
  });
}

function save(ob) {
  var obAsObject = new Person.person_save({
    firstName: ob['firstName'],
    lastName: ob['lastName'],
    mailId: ob['mailId'],
    phone: ob['phone'],
    password: ob['password'],
    created_at: new Date(),
    updated_at: new Date()
  });

  obAsObject.save(function(err,user) {
    if (err) throw err;
  });
}

exports.save1 = save1
