import * as React from 'react';
import '../assets/css/Login.css';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

const Login = () => {
    const [formdata, setFormdata] = React.useState({
        email: "",
        password: ""
    });
    // const dispatch = useDispatch();

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormdata({
            ...formdata,
            [name]: value
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
       
        console.log(formdata);
        // dispatch (Login({
        //     email: formdata.email
        // }))
    };

    return (
        <div className="container"> {/* Corrected the class name */}
            <form action="" onSubmit={submitForm}>
                <h1>Login</h1>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formdata.email}
                    onChange={handleOnChange}
                    placeholder="Email"
                    className="login-input" 
                />
                <input
                    type="password"
                    name="password"
                    value={formdata.password}
                    onChange={handleOnChange}
                    placeholder="password"
                    className="login-input"
                />
                <button type="submit">Login</button><br></br>
                <p>Account doesn't exist?<Link to='/Signup'>Signup</Link></p>
            </form>
        </div>
    );
};

export default Login;
