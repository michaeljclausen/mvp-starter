var express = require('express');
var bodyParser = require('body-parser');

var db = require('../database-mysql');


var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/users', function (req, res) {
  db.selectAllUsers()
  .then(users => {
    console.log(users);
    res.status(200).send(users);
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

