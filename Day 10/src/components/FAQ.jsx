import React from 'react';
import '../assets/css/FAQ.css'; // Import your CSS file for styling
import Navbar1 from './Navbar1';
import Footer1 from './Footer1';

function FAQ() {
  return (
    <>
    <div className="bar2">
        <Navbar1 />
      </div>
      
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-item">
        <h2>What is HomeHelper?</h2>
        <p>
          HomeHelper is a web application designed to simplify and streamline various aspects of managing and maintaining a home. It offers a range of features and functionalities to assist homeowners in organizing tasks, accessing services, and maintaining their property efficiently.
        </p>
      </div>

      <div className="faq-item">
        <h2>How do I create an account?</h2>
        <p>
          To create an account on HomeHelper, click on the "Sign Up" button on the login page. Fill out the required information and follow the registration process to create your account.
        </p>
      </div>

      <div className="faq-item">
        <h2>How can I add tasks for home maintenance?</h2>
        <p>
          You can add tasks for home maintenance by logging into your HomeHelper account and navigating to the "Tasks" section. Click on the "Add Task" button, provide the task details, set a due date, and save the task.
        </p>
      </div>
      <div className="faq-item">
        <h2>Is HomeHelper available as a mobile app?</h2>
        <p>
          Yes, HomeHelper is available as a mobile app for both Android and iOS devices. You can download the app from the Google Play Store or Apple App Store and access all the features on your mobile device.
        </p>
      </div>
      <div className="faq-item">
        <h2>Can I track my home expenses with HomeHelper?</h2>
        <p>
          Yes, HomeHelper allows you to track and manage your home-related expenses. You can categorize and record expenses, set budgets, and generate reports for analysis or financial planning purposes.
        </p>
      </div>

      <div className="faq-item">
        <h2>Is my personal information secure on HomeHelper?</h2>
        <p>
          HomeHelper takes the security and privacy of your personal information seriously. We use industry-standard security measures to protect your data, and you can review our Privacy Policy for more details on how we handle your information.
        </p>

      </div>



      {/* Add more FAQ items as needed */}
    </div>
    <Footer1/>
    </>
  );
}

export default FAQ;
