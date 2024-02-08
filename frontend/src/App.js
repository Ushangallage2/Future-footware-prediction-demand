
import './App.css';
import { Home } from './collections/home';
import { UserProf } from './collections/userprof';
import { NewModel } from './collections/newModel';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

<BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/userprofile' element={<UserProf/>}/> 
      <Route path='/newModel' element={<NewModel/>}/> 
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
