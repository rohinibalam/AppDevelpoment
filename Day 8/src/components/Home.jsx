// Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css';
import '../assets/images/house.jpg';

const Home = () => {
  return (
    <div className="Homeimage">
    <div className="home-container">
      <h1>Welcome to HomeHelper</h1>
      <p>Your trusted partner for all your home needs.</p>
      <Link to="/">
        <button className="join-button">Join Now</button>
      </Link>
    </div>
    </div>
  );
};

export default Home;
