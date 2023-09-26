import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/AppendHome.css';
import Navbar1 from './Navbar1';
import Footer1 from './Footer1';
import Sidebar from './Sidebar';

function AppendHomePage() {
    const navigate = useNavigate();
  const [address, setAddress] = useState('');
  const [emergencyContacts, setEmergencyContacts] = useState('');
  const [homeAppliances, setHomeAppliances] = useState('');
  const [schedules, setSchedules] = useState('');

  
  const handleAddMembersClick = () => {
    // Use navigate to go to the "AppendMembers" page
    navigate('/AppendMembers');
  };

  return (
    <>
    <Sidebar/>
    <div className="bar2">
        <Navbar1 />
      </div>
    <div className='space1'>
    <div className="append-home-container">
      <div className="append-home-page">
        <h2>Append Home</h2>
        <div className="input-fields">
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="Emergency Contacts"
            value={emergencyContacts}
            onChange={(e) => setEmergencyContacts(e.target.value)}
          />
          <input
            type="text"
            placeholder="Home Appliances"
            value={homeAppliances}
            onChange={(e) => setHomeAppliances(e.target.value)}
          />
          <input
            type="text"
            placeholder="Maintain Schedules"
            value={schedules}
            onChange={(e) => setSchedules(e.target.value)}
          />
          <button onClick={handleAddMembersClick}>Add Members</button>
        </div>
      </div>
    </div>
    </div>
    <Footer1/>
    </>
  );
}

export default AppendHomePage;
