import * as React from 'react';
import '../assets/css/Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the form data here (e.g., check if passwords match)

        // You can access the formData for form submission
        console.log(formData);
    };

    return (
        <div className="container"> {/* Add a container class to your form */}
            <h1>Sign Up</h1>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleOnChange}
                    placeholder="First Name"
                />
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleOnChange}
                    placeholder="Last Name"
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleOnChange}
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleOnChange}
                    placeholder="Password"
                />
                <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleOnChange}
                    placeholder="Confirm Password"
                />
                <button type="submit">Sign Up</button><br></br>
                <p>Have an account.<Link to='/'> Login</Link></p>
            </form>
        </div>
    );
};

export default Signup;