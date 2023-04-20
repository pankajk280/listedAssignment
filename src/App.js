import React from 'react';
import './App.css';
import Dashboard from './Modules/Dashboard';
import Signin from './Modules/SignIn'
import { BrowserRouter , Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route exact path='/' element={<Signin/>}/>
      <Route exact path='/dashboard' element={<Dashboard/>}/>
     </Routes>
     </BrowserRouter>
    
    </>
    );
}

export default App;
