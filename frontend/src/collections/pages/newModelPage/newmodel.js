

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


import React, { useState } from 'react';
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

  const handleDateChange = (date) => {
    setStartDate(date);
    setDateSelected(true);
    setShowWarning(false);
  };

  const closeDatePicker = () => {
    setShowDatePicker(false);
  };

  // const generateModel = () => {
  //   if (!dateSelected) {
  //     setShowWarning(true);
  //   } else {
  //     setShowWarning(false);
  //     // Add your model generation logic here
  //   }
  // };

  const generateModel = () => {
    if (!dateSelected || !startDate) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
      const today = new Date();
      const timeDifference = startDate - today;
      const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      setDaysToSelectedDate(daysDifference);

      // Sending API requests for variables A, B, C, D, and E
      const variables = ['A', 'B', 'C', 'D', 'E'];
      variables.forEach(variable => sendApiRequest(variable, daysDifference));
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
    } catch (error) {
      console.error('Error sending API request:', error);
    }
  };






  const backgroundimg = new URL("./footwearbg.jpg", import.meta.url);
  const backgroundimg2 = new URL("./bgimg.jpg", import.meta.url);

  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
      <img 
        src={backgroundimg}
        alt="Background" 
        style={{ 
          position: 'fixed', 
          width: '19.3%', 
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
          marginLeft: '19.5%',
          zIndex: -1,
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 100%, transparent 100%), url(${backgroundimg2})`,
          backgroundSize: 'cover',
          opacity: '0.5'
        }} 
      ></div>

      <Sidebar />
      <div className="content">
        <div className="writer">
          <UsernameTypewriter />
        </div>
        <div className="new-model-text" style={{ position: 'absolute', top: 0, color: 'white', fontSize: '100px' }}>
          NEW MODEL 
        </div>
        <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green', marginTop: '75px', marginLeft: '100px' }} />

        <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', marginLeft: '200px', zIndex: 1000 }}>
          <div style={{ background: 'transparent', borderRadius: '5px' }}>
            <button
              onClick={() => setShowDatePicker(!showDatePicker)}
              style={{
                padding: '10px 20px',
                border: '2px solid #ff4076c6',
                background: 'transparent',
                color: 'white',
                fontSize: '16px',
                borderRadius: '5px',
                cursor: 'pointer',
                marginRight: '100px',
                width: '200px'
              }}
            >
              Select a date
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
                    margin: '10px auto',
                    padding: '5px 10px',
                    background: 'transparent',
                    color: 'white',
                    fontSize: '16px',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}
                >
                  OK
                </button>
              </div>
            )}
          </div>

          <button
            onClick={generateModel}
            style={{
              padding: '10px 20px',
              border: '2px solid #ff4076c6',
              background: 'transparent',
              color: 'white',
              fontSize: '16px',
              borderRadius: '5px',
              cursor: 'pointer',
              marginLeft: '40px',
              width: '200px'
            }}
          >
            Generate New Model
          </button>
        </div>

        {showWarning && (
          <div style={{ color: 'red', fontSize: '20px', marginTop: '200px',marginLeft:'70px' }}>
           ⚠️ Please choose a date!
          </div>
        )}
      </div>
    </div>
  );
};

export { NewModel };




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

