var Person = require('../models/person');
var moment = require('moment');

var dummy_person = new Person.person_save({
  firstName: 'Chris',
  lastName: 'Logan',
  city: 'LasVegas City',
  state: 'LasVegas',
  postalCode: 467377,
  addressLine1: '45,Tramford Circle',
  addressLine2: 'West Vegas',
  donationAmount: 342232,
  content: 'Free roaming person will do his best to take the next leap',
  img: 'lib/img/inneed_img1.jpg',
  mailId: 'logan.chris@cbt.com',
  phone: 0808223849,
  representativeId: '452FU3',
  likesCount: 98,
  shareCount: 0,
  dob: moment('2013-06-22').format('YYYY-MM-DD'),
  created_at: moment('2017-06-22').format('YYYY-MM-DD'),
  updated_at: new Date()
});

function save() {
  dummy_person.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('User added');
    }
  });
}

exports.save = save
