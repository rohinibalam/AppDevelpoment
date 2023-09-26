import React from 'react';
import Navbar1 from './Navbar1';
// import Sidebar from './Sidebar';
import '../assets/css/PrivacyPolicy.css'; // Import your CSS file
import Footer1 from './Footer1';


function PrivacyPolicy() {
  return (
    <>
    {/* <div className="bar"> */}
        {/* <Sidebar /> */}
      {/* </div> */}
    <div className="bar2">
        <Navbar1 />
      </div>
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>

      <p>
        Welcome to HomeHelper's Privacy Policy. At HomeHelper, we value your
        privacy and strive to protect your personal information. This policy
        outlines the types of information we collect, how we use it, and how we
        safeguard your data.
      </p>

      <h2>Information We Collect</h2>

      <p>
        We collect information that you provide when using our services. This
        may include personal details such as your name, email address, and
        contact information. We also collect data about your interactions with
        our platform.
      </p>

      <h2>How We Use Your Information</h2>

      <p>
        We use your information to provide and improve our services, customize
        your experience, and communicate with you. We do not share your personal
        data with third parties without your consent unless required by law.
      </p>

      <h2>Security</h2>

      <p>
        We take security seriously and employ measures to protect your
        information. However, no method of transmission over the internet or
        electronic storage is entirely secure. We cannot guarantee absolute
        security but will continuously work to safeguard your data.
      </p>

      <h2>Changes to this Policy</h2>

      <p>
        We may update our Privacy Policy to reflect changes to our practices or
        for other operational, legal, or regulatory reasons. We will notify you
        of any changes by posting the new policy on this page.
      </p>

      <h2>Contact Us</h2>

      <p>
        If you have any questions or concerns about our Privacy Policy, please
        contact us at privacy@homehelper.com.
      </p>
    </div>
    <Footer1/>
    </>
  );
}

export default PrivacyPolicy;
