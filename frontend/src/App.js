
import './App.css';
import { Home } from './collections/home';
// import { Sidebar } from './collections/sidebar';
import { UserProf } from './collections/userprof';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

<BrowserRouter>
      {/* <Sidebar/> */}
      {/* <UserProf/> */}
      <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/userprofile' element={<UserProf/>}/> // use element prop instead of children prop
          {/* You can add more routes for other sidebar items here */}
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
