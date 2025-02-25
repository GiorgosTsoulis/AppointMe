import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/userProfile.css';
import { checkAuth } from '../utils/auth';


const UserProfile = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('');

    const authenticate = async () => {
        const authStatus = await checkAuth();
        console.log('Auth Status:', authStatus); // Debug log
        setIsAuthenticated(authStatus.isAuthenticated);
        setUsername(authStatus.username);
        setRole(authStatus.role);
    };

    useEffect(() => {
        authenticate();
    }, [username]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        console.log('User logged out successfully');

        // Navigate to the sign-in page
        navigate('/auth/signin');
    };

    return (
        <div className="user-profile">
            <div className="header">
                <h1>User Profile</h1>
            </div>
            <div className="info">
                <p>Username: {username}</p>
                <p>Role: {role}</p>
            </div>
            <div className="button">
                <button onClick={handleLogout}>Logout</button>
            </div>

        </div>
    );
};

export default UserProfile;