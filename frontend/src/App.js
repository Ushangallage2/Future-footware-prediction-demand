import './App.css';
import './collections/pages/loginPage/loginPage.css';
import Home from './collections/pages/homePage/home';
import { UserProf } from './collections/pages/userProfile/userprof';
import { NewModel } from './collections/pages/newModelPage/newmodel';
import { Settings } from './collections/pages/settingsPage/settings';
import React, { useState } from 'react';
import {Testing} from './collections/pages/loginPage/loginPage';
import DemandPrediction from './collections/pages/demandPrediction/demandPrediction';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ManageUsers } from './collections/pages/manageUser/manageUsers';

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
      <Route  path='/demandPrediction' element={<DemandPrediction />} />
      <Route path='/loginPage' element={<Testing/>}/> 
      <Route path='/userprofile' element={<UserProf/>}/>
      <Route path='/settings' element={<Settings/>}/> 
      <Route path='/newmodel' element={<NewModel/>}/> 
      <Route path='/manageUsers' element={<ManageUsers/>}/> 

      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;