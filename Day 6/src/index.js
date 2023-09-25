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
import Terms from './components/Terms';
import Dashboard1 from './components/Dashboard1';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Tasklist from './components/Tasklist';
import Reminder from './components/Reminder';
import AboutUs from './components/Aboutus';
import Contact from './components/Contact';
import Home from './components/Home';
import Payment from './components/Payment';
import CreditCardPayment from './components/CreditCardPayment';
import BankTransferPayment from './components/BankTransferPayment';
import ExpenseTracking from './components/ExpenseTracking';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={Store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/Dashboard1" element={<Dashboard1/>}/>
      <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
      <Route path="/AppendMembers"element={<AppendMembers/>}/>
      <Route path="/AppendHome"element={<AppendHome/>}/>
      <Route path="/PrivacyPolicy"element={<PrivacyPolicy/>}/>
      <Route path="/Navbar1"element={<Navbar1/>}/>
      <Route path="/Terms" element={<Terms/>} /> 
      <Route path="/FAQ" element={<FAQ/>} /> 
      <Route path="/Footer" element={<Footer/>} /> 
      <Route path="/Tasklist" element={<Tasklist/>} /> 
      <Route path="/Reminder" element={<Reminder/>} /> 
      <Route path="/Aboutus" element={<AboutUs/>} /> 
      <Route path="/Contact" element={<Contact/>} /> 
      <Route path="/Home" element={<Home/>} /> 
      <Route path="/Payment" element={<Payment/>} /> 
      <Route path="/CreditCardPayment" element={<CreditCardPayment/>} /> 
      <Route path="/BankTransferPayment" element={<BankTransferPayment/>} /> 
      <Route path="/ExpenseTracking" element={<ExpenseTracking/>} /> 

    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

