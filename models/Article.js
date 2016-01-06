var mongoose = require('mongoose');

// only would get saved when parent gets saved
// must be declared prior to parent due to...
// HOISTING
var CommentSchema = new mongoose.Schema({
  name: 'string',
  comment: 'string'
});

// parent item
var ArticleSchema = new mongoose.Schema({
  title: 'string',
  author: 'string',
  authorEmail: 'string',
  content: 'string',
  children: [CommentSchema]
});

// export both as endpoints!
module.exports.Article = mongoose.model('Article', ArticleSchema);
module.exports.Comment = mongoose.model('Comment', CommentSchema);
