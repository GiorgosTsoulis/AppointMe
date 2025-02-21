import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';

const ClientNavbar = () => {
    // const { user } = useContext(AuthContext);

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
                    {user ? (
                        <Nav.Link href="#profile" className="ml-auto">Hello, {user.username}</Nav.Link>
                    ) : (
                        <Nav.Link as={Link} to="/auth" className="ml-auto">Sign Up/Sign In</Nav.Link>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default ClientNavbar;