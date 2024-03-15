// import React from 'react';
// import { Sidebar } from '../../sidebar/sidebar';
// import UsernameTypewriter from '../../components/UsernameTypewriter';

// const NewModel = () => {
//   return (
    
//     <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
//       <Sidebar />
//       <div className="content">
//       <UsernameTypewriter style={{ position: 'fixed', top: '5px', right: '5px', color: 'yellow', fontSize: '16px', fontWeight: 'bold' }} />
//         <div className="username-typewriter">
//         </div>
//         <h1 style={{ textAlign: 'center' }}>Coming Soon!</h1>
//       </div>
//     </div>
//   );
// };

// export {NewModel};

// import React from 'react';
// import './newmodel.css';
// import '../../../App.css';
// import { Sidebar } from '../../sidebar/sidebar';
// import SearchAppBar from './searchbar';
import shoe01 from '../Shoe_Images/shoe01.png';
import shoe02 from '../Shoe_Images/shoe02.png';
import shoe03 from '../Shoe_Images/shoe03.png';
import shoe04 from '../Shoe_Images/shoe04.png';
// import UsernameTypewriter from '../../components/UsernameTypewriter'; 

// export function NewModel(props) {
//   return (
//     <>
//     <div className='user-sec'>
//         <Sidebar/>
        
//         <div className='model-container'>
//             <h1>New Models</h1>
//             <div className="search-bar">
//               <SearchAppBar/>
//             </div>
//             <p>New models designed according to the model number submitted</p>
//             <div className='old-models'>
//               {/* <dev className="shoepics"> */}
//               <img src={shoe01} alt="pic1" className='pic1'/>
//               <img src={shoe02} alt="pic1" className='pic2'/>
//               <img src={shoe03} alt="pic1" className='pic3'/>
//               <img src={shoe04} alt="pic1" className='pic4'/>
//               {/* </dev> */}
//             </div>
//           </div>
//     </div>
//     </>
//   )
// }
// export default NewModel;

import React, { useState } from 'react';
import { Sidebar } from '../../sidebar/sidebar';
import UsernameTypewriter from '../../components/UsernameTypewriter';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './newmodel.css';

const NewModel = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const closeDatePicker = () => {
    setShowDatePicker(false);
  };

  const backgroundimg = new URL("./footwearbg.jpg", import.meta.url);
  const backgroundimg2 = new URL("./bgimg.jpg", import.meta.url);

  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
      <img 
        src={backgroundimg}
        alt="Background" 
        style={{ 
          position: 'absolute', 
          width: '23%', 
          height: '100vh', 
          objectFit: 'cover', 
          zIndex: -1,
          // marginRight: '200px'
        }} 
      />

      <div 
        style={{ 
          position: 'fixed',
          width: '100%', 
          height: '100vh', 
          marginLeft: '20%',
          zIndex: -1,
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 3) 20%, transparent 100%), url(${backgroundimg2})`,
          backgroundSize: 'cover',
          // backgroundPosition: 'center',
          opacity: '0.5',
        
        }} 
      >
        {/* Image is now part of the background in the div */}
      </div>

      <Sidebar />
      <div className="content">
        <UsernameTypewriter style={{ position: 'fixed', top: '5px', right: '5px', color: 'yellow', fontSize: '16px', fontWeight: 'bold' }} />
        <div className="username-typewriter"></div>

        <div style={{ position: 'fixed', marginLeft: '20px', zIndex: 1000 }}>
          <div 
            style={{
              background: 'transparent',
              borderRadius: '5px'
            }}
          >
            <button 
              onClick={() => setShowDatePicker(!showDatePicker)}
              style={{
                padding: '10px 20px',
                border: '2px solid #ff4076c6',
                background: 'transparent',
                color: 'white',
                fontSize: '16px',
                borderRadius: '5px',
                cursor: 'pointer'
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
                    color: '#ff4076c6',
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
            style={{
              marginTop: '10px',
              padding: '10px 20px',
              border: '2px solid #ff4076c6',
              background: 'transparent',
              color: 'white',
              fontSize: '16px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Generate New Model
          </button>
        </div>
      </div>
    </div>
  );
};

export { NewModel };