require('dotenv').config()
var mysql = require('mysql2');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "Xerxes5474!",
    database: "csc317db" 
  }); 

conn.connect(function(err) {
if (err) throw err;
    console.log('Database is connected successfully !');
}); 

module.exports = conn;