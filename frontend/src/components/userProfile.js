import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Destroy the JWT token (assuming it's stored in localStorage)
        localStorage.removeItem('token');
        localStorage.removeItem('username');

        // Navigate to the sign-in page
        navigate('/auth/signin');
    };

    return (
        <div>
            <h1>User Profile</h1>
            {/* Other user profile content */}
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default UserProfile;