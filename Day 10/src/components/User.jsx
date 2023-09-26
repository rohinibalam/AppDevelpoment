import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaSignOutAlt } from 'react-icons/fa';
import '../assets/css/User.css';
import '../assets/images/Userhouse.jpg';

const UserHome = () => {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Implement your logout logic here
    navigate('/'); // Navigate to the Login page
  };

  // Function to handle home icon click
  const handleHomeClick = () => {
    navigate('/Home'); // Navigate to the Home page
  };

  return (
    <div className='Userhouse'>
    <div className="user-home">
      <div className="top-right-icons">
        <div className="icon" onClick={handleHomeClick}>
          <FaHome size={32} color="black" />
        </div>
        <div className="icon" onClick={handleLogout}>
          <FaSignOutAlt size={32} color="black" />
        </div>
      </div>
      <div className="center-content">
        <h1>Welcome to HomeHelper</h1>
        <section className="user-buttons">
          <button className="add-query-button">Add Query</button>
          <button className="assigned-tasks-button">Assigned Tasks</button>
        </section>
        {/* Add other content and components for the user home page */}
      </div>
    </div>
    </div>
  );
};

export default UserHome;
