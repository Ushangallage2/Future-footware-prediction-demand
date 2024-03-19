const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'your_mysql_host',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'your_database_name'
});

const PredictionModel = {
  getAllPredictions: (callback) => {
    const sqlQuery = 'SELECT * FROM prediction_table';
    connection.query(sqlQuery, (err, results) => {
      if (err) {
        console.error('Error executing SQL query: ', err);
        return callback(err, null);
      }
      callback(null, results);
    });
  }
};

module.exports = PredictionModel;
