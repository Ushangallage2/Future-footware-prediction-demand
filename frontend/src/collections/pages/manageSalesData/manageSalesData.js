import React from 'react';
import '../../../App.css';
import { Sidebar } from '../../sidebar/sidebar';
import UsernameTypewriter from '../../components/UsernameTypewriter';

const ManageSalesData = () => {
  return (
    
    <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
      <Sidebar />
      <div className="content">
      <UsernameTypewriter style={{ position: 'fixed', top: '5px', right: '5px', color: 'yellow', fontSize: '16px', fontWeight: 'bold' }} />
        <div className="username-typewriter">
        </div>
        <h1 style={{ textAlign: 'center' }}>Coming Soon!</h1>
      </div>
    </div>
  );
};

export {ManageSalesData};