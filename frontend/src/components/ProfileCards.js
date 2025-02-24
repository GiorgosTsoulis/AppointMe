import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import defaultProfile from '../img/default-pfp.jpg';
import '../styles/ProfileCards.css';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';


const ProfileCards = ({ profile }) => {
    const profileImage = profile.image;
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const response = await axiosInstance.get('/auth/me', {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    setIsAuthenticated(true);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                    setIsAuthenticated(false);
                }
            }
        };
        checkAuth();
    }, []);

    const handleBook = () => {
        if (!isAuthenticated) {
            alert('Please sign in to book an appointment');
            navigate('/auth/signin');
            return;
        }
        navigate(`/store/${profile.storeId}/book`);
    }

    return (
        <div className="profile-card">
            <Card className="card" style={{ width: '13rem', height: '19rem' }}>
                <Card.Img className='img' variant="top" src={profileImage || defaultProfile} />
                <Card.Body className="card-body">
                    <Card.Title className="card-title">{profile.name}</Card.Title>
                    <Card.Text className="card-text">
                        <label>Store: {profile.name}</label>
                        <label>Location: {profile.location}</label>
                        <label>Service: {profile.service}</label>
                    </Card.Text>
                    <Button variant="primary" onClick={handleBook}>Book</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProfileCards;