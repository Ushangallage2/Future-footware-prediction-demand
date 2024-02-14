
import './App.css';
import Home from './collections/pages/homePage/home';
// import { Home } from './collections/pages/homePage/home';
import { UserProf } from './collections/pages/userProfile/userprof';
import { NewModel } from './collections/pages/newModelPage/newmodel';
import { Settings } from './collections/pages/settingsPage/settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import Login from './collections/pages/loginPage/loginPage';
import React, { useState } from 'react';

function App() {
  return (
  //   <div>
  //   <h1>My React Login App</h1>
  //   <Login />
  // </div>
    
    <div className="App">
 <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/userprofile' element={<UserProf/>}/>
      <Route path='/settings' element={<Settings/>}/> 
      <Route path='/newmodel' element={<NewModel/>}/> 
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;