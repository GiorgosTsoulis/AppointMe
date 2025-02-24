import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';

const ClientNavbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('token');
            const storedUsername = localStorage.getItem('username');
            if (token && storedUsername) {
                try {
                    const response = await axiosInstance.get('/auth/me', {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    setIsAuthenticated(true);
                    setUsername(storedUsername);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                    setIsAuthenticated(false);
                }
            }
        };
        checkAuth();
    }, []);

    return (
        <Navbar sticky="top" className="navbar" expand="md">
            <Navbar.Brand as={Link} to="/">
                AppointMe
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/book">Book Appointment</Nav.Link>
                </Nav>
                <Nav>
                    {isAuthenticated ? (
                        <Nav.Link as={Link} to="/profile" className="ml-auto">{username}</Nav.Link>
                    ) : (
                        <Nav.Link as={Link} to="/auth/signin" className="ml-auto">Sign Up/Sign In</Nav.Link>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default ClientNavbar;