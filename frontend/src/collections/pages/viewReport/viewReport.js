

// src/collections/pages/viewReport/ViewReport.js (with uppercase component name)

import React, { useState } from 'react';
import axios from 'axios';

import { Sidebar } from '../../sidebar/sidebar';
import UsernameTypewriter from '../../components/UsernameTypewriter';

function ViewReport() {
  const [file, setFile] = useState(null);
  const [predictions, setPredictions] = useState([]);

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/api/predict', formData); // Replace with your API endpoint
      setPredictions(response.data.predictions);
    } catch (error) {
      console.error('Error fetching predictions:', error);
    }
  };

  return (
    <div className="App">
      <h1>Machine Learning Predictions</h1>
      <input
        type="file"
        accept=".csv" // Adjust accepted file types as needed
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleFileUpload}>Upload Data</button>

      {predictions.length > 0 && (
        <div>
          <h2>Predictions:</h2>
          <ul>
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
