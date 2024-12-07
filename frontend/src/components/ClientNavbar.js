import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ClientNavbar = () => {
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
                    <Nav.Link href="#login" className="ml-auto">Sign Up/Sign In</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default ClientNavbar;