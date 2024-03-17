


import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Sidebar } from '../../sidebar/sidebar';
import UsernameTypewriter from '../../components/UsernameTypewriter';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './demandprediction.css';

const DemandPrediction = () => {
  const [modelNumbers, setModelNumbers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedModelImage, setSelectedModelImage] = useState(null);
  const [dateRange, setDateRange] = useState([null, null]); // State for date range
  const [warningMessage, setWarningMessage] = useState('');
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false); // State to track whether date picker is open or closed
  const [daysToFirstDate, setDaysToFirstDate] = useState(0);
  const [daysToLastDate, setDaysToLastDate] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);


  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setWarningMessage('');
  };

  const handleInputChange = (inputValue) => {
    setLoading(inputValue.length > 0);
  };

  const handleDateChange = (ranges) => {
    const startDate = ranges.selection.startDate;
    const endDate = ranges.selection.endDate;

    if (endDate < startDate) {
      setWarningMessage('End date cannot be earlier than start date.');
      return;
    }

    // Calculate days to first and last date
    const today = new Date();
    const firstDate = Math.ceil((startDate - today) / (1000 * 60 * 60 * 24));
    const lastDate = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));
    setDaysToFirstDate(firstDate);
    setDaysToLastDate(lastDate);

    setDateRange([startDate, endDate]);
    setWarningMessage('');
  };

  const toggleDatePicker = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
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

  // const handleSubmit = () => {
  //   if (!selectedOption || !dateRange[0] || !dateRange[1]) {
  //     setWarningMessage('Please choose a model number and select a date range.');
  //   } else {
  //     // Proceed with submitting form data
  //     console.log("Submission successful.");
  //     setWarningMessage(''); // Clear warning message if submission is successful
  //   }
  // };

  const handleSubmit = async () => {
    if (!selectedOption || !dateRange[0] || !dateRange[1]) {
      setWarningMessage('Please choose a model number and select a date range.');
      return;
    }

    setIsProcessing(true); // Start processing
    setWarningMessage(''); // Clear previous warnings or messages

  
    // Base URL for your API
    const apiUrl = 'http://localhost:8080/demandpred/predict';
  
    // Prepare the data for the API calls
    const firstDateData = JSON.stringify({
      shoe_model: selectedOption.value,
      days: daysToFirstDate,
    }
    );
    
    // console.log(days)

    const lastDateData = JSON.stringify({
      shoe_model: selectedOption.value,
      days:daysToLastDate,
    });
    // console.log(days)
  
    // Prepare both API calls
    const apiCalls = [
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: firstDateData,
      }),
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: lastDateData,
      }),
    ];
  
    try {
      // Execute both API calls concurrently
      const responses = await Promise.all(apiCalls);
  
      // Process responses
      const results = await Promise.all(responses.map(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      }));
  
      // Here you can use the results of the API calls
      console.log("here are all response!")
      console.log("Submission successful:", results);
      setIsProcessing(false);
    } catch (error) {
      console.error("Error during submission:", error);
      setWarningMessage(`An error occurred: ${error.message}`);
      setIsProcessing(false);
    }
  };
  


  const handleOkButtonClick = () => {
    setIsDatePickerOpen(false); // Close the date picker
  };

  // const customStyles = {
  //   control: (provided) => ({
  //     ...provided,
  //     backgroundColor: 'transparent',
  //     border: 'none', 
  //   }),
  // };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      
      backgroundColor: 'transparent',
      border: 'none', // Optional: removes the border
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: 'transparent',
      border: '2px solid #ff4076c6',
      color:'white'
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'white', // Set placeholder font color to white
    }),
  };



  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
      <Sidebar />
      <div className="content">
      <div className="type-writer">
        <UsernameTypewriter />
        </div>

        <div className="center-container class1" style={{ zIndex: 100 }}>
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
            styles={customStyles}
          />


          {warningMessage && (
            <div style={{ color: 'red', marginTop: '10px' }}>
              <span className="warning-icon" style={{ marginRight: '5px' }}>⚠️</span>
              {warningMessage}
            </div>

            
          )}


          <button
            className="clear-button"
            onClick={() => {
              setSelectedOption(null);
              setDateRange([null, null]);
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


          <div className='demand-img'>
          {selectedModelImage && (
            <img src={selectedModelImage} alt="Model" />
          )}
          </div>

        </div>
      </div>

      <div style={{ position: 'fixed', top: '45px', left: '70%', zIndex: 100 }}>
        <button className="date-picker-button" onClick={toggleDatePicker}>
          {isDatePickerOpen ? ' Date Picker' : ' Date Picker'}
        </button>
      </div>

      {isProcessing && (
  <div  style={{ color: 'yellow', position:'fixed', marginTop:'400px' ,marginLeft:'750px' , fontSize:'20px'}}>
    Processing
    <span className="dot">.</span>
    <span className="dot">.</span>
    <span className="dot">.</span>
  </div>
)}

      {isDatePickerOpen && (
        <div style={{ position: 'absolute', top: '10%', left: '90%', zIndex: 100, backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '20px', fontSize: '12px' }}>
          <DateRangePicker
            minDate={new Date()} // Set minDate to current date
            ranges={[{ startDate: dateRange[0], endDate: dateRange[1], key: 'selection' }]}
            onChange={handleDateChange}
          />
       <button class="button-3d" onClick={handleOkButtonClick}>OK</button>
         
        </div>
      )}
      
    </div>


  );
};

export default DemandPrediction;



