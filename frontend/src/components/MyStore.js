import '../styles/MyStore.css';
import axiosInstance from '../axiosConfig';
import { useEffect, useState } from 'react';
import { checkAuth } from '../utils/auth';

export const MyStore = () => {
    const [userName, setUserName] = useState('');
    const [user, setUser] = useState({});
    const [store, setStore] = useState({});
    const [services, setServices] = useState([]);
    const [allStaff, setAllStaff] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const fetchUserName = async () => {
            const authState = await checkAuth();
            setIsAuthenticated(authState.isAuthenticated);
            if (authState.isAuthenticated) {
                setUserName(authState.username);
            }
            console.log(authState); //DEBUG
        }
        fetchUserName();
    }, []);

    useEffect(() => {
        const fetchUser = async () => {
            if (!userName) return;
            try {
                const response = await axiosInstance.get(`/users/username/${userName}`);
                setUser(response.data);
                console.log(user); //DEBUG
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        }

        fetchUser();
    }, [userName]);

    useEffect(() => {
        const fetchStore = async () => {
            if (!user.userId) return; // Add this check
            try {
                const response = await axiosInstance.get(`/store/user/${user.userId}`);
                setStore(response.data);
                console.log(store); //DEBUG
            } catch (error) {
                console.error('Error fetching store:', error);
            }
        };

        fetchStore();
    }, [user.userId]);

    useEffect(() => {
        const fetchServices = async () => {
            if (!store.storeId) return;
            try {
                const response = await axiosInstance.get(`/store/${store.storeId}/services`);
                setServices(response.data);
                console.log(services); //DEBUG
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };

        fetchServices();
    }, [store.storeId]);

    useEffect(() => {
        const fetchStaff = async () => {
            if (!store.storeId) return;
            try {
                const response = await axiosInstance.get(`/store/${store.storeId}/staff`);
                setAllStaff(response.data);
                console.log(allStaff); //DEBUG
            } catch (error) {
                console.error('Error fetching staff:', error);
            }
        };

        fetchStaff();
    }, [store.storeId]);

    if (!isAuthenticated) {
        return <div>Please log in to view store information.</div>;
    }

    return (
        <div className="mystore">
            <div className="mystore-header">
                <h1>Store Info</h1>
            </div>
            <div className="mystore-info">
                <h3>Store Name: {store.name}</h3>
                <p>Store Location: {store.location}</p>
            </div>
            <div className="mystore-services">
                <h3>Services:</h3>
                <ul>
                    {services.length > 0 ? (
                        services.map((service) => (
                            <li key={service.serviceId}>{service.name} || Cost: {service.price}</li>
                        ))
                    ) : (
                        <p>No services found.</p>
                    )}
                </ul>
            </div>
            <div className="mystore-staff">
                <h3>Staff:</h3>
                <ul>
                    {allStaff.length > 0 ? (
                        allStaff.map((staff) => (
                            <li key={staff.staffId}>
                                {staff.user.username} || Service Type: {staff.service.name}
                            </li>
                        ))
                    ) : (
                        <p>No staff members found.</p>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default MyStore;