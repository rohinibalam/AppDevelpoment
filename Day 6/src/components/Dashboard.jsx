import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/userslice';
import '../assets/css/Dashboard.css';
import Navbar from './Navbar'; // Import Navbar
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { FaHome , FaDatabase, FaUserPlus, FaMoneyBill, FaBell, FaTasks , FaDollarSign } from 'react-icons/fa';

const Dashboard = () => {
  const user = useSelector(selectUser);
  const email = user.user && user.user.email ? user.user.email : 'Guest';
  const navigate = useNavigate();
  const data = [
    { month: 'Jan', expenses: 1000 },
    { month: 'Feb', expenses: 1500 },
    { month: 'Mar', expenses: 1200 },
    { month: 'Apr', expenses: 1800 },
    { month: 'May', expenses: 2000 },
    { month: 'Jun', expenses: 2500 },
  ];

  // Function to handle the "Privacy Policy" link click
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

  // Function to handle the click event for "Append Home"
  const handleAppendHomeClick = () => {
    navigate('/AppendHome'); // Navigate to the "Append Home" page
  };

  const handleTaskListClick = () => {
    navigate('/Tasklist'); // Navigate to the "Task List" page
  };

  const handleReminderClick = () => {
    navigate('/Reminder'); // Navigate to the "Reminders" page
  };

  const handleExpenseTrackingClick = () => {
    navigate('/Expensetracking'); // Navigate to the "Expenses Tracking" page
  };

  const handlePaymentClick = () => {
    navigate('/Payment'); // Navigate to the "Payments" page
  };

  const handleDashboardClick = () => {
    navigate('/Dashboard'); // Navigate to the "Dashboard" page
  };

  return (
    <>
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

      <Navbar />

      <div className="title-bar">
        <h1>Welcome, {email}!</h1>
      </div>

      <div>
        <button type="submit" className="Homedetails">
          Home Details
        </button>
      </div>
      <div>
        <button type="submit" className="Servicedetails">
          Service Details
        </button>
      </div>
      <div>
        <button type="submit" className="Taskstatus">
          Task Status
        </button>
      </div>
      <div className="chart-container">
        <h2>Monthly Expenses</h2>
        <BarChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="expenses" fill="#2c3e50" />
        </BarChart>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} HomeHelper. All Rights Reserved.</p>
          <div className="footer-links">
            {/* Use onClick to navigate to the Privacy Policy page */}
            <span onClick={handlePrivacyPolicyClick}>Privacy Policy</span> &emsp;&emsp;

            {/* Use onClick to navigate to the Terms and Conditions page */}
            <span onClick={handleTermsClick}>Terms and Conditions</span> &emsp;&emsp;
            <span onClick={handleFAQClick}>FAQ</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Dashboard;
