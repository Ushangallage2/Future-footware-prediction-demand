import './App.css';
import './collections/pages/loginPage/loginPage.css';
import Home from './collections/pages/homePage/home';
import  UserProf  from './collections/pages/userProfile/userprof';
import  NewModel  from './collections/pages/newModelPage/newmodel';
import React, { useContext,useState , useEffect} from 'react';
import { Testing } from './collections/pages/loginPage/loginPage';
import DemandPrediction from './collections/pages/demandPrediction/demandPrediction';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ManageUsers } from './collections/pages/manageUser/manageUsers';
import { useUser, UserProvider } from './collections/components/UserContext';
import { ManageSalesData } from './collections/pages/manageSalesData/manageSalesData';
import { BackgroundVideoPage } from './collections/pages/userProfile/backgroundVideoPage';
import ViewReport from './collections/pages/viewReport/viewReport';
import { PrivateRoutes } from './PrivateRoutes';
import io from 'socket.io-client';
const socket = io.connect("http://localhost:8080");



function App() {

  
  useEffect(() => {
    if (socket) {
      socket.on("recieveMessage", (data) => {
        console.log(data);
        alert(data.message);  // Alerting to all the users but the sender
      });

      // Clean up the event listener when the component unmounts
      return () => {
        socket.off("recieveMessage");
      };
    }
  }, [socket]);
  


  return (
    <UserProvider>
      <div className="App">
      
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Home  />} />
          <Route path='/loginPage' element={<Testing />} />
            <Route element={<PrivateRoutes />} >
              <Route path='/demandprediction' element={<DemandPrediction />} />
              <Route path='/backgroundVideoPage' element={<BackgroundVideoPage />} />
              <Route path='/userprofile' element={<UserProf />} />
              <Route path='/newmodel' element={<NewModel />} />
              <Route path='/manageSalesData' element={<ManageSalesData />} />
              <Route path='/viewReport' element={< ViewReport />} />
              <Route path='/manageUsers' element={<ManageUsers />} />
            </Route>
          </Routes>
        </BrowserRouter>
      
      </div>
    </UserProvider>
  );
}

export default App;