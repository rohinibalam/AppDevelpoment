import React, { useState } from 'react';
import '../assets/css/Login.css';
import { useNavigate } from 'react-router';

function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorNewPassword, setErrorNewPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorEmail('');
    setErrorNewPassword('');
    setErrorConfirmPassword('');

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email.trim()) {
      setErrorEmail('Please enter your email.');
      return;
    }

    if (!emailPattern.test(email)) {
      setErrorEmail('Please enter a valid email address.');
      return;
    }

    if (!newPassword.trim()) {
      setErrorNewPassword('Please enter a new password.');
      return;
    }

    if (newPassword.length < 8) {
      setErrorNewPassword('Password must be at least 8 characters long.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorConfirmPassword('Passwords do not match.');
      return;
    }

    // Here, you can send a request to your backend to update the password
    // You can add that functionality using libraries like Axios or fetch
    
    // Assuming a successful password update, you can navigate to a confirmation page
    navigate('/');
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="containerlog">
      <div className="loginbody">
        <form onSubmit={handleSubmit}>
          <div className="loginheads">
            <label htmlFor="username">RESET PASSWORD</label>
          </div>
          <div className="logininput-container">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="loginemail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errorEmail && <p className="error">{errorEmail}</p>}
          </div>
          <div className="logininput-container">
            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              className="loginpass"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            {errorNewPassword && <p className="error">{errorNewPassword}</p>}
          </div>
          <div className="logininput-container">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="loginpass"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {errorConfirmPassword && <p className="error">{errorConfirmPassword}</p>}
          </div>

          <div>
            <div>
              <button type="submit" className="loginsubmit">
                Reset Password
              </button>
            </div>
            <div className='loginsignup-container'>
              <span className="signup-link" onClick={goBack}>Back to Login</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
