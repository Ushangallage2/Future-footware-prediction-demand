
import React from 'react';
import '../manageUser/manageUsers.css';
import '../../../App.css';
import Table from './materialtable';

import { Sidebar } from '../../sidebar/sidebar';
import UsernameTypewriter from '../../components/UsernameTypewriter';

function ManageSalesData() {
  const col = [
    { field: "id", title: "ID" },
    { field: "date", title: "Date" },
    { field: "salesValue", title: "Sales Data" }
  ];

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
          opacity: '0.7'
        }}
      ></div>
      <Sidebar />
      <div className="form-container">
        <div className="writer" >
          <UsernameTypewriter />
        </div>
        <div className="fadein" style={{ margin: '50px', marginTop: '100px' }}>
          <Table col={col} />
        </div>
      </div>
    </div>
  );
}

export { ManageSalesData};