import React, { useState } from 'react';
import '../assets/css/Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [fieldErrors, setFieldErrors] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.firstName) {
      errors.firstName = 'First Name is required.';
    }

    if (!formData.lastName) {
      errors.lastName = 'Last Name is required.';
    }

    if (!formData.email) {
      errors.email = 'Email is required.';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email format.';
    }

    if (!formData.password) {
      errors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long.';
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match.';
    }

    setFieldErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const isValidEmail = (email) => {
    // Simple email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form data is valid, you can proceed with form submission
      console.log(formData);
    }
  };

  return (
    <div className="signupcontainer">
      <h1>Sign Up</h1>
      <form className="form-sign"action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleOnChange}
          placeholder="First Name"
        />
        {fieldErrors.firstName && <p className="error-message">{fieldErrors.firstName}</p>}
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleOnChange}
          placeholder="Last Name"
        />
        {fieldErrors.lastName && <p className="error-message">{fieldErrors.lastName}</p>}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleOnChange}
          placeholder="Email"
        />
        {fieldErrors.email && <p className="error-message">{fieldErrors.email}</p>}
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleOnChange}
          placeholder="Password"
        />
        {fieldErrors.password && <p className="error-message">{fieldErrors.password}</p>}
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleOnChange}
          placeholder="Confirm Password"
        />
        {fieldErrors.confirmPassword && (
          <p className="error-message">{fieldErrors.confirmPassword}</p>
        )}
        <p>Already have an account? <Link to="/">Login</Link></p>
        <Link to="/"><button type="submit" className='button1'>Sign Up</button></Link>
      </form>
    </div>
  );
};

export default Signup;
