
import './App.css';
import Home from './collections/pages/homePage/home';
// import { Home } from './collections/pages/homePage/home';
import { UserProf } from './collections/pages/userProfile/userprof';
import { Settings } from './collections/pages/settingsPage/settings';
// import Settings from './settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

<BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/userprofile' element={<UserProf/>}/>
      <Route path='/settings' element={<Settings/>}/> 
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
