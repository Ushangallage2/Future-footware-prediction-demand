

// import React, { useState } from 'react';
// import { Sidebar } from '../../sidebar/sidebar';
// import UsernameTypewriter from '../../components/UsernameTypewriter';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faCheckCircle  } from '@fortawesome/free-solid-svg-icons';
// import './newmodel.css';

// const NewModel = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);

//   const handleDateChange = (date) => {
//     setStartDate(date);
//   };

//   const closeDatePicker = () => {
//     setShowDatePicker(false);
//   };

//   const backgroundimg = new URL("./footwearbg.jpg", import.meta.url);
//   const backgroundimg2 = new URL("./bgimg.jpg", import.meta.url);

//   return (
//     <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
//       <img 
//         src={backgroundimg}
//         alt="Background" 
//         style={{ 
//           position: 'fixed', 
//           width: '19.3%', 
//           height: '100vh', 
//           objectFit: 'cover', 
//           zIndex: -1,
//           // marginRight: '200px'
//         }} 
//       />

//       <div 
//         style={{ 
//           position: 'fixed',
//           width: '90%', 
//           height: '100vh', 
//           marginLeft: '19.5%',
//           zIndex: -1,
//           backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 3) 20%, transparent 100%), url(${backgroundimg2})`,
//           backgroundSize: 'cover',
//           // backgroundPosition: 'center',
//           opacity: '0.5',
        
//         }} 
//       >
//         {/* Image is now part of the background in the div */}
//       </div>

//       <Sidebar />
//       <div className="content">
      
//         <div className="writer">
//         <UsernameTypewriter />
//         </div>
//         {/* <div className="new-model-text" style={{ position: 'absolute', top: 0, color: 'white', fontSize: '100px', padding: '20px' }}>
//           NEW MODEL
//         </div> */}
//          <div className="new-model-text" style={{ position: 'absolute', top: 0, color: 'white', fontSize: '100px' }}>
//           NEW MODEL 
//         </div>
//         <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green',marginTop:'75px' ,marginLeft:'100px'}} />

//         <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', marginLeft: '200px', zIndex: 1000 }}>
//   <div style={{ background: 'transparent', borderRadius: '5px' }}>
//     <button
//       onClick={() => setShowDatePicker(!showDatePicker)}
//       style={{
//         padding: '10px 20px',
//         border: '2px solid #ff4076c6',
//         background: 'transparent',
//         color: 'white',
//         fontSize: '16px',
//         borderRadius: '5px',
//         cursor: 'pointer',
//         marginRight: '100px', // Adjust as needed
//         width:'200px'
//       }}
//     >
//       Select a date
//     </button>

//     {showDatePicker && (
//       <div style={{ position: 'absolute', top: '100%', left: '0', width: 'auto' }}>
//         <DatePicker
//           selected={startDate}
//           onChange={handleDateChange}
//           minDate={new Date()}
//           inline
//         />
//         <button
//           onClick={closeDatePicker}
//           style={{
//             display: 'block',
//             margin: '10px auto',
//             padding: '5px 10px',
//             background: 'transparent',
//             color: '#ff4076c6',
//             fontSize: '16px',
//             borderRadius: '5px',
//             cursor: 'pointer'
//           }}
//         >
//           OK
//         </button>
//       </div>
//     )}
//   </div>

//   <button
//     style={{
//       padding: '10px 20px',
//       border: '2px solid #ff4076c6',
//       background: 'transparent',
//       color: 'white',
//       fontSize: '16px',
//       borderRadius: '5px',
//       cursor: 'pointer',
//       marginLeft: '40px',
//       width:'200px' // Adjust as needed
//     }}
//   >
//     Generate New Model
//   </button>
// </div>
//       </div>
//     </div>
//   );
// };

// export { NewModel };
import React, { useState, useEffect } from 'react';
import { Sidebar } from '../../sidebar/sidebar';
import UsernameTypewriter from '../../components/UsernameTypewriter';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './newmodel.css';

const NewModel = () => {
  const [startDate, setStartDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateSelected, setDateSelected] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [daysToSelectedDate, setDaysToSelectedDate] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const handleDateChange = (date) => {
    setStartDate(date);
    setDateSelected(true);
    setShowWarning(false);
  };

  const closeDatePicker = () => {
    setShowDatePicker(false);
  };


  // const clearImage = () => {
  //   setImageUrl(null);
  // };
  const clearImage = () => {
    setImageUrl(null);
    localStorage.removeItem('savedImageUrl'); // Clear the image URL from local storage
  };
  // const generateModel = () => {
  //   if (!dateSelected) {
  //     setShowWarning(true);
  //   } else {
  //     setShowWarning(false);
  //     // Add your model generation logic here
  //   }
  // };

  // const generateModel = () => {
  //   const today = new Date();
  //   if (!startDate || startDate <= today) {
  //     setShowWarning(true);
  //   } else {
  //     setShowWarning(false);
  //     const timeDifference = startDate - today;
  //     const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  //     // Sending API requests for variables A, B, C, D, and E
  //     const variables = ['A', 'B', 'C', 'D', 'E'];
  //     variables.forEach(variable => sendApiRequest(variable, daysDifference));
  //   }
  // };



  // const sendApiRequest = async (variable, days) => {
  //   const apiUrl = 'http://localhost:8080/demandpred/predict'; 
  //   const data = {
  //     shoe_model: variable,
  //     days: days
  //   };

  //   try {
  //     const response = await fetch(apiUrl, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     if (!response.ok) {
  //       throw new Error(`Error: ${response.status}`);
  //     }

  //     const result = await response.json();
  //     console.log(response)
  //     console.log(`Success for ${variable}: `, result);
  //   } catch (error) {
  //     console.error('Error sending API request:', error);
  //   }
  // };

//   const generateModel = async () => {
//     const today = new Date();
//     if (!startDate || startDate <= today) {
//         setShowWarning(true);
//     } else {
//         setShowWarning(false);
//         const timeDifference = startDate - today;
//         const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

//         // Sending API requests for variables A, B, C, D, and E
//         const variables = ['A', 'B', 'C', 'D', 'E'];
//         const results = await Promise.all(variables.map(variable => sendApiRequest(variable, daysDifference)));

//         // Processing the results to find the top 3 shoe models based on the last value of filteredSales
//         const sortedResults = results
//             .map(result => ({
//                 shoe_model: result.shoe_model,
//                 lastSale: result.filteredSales[result.filteredSales.length - 1]
//             }))
//             .sort((a, b) => b.lastSale - a.lastSale)
//             .slice(0, 3);

//         console.log('Top 3 shoe models:', sortedResults);
//     }
// };





useEffect(() => {
  // Load the image URL from local storage on component mount
  const savedImageUrl = localStorage.getItem('savedImageUrl');
  if (savedImageUrl) {
    setImageUrl(savedImageUrl);
  }
}, []);

useEffect(() => {
  // Save the image URL to local storage whenever it changes
  if (imageUrl) {
    localStorage.setItem('savedImageUrl', imageUrl);
  }
}, [imageUrl]);



const generateModel = async () => {
  const today = new Date();
  if (!startDate || startDate <= today) {
      setShowWarning(true);
  } else {
      setIsProcessing(true);
      setShowWarning(false);
     
      const timeDifference = startDate - today;
      const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

      // Sending API requests for variables A, B, C, D, and E
      const variables = ['A', 'B', 'C', 'D', 'E'];
      const results = await Promise.all(variables.map(variable => sendApiRequest(variable, daysDifference)));

      // Processing the results to find the top 3 shoe models based on the last value of filteredSales
      const sortedResults = results
          .map(result => ({
              shoe_model: result.shoe_model,
              lastSale: result.filteredSales[result.filteredSales.length - 1]
          }))
          .sort((a, b) => b.lastSale - a.lastSale)
          .slice(0, 3);

      console.log('Top 3 shoe models:', sortedResults);

      // Assuming you have descriptions for each model
      const descriptions = {
          'A': 'This footwear is designed for off-road routes with rugged soles for grip on uneven terrain. They are durable, provide good ankle support, and feature protective toe caps to shield against rocks and debris',
          'B': 'This footwear is designed for grass fields, featuring a low-cut design for agility and a lightweight synthetic upper for control. They have narrow, elongated spikes on the sole for excellent traction and speed, with a color scheme of black and neon green that symbolizes energy and quick movements, crucial for soccer players',
          'C': 'This footwear is ideal for a gym or cross-training environment, these shoes offer versatility. They have a supportive design for lateral movements and are durable enough for various activities, from weightlifting to aerobic classes',
          'D': 'This footwear is Built for pavement and smoother surfaces, these shoes offer more cushioning to absorb the impact of hard surfaces. They are lightweight with a breathable upper and are designed to enhance speed and stability',
          'E': 'This boots  are designed for cold weather and snow, featuring insulation and waterproofing to keep feet warm and dry. They have a high-top design to prevent snow entry, made from durable materials like leather or synthetic fabric. The boots boast a thick, rugged sole for good traction on icy surfaces, and their color scheme typically includes shades of brown and black, sometimes with fur lining  trim for extra warmth and style'
      };

      // Getting the descriptions for the top 3 models
      // const prompt = sortedResults.map(model => descriptions[model.shoe_model]).join(' ');
      const promptDescriptions = sortedResults.map(model => descriptions[model.shoe_model]).join(' ');
      const prompt = `${promptDescriptions} ,Based on these descriptions, give me  an image of a new shoe model`;
      // send this prompt to your API to generate an image
      sendDescriptionToApi(prompt);
      
  }
 
};


const sendDescriptionToApi = async (prompt) => {
  try {
      localStorage.removeItem('savedImageUrl');
      const response = await fetch('http://localhost:8080/abc/chat', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt })
      });

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      setIsProcessing(false);
      const data = await response.json();
      setImageUrl(data.imageUrl);
      console.log("Image URL:", data.imageUrl);
   
  } catch (error) {
      console.error('Error sending description to API:', error);
  }
};








const sendApiRequest = async (variable, days) => {
    const apiUrl = 'http://localhost:8080/demandpred/predict'; 
    const data = {
        shoe_model: variable,
        days: days
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const result = await response.json();
        console.log(`Success for ${variable}: `, result);
        
        return { shoe_model: variable, filteredSales: result.filteredSales };
    } catch (error) {
        console.error('Error sending API request:', error);
        return { shoe_model: variable, filteredSales: [] }; // Return an empty array for filteredSales on error
    }
};

// useEffect(() => {
//   if (imageUrl) {
//     const timer = setTimeout(() => {
//       setShowButton(true);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }
// }, [imageUrl]);
useEffect(() => {
  if (imageUrl) {
    // Set a timeout to show the button after 2 seconds
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2000); 

    return () => {
      clearTimeout(timer); // Clear the timer when the component unmounts or imageUrl changes
    };
  } else {
    setShowButton(false); // Hide the button if imageUrl is not set
  }
}, [imageUrl]); // This effect runs only when imageUrl changes




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
          opacity:'0.7'
        }} 
      ></div>

      <Sidebar />
      <div className="content">
        <div className="writer1" >
          <UsernameTypewriter />
        </div>
        <div className="new-model-text" style={{ position: 'absolute', top: '8%', color: 'white', fontSize: '90px' }}>
          NEW MODEL 
        </div>
        <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green', marginTop: '75px', marginLeft: '100px' }} />
        {isProcessing && (
          
       <div  style={{ color: 'yellow', position:'fixed', marginTop:'10%' ,marginLeft:'20%' , fontSize:'20px' , zIndex:'1001'}}>
    Processing
    <span className="dot">.</span>
    <span className="dot">.</span>
    <span className="dot">.</span>
       </div>
              )}
        <div style={{ position: 'fixed',  alignItems: 'center',left:'25%', zIndex: 1000 ,marginTop:'10%' }}>
          <div style={{ background: 'transparent', borderRadius: '5px' }}>
          <button 
            onClick={generateModel}
            disabled={isProcessing} 
            style={{
              margin: '10px',             
              padding: '10px 10px',
              border: '2px solid #ff4076c6',
              background: 'transparent',
              color: 'white',
              fontSize: '16px',
              borderRadius: '5px',
              cursor: 'pointer',
              width: '200px'
            }}
            
            onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            
            onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.95)'; }}
            onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
          >
            Generate New Model
          </button>
            {showDatePicker && (
              <div style={{ position: 'absolute', top: '100%', left: '0', width: 'auto' }}>
                <DatePicker
                  selected={startDate}
                  onChange={handleDateChange}
                  minDate={new Date()}
                  inline
                />
                <button
                  onClick={closeDatePicker}
                  style={{
                    display: 'block',
                    margin: '10px',
                    padding: '5px 10px',
                    background: 'transparent',
                    color: 'white',
                    fontSize: '16px',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                  
                  onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.95)'; }}
                  onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                >
                  OK
                </button>
              </div>
            )}
          </div>
          <button
              onClick={() => setShowDatePicker(!showDatePicker)}
              style={{
                margin: '10px',
                padding: '10px 20px',
                border: '2px solid #ff4076c6',
                background: 'transparent',
                color: 'white',
                fontSize: '16px',
                borderRadius: '5px',
                cursor: 'pointer',
                width: '200px',
              }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              
              onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.95)'; }}
              onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              Select a date
            </button>
          {/* {imageUrl && (
                <div>
                    <h3>Generated Image:</h3>
                    <img src={imageUrl} alt="Generated Shoe Model" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            )} */}  
        
    
     </div>
     {/* {imageUrl && (
          <div className="image-window">
          <img src={imageUrl} alt="Generated Model" />
          <button onClick={clearImage} className="clr-button">
            Clear Image
          </button>
        </div>
      )} */}
      {imageUrl && (
  <div className="image-window">
    <img src={imageUrl} alt="Generated Model" />
    <button onClick={clearImage} className="clr-button">
      Clear Image
    </button>
    {showButton && (
        <a href={imageUrl} download="generated_model.png" style={{ display: 'block', marginTop: '10px' }}>
          <button style={{
            padding: '10px 20px',
            border: '1px solid #007bff',
            background: '#007bff',
            color: 'white',
            fontSize: '16px',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            View Image
          </button>
        </a>
      )}
  </div>
)}


        {showWarning && (
          <div style={{ color: 'red', fontSize: '20px', marginTop: '200px',marginLeft:'70px' }}>
           ⚠️ Please choose a date!
          </div>
        )}
      </div>
    
    </div>
  );
};

export  default NewModel ;

// import React, { useState } from 'react';
// import { Sidebar } from '../../sidebar/sidebar';
// import UsernameTypewriter from '../../components/UsernameTypewriter';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
// import './newmodel.css';

// const NewModel = () => {
//   const [startDate, setStartDate] = useState(null);
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [dateSelected, setDateSelected] = useState(false);
//   const [showWarning, setShowWarning] = useState(false);
//   const [daysToSelectedDate, setDaysToSelectedDate] = useState(null);
//   const [imageUrl, setImageUrl] = useState(null);
//   const [isProcessing, setIsProcessing] = useState(false);

//   const tomorrow = new Date();
//   tomorrow.setDate(tomorrow.getDate() + 1);

//   const handleDateChange = (date) => {
//     setStartDate(date);
//     setDateSelected(true);
//     setShowWarning(false);
//   };

//   const closeDatePicker = () => {
//     setShowDatePicker(false);
//   };


//   const clearImage = () => {
//     setImageUrl(null);
//   };
//   // const generateModel = () => {
//   //   if (!dateSelected) {
//   //     setShowWarning(true);
//   //   } else {
//   //     setShowWarning(false);
//   //     // Add your model generation logic here
//   //   }
//   // };

//   // const generateModel = () => {
//   //   const today = new Date();
//   //   if (!startDate || startDate <= today) {
//   //     setShowWarning(true);
//   //   } else {
//   //     setShowWarning(false);
//   //     const timeDifference = startDate - today;
//   //     const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

//   //     // Sending API requests for variables A, B, C, D, and E
//   //     const variables = ['A', 'B', 'C', 'D', 'E'];
//   //     variables.forEach(variable => sendApiRequest(variable, daysDifference));
//   //   }
//   // };



//   // const sendApiRequest = async (variable, days) => {
//   //   const apiUrl = 'http://localhost:8080/demandpred/predict'; 
//   //   const data = {
//   //     shoe_model: variable,
//   //     days: days
//   //   };

//   //   try {
//   //     const response = await fetch(apiUrl, {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify(data),
//   //     });

//   //     if (!response.ok) {
//   //       throw new Error(`Error: ${response.status}`);
//   //     }

//   //     const result = await response.json();
//   //     console.log(response)
//   //     console.log(`Success for ${variable}: `, result);
//   //   } catch (error) {
//   //     console.error('Error sending API request:', error);
//   //   }
//   // };

// //   const generateModel = async () => {
// //     const today = new Date();
// //     if (!startDate || startDate <= today) {
// //         setShowWarning(true);
// //     } else {
// //         setShowWarning(false);
// //         const timeDifference = startDate - today;
// //         const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

// //         // Sending API requests for variables A, B, C, D, and E
// //         const variables = ['A', 'B', 'C', 'D', 'E'];
// //         const results = await Promise.all(variables.map(variable => sendApiRequest(variable, daysDifference)));

// //         // Processing the results to find the top 3 shoe models based on the last value of filteredSales
// //         const sortedResults = results
// //             .map(result => ({
// //                 shoe_model: result.shoe_model,
// //                 lastSale: result.filteredSales[result.filteredSales.length - 1]
// //             }))
// //             .sort((a, b) => b.lastSale - a.lastSale)
// //             .slice(0, 3);

// //         console.log('Top 3 shoe models:', sortedResults);
// //     }
// // };

// const generateModel = async () => {
//   const today = new Date();
//   if (!startDate || startDate <= today) {
//       setShowWarning(true);
//   } else {
//       setIsProcessing(true);
//       setShowWarning(false);
     
//       const timeDifference = startDate - today;
//       const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

//       // Sending API requests for variables A, B, C, D, and E
//       const variables = ['A', 'B', 'C', 'D', 'E'];
//       const results = await Promise.all(variables.map(variable => sendApiRequest(variable, daysDifference)));

//       // Processing the results to find the top 3 shoe models based on the last value of filteredSales
//       const sortedResults = results
//           .map(result => ({
//               shoe_model: result.shoe_model,
//               lastSale: result.filteredSales[result.filteredSales.length - 1]
//           }))
//           .sort((a, b) => b.lastSale - a.lastSale)
//           .slice(0, 3);

//       console.log('Top 3 shoe models:', sortedResults);

//       // Assuming you have descriptions for each model
//       const descriptions = {
//           'A': 'This footwear is designed for off-road routes with rugged soles for grip on uneven terrain. They are durable, provide good ankle support, and feature protective toe caps to shield against rocks and debris',
//           'B': 'This footwear is designed for grass fields, featuring a low-cut design for agility and a lightweight synthetic upper for control. They have narrow, elongated spikes on the sole for excellent traction and speed, with a color scheme of black and neon green that symbolizes energy and quick movements, crucial for soccer players',
//           'C': 'This footwear is ideal for a gym or cross-training environment, these shoes offer versatility. They have a supportive design for lateral movements and are durable enough for various activities, from weightlifting to aerobic classes',
//           'D': 'This footwear is Built for pavement and smoother surfaces, these shoes offer more cushioning to absorb the impact of hard surfaces. They are lightweight with a breathable upper and are designed to enhance speed and stability',
//           'E': 'This boots  are designed for cold weather and snow, featuring insulation and waterproofing to keep feet warm and dry. They have a high-top design to prevent snow entry, made from durable materials like leather or synthetic fabric. The boots boast a thick, rugged sole for good traction on icy surfaces, and their color scheme typically includes shades of brown and black, sometimes with fur lining  trim for extra warmth and style'
//       };

//       // Getting the descriptions for the top 3 models
//       // const prompt = sortedResults.map(model => descriptions[model.shoe_model]).join(' ');
//       const promptDescriptions = sortedResults.map(model => descriptions[model.shoe_model]).join(' ');
//       const prompt = `${promptDescriptions} ,Based on these descriptions, give me an image of a new shoe model.`;
//       // send this prompt to your API to generate an image
//       sendDescriptionToApi(prompt);
//       setIsProcessing(false);
//   }
 
// };


// const sendDescriptionToApi = async (prompt) => {
//   try {
//       const response = await fetch('http://localhost:8080/abc/chat', {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ prompt })
//       });

//       if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       setImageUrl(data.imageUrl);
//       console.log("Image URL:", data.imageUrl);
   
//   } catch (error) {
//       console.error('Error sending description to API:', error);
//   }
// };








// const sendApiRequest = async (variable, days) => {
//     const apiUrl = 'http://localhost:8080/demandpred/predict'; 
//     const data = {
//         shoe_model: variable,
//         days: days
//     };

//     try {
//         const response = await fetch(apiUrl, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         });

//         if (!response.ok) {
//             throw new Error(`Error: ${response.status}`);
//         }

//         const result = await response.json();
//         console.log(`Success for ${variable}: `, result);
        
//         return { shoe_model: variable, filteredSales: result.filteredSales };
//     } catch (error) {
//         console.error('Error sending API request:', error);
//         return { shoe_model: variable, filteredSales: [] }; // Return an empty array for filteredSales on error
//     }
// };





//   const backgroundimg = new URL("../Shoe_Images/footwearbg.jpg", import.meta.url);
//   const backgroundimg2 = new URL("../Shoe_Images/bgimg.jpg", import.meta.url);

//   return (
//     <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
//       <img 
//         src={backgroundimg}
//         alt="Background" 
//         style={{ 
//           position: 'fixed', 
//           width: '19.3%', 
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
//         <div className="writer1" >
//           <UsernameTypewriter />
//         </div>
//         <div className="new-model-text" style={{ position: 'absolute', top: 0, color: 'white', fontSize: '100px' }}>
//           NEW MODEL 
//         </div>
//         <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green', marginTop: '75px', marginLeft: '100px' }} />

//         <div style={{ position: 'fixed',  alignItems: 'center',left:'25%', zIndex: 1000 ,marginTop:'10%' }}>
//           <div style={{ background: 'transparent', borderRadius: '5px' }}>
//           <button
//             onClick={generateModel}
//             style={{
//               padding: '10px 10px',
//               border: '2px solid #ff4076c6',
//               background: 'transparent',
//               color: 'white',
//               fontSize: '16px',
//               borderRadius: '5px',
//               cursor: 'pointer',
//               width: '200px'
//             }}
//           >
//             Generate New Model
//           </button>
//           {isProcessing && (
//   <div  style={{ color: 'yellow', position:'fixed', marginTop:'400px' ,marginLeft:'750px' , fontSize:'20px'}}>
//     Processing
//     <span className="dot">.</span>
//     <span className="dot">.</span>
//     <span className="dot">.</span>
//   </div>
// )}

//             {showDatePicker && (
//               <div style={{ position: 'absolute', top: '100%', left: '0', width: 'auto' }}>
//                 <DatePicker
//                   selected={startDate}
//                   onChange={handleDateChange}
//                   minDate={new Date()}
//                   inline
//                 />
//                 <button
//                   onClick={closeDatePicker}
//                   style={{
//                     display: 'block',
//                     margin: '10px auto',
//                     padding: '5px 10px',
//                     background: 'transparent',
//                     color: 'white',
//                     fontSize: '16px',
//                     borderRadius: '5px',
//                     cursor: 'pointer'
//                   }}
//                 >
//                   OK
//                 </button>
//               </div>
//             )}
//           </div>
//           <button
//               onClick={() => setShowDatePicker(!showDatePicker)}
//               style={{
//                 padding: '10px 20px',
//                 border: '2px solid #ff4076c6',
//                 background: 'transparent',
//                 color: 'white',
//                 fontSize: '16px',
//                 borderRadius: '5px',
//                 cursor: 'pointer',
//                 width: '200px',
                
//               }}
//             >
//               Select a date
//             </button>
//           {/* {imageUrl && (
//                 <div>
//                     <h3>Generated Image:</h3>
//                     <img src={imageUrl} alt="Generated Shoe Model" style={{ maxWidth: '100%', height: 'auto' }} />
//                 </div>
//             )} */}  
        
    
//      </div>
//      {imageUrl && (
//           <div className="image-window">
//           <img src={imageUrl} alt="Generated Model" />
//           <button onClick={clearImage} className="clr-button">
//             Clear Image
//           </button>
//         </div>
//       )}

//         {showWarning && (
//           <div style={{ color: 'red', fontSize: '20px', marginTop: '200px',marginLeft:'70px' }}>
//            ⚠️ Please choose a date!
//           </div>
//         )}
//       </div>
    
//     </div>
//   );
// };

// export { NewModel };




// import React, { useState } from 'react' ------------------version1---------------------;
// import { Sidebar } from '../../sidebar/sidebar';
// import UsernameTypewriter from '../../components/UsernameTypewriter';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faCheckCircle  } from '@fortawesome/free-solid-svg-icons';
// import './newmodel.css';

// const NewModel = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);

//   const handleDateChange = (date) => {
//     setStartDate(date);
//   };

//   const closeDatePicker = () => {
//     setShowDatePicker(false);
//   };

//   const backgroundimg = new URL("./footwearbg.jpg", import.meta.url);
//   const backgroundimg2 = new URL("./bgimg.jpg", import.meta.url);

//   return (
//     <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
//       <img 
//         src={backgroundimg}
//         alt="Background" 
//         style={{ 
//           position: 'fixed', 
//           width: '19.3%', 
//           height: '100vh', 
//           objectFit: 'cover', 
//           zIndex: -1,
//           // marginRight: '200px'
//         }} 
//       />

//       <div 
//         style={{ 
//           position: 'fixed',
//           width: '90%', 
//           height: '100vh', 
//           marginLeft: '19.5%',
//           zIndex: -1,
//           backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 3) 20%, transparent 100%), url(${backgroundimg2})`,
//           backgroundSize: 'cover',
//           // backgroundPosition: 'center',
//           opacity: '0.5',
        
//         }} 
//       >
//         {/* Image is now part of the background in the div */}
//       </div>

//       <Sidebar />
//       <div className="content">
//         <div className="writer">
//           <UsernameTypewriter />
//         </div>

//         {/* New code for "NEW MODEL" text with icon */}
//         <div className="new-model-text" style={{ position: 'absolute', top: 0, left: 0, color: 'white', fontSize: '100px', padding: '20px', position: 'relative' }}>
//         <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green', marginRight: '5px' }} /> NEW MODEL
//         </div>

//         <div style={{ position: 'fixed', marginLeft: '20px', zIndex: 1000 }}>
//           {/* Rest of your content */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export { NewModel };

