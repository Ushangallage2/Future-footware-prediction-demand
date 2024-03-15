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

import React from 'react';
import './newmodel.css';
import '../../../App.css';
import { Sidebar } from '../../sidebar/sidebar';
import SearchAppBar from './searchbar';
import shoe01 from '../Shoe_Images/shoe01.png';
import shoe02 from '../Shoe_Images/shoe02.png';
import shoe03 from '../Shoe_Images/shoe03.png';
import shoe04 from '../Shoe_Images/shoe04.png';
import UsernameTypewriter from '../../components/UsernameTypewriter'; 

export function NewModel(props) {
  return (
    <>
    <div className='user-sec'>
        <Sidebar/>
        
        <div className='model-container'>
            <h1>New Models</h1>
            <div className="search-bar">
              <SearchAppBar/>
            </div>
            <p>New models designed according to the model number submitted</p>
            <div className='old-models'>
              {/* <dev className="shoepics"> */}
              <img src={shoe01} alt="pic1" className='pic1'/>
              <img src={shoe02} alt="pic1" className='pic2'/>
              <img src={shoe03} alt="pic1" className='pic3'/>
              <img src={shoe04} alt="pic1" className='pic4'/>
              {/* </dev> */}
            </div>
          </div>
    </div>
    </>
  )
}
export default NewModel;