import React, { useState } from 'react';

import '../assets/css/Login.css';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router';
import { login } from './redux/userslice';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  
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

    console.log('Email:', email);
    console.log('Password:', password);
    dispatch(login(email));
    navigate('/dashboard');
  };

  // Define handleForgetPasswordClick here
  const handleForgetPasswordClick = () => {
    // Use navigate to go to the ForgetPassword component
    navigate('/ForgotPassword');
  };
  const goBack = () => {
    navigate('/Signup');
  };
  
  return (
    <>
      
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
                placeholder="EMAIL"
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
                placeholder="PASSWORD"
                className="loginpass"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errorPassword && <p className="error">{errorPassword}</p>}
            </div>

            <div>
              {/* Use onClick to navigate to ForgetPassword */}
              <a href="#" className="forgetpass" onClick={handleForgetPasswordClick}>
                Forget Password
              </a>
            </div>
            <div className='loginsignup-container'>
        Don't have an account? <span className="signup-link" onClick={goBack}>SIGNUP</span>
      </div>
            <div>
              <button type="submit" className="loginsubmit">
                Login
              </button>
            </div>
          
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;