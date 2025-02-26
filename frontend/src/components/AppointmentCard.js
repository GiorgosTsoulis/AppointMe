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
    const [storeInfo, setStoreInfo] = useState({});
    const [serviceInfo, setServiceInfo] = useState({});
    const [staffInfo, setStaffInfo] = useState({});
    const [staffName, setStaffName] = useState('');

    useEffect(() => {
        const fetchStore = async () => {
            if (storeId) {
                try {
                    const response = await axiosInstance.get(`/stores/${storeId}`);
                    setStoreInfo(response.data);
                } catch (error) {
                    console.error('Error fetching store:', error);
                }
            }
        };

        const fetchService = async () => {
            if (serviceId) {
                try {
                    const response = await axiosInstance.get(`/services/${serviceId}`);
                    setServiceInfo(response.data);
                } catch (error) {
                    console.error('Error fetching service:', error);
                }
            }
        };

        const fetchStaff = async () => {
            if (staffId) {
                try {
                    const response = await axiosInstance.get(`/staff/${staffId}`);
                    setStaffInfo(response.data);
                    console.log('Staff Info:', staffInfo);
                    console.log('Staff ID:', staffId);
                } catch (error) {
                    console.error('Error fetching staff:', error);
                }
            }
        };

        fetchStore();
        fetchService();
        fetchStaff();
    }, [storeId, serviceId, staffId]);

    useEffect(() => {
        const fetchStaffName = async () => {
            if (staffId) {
                try {
                    const response = await axiosInstance.get(`/users/${staffInfo.userId}`);
                    setStaffName(response.data.username);
                } catch (error) {
                    console.error('Error fetching staff name:', error);
                }
            }
        }
        fetchStaffName();
    }
        , [staffId]);

    return (
        <div className="appointment-card">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                        {formatDate(appointmentDate)} || {formatTime(appointmentTime)}
                    </Card.Subtitle>
                    <Card.Title>{storeInfo.name || 'Store Name'}</Card.Title>
                    <Card.Text>
                        <p>Location: {storeInfo.location || 'Location'}</p>
                        <p>Service: {serviceInfo.name || 'Service Name'}</p>
                        <p>Staff: {staffName || 'Staff Name'}</p>
                        <p>Total Cost: {serviceInfo.price ? `$${serviceInfo.price}` : 'Price'}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default AppointmentCard;