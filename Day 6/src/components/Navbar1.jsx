import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../assets/css/Navbar1.css';
import { FaHome } from 'react-icons/fa';

function Navbar1() {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle clicking the home icon
  const handleHomeClick = () => {
    navigate('/dashboard'); // Navigate to the Dashboard page
  };

  return (
    <div className="navbar1">
      <div className="navbar1-left">
        <h1>HomeHelper</h1>
      </div>
      <div className="navbar1-right">
        <button onClick={handleHomeClick}> {/* Use a button to trigger navigation */}
          <FaHome className="home-icon" />
        </button>
      </div>
    </div>
  );
}

export default Navbar1;
