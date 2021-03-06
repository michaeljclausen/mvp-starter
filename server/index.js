var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');

var db = require('../database-mysql');
var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/users', function (req, res) {
  db.selectAllUsers()
  .then(users => {
    res.status(200).send(users);
  });
});

app.get('/user', (req, res) => {
  //console.log('in /user', req.query);
  db.selectAllForUser(req.query.username)
  .then(data => {
    res.status(200).send(data);
  });
})

app.get('/apiSearch', (req, res) => {
  db.getLikedArtists(req.query.username)
  .then(data => { 
    let artists = data.map(item => item.artist.replace(' ','+')).join('%2C');
    let query = `https://tastedive.com/api/similar?q=${artists}&type=music&limit=5&k=273726-musictod-5U782O59`
    return axios.get(query)
  })
  .then(results => {
    let recommendedArtists = results.data.Similar.Results.map(item => item.Name);
    recommendedArtists.forEach(artist => db.addArtist(artist, req.query.username))
  })
})

app.get('/add', (req, res) => {
  console.log('in /add', req.query);
  db.addArtist(req.query.artist, req.query.username)
  .then(data => {
    res.status(200).send(data);
  });
})

app.get(`/update`, (req, res) => {
  console.log('in /update', req.query);
  if (req.query.listened) {
    console.log('in updateListenedTo', req.query);
    db.updateListenedTo(req.query.itemid)
    .then(() => {
      res.status(200).end();
    })
  } else if (req.query.liked) {
    db.updateLiked(req.query.itemid, req.query.liked)
    .then(() => {
      res.status(200).end();
    })
  } 
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

