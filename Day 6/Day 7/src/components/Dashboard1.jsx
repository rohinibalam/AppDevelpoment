// Dashboard1.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/userslice';
import '../assets/css/Dashboard1.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Dashboard1 = () => {
  const user = useSelector(selectUser);
  const email = user.user && user.user.email ? user.user.email : 'Guest';
  const navigate = useNavigate();

  // Sample data for the bar chart (Monthly Expenses)
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

  return (
    <>
     
     

    

      {/* Containers for Home Details and Service Details */}
      <div className="container">
        <div className="dashboard-container">
          <h2>Home Details</h2>
          {/* Add your content for Home Details here */}
        </div>
        </div>
        <div className='container'>
        <div className="dashboard-container">
          <h2>Service Details</h2>
          {/* Add your content for Service Details here */}
        </div>
        </div>
      

      {/* Monthly Expenses Chart */}
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

      
    </>
  );
};

export default Dashboard1;
