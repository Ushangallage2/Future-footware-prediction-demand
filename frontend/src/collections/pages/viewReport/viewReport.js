

// src/collections/pages/viewReport/ViewReport.js

import React, { useState } from 'react';
import axios from 'axios'; // Axios for making HTTP requests

import { Sidebar } from '../../sidebar/sidebar'; // Sidebar component (not shown in this snippet)
import UsernameTypewriter from '../../components/UsernameTypewriter'; // UsernameTypewriter component (not shown in this snippet)

function ViewReport() {
  const [file, setFile] = useState(null); // State to hold the uploaded file
  const [predictions, setPredictions] = useState([]); // State to store prediction results

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file); // Append the uploaded file to the form data

    try {
      // Make a POST request to your backend API endpoint (replace with your actual endpoint)
      const response = await axios.post('/api/predict', formData);
      setPredictions(response.data.predictions); // Update state with prediction results
    } catch (error) {
      console.error('Error fetching predictions:', error);
    }
  };

  return (
    <div className="App">
      <h1>Machine Learning Predictions</h1>
      <input
        type="file"
        accept=".csv" // Accept CSV files (adjust as needed)
        onChange={(e) => setFile(e.target.files[0])} // Update file state when a file is selected
      />
      <button onClick={handleFileUpload}>Upload Data</button> {/* Trigger file upload */}

      {predictions.length > 0 && (
        <div>
          <h2>Predictions:</h2>
          <ul>
            {/* Display prediction results */}
            {predictions.map((prediction, index) => (
              <li key={index}>{prediction}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ViewReport;

