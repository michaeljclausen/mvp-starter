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

module.exports.selectAllUsers = selectAllUsers;
module.exports.selectAllForUser = selectAllForUser;
