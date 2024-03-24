

import React from 'react';
import '../manageUser/manageUsers.css';
import '../../../App.css';
import Table from './materialtable';
import { Sidebar } from '../../sidebar/sidebar';
import UsernameTypewriter from '../../components/UsernameTypewriter';

function ViewReport () {
  const col = [
    { field: "modelNumber", title: "modelNumber" },
    { field: "size", title: "size" },
    { field: "salesData", title: "salesData" },
    { field: "category", title: "category" },
    { field: "predictedSalesDemand", title: "predictedSalesDemand" }
  ];

 
  const backgroundimg = new URL("./footwearbg.jpg", import.meta.url);
  const backgroundimg2 = new URL("./bgimg.jpg", import.meta.url);
  return (

    <div style={{ position: 'fixed', display: 'flex', alignItems: 'flex-start'  }}>
        
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
      <div style={{marginLeft:'0%'}}>
    <Sidebar  />
    </div>
      <div className="form-container">
        <div className="writer" style={{ marginLeft:'24%'   }}>
          <UsernameTypewriter />
        </div>

        <div className="fadein">
        <Table col={col} />
      </div>
      </div>
    </div>
  );
}

 export default ViewReport;