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
  phone: 2342549885665,
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
  var obAsObject = new User.user_save({
    firstName: ob['firstName'],
    lastName: ob['lastName'],
    mailId: ob['mailId'],
    phone: ob['phone'],
    password: ob['password'],
    created_at: new Date(),
    updated_at: new Date()
  });
  obAsObject.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('User added');
    }
  });
}

function login_signup(ob, callback) {
  if (ob['firstName']) {
    console.log("\n\n is in signup mode [" + ob['firstName']);
    save(ob);
  } else {
    var input;
    if (ob['mailId']) {
      input = {
        mailId: ob['mailId'],
        password: ob['password']
      };
    } else {
      input = {
        phone: ob['phone'],
        password: ob['password']
      };
    }
    console.log("\n\n is in signup mode with [" + input);
    User.user_save.find(input, function(err, user) {
      if (err) throw err;
      callback(err, user);
    });
  }
}

module.exports = {
  save1: save1,
  login_signup: login_signup
}
