// filepath: /home/giorgos/AppointMe/frontend/src/utils/auth.js
import axiosInstance from '../axiosConfig';

export const checkAuth = async () => {
    const token = localStorage.getItem('token');
    console.log('Token from localStorage:', token); // Debug log
    if (token) {
        try {
            const response = await axiosInstance.get('/auth/me', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log('Authenticated user:', response.data.username); // Debug log
            return {
                isAuthenticated: true,
                username: response.data.username,
                role: response.data.role
            };
        } catch (error) {
            console.error('Error fetching user data:', error);
            return {
                isAuthenticated: false,
                username: '',
                role: ''
            };
        }
    } else {
        console.log('No token found'); // Debug log
        return {
            isAuthenticated: false,
            username: '',
            role: ''
        };
    }
};