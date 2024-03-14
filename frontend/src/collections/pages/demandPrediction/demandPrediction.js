

import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Sidebar } from '../../sidebar/sidebar';
import UsernameTypewriter from '../../components/UsernameTypewriter';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './demandprediction.css';

const DemandPrediction = () => {
  const [modelNumbers, setModelNumbers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedModelImage, setSelectedModelImage] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [warningMessage, setWarningMessage] = useState('');

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setWarningMessage('');
  };

  const handleInputChange = (inputValue) => {
    setLoading(inputValue.length > 0);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setWarningMessage('');
  };

  useEffect(() => {
    const fetchModelNumbers = async () => {
      try {
        const response = await fetch('http://localhost:8080/demandpred/allModels');
        const data = await response.json();
        setModelNumbers(data.modelNumbers);
      } catch (error) {
        console.log('Error fetching model numbers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchModelNumbers();
  }, []);

  useEffect(() => {
    const fetchModelImage = async () => {
      if (selectedOption) {
        try {
          const response = await fetch(`http://localhost:8080/demandpred/getImage/${selectedOption.value}`);
          if (!response.ok) {
            throw new Error(`Failed to fetch model image. Status: ${response.status}`);
          }

          const blob = await response.blob();
          setSelectedModelImage(URL.createObjectURL(blob));
        } catch (error) {
          console.log('Error fetching model image:', error);
        }
      }
    };

    fetchModelImage();
  }, [selectedOption]);

  const handleSubmit = () => {
    if (!selectedOption && !selectedDate) {
      setWarningMessage('Please choose a date and a model number.');
    } else if (!selectedOption) {
      setWarningMessage('Please choose a model number.');
    } else if (!selectedDate) {
      setWarningMessage('Please choose a date.');
    } else {
      // Proceed with submitting form data
      console.log("Submission successful.");
      setWarningMessage(''); // Clear warning message if submission is successful
    }
  };

  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
      <Sidebar />
      <div className="content">
        <UsernameTypewriter style={{ position: 'fixed', top: '5px', right: '5px', color: 'yellow', fontSize: '16px', fontWeight: 'bold' }} />
        <div className="center-container class1">
          <Select
            options={modelNumbers.map((modelNumber) => ({
              value: modelNumber,
              label: modelNumber,
            }))}
            value={selectedOption}
            onChange={handleChange}
            onInputChange={handleInputChange}
            isLoading={loading}
            placeholder="Select a model number"
          />

{warningMessage && (
            <div style={{ color: 'red', marginTop: '10px' }}>
              <span className="warning-icon" style={{ marginRight: '5px' }}>⚠️</span>
              {warningMessage}
            </div>
          )}
          {selectedModelImage && (
            <img src={selectedModelImage} alt="Model" />
          )}
          
          <Datepicker
            className="custom-datepicker"
            selected={selectedDate}
            onChange={handleDateChange}
            placeholderText="Select a date range"
            minDate={new Date()}
          />
            <button
            className="clear-button"
            onClick={() => {
              setSelectedOption(null);
              setSelectedDate(null);
              setWarningMessage('');
            }}
          >
            Clear Selection
          </button>
          <button
            className="submit-button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default DemandPrediction;




