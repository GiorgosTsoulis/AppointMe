import "../styles/SignUp.css";
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
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
                    <p>Enter username and password</p>
                </div>

                <div className="form">
                    <form onSubmit={handleSubmit}>

                        <label>Username</label>
                        <input type="text" placeholder="username" />

                        <label>Password</label>
                        <input type="password" placeholder="password" />

                        <button>Sign Up</button>
                    </form>
                </div>

                <div className="footer">
                    <p>Already have an account? <Link to="/">Sign In</Link></p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;