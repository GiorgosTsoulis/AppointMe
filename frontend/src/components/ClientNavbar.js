import { Navbar, Nav } from 'react-bootstrap';
import logo from '../img/logo3.png';

const ClientNavbar = () => {
    return (
        <Navbar className="navbar" expand="md">
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    width="40"
                    height="40"
                    className="d-inline-block "
                    id="logo"
                />
                AppointMe
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#services">Services</Nav.Link>
                    <Nav.Link href="#book">Book Appointment</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default ClientNavbar;