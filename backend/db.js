// db.js

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ushan421@',
  database: 'user details'
});

// Perform a test query to check if the connection is successful
connection.query('SELECT 1', (err, results) => {
  if (err) {
    console.error('Error connecting to database:', err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = connection;
