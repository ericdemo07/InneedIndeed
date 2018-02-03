var Article = require('../models/article');

function get_all(callback) {
   Article.articleModel.find({}, function(err, users) {
    if (err) throw err;
    callback(err, users);
  });
}

function get_one(type, value) {
  if (type == 'firstName') {
    var input = {
      firstName: value
    };
  }
  Article.articleModel.find(input, function(err, user) {
    if (err) throw err;
    console.log(user);
  });
}

function get_by_id(id,callback) {
  Article.articleModel.findById(id, function(err, user) {
    if (err) throw err;
    callback(err, user);
  });
}

module.exports = {
  get_all: get_all,
  get_one: get_one,
  get_by_id: get_by_id
}
