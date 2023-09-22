import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/userslice';
import '../assets/css/Dashboard.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const user = useSelector(selectUser);
  const email = user.user && user.user.email ? user.user.email : 'Guest';
  const navigate = useNavigate();
  const handlePrivacyPolicyClick = () => {
    navigate('/PrivacyPolicy'); // Navigate to the Privacy Policy page
  };

  // Function to handle the "Terms and Conditions" link click
  const handleTermsClick = () => {
    navigate('/'); // Navigate to the Terms and Conditions page
  };

  return (
    <>
      <div className="bar">
        <Sidebar />
      </div>
      <div className="bar1">
        <Navbar />
      </div>

      <div className="title-bar">
        <h1>Welcome, {email}!</h1>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="#" onClick={handlePrivacyPolicyClick}>Privacy Policy</a>
            <a href="#" onClick={handleTermsClick}>Terms and Conditions</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Dashboard;
