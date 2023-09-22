import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import AppendMembers from './components/AppendMembers';
import AppendHome from './components/AppendHome';
import { Provider } from 'react-redux';
import Store from './components/redux/store'
import Dashboard from './components/Dashboard';
import PrivacyPolicy from './components/PrivacyPolicy';
import Navbar1 from './components/Navbar1';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={Store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
      <Route path="/AppendMembers"element={<AppendMembers/>}/>
      <Route path="/AppendHome"element={<AppendHome/>}/>
      <Route path="/PrivacyPolicy"element={<PrivacyPolicy/>}/>
      <Route path="/Navbar1"element={<Navbar1/>}/>
      {/* <Route path="/terms-and-conditions" element={<TermsAndConditions />} /> */}

    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

