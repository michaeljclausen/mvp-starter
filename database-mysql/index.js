var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'plantlife',
  database : 'musictodoly'
});

var selectAllUsers = function(callback) {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM users', function(err, results, fields) {
      if(err) {
        reject(err, null);
      } else {
        resolve(null, results);
      }
    });
  });
};

module.exports.selectAllUsers = selectAllUsers;
