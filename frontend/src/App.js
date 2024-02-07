
import './App.css';
import { Home } from './collections/home';
import { UserProf } from './collections/userprof';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

<BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/userprofile' element={<UserProf/>}/> 
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
