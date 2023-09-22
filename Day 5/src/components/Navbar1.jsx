import React from 'react';
import { FaHome } from 'react-icons/fa';
import '../assets/css/Navbar1.css';

const Navbar1 = () => {
  return (
    <nav className="navbar1">
      <div className="navbar1-logo">
        <FaHome className="home-icon" />
      </div>
    </nav>
  );
};

export default Navbar1;
