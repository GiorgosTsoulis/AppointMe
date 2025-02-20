import "../styles/SignIn.css";
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignIn = () => {

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
            <div className="sign-in">
                <div className="header">
                    <h1>Sign in to your account</h1>
                    <p>Enter username and password</p>
                </div>

                <div className="form">
                    <form onSubmit={handleSubmit}>

                        <label>Username</label>
                        <input type="text" placeholder="username" />

                        <label>Password</label>
                        <input type="password" placeholder="password" />

                        <button>Sign in</button>
                    </form>
                </div>

                <div className="footer">
                    <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                </div>
            </div>
        </div>
    );
}

export default SignIn;