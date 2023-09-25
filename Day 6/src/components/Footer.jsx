// Footer.jsx

import React from 'react';
import '../assets/css/Footer.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer1 = () => {
  const navigate = useNavigate();

  const handlePrivacyPolicyClick = () => {
    navigate('/PrivacyPolicy'); // Navigate to the Privacy Policy page
  };

  // Function to handle the "Terms and Conditions" link click
  const handleTermsClick = () => {
    navigate('/Terms'); // Navigate to the Terms and Conditions page
  };

  const handleFAQClick = () => {
    navigate('/FAQ'); // Navigate to the FAQ page
  };

  return (
    <footer className="footer">
      <div className="foote-content">
        <p>&copy; {new Date().getFullYear()} HomeHelper. All Rights Reserved.</p>
        <div className="footer-links">
          <span onClick={handlePrivacyPolicyClick}>Privacy Policy</span> &emsp;&emsp;
          <span onClick={handleTermsClick}>Terms and Conditions</span> &emsp;&emsp;
          <span onClick={handleFAQClick}>FAQ</span> &emsp;&emsp;
          <Link to="/AppendHome">Append Home</Link> &emsp;&emsp;
          <Link to="/Query">Query</Link> &emsp;&emsp;
          <Link to="/TaskList">Task List</Link> &emsp;&emsp;
          <Link to="/Reminder">Reminder</Link> &emsp;&emsp;
          <Link to="/ExpensesTracking">Expenses Tracking</Link> &emsp;&emsp;
          <Link to="/Payments">Payments</Link>
        </div>
        </div>
        <div className="social-media-links">
          <Link to="#" className="social-media-icon">
            <FaFacebook />
          </Link>
          <Link to="#" className="social-media-icon">
            <FaTwitter />
          </Link>
          <Link to="#" className="social-media-icon">
            <FaInstagram />
          </Link>
      </div>
    </footer>
  );
};

export default Footer1;
