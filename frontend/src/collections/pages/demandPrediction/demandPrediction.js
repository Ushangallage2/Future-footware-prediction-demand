
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
  const [selectedDate, setSelectedDate] = useState(null); // State for selected date

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleInputChange = (inputValue) => {
    setLoading(inputValue.length > 0);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date); // Update the selected date
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
          {selectedModelImage && (
            <img src={selectedModelImage} alt="Model" />
          )}
          {/* Date picker component */}
          <Datepicker
            selected={selectedDate} // Pass the selected date
            onChange={handleDateChange} // Handle date change
            placeholderText="Select a date" // Placeholder text
            minDate={new Date()}
          />
          <button
            className="clear-button"
            onClick={() => {
              setSelectedOption(null); // Clear selected model
              setSelectedDate(null); // Clear selected date
            }}
          >
            Clear Selection
          </button>

        </div>
      </div>
    </div>
  );
};

export default DemandPrediction;




