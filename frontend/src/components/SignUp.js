// filepath: /home/giorgos/AppointMe/frontend/src/components/SignUp.js
import "../styles/SignUp.css";
import { Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import axiosInstance from '../axiosConfig';

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        role: "Admin"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/auth/signup', formData);
            if (response.status === 200) {
                const token = response.data.token;
                localStorage.setItem('token', token);
                localStorage.setItem('username', response.data.user.username);

                console.log('User created successfully');
                console.log('Token:', token); // Debug log
                console.log('Username:', response.data.user.username);
                navigate("/");
            } else {
                console.error('Error creating user');
                alert('An error occurred while signing up.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while signing up.');
        }
    };

    return (
        <div>
            <Navbar sticky="top" className="navbar" expand="md">
                <Navbar.Brand as={Link} to="/">
                    AppointMe
                </Navbar.Brand>
            </Navbar>
            <div className="sign-up">
                <div className="header">
                    <h1>Create an account</h1>
                    <p>Enter username, password and select a role</p>
                </div>

                <div className="form">
                    <form onSubmit={handleSubmit}>

                        <label>Username</label>
                        <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="username" required />

                        <label>Password</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="password" required />

                        <label>Role</label>
                        <select name="role" value={formData.role} onChange={handleChange}>
                            <option value="Admin">Admin</option>
                            <option value="Customer">Customer</option>
                            <option value="Staff">Staff</option>
                        </select>

                        <button>Sign Up</button>
                    </form>
                </div>

                <div className="footer">
                    <p>Already have an account? <Link to="/auth/signin">Sign In</Link></p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;