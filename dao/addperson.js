var Person = require('../models/person');
var moment = require('moment');

var dummy_person1 = new Person.person_save({
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
  mailId: 'logan.chris@yahoo.com',
  phone: 0808223849,
  representativeId: '452FU3',
  likesCount: 98,
  shareCount: 0,
  dob: moment('1988-04-22').format('YYYY-MM-DD'),
  created_at: moment('2017-06-22').format('YYYY-MM-DD'),
  updated_at: new Date()
});

var dummy_person2 = new Person.person_save({
  firstName: 'Matt',
  lastName: 'Demon',
  city: 'Texas',
  state: 'Texas',
  postalCode: 546672,
  addressLine1: '45,Tramford Circle',
  addressLine2: 'East Texas',
  donationAmount: 212321,
  content: 'Free roaming person will do his best to take the next leap',
  img: 'lib/img/inneed_img1.jpg',
  mailId: 'demonic@gamil.com',
  phone: 0808223435,
  representativeId: '452FU132',
  likesCount: 44,
  shareCount: 0,
  dob: moment('1988-06-12').format('YYYY-MM-DD'),
  created_at: moment('2017-06-22').format('YYYY-MM-DD'),
  updated_at: new Date()
});

var dummy_person3 = new Person.person_save({
  firstName: 'Julia',
  lastName: 'Roberts',
  city: 'Massachusetts',
  state: 'Massachusetts',
  postalCode: 123244,
  addressLine1: '45,Tramford Circle',
  addressLine2: 'West Massachusetts',
  donationAmount: 989898,
  content: 'Free roaming person will do his best to take the next leap',
  img: 'lib/img/inneed_img1.jpg',
  mailId: 'logan.chris@cbt.com',
  phone: 0808211849,
  representativeId: '452FU213',
  likesCount: 243,
  shareCount: 0,
  dob: moment('1987-06-11').format('YYYY-MM-DD'),
  created_at: moment('2017-06-22').format('YYYY-MM-DD'),
  updated_at: new Date()
});

var dummy_person4 = new Person.person_save({
  firstName: 'Rachel',
  lastName: 'McAdams',
  city: 'LasVegas City',
  state: 'LasVegas',
  postalCode: 467377,
  addressLine1: '45,Tramford Circle',
  addressLine2: 'West Vegas',
  donationAmount: 311232,
  content: 'Free roaming person will do his best to take the next leap',
  img: 'lib/img/inneed_img1.jpg',
  mailId: 'logan.chris@cbt.com',
  phone: 0807023849,
  representativeId: '452FU3',
  likesCount: 32,
  shareCount: 0,
  dob: moment('1990-10-22').format('YYYY-MM-DD'),
  created_at: moment('2017-06-22').format('YYYY-MM-DD'),
  updated_at: new Date()
});

var dummy_person5 = new Person.person_save({
  firstName: 'Gal',
  lastName: 'Gadot',
  city: 'Texas',
  state: 'Texas',
  postalCode: 462922,
  addressLine1: '45,Tramford Circle',
  addressLine2: 'Texas',
  donationAmount: 283743,
  content: 'Free roaming person will do his best to take the next leap',
  img: 'lib/img/inneed_img1.jpg',
  mailId: 'logan.chris@cbt.com',
  phone: 0803283233,
  representativeId: '452FU3',
  likesCount: 298,
  shareCount: 0,
  dob: moment('2013-06-22').format('YYYY-MM-DD'),
  created_at: moment('2017-06-22').format('YYYY-MM-DD'),
  updated_at: new Date()
});
function save() {
  dummy_person1.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('User added');
    }
  });
  dummy_person2.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('User added');
    }
  });
  dummy_person3.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('User added');
    }
  });
  dummy_person4.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('User added');
    }
  });
  dummy_person5.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('User added');
    }
  });
}

exports.save = save
