// database.js

const db = require("./db"); // Import the MySQL connection pool from db.js

// Function to fetch data from the database
const fetchDataFromDatabase = (callback) => {
  // SQL query to fetch data
  const sqlQuery = "SELECT * FROM your_table_name";

  // Execute SQL query
  db.query(sqlQuery, (error, results, fields) => {
    if (error) {
      console.error("Error executing SQL query:", error);
      callback(error, null);
      return;
    }

    // Send the fetched data to the callback function
    callback(null, results);
  });
};

module.exports = { fetchDataFromDatabase };
