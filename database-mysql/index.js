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
        //console.log('in selectAllUsers', results);
        resolve(results);
      }
    });
  });
};

module.exports.selectAllUsers = selectAllUsers;
