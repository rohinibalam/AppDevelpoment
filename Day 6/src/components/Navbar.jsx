import React from 'react';
import '../assets/css/Navbar.css'; // Import your CSS file for the navbar styling
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

function Navbar({ onLogout }) {
  const navigate = useNavigate(); // Get the navigate function

  const handleHomeClick = () => {
    navigate('/Home'); // Navigate to the Home page
  };

  const handleAboutUsClick = () => {
    navigate('/aboutus'); // Navigate to the About Us page
  };

  const handleContactClick = () => {
    navigate('/contact'); // Navigate to the Contact page
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <h1>HomeHelper</h1>
      </div>
      <div className="navbar-right">
        <span onClick={handleHomeClick}>Home</span>
        <span onClick={handleAboutUsClick}>About Us</span>
        <span onClick={handleContactClick}>Contact</span>
        <Link to="/"><button onClick={onLogout}>Logout</button></Link>
      </div>
    </div>
  );
}

export default Navbar;
