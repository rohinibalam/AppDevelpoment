import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Sidebar.css';
import { FaHome , FaDatabase, FaUserPlus, FaMoneyBill, FaBell, FaTasks , FaDollarSign } from 'react-icons/fa';
function Sidebar() {
    const navigate = useNavigate(); // Initialize navigate

  // Function to handle the click event for "Append Home"
  const handleAppendHomeClick = () => {
    navigate('/AppendHome'); // Navigate to the "Append Home" page
  };
  return (
    <div className="sidebar">
        <div><h1 className='H'>HomeHelper</h1></div>
        <div className="sidebar-item">
        <FaHome />
        Dashboard
      </div>
      <div className="sidebar-item" onClick={handleAppendHomeClick}>
        <FaUserPlus /> Append Home
      </div>
      <div className="sidebar-item">
        <FaDatabase /> Query
      </div>
      <div className="sidebar-item">
        <FaTasks /> Task List
      </div>
      <div className="sidebar-item">
        <FaBell /> Reminders
      </div>
      <div className="sidebar-item">
        <FaDollarSign />
        Expenses Tracking
      </div>
      <div className="sidebar-item">
        <FaMoneyBill /> Payments
      </div>
    </div>
  );
}

export default Sidebar;
