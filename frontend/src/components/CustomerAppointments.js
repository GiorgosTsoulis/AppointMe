import { useState, useEffect } from 'react';
import AppointmentCard from './AppointmentCard';
import axiosInstance from '../axiosConfig';
import { checkAuth } from '../utils/auth';
import '../styles/CustomerAppointments.css';

const CustomerAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [pendingAppointments, setPendingAppointments] = useState([]);
    const [upcomingAppointments, setUpcomingAppointments] = useState([]);
    const [cancelledAppointments, setCancelledAppointments] = useState([]);
    const [userName, setUserName] = useState(localStorage.getItem('username'));
    const [userId, setUserId] = useState('');

    useEffect(() => {
        const fetchUserId = async () => {
            try {
                const response = await axiosInstance.get(`/users/username/${userName}`);
                console.log('User ID response:', response.data); // Debug log
                setUserId(response.data.userId);
            } catch (error) {
                console.error('Error fetching user ID:', error);
            }
        };

        fetchUserId();
    }, [userName]);

    useEffect(() => {
        const fetchAppointments = async () => {
            if (!userId) {
                console.log('User ID is not set'); // Debug log
                return;
            }

            try {
                const response = await axiosInstance.get(`/appointments/user/${userId}`);
                console.log('Appointments response:', response.data); // Debug log
                const allAppointments = response.data;

                const pending = allAppointments.filter(appointment => appointment.status === 'Pending');
                const upcoming = allAppointments.filter(appointment => appointment.status === 'Confirmed');
                const cancelled = allAppointments.filter(appointment => appointment.status === 'Cancelled');

                setAppointments(allAppointments);
                setPendingAppointments(pending);
                setUpcomingAppointments(upcoming);
                setCancelledAppointments(cancelled);
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };

        fetchAppointments();
    }, [userId]);

    return (
        <div className="customer-appointments-content">
            <div className="header">
                <h1>My Appointments</h1>
                <p>Here you can see all your appointments</p>
            </div>
            <div className="main-content">
                <div className="pending-appointments">
                    <h2>Pending Appointments</h2>
                    <div className="appointments">
                        {pendingAppointments.length > 0 ? (
                            pendingAppointments.map((appointment) => (
                                <AppointmentCard key={appointment.appointmentId} appointment={appointment} />
                            ))
                        ) : (
                            <p>No pending appointments to display.</p>
                        )}
                    </div>
                </div>
                <div className="upcoming-appointments">
                    <h2>Upcoming Appointments</h2>
                    <div className="appointments">
                        {upcomingAppointments.length > 0 ? (
                            upcomingAppointments.map((appointment) => (
                                <AppointmentCard key={appointment.appointmentId} appointment={appointment} />
                            ))
                        ) : (
                            <p>No upcoming appointments to display.</p>
                        )}
                    </div>
                </div>
                <div className="cancelled-appointments">
                    <h2>Cancelled Appointments</h2>
                    <div className="appointments">
                        {cancelledAppointments.length > 0 ? (
                            cancelledAppointments.map((appointment) => (
                                <AppointmentCard key={appointment.appointmentId} appointment={appointment} />
                            ))
                        ) : (
                            <p>No cancelled appointments to display.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerAppointments;