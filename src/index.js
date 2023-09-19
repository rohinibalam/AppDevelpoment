import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

