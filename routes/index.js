var express = require('express');
var router = express.Router();

// mongoose helpers


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mongoose Children' });
});

module.exports = router;
