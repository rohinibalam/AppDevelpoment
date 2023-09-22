import React from 'react';
import '../assets/css/Navbar.css'; // Import your CSS file for the navbar styling
import { Link } from 'react-router-dom';

function Navbar({ onLogout }) {
  
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h1>HomeHelper</h1>
      </div>
      <div className="navbar-right">
      <Link to="/"><button onClick={onLogout}>Logout</button></Link>
      </div>

    </div>
  );
}

export default Navbar;
