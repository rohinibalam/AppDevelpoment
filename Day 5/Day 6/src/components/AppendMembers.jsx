import React, { useState } from 'react';
import Navbar1 from './Navbar1';
import '../assets/css/AppendMembers.css';

function AppendMembers() {
  const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState({ name: '', age: '', email: '', contact: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember({
      ...newMember,
      [name]: value,
    });
  };

  const handleAddMember = () => {
    if (newMember.name && newMember.age && newMember.email && newMember.contact) {
      setMembers([...members, newMember]);
      setNewMember({ name: '', age: '', email: '', contact: '' });
    }
  };

  const handleRemoveMember = (index) => {
    const updatedMembers = [...members];
    updatedMembers.splice(index, 1);
    setMembers(updatedMembers);
  };

  return (
    <>
    <div className="bar2">
        <Navbar1 />
      </div>
    <div className='space'>
    <div className="append-members-page">
      <h2>Append Members</h2>
      <div className="input-fields">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newMember.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={newMember.age}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email Id"
          value={newMember.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={newMember.contact}
          onChange={handleInputChange}
        />
        <button onClick={handleAddMember}>Add</button>
        <button onClick={handleRemoveMember}>Remove</button>
      </div>
      </div>
    </div>
    </>
  );
}

export default AppendMembers;
