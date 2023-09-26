// Contact.jsx

import React from 'react';
import '../assets/css/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Have questions, feedback, or need assistance? Feel free to get in touch
        with us. We're here to help!
      </p>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: support@homehelper.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
      <div className="contact-form">
        <h2>Contact Form</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
