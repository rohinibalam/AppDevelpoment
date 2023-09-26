import React, { useState } from 'react';
import '../assets/css/Login.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { login } from './redux/userslice';
import UserRoleSelectionModal from './UserRoleSelectionModal';
import '../assets/images/Loginhouse.jpg';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [showModal, setShowModal] = useState(false); // Control the visibility of the modal

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorEmail('');
    setErrorPassword('');

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email.trim()) {
      setErrorEmail('Please enter your email.');
      return;
    }

    if (!emailPattern.test(email)) {
      setErrorEmail('Please enter a valid email address.');
      return;
    }

    if (!password.trim()) {
      setErrorPassword('Please enter your password.');
      return;
    }

    if (password.length < 8) {
      setErrorPassword('Password must be at least 8 characters long.');
      return;
    }

    // Assuming successful login here
    // Show the role selection modal after successful login
    setShowModal(true);
  };

  // Function to handle the selection of the admin role
  const handleAdminClick = () => {
    setShowModal(false);
    dispatch(login(email));
    navigate('/dashboard'); // Navigate to the admin dashboard
  };

  // Function to handle the selection of the user role
  const handleUserClick = () => {
    setShowModal(false);
    dispatch(login(email));
    navigate('/user'); // Navigate to the user page
  };
  const handleForgetPasswordClick = () => {
    // Use navigate to go to the ForgetPassword component
    navigate('/ForgotPassword');
  };

  const goBack = () => {
    navigate('/Signup');
  };

  return (
    <>
    <div className='loginhouse'>
      <div className="containerlog"> 
        <div className="loginbody">
          <form onSubmit={handleSubmit}>
            <div className="loginheads">
              <label htmlFor="username">LOGIN</label>
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
                name="password"
                placeholder="Password"
                className="loginpass"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errorPassword && <p className="error">{errorPassword}</p>}
            </div>

            <div>
              <span
                className="forgetpass"
                onClick={handleForgetPasswordClick}
                style={{ cursor: 'pointer' }}
              >
                Forget Password
              </span>
            </div>
            <div className='loginsignup-container'>
              Don't have an account? <span className="signup-link" onClick={goBack}>SIGNUP</span>
            </div>
            <div>
              <br></br>
              <button type="submit" className="loginsubmit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div> 
      {showModal && (
        <UserRoleSelectionModal
          onClose={() => setShowModal(false)}
          onAdminClick={handleAdminClick}
          onUserClick={handleUserClick}
        />
      )}
      </div>
    </>
  );
}

export default Login;
