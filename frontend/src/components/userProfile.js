import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        console.log('User logged out successfully');

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