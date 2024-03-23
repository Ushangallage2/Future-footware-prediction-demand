


// import React, { useState, useEffect } from 'react';
// import Select from 'react-select';
// import { Sidebar } from '../../sidebar/sidebar';
// import UsernameTypewriter from '../../components/UsernameTypewriter';
// import { DateRangePicker } from 'react-date-range';
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import './demandprediction.css';

// const DemandPrediction = () => {
//   const [modelNumbers, setModelNumbers] = useState([]);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [selectedModelImage, setSelectedModelImage] = useState(null);
//   const [dateRange, setDateRange] = useState([null, null]); // State for date range
//   const [warningMessage, setWarningMessage] = useState('');
//   const [isDatePickerOpen, setIsDatePickerOpen] = useState(false); // State to track whether date picker is open or closed
//   const [daysToFirstDate, setDaysToFirstDate] = useState(0);
//   const [daysToLastDate, setDaysToLastDate] = useState(0);
//   const [isProcessing, setIsProcessing] = useState(false);


//   const handleChange = (selectedOption) => {
//     setSelectedOption(selectedOption);
//     setWarningMessage('');
//   };

//   const handleInputChange = (inputValue) => {
//     setLoading(inputValue.length > 0);
//   };

//   const handleDateChange = (ranges) => {
//     const startDate = ranges.selection.startDate;
//     const endDate = ranges.selection.endDate;

//     if (endDate < startDate) {
//       setWarningMessage('End date cannot be earlier than start date.');
//       return;
//     }

//     // Calculate days to first and last date
//     const today = new Date();
//     const firstDate = Math.ceil((startDate - today) / (1000 * 60 * 60 * 24));
//     const lastDate = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));
//     setDaysToFirstDate(firstDate);
//     setDaysToLastDate(lastDate);

//     setDateRange([startDate, endDate]);
//     setWarningMessage('');
//   };

//   const toggleDatePicker = () => {
//     setIsDatePickerOpen(!isDatePickerOpen);
//   };

//   useEffect(() => {
//     const fetchModelNumbers = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/demandpred/allModels');
//         const data = await response.json();
//         setModelNumbers(data.modelNumbers);
//       } catch (error) {
//         console.log('Error fetching model numbers:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchModelNumbers();
//   }, []);

//   useEffect(() => {
//     const fetchModelImage = async () => {
//       if (selectedOption) {
//         try {
//           const response = await fetch(`http://localhost:8080/demandpred/getImage/${selectedOption.value}`);
//           if (!response.ok) {
//             throw new Error(`Failed to fetch model image. Status: ${response.status}`);
//           }

//           const blob = await response.blob();
//           setSelectedModelImage(URL.createObjectURL(blob));
//         } catch (error) {
//           console.log('Error fetching model image:', error);
//         }
//       }
//     };

//     fetchModelImage();
//   }, [selectedOption]);

//   // const handleSubmit = () => {
//   //   if (!selectedOption || !dateRange[0] || !dateRange[1]) {
//   //     setWarningMessage('Please choose a model number and select a date range.');
//   //   } else {
//   //     // Proceed with submitting form data
//   //     console.log("Submission successful.");
//   //     setWarningMessage(''); // Clear warning message if submission is successful
//   //   }
//   // };

//   const handleSubmit = async () => {
//     if (!selectedOption || !dateRange[0] || !dateRange[1]) {
//       setWarningMessage('Please choose a model number and select a date range.');
//       return;
//     }

//     setIsProcessing(true); // Start processing
//     setWarningMessage(''); // Clear previous warnings or messages

  
//     // Base URL for your API
//     const apiUrl = 'http://localhost:8080/demandpred/predict';
  
//     // Prepare the data for the API calls
//     const firstDateData = JSON.stringify({
//       shoe_model: selectedOption.value,
//       days: daysToFirstDate,
//     }
//     );
    
//     // console.log(days)

//     const lastDateData = JSON.stringify({
//       shoe_model: selectedOption.value,
//       days:daysToLastDate,
//     });
//     // console.log(days)
  
//     // Prepare both API calls
//     const apiCalls = [
//       fetch(apiUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: firstDateData,
//       }),
//       fetch(apiUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: lastDateData,
//       }),
//     ];
  
//     try {
//       // Execute both API calls concurrently
//       const responses = await Promise.all(apiCalls);
  
//       // Process responses
//       const results = await Promise.all(responses.map(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       }));
  
//       // Here you can use the results of the API calls
//       console.log("here are all response!")
//       console.log("Submission successful:", results);
//       setIsProcessing(false);
//     } catch (error) {
//       console.error("Error during submission:", error);
//       setWarningMessage(`An error occurred: ${error.message}`);
//       setIsProcessing(false);
//     }
//   };
  


//   const handleOkButtonClick = () => {
//     setIsDatePickerOpen(false); // Close the date picker
//   };

//   // const customStyles = {
//   //   control: (provided) => ({
//   //     ...provided,
//   //     backgroundColor: 'transparent',
//   //     border: 'none', 
//   //   }),
//   // };

//   const customStyles = {
//     control: (provided) => ({
//       ...provided,
      
//       backgroundColor: 'transparent',
//       border: 'none', // Optional: removes the border
//     }),
//     menu: (provided) => ({
//       ...provided,
//       backgroundColor: 'transparent',
//       border: '2px solid #ff4076c6',
//       color:'white'
//     }),
//     placeholder: (provided) => ({
//       ...provided,
//       color: 'white', // Set placeholder font color to white
//     }),
//   };



//   return (
//     <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
//       <Sidebar />
//       <div className="content">
//       <div className="type-writer">
//         <UsernameTypewriter />
//         </div>

//         <div className="center-container class1" style={{ zIndex: 100 }}>
//           <Select
//             options={modelNumbers.map((modelNumber) => ({
//               value: modelNumber,
//               label: modelNumber,
//             }))}
//             value={selectedOption}
//             onChange={handleChange}
//             onInputChange={handleInputChange}
//             isLoading={loading}
//             placeholder="Select a model number"
//             styles={customStyles}
//           />


//           {warningMessage && (
//             <div style={{ color: 'red', marginTop: '10px' }}>
//               <span className="warning-icon" style={{ marginRight: '5px' }}>⚠️</span>
//               {warningMessage}
//             </div>

            
//           )}


//           <button
//             className="clear-button"
//             onClick={() => {
//               setSelectedOption(null);
//               setDateRange([null, null]);
//               setWarningMessage('');
//             }}
//           >
//             Clear Selection
//           </button>
//           <button
//             className="submit-button"
//             onClick={handleSubmit}
//           >
//             Submit
//           </button>


//           <div className='demand-img'>
//           {selectedModelImage && (
//             <img src={selectedModelImage} alt="Model" />
//           )}
//           </div>

//         </div>
//       </div>

//       <div style={{ position: 'fixed', top: '45px', left: '70%', zIndex: 100 }}>
//         <button className="date-picker-button" onClick={toggleDatePicker}>
//           {isDatePickerOpen ? ' Date Picker' : ' Date Picker'}
//         </button>
//       </div>

//       {isProcessing && (
//   <div  style={{ color: 'yellow', position:'fixed', marginTop:'400px' ,marginLeft:'750px' , fontSize:'20px'}}>
//     Processing
//     <span className="dot">.</span>
//     <span className="dot">.</span>
//     <span className="dot">.</span>
//   </div>
// )}

//       {isDatePickerOpen && (
//         <div style={{ position: 'absolute', top: '10%', left: '90%', zIndex: 100, backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '20px', fontSize: '12px' }}>
//           <DateRangePicker
//             minDate={new Date()} // Set minDate to current date
//             ranges={[{ startDate: dateRange[0], endDate: dateRange[1], key: 'selection' }]}
//             onChange={handleDateChange}
//           />
//        <button class="button-3d" onClick={handleOkButtonClick}>OK</button>
         
//         </div>
//       )}
      
//     </div>


//   );
// };

// export default DemandPrediction;




// // import React, { useState, useEffect } from 'react';
// // import Select from 'react-select';
// // import { Sidebar } from '../../sidebar/sidebar';
// // import UsernameTypewriter from '../../components/UsernameTypewriter';
// // import { DateRangePicker } from 'react-date-range';
// // import 'react-date-range/dist/styles.css'; // main style file
// // import 'react-date-range/dist/theme/default.css'; // theme css file
// // import './demandprediction.css';

// // const DemandPrediction = () => {
// //   const [modelNumbers, setModelNumbers] = useState([]);
// //   const [selectedOption, setSelectedOption] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [selectedModelImage, setSelectedModelImage] = useState(null);
// //   const [dateRange, setDateRange] = useState([null, null]); // State for date range
// //   const [warningMessage, setWarningMessage] = useState('');
// //   const [isDatePickerOpen, setIsDatePickerOpen] = useState(false); // State to track whether date picker is open or closed
// //   const [daysToFirstDate, setDaysToFirstDate] = useState(0);
// //   const [daysToLastDate, setDaysToLastDate] = useState(0);
// //   const [isProcessing, setIsProcessing] = useState(false);


// //   const handleChange = (selectedOption) => {
// //     setSelectedOption(selectedOption);
// //     setWarningMessage('');
// //   };

// //   const handleInputChange = (inputValue) => {
// //     setLoading(inputValue.length > 0);
// //   };

// //   const handleDateChange = (ranges) => {
// //     const startDate = ranges.selection.startDate;
// //     const endDate = ranges.selection.endDate;

// //     if (endDate < startDate) {
// //       setWarningMessage('End date cannot be earlier than start date.');
// //       return;
// //     }

// //     // Calculate days to first and last date
// //     const today = new Date();
// //     const firstDate = Math.ceil((startDate - today) / (1000 * 60 * 60 * 24));
// //     const lastDate = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));
// //     setDaysToFirstDate(firstDate);
// //     setDaysToLastDate(lastDate);

// //     setDateRange([startDate, endDate]);
// //     setWarningMessage('');
// //   };

// //   const toggleDatePicker = () => {
// //     setIsDatePickerOpen(!isDatePickerOpen);
// //   };

// //   useEffect(() => {
// //     const fetchModelNumbers = async () => {
// //       try {
// //         const response = await fetch('http://localhost:8080/demandpred/allModels');
// //         const data = await response.json();
// //         setModelNumbers(data.modelNumbers);
// //       } catch (error) {
// //         console.log('Error fetching model numbers:', error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchModelNumbers();
// //   }, []);

// //   useEffect(() => {
// //     const fetchModelImage = async () => {
// //       if (selectedOption) {
// //         try {
// //           const response = await fetch(`http://localhost:8080/demandpred/getImage/${selectedOption.value}`);
// //           if (!response.ok) {
// //             throw new Error(`Failed to fetch model image. Status: ${response.status}`);
// //           }

// //           const blob = await response.blob();
// //           setSelectedModelImage(URL.createObjectURL(blob));
// //         } catch (error) {
// //           console.log('Error fetching model image:', error);
// //         }
// //       }
// //     };

// //     fetchModelImage();
// //   }, [selectedOption]);

// //   // const handleSubmit = () => {
// //   //   if (!selectedOption || !dateRange[0] || !dateRange[1]) {
// //   //     setWarningMessage('Please choose a model number and select a date range.');
// //   //   } else {
// //   //     // Proceed with submitting form data
// //   //     console.log("Submission successful.");
// //   //     setWarningMessage(''); // Clear warning message if submission is successful
// //   //   }
// //   // };

// //   const handleSubmit = async () => {
// //     if (!selectedOption || !dateRange[0] || !dateRange[1]) {
// //       setWarningMessage('Please choose a model number and select a date range.');
// //       return;
// //     }

// //     setIsProcessing(true); // Start processing
// //     setWarningMessage(''); // Clear previous warnings or messages

  
// //     // Base URL for your API
// //     const apiUrl = 'http://localhost:8080/demandpred/predict';
  
// //     // Prepare the data for the API calls
// //     const firstDateData = JSON.stringify({
// //       shoe_model: selectedOption.value,
// //       days: daysToFirstDate,
// //     }
// //     );
    
// //     // console.log(days)

// //     const lastDateData = JSON.stringify({
// //       shoe_model: selectedOption.value,
// //       days:daysToLastDate,
// //     });
// //     // console.log(days)
  
// //     // Prepare both API calls
// //     const apiCalls = [
// //       fetch(apiUrl, {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: firstDateData,
// //       }),
// //       fetch(apiUrl, {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: lastDateData,
// //       }),
// //     ];
  
// //     try {
// //       // Execute both API calls concurrently
// //       const responses = await Promise.all(apiCalls);
  
// //       // Process responses
// //       const results = await Promise.all(responses.map(response => {
// //         if (!response.ok) {
// //           throw new Error(`HTTP error! status: ${response.status}`);
// //         }
// //         return response.json();
// //       }));
  
// //       // Here you can use the results of the API calls
// //       console.log("here are all response!")
// //       console.log("Submission successful:", results);
// //       setIsProcessing(false);
// //     } catch (error) {
// //       console.error("Error during submission:", error);
// //       setWarningMessage(`An error occurred: ${error.message}`);
// //       setIsProcessing(false);
// //     }
// //   };
  


// //   const handleOkButtonClick = () => {
// //     setIsDatePickerOpen(false); // Close the date picker
// //   };

// //   // const customStyles = {
// //   //   control: (provided) => ({
// //   //     ...provided,
// //   //     backgroundColor: 'transparent',
// //   //     border: 'none', 
// //   //   }),
// //   // };

// //   const customStyles = {
// //     control: (provided) => ({
// //       ...provided,
      
// //       backgroundColor: 'transparent',
// //       border: 'none', // Optional: removes the border
// //     }),
// //     menu: (provided) => ({
// //       ...provided,
// //       backgroundColor: 'transparent',
// //       border: '2px solid #ff4076c6',
// //       color:'white'
// //     }),
// //     placeholder: (provided) => ({
// //       ...provided,
// //       color: 'white', // Set placeholder font color to white
// //     }),
// //   };



// //   return (
// //     <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
// //       <Sidebar />
// //       <div className="content">
// //       <div className="type-writer">
// //         <UsernameTypewriter />
// //         </div>

// //         <div className="center-container class1" style={{ zIndex: 100 }}>
// //           <Select
// //             options={modelNumbers.map((modelNumber) => ({
// //               value: modelNumber,
// //               label: modelNumber,
// //             }))}
// //             value={selectedOption}
// //             onChange={handleChange}
// //             onInputChange={handleInputChange}
// //             isLoading={loading}
// //             placeholder="Select a model number"
// //             styles={customStyles}
// //           />


// //           {warningMessage && (
// //             <div style={{ color: 'red', marginTop: '10px' }}>
// //               <span className="warning-icon" style={{ marginRight: '5px' }}>⚠️</span>
// //               {warningMessage}
// //             </div>

            
// //           )}


// //           <button
// //             className="clear-button"
// //             onClick={() => {
// //               setSelectedOption(null);
// //               setDateRange([null, null]);
// //               setWarningMessage('');
// //             }}
// //           >
// //             Clear Selection
// //           </button>
// //           <button
// //             className="submit-button"
// //             onClick={handleSubmit}
// //           >
// //             Submit
// //           </button>


// //           <div className='demand-img'>
// //           {selectedModelImage && (
// //             <img src={selectedModelImage} alt="Model" />
// //           )}
// //           </div>

// //         </div>
// //       </div>

// //       <div style={{ position: 'fixed', top: '45px', left: '70%', zIndex: 100 }}>
// //         <button className="date-picker-button" onClick={toggleDatePicker}>
// //           {isDatePickerOpen ? ' Date Picker' : ' Date Picker'}
// //         </button>
// //       </div>

// //       {isProcessing && (
// //   <div  style={{ color: 'yellow', position:'fixed', marginTop:'400px' ,marginLeft:'750px' , fontSize:'20px'}}>
// //     Processing
// //     <span className="dot">.</span>
// //     <span className="dot">.</span>
// //     <span className="dot">.</span>
// //   </div>
// // )}

// //       {isDatePickerOpen && (
// //         <div style={{ position: 'absolute', top: '10%', left: '90%', zIndex: 100, backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '20px', fontSize: '12px' }}>
// //           <DateRangePicker
// //             minDate={new Date()} // Set minDate to current date
// //             ranges={[{ startDate: dateRange[0], endDate: dateRange[1], key: 'selection' }]}
// //             onChange={handleDateChange}
// //           />
// //        <button class="button-3d" onClick={handleOkButtonClick}>OK</button>
         
// //         </div>
// //       )}
      
// //     </div>


// //   );
// // };

// // export default DemandPrediction;




// import React, { useState, useEffect } from 'react';
// import Select from 'react-select';
// import { Sidebar } from '../../sidebar/sidebar';
// import UsernameTypewriter from '../../components/UsernameTypewriter';
// import { DateRangePicker } from 'react-date-range';
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import './demandprediction.css';

// const DemandPrediction = () => {
//   const [modelNumbers, setModelNumbers] = useState([]);
//   // const [selectedOption, setSelectedOption] = useState(null);
//   // const [selectedOption, setSelectedOption] = useState(null);
//   const [loading, setLoading] = useState(false);
//   // const [selectedModelImage, setSelectedModelImage] = useState(null);
//   // const [dateRange, setDateRange] = useState([null, null]); // State for date range
//   // const [selectedModelImage, setSelectedModelImage] = useState(null);
//   // const [dateRange, setDateRange] = useState([null, null]); // State for date range
//   const [warningMessage, setWarningMessage] = useState('');
//   const [isDatePickerOpen, setIsDatePickerOpen] = useState(false); // State to track whether date picker is open or closed
//   const [daysToFirstDate, setDaysToFirstDate] = useState(0);
//   const [daysToLastDate, setDaysToLastDate] = useState(0);
//   const [isProcessing, setIsProcessing] = useState(false);
//   // const [predictedDemand, setPredictedDemand] = useState(0);
//   // const [modelDetails, setModelDetails] = useState(null);
//   const [tempDateRange, setTempDateRange] = useState([null, null]);


//   // Load initial state from local storage if available
//   const [selectedOption, setSelectedOption] = useState(() => {
//     const saved = localStorage.getItem('selectedOption');
//     return saved ? JSON.parse(saved) : null;
//   });

//   // const [dateRange, setDateRange] = useState(() => {
//   //   const saved = localStorage.getItem('dateRange');
//   //   return saved ? JSON.parse(saved) : [null, null];
//   // });

//   const [dateRange, setDateRange] = useState(() => {
//     const saved = localStorage.getItem('dateRange');
//     const parsed = saved ? JSON.parse(saved) : [null, null];
//     // Convert string dates back to Date objects
//     return parsed.map(date => date ? new Date(date) : null);
// });


//   const [selectedModelImage, setSelectedModelImage] = useState(() => {
//     return localStorage.getItem('selectedModelImage') || null;
//   });


//   const [modelDetails, setModelDetails] = useState(() => {
//     const saved = localStorage.getItem('modelDetails');
//     return saved ? JSON.parse(saved) : null;
//   });

//   const [predictedDemand, setPredictedDemand] = useState(() => {
//     const saved = localStorage.getItem('predictedDemand');
//     return saved ? JSON.parse(saved) : 0;
//   });
//   // const [predictedDemand, setPredictedDemand] = useState(0);
//   // const [modelDetails, setModelDetails] = useState(null);
//   const [tempDateRange, setTempDateRange] = useState([null, null]);


//   // Load initial state from local storage if available
//   const [selectedOption, setSelectedOption] = useState(() => {
//     const saved = localStorage.getItem('selectedOption');
//     return saved ? JSON.parse(saved) : null;
//   });

//   // const [dateRange, setDateRange] = useState(() => {
//   //   const saved = localStorage.getItem('dateRange');
//   //   return saved ? JSON.parse(saved) : [null, null];
//   // });

//   const [dateRange, setDateRange] = useState(() => {
//     const saved = localStorage.getItem('dateRange');
//     const parsed = saved ? JSON.parse(saved) : [null, null];
//     // Convert string dates back to Date objects
//     return parsed.map(date => date ? new Date(date) : null);
// });


//   const [selectedModelImage, setSelectedModelImage] = useState(() => {
//     return localStorage.getItem('selectedModelImage') || null;
//   });


//   const [modelDetails, setModelDetails] = useState(() => {
//     const saved = localStorage.getItem('modelDetails');
//     return saved ? JSON.parse(saved) : null;
//   });

//   const [predictedDemand, setPredictedDemand] = useState(() => {
//     const saved = localStorage.getItem('predictedDemand');
//     return saved ? JSON.parse(saved) : 0;
//   });


//   const handleChange = (selectedOption) => {
//     setSelectedOption(selectedOption);
//     setWarningMessage('');
//   };

//   const handleInputChange = (inputValue) => {
//     setLoading(inputValue.length > 0);
//   };

//   const today = new Date();
//   const tomorrow = new Date(today);
//   tomorrow.setDate(tomorrow.getDate() + 1);



//   const today = new Date();
//   const tomorrow = new Date(today);
//   tomorrow.setDate(tomorrow.getDate() + 1);



//   const handleDateChange = (ranges) => {
//     const { startDate, endDate } = ranges.selection;

//     // Check if both start date and end date are selected and they are not the same
//     if (!startDate || !endDate || startDate.getTime() === endDate.getTime()) {
//         setWarningMessage('Please select a date range (start and end date).');
//         return;
//     }
//     const { startDate, endDate } = ranges.selection;

//     // Check if both start date and end date are selected and they are not the same
//     if (!startDate || !endDate || startDate.getTime() === endDate.getTime()) {
//         setWarningMessage('Please select a date range (start and end date).');
//         return;
//     }

//     if (endDate < startDate) {
//         setWarningMessage('End date cannot be earlier than start date.');
//         return;
//         setWarningMessage('End date cannot be earlier than start date.');
//         return;
//     }

//     const firstDate = Math.ceil((startDate - today) / (1000 * 60 * 60 * 24));
//     const lastDate = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));
//     setDaysToFirstDate(firstDate);
//     setDaysToLastDate(lastDate);

//     setDateRange([startDate, endDate]);
//     setWarningMessage('');
// };

// // const handleDateChange = (ranges) => {
// //   setTempDateRange([ranges.selection.startDate, ranges.selection.endDate]);
// //   setWarningMessage('');
// // };
// // const handleOkButtonClick = () => {
// //   const [startDate, endDate] = tempDateRange;

// //   if (!startDate || !endDate) {
// //     setWarningMessage('Please select both start and end dates.');
// //     setIsDatePickerOpen(false); // Keep the date picker open for correction
// //     return;
// //   }

// //   if (startDate.getTime() === endDate.getTime()) {
// //     setWarningMessage('Please select a date range, not just a single date.');
// //     setIsDatePickerOpen(false); // Keep the date picker open for correction
// //     return;
// //   }

// //   if (endDate < startDate) {
// //     setWarningMessage('End date cannot be earlier than start date.');
// //     setIsDatePickerOpen(false); // Keep the date picker open for correction
// //     return;
// //   }

// //   setDateRange([startDate, endDate]);
// //   setIsDatePickerOpen(false); // Close the date picker after validation
// // };



//   // const handleDateChange = (ranges) => {
//   //   const startDate = ranges.selection.startDate;
//   //   const endDate = ranges.selection.endDate;

//   //   if (endDate < startDate) {
//   //     setWarningMessage('End date cannot be earlier than start date.');
//   //     return;
//   //   }

//   //   // Calculate days to first and last date
//   //   // const today = new Date();
   
//   //   const firstDate = Math.ceil((startDate - today) / (1000 * 60 * 60 * 24));
//   //   const lastDate = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));
//   //   setDaysToFirstDate(firstDate);
//   //   setDaysToLastDate(lastDate);

//   //   setDateRange([startDate, endDate]);
//   //   setWarningMessage('');
//   // };

// //   const handleDateChange = (ranges) => {
// //     const startDate = ranges.selection.startDate;
// //     const endDate = ranges.selection.endDate;

// //     if (endDate < startDate) {
// //       setWarningMessage('End date cannot be earlier than start date.');
// //       return;
// //     }

// //     setDateRange([startDate, endDate]);
// //     setWarningMessage('');
// // };


// };

// // const handleDateChange = (ranges) => {
// //   setTempDateRange([ranges.selection.startDate, ranges.selection.endDate]);
// //   setWarningMessage('');
// // };
// // const handleOkButtonClick = () => {
// //   const [startDate, endDate] = tempDateRange;

// //   if (!startDate || !endDate) {
// //     setWarningMessage('Please select both start and end dates.');
// //     setIsDatePickerOpen(false); // Keep the date picker open for correction
// //     return;
// //   }

// //   if (startDate.getTime() === endDate.getTime()) {
// //     setWarningMessage('Please select a date range, not just a single date.');
// //     setIsDatePickerOpen(false); // Keep the date picker open for correction
// //     return;
// //   }

// //   if (endDate < startDate) {
// //     setWarningMessage('End date cannot be earlier than start date.');
// //     setIsDatePickerOpen(false); // Keep the date picker open for correction
// //     return;
// //   }

// //   setDateRange([startDate, endDate]);
// //   setIsDatePickerOpen(false); // Close the date picker after validation
// // };



//   // const handleDateChange = (ranges) => {
//   //   const startDate = ranges.selection.startDate;
//   //   const endDate = ranges.selection.endDate;

//   //   if (endDate < startDate) {
//   //     setWarningMessage('End date cannot be earlier than start date.');
//   //     return;
//   //   }

//   //   // Calculate days to first and last date
//   //   // const today = new Date();
   
//   //   const firstDate = Math.ceil((startDate - today) / (1000 * 60 * 60 * 24));
//   //   const lastDate = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));
//   //   setDaysToFirstDate(firstDate);
//   //   setDaysToLastDate(lastDate);

//   //   setDateRange([startDate, endDate]);
//   //   setWarningMessage('');
//   // };

// //   const handleDateChange = (ranges) => {
// //     const startDate = ranges.selection.startDate;
// //     const endDate = ranges.selection.endDate;

// //     if (endDate < startDate) {
// //       setWarningMessage('End date cannot be earlier than start date.');
// //       return;
// //     }

// //     setDateRange([startDate, endDate]);
// //     setWarningMessage('');
// // };



//   const toggleDatePicker = () => {
//     setIsDatePickerOpen(!isDatePickerOpen);
//   };

//   useEffect(() => {
//     const fetchModelNumbers = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/demandpred/allModels');
//         const data = await response.json();
//         setModelNumbers(data.modelNumbers);
//       } catch (error) {
//         console.log('Error fetching model numbers:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchModelNumbers();
//   }, []);

//   useEffect(() => {
//     const fetchModelImage = async () => {
//       if (selectedOption) {
//         try {
//           const response = await fetch(`http://localhost:8080/demandpred/getImage/${selectedOption.value}`);
//           if (!response.ok) {
//             throw new Error(`Failed to fetch model image. Status: ${response.status}`);
//           }
//           console.log(response)
//           console.log(response)
//           const blob = await response.blob();
//           setSelectedModelImage(URL.createObjectURL(blob));
//         } catch (error) {
//           console.log('Error fetching model image:', error);
//         }
//       }
//     };

//     fetchModelImage();
//   }, [selectedOption]);


//   useEffect(() => {
//     // Load model numbers, images, etc.
//   }, []);

//   useEffect(() => {
//     // Save to local storage when state changes
//     localStorage.setItem('selectedOption', JSON.stringify(selectedOption));
//     localStorage.setItem('dateRange', JSON.stringify(dateRange));
//     localStorage.setItem('modelDetails', JSON.stringify(modelDetails));
//     localStorage.setItem('predictedDemand', JSON.stringify(predictedDemand));
//   }, [selectedOption, dateRange,  modelDetails, predictedDemand]);

//   useEffect(() => {
//     // Save the image URL to local storage whenever it changes
//     if (selectedModelImage) {
//       localStorage.setItem('selectedModelImage', selectedModelImage);
//     }
//   }, [selectedModelImage]);



//   const handleClearSelection = () => {
//     setSelectedOption(null);
//     setDateRange([null, null]);
//     setSelectedModelImage(null);
//     setModelDetails(null);
//     setPredictedDemand(0);
//     setWarningMessage('');

//     localStorage.removeItem('selectedOption');
//     localStorage.removeItem('dateRange');
//     localStorage.removeItem('selectedModelImage');
//     localStorage.removeItem('modelDetails');
//     localStorage.removeItem('predictedDemand');
//   };




//   useEffect(() => {
//     // Load model numbers, images, etc.
//   }, []);

//   useEffect(() => {
//     // Save to local storage when state changes
//     localStorage.setItem('selectedOption', JSON.stringify(selectedOption));
//     localStorage.setItem('dateRange', JSON.stringify(dateRange));
//     localStorage.setItem('modelDetails', JSON.stringify(modelDetails));
//     localStorage.setItem('predictedDemand', JSON.stringify(predictedDemand));
//   }, [selectedOption, dateRange,  modelDetails, predictedDemand]);

//   useEffect(() => {
//     // Save the image URL to local storage whenever it changes
//     if (selectedModelImage) {
//       localStorage.setItem('selectedModelImage', selectedModelImage);
//     }
//   }, [selectedModelImage]);



//   const handleClearSelection = () => {
//     setSelectedOption(null);
//     setDateRange([null, null]);
//     setSelectedModelImage(null);
//     setModelDetails(null);
//     setPredictedDemand(0);
//     setWarningMessage('');

//     localStorage.removeItem('selectedOption');
//     localStorage.removeItem('dateRange');
//     localStorage.removeItem('selectedModelImage');
//     localStorage.removeItem('modelDetails');
//     localStorage.removeItem('predictedDemand');
//   };



//   // const handleSubmit = () => {
//   //   if (!selectedOption || !dateRange[0] || !dateRange[1]) {
//   //     setWarningMessage('Please choose a model number and select a date range.');
//   //   } else {
//   //     // Proceed with submitting form data
//   //     console.log("Submission successful.");
//   //     setWarningMessage(''); // Clear warning message if submission is successful
//   //   }
//   // };

//   // const handleSubmit = async () => {
//   //   if (!selectedOption || !dateRange[0] || !dateRange[1]) {
//   //     setWarningMessage('Please choose a model number and select a date range.');
//   //     return;
//   //   }

//   //   setIsProcessing(true); // Start processing
//   //   setWarningMessage(''); // Clear previous warnings or messages


//   //   // Base URL for your API
//   //   const apiUrl = 'http://localhost:8080/demandpred/predict';
//   //   const detailsUrl = `http://localhost:8080/demandpred/modelDetails/${selectedOption.value}`;
//   //   // Prepare the data for the API calls
//   //   const firstDateData = JSON.stringify({
//   //     shoe_model: selectedOption.value,
//   //     days: daysToFirstDate,
//   //   }
//   //   );

//   //   // console.log(days)

//   //   const lastDateData = JSON.stringify({
//   //     shoe_model: selectedOption.value,
//   //     days:daysToLastDate,
//   //   });
//   //   // console.log(days)

//   //   // Prepare both API calls
//   //   const apiCalls = [
//   //     fetch(apiUrl, {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: firstDateData,
//   //     }),
//   //     fetch(apiUrl, {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: lastDateData,
//   //     }),
//   //     fetch(detailsUrl, {
//   //       method: 'GET',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },

//   //     }),
//   //   ];

//   //   try {
//   //     // Execute both API calls concurrently
//   //     const responses = await Promise.all(apiCalls);

//   //     // Process responses
//   //     const results = await Promise.all(responses.map(response => {
//   //       if (!response.ok) {
//   //         throw new Error(`HTTP error! status: ${response.status}`);
//   //       }
//   //       return response.json();
//   //     }));

//   //     // Here you can use the results of the API calls
//   //     console.log("here are all response!")
//   //     console.log("Submission successful:", results);

//   //     const sum1 = results[0].sum;
//   //     const sum2 = results[1].sum;

//   //     // Calculate the absolute difference between the sum values
//   //     const sumDifference = Math.abs(sum1 - sum2);

//   //     // Now you can use sumDifference for display or further processing
//   //     console.log("Difference of sums:", sumDifference);
//   //     setPredictedDemand(sumDifference);



//   //     setIsProcessing(false);
//   //   } catch (error) {
//   //     console.error("Error during submission:", error);
//   //     setWarningMessage(`An error occurred: ${error.message}`);
//   //     setIsProcessing(false);
//   //   }
//   // };

//   // const handleSubmit = async () => {
//   //   if (!selectedOption || !dateRange[0] || !dateRange[1]) {
//   //     setWarningMessage('Please choose a model number and select a date range.');
//   //     return;
//   //   }

//   //   setIsProcessing(true); // Start processing
//   //   setWarningMessage(''); // Clear previous warnings or messages


//   //   // Base URL for your API
//   //   const apiUrl = 'http://localhost:8080/demandpred/predict';
//   //   const detailsUrl = `http://localhost:8080/demandpred/modelDetails/${selectedOption.value}`;
//   //   // Prepare the data for the API calls
//   //   const firstDateData = JSON.stringify({
//   //     shoe_model: selectedOption.value,
//   //     days: daysToFirstDate,
//   //   }
//   //   );

//   //   // console.log(days)

//   //   const lastDateData = JSON.stringify({
//   //     shoe_model: selectedOption.value,
//   //     days:daysToLastDate,
//   //   });
//   //   // console.log(days)

//   //   // Prepare both API calls
//   //   const apiCalls = [
//   //     fetch(apiUrl, {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: firstDateData,
//   //     }),
//   //     fetch(apiUrl, {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: lastDateData,
//   //     }),
//   //     fetch(detailsUrl, {
//   //       method: 'GET',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },

//   //     }),
//   //   ];

//   //   try {
//   //     // Execute both API calls concurrently
//   //     const responses = await Promise.all(apiCalls);

//   //     // Process responses
//   //     const results = await Promise.all(responses.map(response => {
//   //       if (!response.ok) {
//   //         throw new Error(`HTTP error! status: ${response.status}`);
//   //       }
//   //       return response.json();
//   //     }));

//   //     // Here you can use the results of the API calls
//   //     console.log("here are all response!")
//   //     console.log("Submission successful:", results);

//   //     const sum1 = results[0].sum;
//   //     const sum2 = results[1].sum;

//   //     // Calculate the absolute difference between the sum values
//   //     const sumDifference = Math.abs(sum1 - sum2);

//   //     // Now you can use sumDifference for display or further processing
//   //     console.log("Difference of sums:", sumDifference);
//   //     setPredictedDemand(sumDifference);



//   //     setIsProcessing(false);
//   //   } catch (error) {
//   //     console.error("Error during submission:", error);
//   //     setWarningMessage(`An error occurred: ${error.message}`);
//   //     setIsProcessing(false);
//   //   }
//   // };

//   const handleSubmit = async () => {
//     if (!selectedOption || !dateRange[0] || !dateRange[1]) {
//       setWarningMessage('Please choose a model number and select a date range.');
//       return;
//     }

//     setIsProcessing(true);
//     setWarningMessage('');

//     setIsProcessing(true);
//     setWarningMessage('');

//     const apiUrl = 'http://localhost:8080/demandpred/predict';
//     const detailsUrl = `http://localhost:8080/demandpred/getDetails/${selectedOption.value}`;
//     const reportUrl = 'http://localhost:8080/report/save'; 

 

//     const firstDateData = JSON.stringify({
//       shoe_model: selectedOption.value,
//       days: daysToFirstDate,
//     });
    

//     const lastDateData = JSON.stringify({
//       shoe_model: selectedOption.value,
//       days: daysToLastDate,
//       days: daysToLastDate,
//     });


//     const apiCalls = [
//       fetch(apiUrl, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         headers: { 'Content-Type': 'application/json' },
//         body: firstDateData,
//       }),
//       fetch(apiUrl, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         headers: { 'Content-Type': 'application/json' },
//         body: lastDateData,
//       }),
//       fetch(detailsUrl)  // Assuming GET request for model details
    
//     ];


//     try {
//       const [firstResponse, lastResponse, detailsResponse] = await Promise.all(apiCalls);

//       const [firstData, lastData] = await Promise.all([
//         firstResponse.json(),
//         lastResponse.json()
//       ]);

//       if (!firstResponse.ok || !lastResponse.ok) {
//         throw new Error('Error fetching prediction data');
//       }

//       const sumDifference = Math.abs(firstData.sum - lastData.sum);
//       setPredictedDemand(sumDifference);
//       console.log(lastData.filteredSales)
//       console.log(firstData.sum)
//       console.log(lastData.sum)
//       console.log(sumDifference)

//       if (!detailsResponse.ok) {
//         throw new Error('Error fetching model details');
//       }

//       const detailsData = await detailsResponse.json();
//       setModelDetails(detailsData);
//       console.log(detailsData)

//       let dateArray = [];
//       let currentDate = new Date(tomorrow);
//       while (currentDate <= dateRange[1]) {
//           dateArray.push(new Date(currentDate));
//           currentDate.setDate(currentDate.getDate() + 1);
//       }

//       // Combine the sales counts with their respective dates
//       const salesDataWithDates = lastData.filteredSales.map((salesCount, index) => ({
//           date: dateArray[index],
//           salesCount
//       }));


//       const reportData = {
//         modelNumber: selectedOption.value,
//         size: detailsData.size,
//         salesData:salesDataWithDates,
//         category: detailsData.category,
//         predictedSalesDemand: sumDifference
        
//     };
   
// console.log(reportData)

//     await fetch(reportUrl, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(reportData)
//   });


//       const [firstResponse, lastResponse, detailsResponse] = await Promise.all(apiCalls);

//       const [firstData, lastData] = await Promise.all([
//         firstResponse.json(),
//         lastResponse.json()
//       ]);

//       if (!firstResponse.ok || !lastResponse.ok) {
//         throw new Error('Error fetching prediction data');
//       }

//       const sumDifference = Math.abs(firstData.sum - lastData.sum);
//       setPredictedDemand(sumDifference);
//       console.log(lastData.filteredSales)
//       console.log(firstData.sum)
//       console.log(lastData.sum)
//       console.log(sumDifference)

//       if (!detailsResponse.ok) {
//         throw new Error('Error fetching model details');
//       }

//       const detailsData = await detailsResponse.json();
//       setModelDetails(detailsData);
//       console.log(detailsData)

//       let dateArray = [];
//       let currentDate = new Date(tomorrow);
//       while (currentDate <= dateRange[1]) {
//           dateArray.push(new Date(currentDate));
//           currentDate.setDate(currentDate.getDate() + 1);
//       }

//       // Combine the sales counts with their respective dates
//       const salesDataWithDates = lastData.filteredSales.map((salesCount, index) => ({
//           date: dateArray[index],
//           salesCount
//       }));


//       const reportData = {
//         modelNumber: selectedOption.value,
//         size: detailsData.size,
//         salesData:salesDataWithDates,
//         category: detailsData.category,
//         predictedSalesDemand: sumDifference
        
//     };
   
// console.log(reportData)

//     await fetch(reportUrl, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(reportData)
//   });


//       setIsProcessing(false);
//     } catch (error) {
//       console.error("Error during submission:", error);
//       setWarningMessage(`An error occurred: ${error.message}`);
//       setIsProcessing(false);
//     }
//   };




//   const handleOkButtonClick = () => {
//     setIsDatePickerOpen(false); // Close the date picker
//   };
  

//   // const handleClearSelection = () => {
//   //   // Reset state variables to their initial values
//   //   setSelectedOption(null);
//   //   setDateRange([null, null]);
//   //   setSelectedModelImage(null);
//   //   setWarningMessage('');

//   //   // Clear the saved data from local storage
//   //   localStorage.removeItem('selectedOption');
//   //   localStorage.removeItem('dateRange');
//   //   localStorage.removeItem('selectedModelImage');
//   // };




  

//   // const handleClearSelection = () => {
//   //   // Reset state variables to their initial values
//   //   setSelectedOption(null);
//   //   setDateRange([null, null]);
//   //   setSelectedModelImage(null);
//   //   setWarningMessage('');

//   //   // Clear the saved data from local storage
//   //   localStorage.removeItem('selectedOption');
//   //   localStorage.removeItem('dateRange');
//   //   localStorage.removeItem('selectedModelImage');
//   // };





//   // const customStyles = {
//   //   control: (provided) => ({
//   //     ...provided,
//   //     backgroundColor: 'transparent',
//   //     border: 'none', 
//   //   }),
//   // };

//   const customStyles = {
//     control: (provided) => ({
//       ...provided,


//       backgroundColor: 'transparent',
//       border: 'none', // Optional: removes the border
//     }),
//     menu: (provided) => ({
//       ...provided,
//       backgroundColor: 'transparent',
//       border: '2px solid #ff4076c6',
//       color: 'white'
//       color: 'white'
//     }),
//     placeholder: (provided) => ({
//       ...provided,
//       color: 'white', // Set placeholder font color to white
//     }),

//     width: (provided) => ({
//       ...provided,

//     width: (provided) => ({
//       ...provided,

//       width:'0%'
//   }),
// }
//       width:'0%'
//   }),
// }

//   const backgroundimg = new URL("./footwearbg.jpg", import.meta.url);
//   const backgroundimg2 = new URL("./bgimg.jpg", import.meta.url);

//   return (
//     <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
//       <img 
//         src={backgroundimg}
//         alt="Background" 
//         style={{ 
//           position: 'fixed', 
//           width: '19.5%', 
//           height: '100vh', 
//           objectFit: 'cover', 
//           zIndex: -1
//         }} 
//       />

//       <div 
//         style={{ 
//           position: 'fixed',
//           width: '90%', 
//           height: '100vh', 
//           marginLeft: '19.5%',
//           zIndex: -1,
//           backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 100%, transparent 100%), url(${backgroundimg2})`,
//           backgroundSize: 'cover',
//           opacity: '0.5'
//         }} 
//       ></div>
//       <Sidebar />
//       <div className="content">
//         <div className="type-writer">
//           <UsernameTypewriter />
//         <div className="type-writer">
//           <UsernameTypewriter />
//         </div>



//         <div className="center-container class5"  >


//         <div className="center-container class5"  >
//           <Select
//             options={modelNumbers.map((modelNumber) => ({
//               value: modelNumber,
//               label: modelNumber,
//             }))}
//             value={selectedOption}
//             onChange={handleChange}
//             onInputChange={handleInputChange}
//             isLoading={loading}
//             placeholder="Select a model number"
//             styles={customStyles}
//           />


//           {warningMessage && (
//             <div style={{ color: 'red', marginTop: '10px' }}>
//               <span className="warning-icon" style={{ marginRight: '5px' }}>⚠️</span>
//               {warningMessage}
//             </div>



//           )}








//           <button
//             className="clear-button"
//             onClick={() => {
//               setSelectedOption(null);
//               setDateRange([null, null]);
//               setWarningMessage('');
//               handleClearSelection();
//               handleClearSelection();
//             }}
//           >
//             Clear Selection
//           </button>
//           <button
//             className="submit-button"
//             onClick={handleSubmit}
//             disabled={isProcessing}
//             disabled={isProcessing}
//           >
//             Submit
//           </button>



        
//           {modelDetails && dateRange[0] && dateRange[1] && (
//             <div className="r-container"  >
//               <p><strong>Model:</strong> {selectedOption.label}</p>
//               <p><strong>Size:</strong> {modelDetails.size}</p>
//               <p><strong>Category:</strong> {modelDetails.category}</p>
//               <p><strong>Predicted Sales Demand:</strong> {predictedDemand} for the period {dateRange[0].toLocaleDateString()} to {dateRange[1].toLocaleDateString()}</p>
//               <p style={{ fontStyle: 'italic', fontSize: 'smaller' }}>A report of the predicted demand can be taken from the report section.</p>
          
//             </div>
//           )
//           }

             
//           <div className='demand-img' >
//             {selectedModelImage && (
//               <img src={selectedModelImage} alt="Model" />
//             )}
        

        
//           {modelDetails && dateRange[0] && dateRange[1] && (
//             <div className="r-container"  >
//               <p><strong>Model:</strong> {selectedOption.label}</p>
//               <p><strong>Size:</strong> {modelDetails.size}</p>
//               <p><strong>Category:</strong> {modelDetails.category}</p>
//               <p><strong>Predicted Sales Demand:</strong> {predictedDemand} for the period {dateRange[0].toLocaleDateString()} to {dateRange[1].toLocaleDateString()}</p>
//               <p style={{ fontStyle: 'italic', fontSize: 'smaller' }}>A report of the predicted demand can be taken from the report section.</p>
          
//             </div>
//           )
//           }

             
//           <div className='demand-img' >
//             {selectedModelImage && (
//               <img src={selectedModelImage} alt="Model" />
//             )}
        
//           </div>


          




//           {/* <div className='demand-img'>
//           {selectedModelImage && (
//             <img src={selectedModelImage} alt="Model"    />
//           )}

//           </div> */}
          








          




//           {/* <div className='demand-img'>
//           {selectedModelImage && (
//             <img src={selectedModelImage} alt="Model"    />
//           )}

//           </div> */}
          







//         </div>
//       </div>


//       <div style={{ position: 'fixed', top: '45px', left: '75%', zIndex: 100 }}>

//       <div style={{ position: 'fixed', top: '45px', left: '75%', zIndex: 100 }}>
//         <button className="date-picker-button" onClick={toggleDatePicker}>
//           {isDatePickerOpen ? ' Date Picker' : ' Date Picker'}
//         </button>
//       </div>

//       {isProcessing && (
//         <div style={{ color: 'yellow', position: 'fixed', marginTop: '15%', marginLeft: '50%', fontSize: '20px' }}>
//           Processing
//           <span className="dot">.</span>
//           <span className="dot">.</span>
//           <span className="dot">.</span>
//         </div>
//       )}
//         <div style={{ color: 'yellow', position: 'fixed', marginTop: '15%', marginLeft: '50%', fontSize: '20px' }}>
//           Processing
//           <span className="dot">.</span>
//           <span className="dot">.</span>
//           <span className="dot">.</span>
//         </div>
//       )}



// {/* 


// {/* 
//       {isDatePickerOpen && (
//         <div style={{ position: 'fixed', top: '10%', left: '60%', zIndex: 100, backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '20px', fontSize: '12px' }}>
//         <div style={{ position: 'fixed', top: '10%', left: '60%', zIndex: 100, backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '20px', fontSize: '12px' }}>
//           <DateRangePicker
//             minDate={new Date()} // Set minDate to current date
//             ranges={[{ startDate: dateRange[0], endDate: dateRange[1], key: 'selection' }]}
//             onChange={handleDateChange}
//           />
//           <button class="button-3d" onClick={handleOkButtonClick}>OK</button>



//         </div>



//       )} */}
//         {/* {isDatePickerOpen && (
//         <div style={{ position: 'fixed', top: '10%', left: '60%', zIndex: 100, backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '20px', fontSize: '12px' }}>
//           <DateRangePicker
//             minDate={tomorrow} // Set minDate to the day after today
//             ranges={[{ startDate: dateRange[0], endDate: dateRange[1], key: 'selection' }]}
//             onChange={handleDateChange}
//           />
//           <button class="button-3d" onClick={handleOkButtonClick}>OK</button>
//         </div>
//       )} */}
//         {isDatePickerOpen && (
//         <div style={{ position: 'fixed', top: '10%', left: '60%', zIndex: 100, backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '20px', fontSize: '12px' }}>
//           <DateRangePicker
//             minDate={tomorrow} // Set minDate to tomorrow
//             ranges={[{ startDate: dateRange[0], endDate: dateRange[1], key: 'selection' }]}
//             onChange={handleDateChange}
           
//           />
//           <button class="button-3d" onClick={handleOkButtonClick}>OK</button>
//           <button class="button-3d" onClick={handleOkButtonClick}>OK</button>



//         </div>



//       )} */}
//         {/* {isDatePickerOpen && (
//         <div style={{ position: 'fixed', top: '10%', left: '60%', zIndex: 100, backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '20px', fontSize: '12px' }}>
//           <DateRangePicker
//             minDate={tomorrow} // Set minDate to the day after today
//             ranges={[{ startDate: dateRange[0], endDate: dateRange[1], key: 'selection' }]}
//             onChange={handleDateChange}
//           />
//           <button class="button-3d" onClick={handleOkButtonClick}>OK</button>
//         </div>
//       )} */}
//         {isDatePickerOpen && (
//         <div style={{ position: 'fixed', top: '10%', left: '60%', zIndex: 100, backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '20px', fontSize: '12px' }}>
//           <DateRangePicker
//             minDate={tomorrow} // Set minDate to tomorrow
//             ranges={[{ startDate: dateRange[0], endDate: dateRange[1], key: 'selection' }]}
//             onChange={handleDateChange}
           
//           />
//           <button class="button-3d" onClick={handleOkButtonClick}>OK</button>
//         </div>
//       )}






//     </div>


//   );
// };

// export default DemandPrediction;




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
  // const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [selectedModelImage, setSelectedModelImage] = useState(null);
  // const [dateRange, setDateRange] = useState([null, null]); // State for date range
  const [warningMessage, setWarningMessage] = useState('');
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false); // State to track whether date picker is open or closed
  const [daysToFirstDate, setDaysToFirstDate] = useState(0);
  const [daysToLastDate, setDaysToLastDate] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  // const [predictedDemand, setPredictedDemand] = useState(0);
  // const [modelDetails, setModelDetails] = useState(null);
  const [tempDateRange, setTempDateRange] = useState([null, null]);


  // Load initial state from local storage if available
  const [selectedOption, setSelectedOption] = useState(() => {
    const saved = localStorage.getItem('selectedOption');
    return saved ? JSON.parse(saved) : null;
  });

  // const [dateRange, setDateRange] = useState(() => {
  //   const saved = localStorage.getItem('dateRange');
  //   return saved ? JSON.parse(saved) : [null, null];
  // });

  const [dateRange, setDateRange] = useState(() => {
    const saved = localStorage.getItem('dateRange');
    const parsed = saved ? JSON.parse(saved) : [null, null];
    // Convert string dates back to Date objects
    return parsed.map(date => date ? new Date(date) : null);
});


  const [selectedModelImage, setSelectedModelImage] = useState(() => {
    return localStorage.getItem('selectedModelImage') || null;
  });


  const [modelDetails, setModelDetails] = useState(() => {
    const saved = localStorage.getItem('modelDetails');
    return saved ? JSON.parse(saved) : null;
  });

  const [predictedDemand, setPredictedDemand] = useState(() => {
    const saved = localStorage.getItem('predictedDemand');
    return saved ? JSON.parse(saved) : 0;
  });


  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setWarningMessage('');
  };

  const handleInputChange = (inputValue) => {
    setLoading(inputValue.length > 0);
  };

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);



  const handleDateChange = (ranges) => {
    const { startDate, endDate } = ranges.selection;

    // Check if both start date and end date are selected and they are not the same
    if (!startDate || !endDate || startDate.getTime() === endDate.getTime()) {
        setWarningMessage('Please select a date range (start and end date).');
        return;
    }

    if (endDate < startDate) {
        setWarningMessage('End date cannot be earlier than start date.');
        return;
    }

    const firstDate = Math.ceil((startDate - today) / (1000 * 60 * 60 * 24));
    const lastDate = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));
    setDaysToFirstDate(firstDate);
    setDaysToLastDate(lastDate);

    setDateRange([startDate, endDate]);
    setWarningMessage('');
};

// const handleDateChange = (ranges) => {
//   setTempDateRange([ranges.selection.startDate, ranges.selection.endDate]);
//   setWarningMessage('');
// };
// const handleOkButtonClick = () => {
//   const [startDate, endDate] = tempDateRange;

//   if (!startDate || !endDate) {
//     setWarningMessage('Please select both start and end dates.');
//     setIsDatePickerOpen(false); // Keep the date picker open for correction
//     return;
//   }

//   if (startDate.getTime() === endDate.getTime()) {
//     setWarningMessage('Please select a date range, not just a single date.');
//     setIsDatePickerOpen(false); // Keep the date picker open for correction
//     return;
//   }

//   if (endDate < startDate) {
//     setWarningMessage('End date cannot be earlier than start date.');
//     setIsDatePickerOpen(false); // Keep the date picker open for correction
//     return;
//   }

//   setDateRange([startDate, endDate]);
//   setIsDatePickerOpen(false); // Close the date picker after validation
// };



  // const handleDateChange = (ranges) => {
  //   const startDate = ranges.selection.startDate;
  //   const endDate = ranges.selection.endDate;

  //   if (endDate < startDate) {
  //     setWarningMessage('End date cannot be earlier than start date.');
  //     return;
  //   }

  //   // Calculate days to first and last date
  //   // const today = new Date();
   
  //   const firstDate = Math.ceil((startDate - today) / (1000 * 60 * 60 * 24));
  //   const lastDate = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));
  //   setDaysToFirstDate(firstDate);
  //   setDaysToLastDate(lastDate);

  //   setDateRange([startDate, endDate]);
  //   setWarningMessage('');
  // };

//   const handleDateChange = (ranges) => {
//     const startDate = ranges.selection.startDate;
//     const endDate = ranges.selection.endDate;

//     if (endDate < startDate) {
//       setWarningMessage('End date cannot be earlier than start date.');
//       return;
//     }

//     setDateRange([startDate, endDate]);
//     setWarningMessage('');
// };



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
          console.log(response)
          const blob = await response.blob();
          setSelectedModelImage(URL.createObjectURL(blob));
        } catch (error) {
          console.log('Error fetching model image:', error);
        }
      }
    };

    fetchModelImage();
  }, [selectedOption]);


  useEffect(() => {
    // Load model numbers, images, etc.
  }, []);

  useEffect(() => {
    // Save to local storage when state changes
    localStorage.setItem('selectedOption', JSON.stringify(selectedOption));
    localStorage.setItem('dateRange', JSON.stringify(dateRange));
    localStorage.setItem('modelDetails', JSON.stringify(modelDetails));
    localStorage.setItem('predictedDemand', JSON.stringify(predictedDemand));
  }, [selectedOption, dateRange,  modelDetails, predictedDemand]);

  useEffect(() => {
    // Save the image URL to local storage whenever it changes
    if (selectedModelImage) {
      localStorage.setItem('selectedModelImage', selectedModelImage);
    }
  }, [selectedModelImage]);



  const handleClearSelection = () => {
    setSelectedOption(null);
    setDateRange([null, null]);
    setSelectedModelImage(null);
    setModelDetails(null);
    setPredictedDemand(0);
    setWarningMessage('');

    localStorage.removeItem('selectedOption');
    localStorage.removeItem('dateRange');
    localStorage.removeItem('selectedModelImage');
    localStorage.removeItem('modelDetails');
    localStorage.removeItem('predictedDemand');
  };



  // const handleSubmit = () => {
  //   if (!selectedOption || !dateRange[0] || !dateRange[1]) {
  //     setWarningMessage('Please choose a model number and select a date range.');
  //   } else {
  //     // Proceed with submitting form data
  //     console.log("Submission successful.");
  //     setWarningMessage(''); // Clear warning message if submission is successful
  //   }
  // };

  // const handleSubmit = async () => {
  //   if (!selectedOption || !dateRange[0] || !dateRange[1]) {
  //     setWarningMessage('Please choose a model number and select a date range.');
  //     return;
  //   }

  //   setIsProcessing(true); // Start processing
  //   setWarningMessage(''); // Clear previous warnings or messages


  //   // Base URL for your API
  //   const apiUrl = 'http://localhost:8080/demandpred/predict';
  //   const detailsUrl = `http://localhost:8080/demandpred/modelDetails/${selectedOption.value}`;
  //   // Prepare the data for the API calls
  //   const firstDateData = JSON.stringify({
  //     shoe_model: selectedOption.value,
  //     days: daysToFirstDate,
  //   }
  //   );

  //   // console.log(days)

  //   const lastDateData = JSON.stringify({
  //     shoe_model: selectedOption.value,
  //     days:daysToLastDate,
  //   });
  //   // console.log(days)

  //   // Prepare both API calls
  //   const apiCalls = [
  //     fetch(apiUrl, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: firstDateData,
  //     }),
  //     fetch(apiUrl, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: lastDateData,
  //     }),
  //     fetch(detailsUrl, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },

  //     }),
  //   ];

  //   try {
  //     // Execute both API calls concurrently
  //     const responses = await Promise.all(apiCalls);

  //     // Process responses
  //     const results = await Promise.all(responses.map(response => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       return response.json();
  //     }));

  //     // Here you can use the results of the API calls
  //     console.log("here are all response!")
  //     console.log("Submission successful:", results);

  //     const sum1 = results[0].sum;
  //     const sum2 = results[1].sum;

  //     // Calculate the absolute difference between the sum values
  //     const sumDifference = Math.abs(sum1 - sum2);

  //     // Now you can use sumDifference for display or further processing
  //     console.log("Difference of sums:", sumDifference);
  //     setPredictedDemand(sumDifference);



  //     setIsProcessing(false);
  //   } catch (error) {
  //     console.error("Error during submission:", error);
  //     setWarningMessage(`An error occurred: ${error.message}`);
  //     setIsProcessing(false);
  //   }
  // };

  const handleSubmit = async () => {
    if (!selectedOption || !dateRange[0] || !dateRange[1]) {
      setWarningMessage('Please choose a model number and select a date range.');
      return;
    }

    setIsProcessing(true);
    setWarningMessage('');

    const apiUrl = 'http://localhost:8080/demandpred/predict';
    const detailsUrl = `http://localhost:8080/demandpred/getDetails/${selectedOption.value}`;
    const reportUrl = 'http://localhost:8080/report/save'; 

    const firstDateData = JSON.stringify({
      shoe_model: selectedOption.value,
      days: daysToFirstDate,
    });

    const lastDateData = JSON.stringify({
      shoe_model: selectedOption.value,
      days: daysToLastDate,
    });

    const apiCalls = [
      fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: firstDateData,
      }),
      fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: lastDateData,
      }),
      fetch(detailsUrl)  // Assuming GET request for model details
    ];

    try {
      const [firstResponse, lastResponse, detailsResponse] = await Promise.all(apiCalls);

      const [firstData, lastData] = await Promise.all([
        firstResponse.json(),
        lastResponse.json()
      ]);

      if (!firstResponse.ok || !lastResponse.ok) {
        throw new Error('Error fetching prediction data');
      }

      const sumDifference = Math.abs(firstData.sum - lastData.sum);
      setPredictedDemand(sumDifference);
      console.log(lastData.filteredSales)
      console.log(firstData.sum)
      console.log(lastData.sum)
      console.log(sumDifference)

      if (!detailsResponse.ok) {
        throw new Error('Error fetching model details');
      }

      const detailsData = await detailsResponse.json();
      setModelDetails(detailsData);
      console.log(detailsData)

      let dateArray = [];
      let currentDate = new Date(tomorrow);
      while (currentDate <= dateRange[1]) {
          dateArray.push(new Date(currentDate));
          currentDate.setDate(currentDate.getDate() + 1);
      }

      // Combine the sales counts with their respective dates
      const salesDataWithDates = lastData.filteredSales.map((salesCount, index) => ({
          date: dateArray[index],
          salesCount
      }));


      const reportData = {
        modelNumber: selectedOption.value,
        size: detailsData.size,
        salesData:salesDataWithDates,
        category: detailsData.category,
        predictedSalesDemand: sumDifference
        
    };
   
console.log(reportData)

    await fetch(reportUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reportData)
  });


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
  

  // const handleClearSelection = () => {
  //   // Reset state variables to their initial values
  //   setSelectedOption(null);
  //   setDateRange([null, null]);
  //   setSelectedModelImage(null);
  //   setWarningMessage('');

  //   // Clear the saved data from local storage
  //   localStorage.removeItem('selectedOption');
  //   localStorage.removeItem('dateRange');
  //   localStorage.removeItem('selectedModelImage');
  // };





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
      color: 'white'
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'white', // Set placeholder font color to white
    }),

    width: (provided) => ({
      ...provided,

      width:'0%'
  }),
}

  const backgroundimg = new URL("../Shoe_Images/footwearbg.jpg", import.meta.url);
  const backgroundimg2 = new URL("../Shoe_Images/bgimg.jpg", import.meta.url);

  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
      <img 
        src={backgroundimg}
        alt="Background" 
        style={{ 
          position: 'fixed', 
          // width: '19.5%', 
          width: '300px', 
          height: '100vh', 
          objectFit: 'cover', 
          zIndex: -1
        }} 
      />

      <div 
        style={{ 
          position: 'fixed',
          width: '90%', 
          height: '100vh', 
          // marginLeft: '19.5%',
          marginLeft: '300px',
          zIndex: -1,
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 100%, transparent 100%), url(${backgroundimg2})`,
          backgroundSize: 'cover',
          opacity: '0.7'
        }} 
      ></div>
      <Sidebar />
      <div className="content">
        <div className="type-writer">
          <UsernameTypewriter />
        </div>



        <div className="center-container class5"  >
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
              handleClearSelection();
            }}
          >
            Clear Selection
          </button>
          <button
            className="submit-button"
            onClick={handleSubmit}
            disabled={isProcessing}
          >
            Submit
          </button>



        
          {modelDetails && dateRange[0] && dateRange[1] && (
            <div className="r-container"  >
              <p><strong>Model:</strong> {selectedOption.label}</p>
              <p><strong>Size:</strong> {modelDetails.size}</p>
              <p><strong>Category:</strong> {modelDetails.category}</p>
              <p><strong>Predicted Sales Demand:</strong> {predictedDemand} for the period {dateRange[0].toLocaleDateString()} to {dateRange[1].toLocaleDateString()}</p>
              <p style={{ fontStyle: 'italic', fontSize: 'smaller' }}>A report of the predicted demand can be taken from the report section.</p>
          
            </div>
          )
          }

             
          <div className='demand-img' >
            {selectedModelImage && (
              <img src={selectedModelImage} alt="Model" />
            )}
        
          </div>


          




          {/* <div className='demand-img'>
          {selectedModelImage && (
            <img src={selectedModelImage} alt="Model"    />
          )}

          </div> */}
          







        </div>
      </div>


      <div style={{ position: 'fixed', top: '45px', left: '75%', zIndex: 100 }}>
        <button className="date-picker-button" onClick={toggleDatePicker}>
          {isDatePickerOpen ? ' Date Picker' : ' Date Picker'}
        </button>
      </div>

      {isProcessing && (
        <div style={{ color: 'yellow', position: 'fixed', marginTop: '15%', marginLeft: '50%', fontSize: '20px' }}>
          Processing
          <span className="dot">.</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
        </div>
      )}



{/* 
      {isDatePickerOpen && (
        <div style={{ position: 'fixed', top: '10%', left: '60%', zIndex: 100, backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '20px', fontSize: '12px' }}>
          <DateRangePicker
            minDate={new Date()} // Set minDate to current date
            ranges={[{ startDate: dateRange[0], endDate: dateRange[1], key: 'selection' }]}
            onChange={handleDateChange}
          />
          <button class="button-3d" onClick={handleOkButtonClick}>OK</button>



        </div>



      )} */}
        {/* {isDatePickerOpen && (
        <div style={{ position: 'fixed', top: '10%', left: '60%', zIndex: 100, backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '20px', fontSize: '12px' }}>
          <DateRangePicker
            minDate={tomorrow} // Set minDate to the day after today
            ranges={[{ startDate: dateRange[0], endDate: dateRange[1], key: 'selection' }]}
            onChange={handleDateChange}
          />
          <button class="button-3d" onClick={handleOkButtonClick}>OK</button>
        </div>
      )} */}
        {isDatePickerOpen && (
        <div style={{ position: 'fixed', top: '10%', left: '60%', zIndex: 100, backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '20px', fontSize: '12px' }}>
          <DateRangePicker
            minDate={tomorrow} // Set minDate to tomorrow
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





