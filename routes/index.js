var express = require('express');
var router = express.Router();
var Model = require('../models/Article');

/* GET home page. */
router.get('/', function(req, res, next) {

  Model.Article.find(function(err, articles) {

    console.log(articles);

  });

  res.render('index', { title: 'Mongoose Children' });
});

module.exports = router;
