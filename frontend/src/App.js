import './App.css';
import Home from './collections/pages/homePage/home';
// import { Home } from './collections/pages/homePage/home';
import { UserProf } from './collections/pages/userProfile/userprof';
import { NewModel } from './collections/pages/newModelPage/newmodel';
import { Settings } from './collections/pages/settingsPage/settings';
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import Login from './collections/pages/loginPage/loginPage';
import React, { useState } from 'react';
=======
import {Login} from './collections/pages/loginPage/login'
import DemandPrediction from './collections/pages/demandPrediction/demandPrediction';

// import Settings from './settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


>>>>>>> main

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
      <Route path='/demandPrediction' element={<DemandPrediction />} />
      <Route path='/newmodel' element={<NewModel/>}/> 
      <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;