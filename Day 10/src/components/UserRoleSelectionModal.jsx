// UserRoleSelectionModal.js

import React from 'react';
import  '../assets/css/UserRoleSelectionModal.css';

function UserRoleSelectionModal({ onClose, onAdminClick, onUserClick }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Select Role</h2>
        <button onClick={onAdminClick}>Admin</button>
        <button onClick={onUserClick}>User</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default UserRoleSelectionModal;
