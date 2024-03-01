// import React, { useState, useEffect } from 'react';
// import Select from 'react-select';
// import { Sidebar } from '../../sidebar/sidebar';
// import UsernameTypewriter from '../../components/UsernameTypewriter';

// const DemandPrediction = () => {
//   const [modelNumbers, setModelNumbers] = useState([]);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [selectedModelInfo, setSelectedModelInfo] = useState(null);

//   const handleChange = (selectedOption) => {
//     setSelectedOption(selectedOption);
//   };

//   const handleInputChange = (inputValue) => {
//     // Simulate an asynchronous search process
//     setLoading(inputValue.length > 0);
//     // You may perform an actual search here if needed
//     // and update the model numbers accordingly
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
//   }, []); // Empty dependency array means this effect runs once on component mount

//   // Your other useEffect and functions...

//   return (
//     <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
//       <Sidebar />
//       <div className="content">
//         <UsernameTypewriter style={{ position: 'fixed', top: '5px', right: '5px', color: 'yellow', fontSize: '16px', fontWeight: 'bold' }} />
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
//           {/* Your other components... */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DemandPrediction;



// import React, { useState, useEffect } from 'react';
// import Select from 'react-select';
// import { Sidebar } from '../../sidebar/sidebar';
// import UsernameTypewriter from '../../components/UsernameTypewriter';

// const DemandPrediction = () => {
//   const [modelNumbers, setModelNumbers] = useState([]);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [selectedModelInfo, setSelectedModelInfo] = useState(null);
//   const [selectedModelImage, setSelectedModelImage] = useState(null);

//   const handleChange = (selectedOption) => {
//     setSelectedOption(selectedOption);
//   };

//   const handleInputChange = (inputValue) => {
//     // Simulate an asynchronous search process
//     setLoading(inputValue.length > 0);
//     // You may perform an actual search here if needed
//     // and update the model numbers accordingly
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
//   }, []); // Empty dependency array means this effect runs once on component mount

//   useEffect(() => {
//     const fetchModelImage = async () => {
//       if (selectedOption) {
//         try {
//           const response = await fetch(`http://localhost:8080/demandpred/getImage/${selectedOption.value}`);
//           const imageData = await response.json();
//           setSelectedModelImage(imageData);
//         } catch (error) {
//           console.log('Error fetching model image:', error);
//         }
//       }
//     };

//     fetchModelImage();
//   }, [selectedOption]); // Run this effect whenever selectedOption changes

//   // Your other useEffect and functions...

//   return (
//     <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
//       <Sidebar />
//       <div className="content">
//         <UsernameTypewriter style={{ position: 'fixed', top: '5px', right: '5px', color: 'yellow', fontSize: '16px', fontWeight: 'bold' }} />
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
//           {selectedModelImage && (
//             <img src={`http://localhost:8080/public/images/${selectedModelImage.filename}`} alt="Model" />
//           )}
//           {/* Your other components... */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DemandPrediction;


import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Sidebar } from '../../sidebar/sidebar';
import UsernameTypewriter from '../../components/UsernameTypewriter';

const DemandPrediction = () => {
  const [modelNumbers, setModelNumbers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedModelImage, setSelectedModelImage] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleInputChange = (inputValue) => {
    // Simulate an asynchronous search process
    setLoading(inputValue.length > 0);
    // You may perform an actual search here if needed
    // and update the model numbers accordingly
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
  }, []); // Empty dependency array means this effect runs once on component mount

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
  }, [selectedOption]); // Run this effect whenever selectedOption changes

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
          {/* Your other components... */}
        </div>
      </div>
    </div>
  );
};

export default DemandPrediction;










// import React, { useState, useEffect } from 'react';
// import Select from 'react-select';
// import { Sidebar } from '../../sidebar/sidebar';
// import UsernameTypewriter from '../../components/UsernameTypewriter';

// const DemandPrediction = () => {
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
//           const response = await fetch(`http://localhost:8080/demandpred/getImage/${selectedOption.value}`);
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
//     <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
//       <Sidebar />
//       <div className="content">
//         <UsernameTypewriter style={{ position: 'fixed', top: '5px', right: '5px', color: 'yellow', fontSize: '16px', fontWeight: 'bold' }} />
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
//               { {selectedModelInfo && selectedModelInfo.imageURL && ( }
//                 <div>
//                   <h2>Image</h2>
//                   <img
//                     src={`http://localhost:8080/public/images/${selectedModelInfo.image}`}
//                     alt="Model Image"
//                     style={{ maxWidth: '100%', maxHeight: '400px' }}
//                   />
//                 </div>
//               {/* )} */}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DemandPrediction;
