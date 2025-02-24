import "../styles/SignIn.css";
import { Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import axiosInstance from '../axiosConfig';

const SignIn = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/auth/signin', formData);
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('username', response.data.user.username);
                console.log('User signed in successfully');
                navigate("/");
            } else {
                console.error('Error signing in');
                alert('Invalid username or password.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while signing in.');
        }
    };

    return (
        <div>
            <Navbar sticky="top" className="navbar" expand="md">
                <Navbar.Brand as={Link} to="/">
                    AppointMe
                </Navbar.Brand>
            </Navbar>
            <div className="sign-in">
                <div className="header">
                    <h1>Sign in to your account</h1>
                    <p>Enter username and password</p>
                </div>

                <div className="form">
                    <form onSubmit={handleSubmit}>

                        <label>Username</label>
                        <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="username" />

                        <label>Password</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="password" />

                        <button>Sign in</button>
                    </form>
                </div>

                <div className="footer">
                    <p>Don't have an account? <Link to="/auth/signup">Sign up</Link></p>
                </div>
            </div>
        </div>
    );
}

export default SignIn;