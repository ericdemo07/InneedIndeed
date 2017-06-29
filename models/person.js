// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
  _id: Object,
  id: { type: String, required: true, unique: true},
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
var Person = mongoose.model('Person', personSchema);


// custom method to add string to end of name
// you can create more important methods like name validations or formatting
// you can also do queries and find similar users
// personSchema.methods.dudify = function() {
//   // add some stuff to the users lastName
//   this.lastName = this.lastName + '-dude';
//
//   return this.lastName;
// };

// make this available to our users in our Node applications
module.exports = Person;
