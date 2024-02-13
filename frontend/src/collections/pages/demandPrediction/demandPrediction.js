import React, { useState } from 'react';
import { Sidebar } from '../../sidebar/sidebar';
import '../../../App.css';
import './demandprediction.css';

const DemandPrediction = () => {
    const [predictionValue, setPredictionValue] = useState('');

    const handleInputChange = (event) => {
        setPredictionValue(event.target.value);
    };

    const handleFilterSubmit = () => {
        // Implement your logic for handling the filter submit here
        console.log(`Filter value submitted: ${predictionValue}`);
    };

    return (
        <div className='container'>
            <Sidebar />
            <div className='content'>
                <div className='prediction-box'>
                    <h2>Predict Demand</h2>
                    <div className='input-container'>
                        <input
                            type='number'
                            placeholder='Enter a number'
                            value={predictionValue}
                            onChange={handleInputChange}
                        />
                        <select>
                            <option>Filter Option 1</option>
                            <option>Filter Option 2</option>
                           
                        </select>
                        <button onClick={handleFilterSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DemandPrediction;
