// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var person_schema = new Schema({
  firstName: String,
  lastName: String,
  city: String,
  state: String,
  postalCode: Number,
  addressLine1: String,
  addressLine2: String,
  donationAmount: Number,
  content: String,
  img: String,
  mailId: String,
  phone: Number,
  representativeId: String,
  likesCount: Number,
  shareCount: Number,
  dob: Date,
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var person_save = mongoose.model('SavePerson', person_schema);

// make this available to our users in our Node applications

module.exports = {
  person_save: person_save
}
