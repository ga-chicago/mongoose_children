var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/fakeblog';

mongoose.connect(connectionString);

mongoose.connection.on('connected', function() {
  console.log('Das fake blog is publishing propaganda!');
});

mongoose.connection.on('error', function(err) {
  console.log(err);
});

mongoose.connection.on('disconnected', function() {
  console.log('Das fake blog is going DOWN!!!');
});
