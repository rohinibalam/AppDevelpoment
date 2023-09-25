import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Sidebar.css';
import { FaHome , FaDatabase, FaUserPlus, FaMoneyBill, FaBell, FaTasks , FaDollarSign } from 'react-icons/fa';
function Sidebar() {
    const navigate = useNavigate(); // Initialize navigate
    const handleDashboardClick = () => {
        navigate('/Dashboard'); // Navigate to the "Append Home" page
      };

  // Function to handle the click event for "Append Home"
  const handleAppendHomeClick = () => {
    navigate('/AppendHome'); // Navigate to the "Append Home" page
  };
  const handleTaskListClick = () => {
    navigate('/Tasklist'); // Navigate to the "Append Home" page
  };
  const handleReminderClick = () => {
    navigate('/Reminder'); // Navigate to the "Append Home" page
  };
  const handleExpenseTrackingClick = () => {
    navigate('/ExpenseTracking'); // Navigate to the "Append Home" page
  };
  const handlePaymentClick = () => {
    navigate('/Payment'); // Navigate to the "Append Home" page
  };
  return (
    <div className="sidebar">
        <div><h1 className='H'>HomeHelper</h1></div>
        <div className="sidebar-item" onClick={handleDashboardClick} >
        <FaHome />
        Dashboard
      </div>
      <div className="sidebar-item" onClick={handleAppendHomeClick}>
        <FaUserPlus /> Append Home
      </div>
      <div className="sidebar-item">
        <FaDatabase /> Query
      </div>
      <div className="sidebar-item" onClick={handleTaskListClick}>
        <FaTasks /> Task List
      </div>
      <div className="sidebar-item" onClick={handleReminderClick}>
        <FaBell /> Reminders
      </div>
      <div className="sidebar-item" onClick={handleExpenseTrackingClick}>
        <FaDollarSign />
        Expenses Tracking
      </div>
      <div className="sidebar-item" onClick={handlePaymentClick}>
        <FaMoneyBill /> Payments
      </div>
    </div>
  );
}

export default Sidebar;
