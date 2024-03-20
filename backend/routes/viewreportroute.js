const express = require("express");
const { fetchDataFromDatabase } = require("..controllers/viewreport.js"); // Import the fetchDataFromDatabase function from database.js
const router = express.Router();

// Endpoint to fetch data
router.get("/data", (req, res) => {
  // Call the function to fetch data from the database
  fetchDataFromDatabase((error, data) => {
    if (error) {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    // Send the fetched data as JSON response
    res.json(data);
  });
});
