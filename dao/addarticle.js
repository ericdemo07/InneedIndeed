var Article = require('../models/article');
var moment = require('moment');

var dummy_person1 = new Article.articleModel({
  firstName: 'Sundari',
  lastName: 'Lakhtakia',
  city: 'Mumbai',
  state: 'Maharashtra',
  postalCode: 400008,
  addressLine1: 'Hawa Manzil, Madhav Rao Gangan St,',
  addressLine2: 'Agripada',
  donationAmount: 0,
  content: 'Sundari is hard working and honest person, due to untimely death of her parents, there is lot of responsibility on her shoulders as she also has to feed her 3 years old brother',
  img: 'lib/img/sundari.jpg',
  mailId: '',
  phone: 8884787878,
  representativeId: '111AAA',
  likesCount: 0,
  shareCount: 0,
  dob: moment('2014-04-22').format('YYYY-MM-DD'),
  created_at: moment('2018-02-12').format('YYYY-MM-DD'),
  updated_at: new Date()
});

var dummy_person2 = new Article.articleModel({
  firstName: 'Ram',
  lastName: 'Avtar',
  city: 'Kasganj',
  state: 'Uttar Pradesh',
  postalCode: 207123,
  addressLine1: 'Madrai Gate, Main mkt. Road',
  addressLine2: '',
  donationAmount: 0,
  content: 'Ram avtar is a 78 years old without any family, he sells sancks costing around 5 rupees to fill his stomach',
  img: 'lib/img/ram_avtar.jpg',
  mailId: '',
  phone: '',
  representativeId: '111AAA',
  likesCount: 0,
  shareCount: 0,
  dob: moment('1978-06-12').format('YYYY-MM-DD'),
  created_at: moment('2018-02-12').format('YYYY-MM-DD'),
  updated_at: new Date()
});

var dummy_person3 = new Article.articleModel({
  firstName: 'Yashoda',
  lastName: 'Salil',
  city: 'Rohtak',
  state: 'Haryana',
  postalCode: 124021,
  addressLine1: '330, Vinay Nagar,',
  addressLine2: 'Delhi Bypass Chowk',
  donationAmount: 0,
  content: 'We found yashoda sleeping on the footpath near delhi bypass, she is homeless aged lady',
  img: 'lib/img/yashoda_salil.jpg',
  mailId: '',
  phone: '',
  representativeId: '111AAA',
  likesCount: 0,
  shareCount: 0,
  dob: moment('1973-02-21').format('YYYY-MM-DD'),
  created_at: moment('2018-02-12').format('YYYY-MM-DD'),
  updated_at: new Date()
});

var dummy_person4 = new Article.articleModel({
  firstName: 'Nishank',
  lastName: 'Thakur',
  city: 'Jammu',
  state: 'Jammu and Kashmir',
  postalCode: 180001,
  addressLine1: 'Central Chowk, Bhatindi',
  addressLine2: 'Bahtindi',
  donationAmount: 0,
  content: 'We found nishank picking garbage which he sells for 5 rs at best, he stays along with other folks of his age group and same profession.',
  img: 'lib/img/nishank_thakur.jpg',
  mailId: 'nishank_thakur@gmail.com',
  phone: 8884876765,
  representativeId: '111AAA',
  likesCount: 32,
  shareCount: 0,
  dob: moment('2005-10-21').format('YYYY-MM-DD'),
  created_at: moment('2018-02-12').format('YYYY-MM-DD'),
  updated_at: new Date()
});

var dummy_person5 = new Article.articleModel({
  firstName: 'Rani',
  lastName: 'Kamla',
  city: 'Jamshedpur',
  state: 'Lharkhand',
  postalCode: 831001,
  addressLine1: 'Rankini Mandir, Old Farm',
  addressLine2: 'Kadma, Jamshedpur',
  donationAmount: 0,
  content: 'Kamla is the among the 9 daughter in her family, her parents can only afford to provide her one time meal in two days. Let us help kamla to complete her daily diet and send her to school',
  img: 'lib/img/rani_kamla.jpg',
  mailId: '',
  phone: 8787928890,
  representativeId: '111AAA',
  likesCount: 0,
  shareCount: 0,
  dob: moment('2005-01-09').format('YYYY-MM-DD'),
  created_at: moment('2018-02-12').format('YYYY-MM-DD'),
  updated_at: new Date()
});

function save1() {
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

function save(ob) {
  var obAsObject = new Article.articleModel({
    firstName: ob['firstName'],
    lastName: ob['lastName'],
    city: ob['city'],
    state: ob['state'],
    postalCode: 223322,
    addressLine1: ob['addressLine1'],
    addressLine2: ob['addressLine2'],
    donationAmount: ob['donationAmount'],
    content: ob['content'],
    img: ob['img'],
    mailId: ob['mailId'],
    phone: 8884873621,
    representativeId: ob['representativeId'],
    likesCount: 111,
    shareCount: 1,
    dob: moment('2013-06-22').format('YYYY-MM-DD'), //have to add into ui
    created_at: new Date(),
    updated_at: new Date()
  });

  obAsObject.save(function(err,user) {
    if (err) throw err;
  });
}

exports.save1 = save1
