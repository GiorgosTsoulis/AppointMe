import Card from 'react-bootstrap/Card';
import '../styles/AppointmentCard.css';
import { useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';

// Helper function to format the date
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
};

// Helper function to format the time
const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(hours, minutes);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
};

const AppointmentCard = ({ appointment }) => {
    const { appointmentDate, appointmentTime, storeId, serviceId, staffId } = appointment;
    const [storeInfo, setStoreInfo] = useState(null);
    const [serviceInfo, setServiceInfo] = useState(null);
    const [staffInfo, setStaffInfo] = useState(null);
    const [staffName, setStaffName] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const storeResponse = await axiosInstance.get(`/stores/${storeId}`);
                setStoreInfo(storeResponse.data);

                const serviceResponse = await axiosInstance.get(`/services/${serviceId}`);
                setServiceInfo(serviceResponse.data);

                const staffResponse = await axiosInstance.get(`/staff/${staffId}`);
                setStaffInfo(staffResponse.data);

                if (staffResponse.data.userId) {
                    const userResponse = await axiosInstance.get(`/users/${staffResponse.data.userId}`);
                    setStaffName(userResponse.data.username);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [storeId, serviceId, staffId]);

    if (!storeInfo || !serviceInfo || !staffInfo || !staffName) {
        return <div>Loading...</div>;
    }

    return (
        <div className="appointment-card">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                        {formatDate(appointmentDate)} || {formatTime(appointmentTime)}
                    </Card.Subtitle>
                    <Card.Title>{storeInfo.name}</Card.Title>
                    <Card.Text>
                        <p>Location: {storeInfo.location}</p>
                        <p>Service: {serviceInfo.name}</p>
                        <p>Staff: {staffName}</p>
                        <p>Total Cost: {serviceInfo.price ? `$${serviceInfo.price}` : 'Price'}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default AppointmentCard;