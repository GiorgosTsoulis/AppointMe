import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/appointme', // Replace with your backend base URL
    headers: {
        'Content-Type': 'application/json',
    },
});


export default axiosInstance;