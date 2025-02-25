import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { checkAuth } from '../utils/auth';

const ClientNavbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const location = useLocation();

    const authenticate = async () => {
        const authStatus = await checkAuth();
        console.log('Auth Status:', authStatus); // Debug log
        setIsAuthenticated(authStatus.isAuthenticated);
        setUsername(authStatus.username);
    };

    useEffect(() => {
        authenticate();
    }, [location]);

    useEffect(() => {
        console.log('Username:', username); // Debug log
    }, [username]);

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