var Article = require('../models/article');

function delete_by_id(id) {
  Article.articleModel.findByIdAndRemove(id, function(err) {
    if (err) throw err;
    console.log('User deleted!');
  });
}

function delete_many(type, value) {
  if (type == 'firstName') {
    var inputnew = {
      firstName: value
    };
  }
  Article.articleModel.findOneAndRemove(inputnew, function(err) {
    if (err) throw err;
    console.log('User deleted!');
  });
}


module.exports = {
  delete_many: delete_many,
  delete_by_id: delete_by_id
}
