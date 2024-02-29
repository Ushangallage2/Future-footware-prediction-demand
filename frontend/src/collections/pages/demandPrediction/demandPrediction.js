// import React, { useState } from 'react';
// import { Sidebar } from '../../sidebar/sidebar';
// import '../../../App.css';
// import './demandprediction.css';

// const DemandPrediction = () => {
//     const [predictionValue, setPredictionValue] = useState('');

//     const handleInputChange = (event) => {
//         setPredictionValue(event.target.value);
//     };

//     const handleFilterSubmit = () => {
//         // Implement your logic for handling the filter submit here
//         console.log(`Filter value submitted: ${predictionValue}`);
//     };

//     return (
//         <div style={{ display: 'flex', alignItems: 'flex-start' }}>
//             <Sidebar />
//             <div className='content'>
//                 <div className='prediction-box'>
//                     <h2>Predict Demand</h2>
//                     <div className='input-container'>
//                         <input
//                             type='number'
//                             placeholder='Enter a number'
//                             value={predictionValue}
//                             onChange={handleInputChange}
//                         />
//                         <select>
//                             <option>Filter Option 1</option>
//                             <option>Filter Option 2</option>
//                         </select>
//                         <button onClick={handleFilterSubmit}>Submit</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DemandPrediction;
// import React, { useState } from 'react';
// import { Sidebar } from '../../sidebar/sidebar';
// import '../../../App.css';
// import './demandprediction.css';
// import UsernameTypewriter from '../../components/UsernameTypewriter'; 


// const DemandPrediction = () => {
//   const [predictionValue, setPredictionValue] = useState('');

//   const handleInputChange = (event) => {
//     setPredictionValue(event.target.value);
//   };

//   const handleFilterSubmit = () => {
//     // Implement your logic for handling the filter submit here
//     console.log(`Filter value submitted: ${predictionValue}`);
//   };

//   return (
//     <div style={{ display: 'flex', alignItems: 'flex-start' }}>
//       <Sidebar />
// <div className=' =abc'>
//       <UsernameTypewriter  />

//       <div className='content'>

//         <div className='prediction-box'>
//           <h2>Predict Demand</h2>
//           <div className='input-container'>
//             <input
//               type='number'
//               placeholder='Enter a number'
//               value={predictionValue}
//               onChange={handleInputChange}
//             />
//             <select>
//               <option>Filter Option 1</option>
//               <option>Filter Option 2</option>
//             </select>
//             <button onClick={handleFilterSubmit}>Submit</button>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>  
//   );
// };

// export default DemandPrediction;
// import React from 'react';
// import { Sidebar } from '../../sidebar/sidebar';
// import UsernameTypewriter from '../../components/UsernameTypewriter';

// const DemandPrediction = () => {
//   return (

//     <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
//       <Sidebar />
//       <div className="content">
//       <UsernameTypewriter style={{ position: 'fixed', top: '5px', right: '5px', color: 'yellow', fontSize: '16px', fontWeight: 'bold' }} />
//         <div className="username-typewriter">
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DemandPrediction;

// import React, { useState } from 'react';
// import Select from 'react-select';
// import{ Sidebar} from '../../sidebar/sidebar'; // Adjust the import path
// import UsernameTypewriter from '../../components/UsernameTypewriter'; // Adjust the import path
// import './demandprediction.css'; // Import your component-specific styles

// const options = [
//   { value: 'india', label: 'India' },
//   { value: 'indonesia', label: 'Indonesia' },
//   { value: 'indisia', label: 'Indisia' },
//   { value: 'indonesia', label: 'Indonesia' },
//   { value: 'india', label: 'India' },
//   { value: 'indonesia', label: 'Indonesia' }
// ];

// function DemandPrediction() {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (selectedOption) => {
//     setSelectedOption(selectedOption);
//   };

//   const handleInputChange = (inputValue) => {
//     // Simulate an asynchronous search process
//     setLoading(inputValue.length > 0);

//     // You may perform an actual search here if needed
//     // and update the options accordingly
//   };

//   return (
//     <div className="page-container">
//       <Sidebar />
//       <div className="content">
//         <UsernameTypewriter  />
//         <div className="center-container class1">
//           <Select
//             options={options}
//             value={selectedOption}
//             onChange={handleChange}
//             onInputChange={handleInputChange}
//             isLoading={loading}
//             placeholder="Select a model number"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DemandPrediction;


// import React, { useState, useEffect } from 'react';
// import Select from 'react-select';
// import { Sidebar } from '../../sidebar/sidebar';
// import UsernameTypewriter from '../../components/UsernameTypewriter';
// import './demandprediction.css';

// function DemandPrediction() {
//   const [modelNumbers, setModelNumbers] = useState([]);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchModelNumbers = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch('/demandpred/getModelNumbers');

//         // Check if the response status is OK (200)
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         setModelNumbers(data.modelNumbers);
//       } catch (error) {
//         console.log('Error fetching model numbers:', error);
//         // Handle the error state, e.g., set an error message or show a user-friendly error
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchModelNumbers();
//   }, []);

//   const handleChange = (selectedOption) => {
//     setSelectedOption(selectedOption);
//   };

//   const handleInputChange = (inputValue) => {
//     // Simulate an asynchronous search process
//     setLoading(inputValue.length > 0);
//     // You may perform an actual search here if needed
//     // and update the model numbers accordingly
//   };

//   return (
//     <div className="page-container">
//       <Sidebar />
//       <div className="content">
//         <UsernameTypewriter />
//         <div className="center-container class1">
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
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DemandPrediction;














// import React, { useState, useEffect } from 'react';
// import Select from 'react-select';
// import { Sidebar } from '../../sidebar/sidebar';
// import UsernameTypewriter from '../../components/UsernameTypewriter';
// import './demandprediction.css';

// function DemandPrediction() {
//   const [modelNumbers, setModelNumbers] = useState([]);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [imageURL, setImageURL] = useState(null);

//   useEffect(() => {
//     // Fetch model numbers from the backend
//     const fetchModelNumbers = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch('/api/getModelNumbers');
//         const data = await response.json();
//         setModelNumbers(data.modelNumbers);
//       } catch (error) {
//         console.error('Error fetching model numbers:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchModelNumbers();
//   }, []);

//   useEffect(() => {
//     // Fetch the image URL from the backend based on the selected model number
//     const fetchImageURL = async () => {
//       if (selectedOption) {
//         setLoading(true);
//         // Replace this with your actual API endpoint for fetching image URL
//         const response = await fetch(`/api/getImageURL?modelNumber=${selectedOption.value}`);
//         const data = await response.json();
//         setLoading(false);
//         setImageURL(data.imageURL);
//       }
//     };

//     fetchImageURL();
//   }, [selectedOption]);

//   const handleChange = (selectedOption) => {
//     setSelectedOption(selectedOption);
//   };

//   const handleInputChange = (inputValue) => {
//     // Simulate an asynchronous search process
//     setLoading(inputValue.length > 0);
//     // You may perform an actual search here if needed
//     // and update the model numbers accordingly
//   };

//   return (
//     <div className="page-container">
//       <Sidebar />
//       <div className="content">
//         <UsernameTypewriter />
//         <div className="center-container class1">
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
//           />
//           {imageURL && (
//             <div>
//               <h2>Selected Image</h2>
//               <img src={imageURL} alt="Selected Model" />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DemandPrediction;


// import React, { useState, useEffect } from 'react';
// import Select from 'react-select';
// import { Sidebar } from '../../sidebar/sidebar';
// import UsernameTypewriter from '../../components/UsernameTypewriter';
// import './demandprediction.css';

// function DemandPrediction() {
//   const [modelNumbers, setModelNumbers] = useState([]);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [imageURL, setImageURL] = useState(null);

//   useEffect(() => {
//     // Fetch model numbers from the backend
//     const fetchModelNumbers = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch('/demandpred/getModelNumbers');
//         const data = await response.json();
//         setModelNumbers(data.modelNumbers);
//       } catch (error) {
//         console.error('Error fetching model numbers:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchModelNumbers();
//   }, []);

//   useEffect(() => {
//     // Fetch the image URL from the backend based on the selected model number
//     const fetchImageURL = async () => {
//       if (selectedOption) {
//         setLoading(true);
//         try {
//           const response = await fetch(`/demandpred/getImageURL/${selectedOption.value}`);
//           const data = await response.json();
//           setLoading(false);
//           setImageURL(data.imageURL);
//         } catch (error) {
//           console.error('Error fetching image URL:', error);
//         }
//       }
//     };

//     fetchImageURL();
//   }, [selectedOption]);

//   const handleChange = (selectedOption) => {
//     setSelectedOption(selectedOption);
//   };

//   const handleInputChange = (inputValue) => {
//     // Simulate an asynchronous search process
//     setLoading(inputValue.length > 0);
//     // You may perform an actual search here if needed
//     // and update the model numbers accordingly
//   };

//   return (
//     <div className="page-container">
//       <Sidebar />
//       <div className="content">
//         <UsernameTypewriter />
//         <div className="center-container class1">
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
//           />
//           {imageURL && (
//             <div>
//               <h2>Selected Image</h2>
//               <img src={imageURL} alt="Selected Model" />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DemandPrediction;

// import React, { useState, useEffect } from 'react';
// import Select from 'react-select';
// import { Sidebar } from '../../sidebar/sidebar';
// import UsernameTypewriter from '../../components/UsernameTypewriter';
// import './demandprediction.css';

// function DemandPrediction() {
//   const [modelNumbers, setModelNumbers] = useState([]);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [imageURL, setImageURL] = useState(null);

//   useEffect(() => {
//     // Fetch model numbers from the backend
//     const fetchModelNumbers = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch('/demandpred/getModelNumbers');
//         const data = await response.json();
//         setModelNumbers(data.modelNumbers);
//       } catch (error) {
//         console.error('Error fetching model numbers:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchModelNumbers();
//   }, []);

//   useEffect(() => {
//     // Fetch the image URL from the backend based on the selected model number
//     const fetchImageURL = async () => {
//       if (selectedOption) {
//         setLoading(true);
//         try {
//           const response = await fetch(`/demandpred/getImageURL/${selectedOption.value}`);
//           const data = await response.json();
//           setLoading(false);
//           setImageURL(data.imageURL);
//         } catch (error) {
//           console.error('Error fetching image URL:', error);
//         }
//       }
//     };

//     fetchImageURL();
//   }, [selectedOption]);

//   const handleChange = (selectedOption) => {
//     setSelectedOption(selectedOption);
//   };

//   const handleInputChange = (inputValue) => {
//     // Simulate an asynchronous search process
//     setLoading(inputValue.length > 0);
//     // You may perform an actual search here if needed
//     // and update the model numbers accordingly
//   };

//   return (
//     <div className="page-container">
//       <Sidebar />
//       <div className="content">
//         <UsernameTypewriter />
//         <div className="center-container class1">
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
//           />
//           {imageURL && (
//             <div>
//               <h2>Selected Image</h2>
//               <img src={imageURL} alt="Selected Model" />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DemandPrediction;

// import React, { useState, useEffect } from 'react';
// import Select from 'react-select';
// import { Sidebar } from '../../sidebar/sidebar';
// import UsernameTypewriter from '../../components/UsernameTypewriter';
// import './demandprediction.css';

// function DemandPrediction() {
//   const [modelNumbers, setModelNumbers] = useState([]);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [imageData, setImageData] = useState(null);

//   useEffect(() => {
//     // Fetch model numbers from the backend
//     const fetchModelNumbers = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch('/demandpred/getData/:');
//         const data = await response.json();
//         setModelNumbers(data.modelNumbers);
//       } catch (error) {
//         console.error('Error fetching model numbers:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchModelNumbers();
//   }, []);

//   useEffect(() => {
//     // Fetch the image data from the backend based on the selected model number
//     const fetchImageData = async () => {
//       if (selectedOption) {
//         setLoading(true);
//         try {
//           const response = await fetch(`/demandpred/getData/${selectedOption.value}`);
//           const data = await response.json();
//           setLoading(false);

//           // Convert the Buffer data to base64
//           const base64Data = Buffer.from(data.imageURL.data).toString('base64');
//           setImageData(`data:image/png;base64,${base64Data}`);
//         } catch (error) {
//           console.error('Error fetching image data:', error);
//         }
//       }
//     };

//     fetchImageData();
//   }, [selectedOption]);

//   const handleChange = (selectedOption) => {
//     setSelectedOption(selectedOption);
//   };

//   const handleInputChange = (inputValue) => {
//     // Simulate an asynchronous search process
//     setLoading(inputValue.length > 0);
//     // You may perform an actual search here if needed
//     // and update the model numbers accordingly
//   };

//   return (
//     <div className="page-container">
//       <Sidebar />
//       <div className="content">
//         <UsernameTypewriter />
//         <div className="center-container class1">
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
//           />
//           {imageData && (
//             <div>
//               <h2>Selected Image</h2>
//               <img src={imageData} alt="Selected Model" />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DemandPrediction;

// import React, { useState, useEffect } from 'react';
// import Select from 'react-select';
// import { Sidebar } from '../../sidebar/sidebar';
// import UsernameTypewriter from '../../components/UsernameTypewriter';
// import './demandprediction.css';

// function DemandPrediction() {
//   const [modelNumbers, setModelNumbers] = useState([]);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchModelNumbers = async () => {
//       setLoading(true);
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
//     // You can add additional logic here if needed
//   }, [selectedOption]);

//   const handleChange = (selectedOption) => {
//     setSelectedOption(selectedOption);
//   };

//   const handleInputChange = (inputValue) => {
//     // Simulate an asynchronous search process
//     setLoading(inputValue.length > 0);
//     // You may perform an actual search here if needed
//     // and update the model numbers accordingly
//   };

//   return (
//     <div className="page-container">
//       <Sidebar />
//       <div className="content">
//         <UsernameTypewriter />
//         <div className="center-container class1">
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
//           />
//           {selectedOption && (
//             <div>
//               <h2>Selected Model Number</h2>
//               <p>{selectedOption.label}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DemandPrediction;






// import React, { useState, useEffect } from 'react';
// import Select from 'react-select';
// import { Sidebar } from '../../sidebar/sidebar';
// import UsernameTypewriter from '../../components/UsernameTypewriter';
// import './demandprediction.css';

// // Define a function to convert array of numbers to base64
// const arrayToBase64 = (array) => {
//   const binaryString = String.fromCharCode(...array);
//   return btoa(binaryString);
// };


// function DemandPrediction() {
//   const [modelNumbers, setModelNumbers] = useState([]);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [selectedModelInfo, setSelectedModelInfo] = useState(null);

//   useEffect(() => {
//     const fetchModelNumbers = async () => {
//       setLoading(true);
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
//     const fetchModelInfo = async () => {
//       if (selectedOption) {
//         try {
//           const response = await fetch(`http://localhost:8080/demandpred/getData/${selectedOption.value}`);
//           const data = await response.json();
//           setSelectedModelInfo(data);
//         } catch (error) {
//           console.log('Error fetching model info:', error);
//         }
//       }
//     };

//     fetchModelInfo();
//   }, [selectedOption]);

//   const handleChange = (selectedOption) => {
//     setSelectedOption(selectedOption);
//   };

//   const handleInputChange = (inputValue) => {
  
//     setLoading(inputValue.length > 0);
   
//   };


//   return (
//     <div className="page-container">
//       <Sidebar />
//       <div className="content">
//         <UsernameTypewriter />
//         <div className="center-container class1">
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
//           />
//           {selectedOption && (
//             <div>
//               <h2>Selected Model Number</h2>
//               <p>{selectedOption.label}</p>
//               {selectedModelInfo && selectedModelInfo.imageURL && (
//                 <div>
//                   <h2>Image</h2>
//                   <img
//                     src={`data:image/png;base64,${selectedModelInfo?.imageURL?.data ? arrayToBase64(selectedModelInfo.imageURL.data) : ''}`}
//                     alt="Model Image"
//                   />
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DemandPrediction;  


// import React, { useState, useEffect } from 'react';
// import Select from 'react-select';
// import { Sidebar } from '../../sidebar/sidebar';
// import UsernameTypewriter from '../../components/UsernameTypewriter';
// import './demandprediction.css';

// // Define a function to convert array of numbers to Blob URL
// const arrayToBlobUrl = (array) => {
//   const blob = new Blob([new Uint8Array(array)], { type: 'image/png' });
//   return URL.createObjectURL(blob);
// };

// function DemandPrediction() {
//   const [modelNumbers, setModelNumbers] = useState([]);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [selectedModelInfo, setSelectedModelInfo] = useState(null);

//   useEffect(() => {
//     const fetchModelNumbers = async () => {
//       setLoading(true);
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
//     const fetchModelInfo = async () => {
//       if (selectedOption) {
//         try {
//           const response = await fetch(`http://localhost:8080/demandpred/getData/${selectedOption.value}`);
//           const data = await response.json();
//           setSelectedModelInfo(data);
//         } catch (error) {
//           console.log('Error fetching model info:', error);
//         }
//       }
//     };

//     fetchModelInfo();
//   }, [selectedOption]);

//   const handleChange = (selectedOption) => {
//     setSelectedOption(selectedOption);
//   };

//   const handleInputChange = (inputValue) => {
//     // Simulate an asynchronous search process
//     setLoading(inputValue.length > 0);
//     // You may perform an actual search here if needed
//     // and update the model numbers accordingly
//   };

//   return (
//     <div className="page-container">
//       <Sidebar />
//       <div className="content">
//         <UsernameTypewriter />
//         <div className="center-container class1">
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
//           />
//           {selectedOption && (
//             <div>
//               <h2>Selected Model Number</h2>
//               <p>{selectedOption.label}</p>
//               {selectedModelInfo && selectedModelInfo.imageURL && (
//                 <div>
//                   <h2>Image</h2>
//                   <img
//                     src={selectedModelInfo?.imageURL?.data ? arrayToBlobUrl(selectedModelInfo.imageURL.data) : ''}
//                     alt="Model Image"
//                   />
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DemandPrediction;




import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Sidebar } from '../../sidebar/sidebar';
import UsernameTypewriter from '../../components/UsernameTypewriter';
import './demandprediction.css';

// Define a function to convert array of numbers to Blob URL
const arrayToBlobUrl = (array) => {
  const blob = new Blob([new Uint8Array(array)], { type: 'image/png' });
  return URL.createObjectURL(blob);
};

function DemandPrediction() {
  const [modelNumbers, setModelNumbers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedModelInfo, setSelectedModelInfo] = useState(null);

  useEffect(() => {
    // Load selected model from localStorage on page load
    const storedModel = localStorage.getItem('selectedModel');
    if (storedModel) {
      setSelectedOption(JSON.parse(storedModel));
    }

    const fetchModelNumbers = async () => {
      setLoading(true);
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
    // Save selected model to localStorage whenever it changes
    if (selectedOption) {
      localStorage.setItem('selectedModel', JSON.stringify(selectedOption));
    }
  }, [selectedOption]);

  useEffect(() => {
    const fetchModelInfo = async () => {
      if (selectedOption) {
        try {
          const response = await fetch(`http://localhost:8080/demandpred/getData/${selectedOption.value}`);
          const data = await response.json();
          setSelectedModelInfo(data);
        } catch (error) {
          console.log('Error fetching model info:', error);
        }
      }
    };

    fetchModelInfo();
  }, [selectedOption]);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleInputChange = (inputValue) => {
    // Simulate an asynchronous search process
    setLoading(inputValue.length > 0);
    // You may perform an actual search here if needed
    // and update the model numbers accordingly
  };

  return (
    <div className="page-container">
      <Sidebar />
      <div className="content">
        <UsernameTypewriter />
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
          {selectedOption && (
            <div>
              <h2>Selected Model Number</h2>
              <p>{selectedOption.label}</p>
              {selectedModelInfo && selectedModelInfo.imageURL && (
                <div>
                  <h2>Image</h2>
                  <img
                    src={selectedModelInfo?.imageURL?.data ? arrayToBlobUrl(selectedModelInfo.imageURL.data) : ''}
                    alt="Model Image"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DemandPrediction;



// import React, { useState, useEffect } from 'react';
// import Select from 'react-select';
// import { Sidebar } from '../../sidebar/sidebar';
// import UsernameTypewriter from '../../components/UsernameTypewriter';
// import './demandprediction.css';

// function DemandPrediction() {
//   const [modelNumbers, setModelNumbers] = useState([]);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [selectedModelInfo, setSelectedModelInfo] = useState(null);

//   useEffect(() => {
//     const fetchModelNumbers = async () => {
//       setLoading(true);
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
//     const fetchModelInfo = async () => {
//       if (selectedOption) {
//         try {
//           const response = await fetch(`http://localhost:8080/demandpred/getData/${selectedOption.value}`);
//           const data = await response.json();
//           setSelectedModelInfo(data);
//         } catch (error) {
//           console.log('Error fetching model info:', error);
//         }
//       }
//     };

//     fetchModelInfo();
//   }, [selectedOption]);

//   const handleChange = (selectedOption) => {
//     setSelectedOption(selectedOption);
//   };

//   const handleInputChange = (inputValue) => {
//     // Simulate an asynchronous search process
//     setLoading(inputValue.length > 0);
//     // You may perform an actual search here if needed
//     // and update the model numbers accordingly
//   };

//   return (
//     <div className="page-container">
//       <Sidebar />
//       <div className="content">
//         <UsernameTypewriter />
//         <div className="center-container class1">
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
//           />
//           {selectedOption && (
//             <div>
//               <h2>Selected Model Number</h2>
//               <p>{selectedOption.label}</p>
//               {selectedModelInfo && selectedModelInfo.imageURL && (
//                 <div>
//                   <h2>Image</h2>
//                   {/* Directly create the Blob URL in the JSX */}
//                   <img
//                     src={`data:image/png;base64,${selectedModelInfo?.imageURL?.data ? btoa(String.fromCharCode.apply(null, selectedModelInfo.imageURL.data)) : ''}`}
//                     alt="Model Image"
//                   />
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DemandPrediction;
