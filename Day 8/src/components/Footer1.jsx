// Footer.jsx

import React from 'react';
import '../assets/css/Footer1.css';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer1 = () => {
  const navigate = useNavigate();

  const handlePrivacyPolicyClick = () => {
    navigate('/PrivacyPolicy'); // Navigate to the Privacy Policy page
  };

  const handleTermsClick = () => {
    navigate('/Terms'); // Navigate to the Terms and Conditions page
  };

  const handleFAQClick = () => {
    navigate('/FAQ'); // Navigate to the FAQ page
  };

  const handleAppendHomeClick = () => {
    navigate('/AppendHome'); // Navigate to the Append Home page
  };

  const handleQueryClick = () => {
    navigate('/Query'); // Navigate to the Query page
  };

  const handleTaskListClick = () => {
    navigate('/Tasklist'); // Navigate to the Task List page
  };

  const handleReminderClick = () => {
    navigate('/Reminder'); // Navigate to the Reminder page
  };

  const handleExpenseTrackingClick = () => {
    navigate('/ExpenseTracking'); // Navigate to the Expenses Tracking page
  };

  const handlePaymentClick = () => {
    navigate('/Payment'); // Navigate to the Payment page
  };

  return (
    <div>
      <footer className="footer1">
        <div className="footer1-content">
          <p>&copy; {new Date().getFullYear()} HomeHelper. All Rights Reserved.</p>
          <div className="footer1-links">
            <span onClick={handlePrivacyPolicyClick}>Privacy Policy</span> &emsp;&emsp;
            <span onClick={handleTermsClick}>Terms and Conditions</span> &emsp;&emsp;
            <span onClick={handleFAQClick}>FAQ</span> &emsp;&emsp;
            {/* <div onClick={handleAppendHomeClick}>Append Home</div> &emsp;&emsp;
            <div onClick={handleQueryClick}>Query</div> &emsp;&emsp;
            <div onClick={handleTaskListClick}>Task List</div> &emsp;&emsp;
            <div onClick={handleReminderClick}>Reminder</div> &emsp;&emsp;
            <div onClick={handleExpenseTrackingClick}>Expenses Tracking</div> &emsp;&emsp;
            <div onClick={handlePaymentClick}>Payments</div> */}
          </div>
        </div>
        <div className="social-media-links">
          <div className="social-media-icon">
            <FaFacebook />
          </div>
          <div className="social-media-icon">
            <FaTwitter />
          </div>
          <div className="social-media-icon">
            <FaInstagram />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer1;
