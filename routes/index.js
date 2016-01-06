var express = require('express');
var router = express.Router();
var Models = require('../models/Article');

/* GET home page. */
router.get('/', function(req, res, next) {


  // 1. Find any articles in the database
  Models.Article.find(function(err, articles) {
    //console.log(articles);
  });
  // 2. Add an article!
  Models.Article.create({
    title: 'Adventures with Mongo\'s Children',
    author: 'Jimbo Jones',
    authorEmail: 'james.haff@ga.co',
    content: 'Mongo has the coolest sub-documents ever!'
  }, function(err, article) {
    if (err) console.log(err);
    //console.log(article);
  });
  // 3. Create a child element
  var comment = {
    name: 'Marty',
    comment: 'That is our team name!'
  };
  var secondComment = {
    name: 'Kevin',
    comment: 'I don\t believe it....'
  };
  Models.Article.create({
    title: 'Beeler Got a Blocker',
    author: 'Jan',
    authorEmail: 'jan@madeup.com',
    content: 'Hoyl fffff David finally had a blocker',
    children: [comment, secondComment]
  },
  function(err, article) {
    //console.log('#3: ')
    //console.log(article);
    // #4 loop through children
    // verify our children first
    //console.log(article.children); yes - it works!
    // for (var comment in article.children) {
    //   var pointer = article.children[comment];
    //   console.log(pointer);
    // }
    console.log('#4: Iterating/accessing children')
    article.children.forEach(function(key) {
      console.log(key);
    });
    //console.log(article.children[0]);
  });
  //#5
  console.log('#5');
  var newerComment = {
    name: 'James',
    comment: 'I like pie'
  };
  Models.Article.findOneAndUpdate({
    'title': 'Beeler Got a Blocker'
  },
  {},
  function(err, article) {
    console.log(err);
    //console.log(article);
    article.children.push(newerComment);
    article.save();
    console.log(article);
  });

  res.render('index', { title: 'Mongoose Children' });
});

module.exports = router;
