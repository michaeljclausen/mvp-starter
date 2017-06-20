var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'plantlife',
  database : 'musictodoly'
});

console.log('DB CONNECTED');

var selectAllUsers = function(callback) {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM users', function(err, results, fields) {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

var selectAllForUser = function(user) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM list_items LEFT JOIN users USING (user_id) WHERE users.user_name = "${user}"`, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  })
}

var updateListenedTo = function(item) {
  return new Promise((resolve, reject) => {
    connection.query(`UPDATE list_items SET listened = 1 WHERE list_item_id = ${item}`, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  })
}

var updateLiked = function(item, liked) {
  return new Promise((resolve, reject) => {
    connection.query(`UPDATE list_items SET liked = ${liked} WHERE list_item_id = ${item}`, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  })
}

var addArtist = function(artist, username) {
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO list_items (user_id, artist) VALUES ((SELECT user_id FROM users where user_name = "${username}"), "${artist}")`, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  })
}

var getLikedArtists = function(username) {
  let query = `SELECT DISTINCT artist 
                FROM list_items 
                WHERE user_id = (SELECT user_id FROM users where user_name = "${username}")
                AND liked = true;`;
  return new Promise((resolve, reject) => {
    connection.query(query, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        //console.log('RESULTS FROM GET LIKED ARTISTS', results);
        resolve(results);
      }
    });
  })
}

module.exports.selectAllUsers = selectAllUsers;
module.exports.selectAllForUser = selectAllForUser;
module.exports.updateListenedTo = updateListenedTo;
module.exports.updateLiked = updateLiked;
module.exports.addArtist = addArtist;
module.exports.getLikedArtists = getLikedArtists;









