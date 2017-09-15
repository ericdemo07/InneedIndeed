// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user_schema = new Schema({
  id: String,
  firstName: String,
  lastName: String,
  mailId: String,
  phone: Number,
  password: String,
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var user_save = mongoose.model('SaveUser', user_schema);

// make this available to our users in our Node applications

module.exports = {
  user_save: user_save
}
