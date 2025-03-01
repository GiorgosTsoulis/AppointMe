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
    const [serviceForm, setServiceForm] = useState({ name: '', price: '', duration: '' });
    const [staffForm, setStaffForm] = useState({ userId: '', serviceId: '' });
    const [editingServiceId, setEditingServiceId] = useState(null);
    const [editingStaffId, setEditingStaffId] = useState(null);

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

    const handleServiceFormChange = (e) => {
        const { name, value } = e.target;
        setServiceForm({ ...serviceForm, [name]: value });
    };

    const handleStaffFormChange = (e) => {
        const { name, value } = e.target;
        setStaffForm({ ...staffForm, [name]: value });
    };

    const handleServiceFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const serviceData = {
                ...serviceForm,
                storeId: store.storeId // Include storeId in the service data
            };

            if (editingServiceId) {
                // Edit service
                await axiosInstance.put(`/services/${editingServiceId}`, serviceData);
            } else {
                // Add new service
                await axiosInstance.post(`/store/${store.storeId}/createservice`, serviceData);
            }
            setServiceForm({ name: '', price: '', duration: '' });
            setEditingServiceId(null);
            // Refresh services
            const response = await axiosInstance.get(`/store/${store.storeId}/services`);
            setServices(response.data);
        } catch (error) {
            console.error('Error adding/editing service:', error);
        }
    };

    const handleStaffFormSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingStaffId) {
                // Edit staff
                await axiosInstance.put(`/staff/${editingStaffId}`, staffForm);
            } else {
                // Add new staff
                await axiosInstance.post(`/store/${store.storeId}/staff`, staffForm);
            }
            setStaffForm({ userId: '', serviceId: '' });
            setEditingStaffId(null);
            // Refresh staff
            const response = await axiosInstance.get(`/store/${store.storeId}/staff`);
            setAllStaff(response.data);
        } catch (error) {
            console.error('Error adding/editing staff:', error);
        }
    };

    const handleEditService = (service) => {
        setServiceForm({ serviceId: service.serviceId, name: service.name, price: service.price, duration: service.duration });
        setEditingServiceId(service.serviceId);
    };

    const handleEditStaff = (staff) => {
        setStaffForm({ userId: staff.userId, serviceId: staff.serviceId });
        setEditingStaffId(staff.staffId);
    };

    const handleDeleteService = async (serviceId) => {
        try {
            await axiosInstance.delete(`/services/${serviceId}`);
            // Refresh services
            const response = await axiosInstance.get(`/store/${store.storeId}/services`);
            setServices(response.data);
        } catch (error) {
            console.error('Error deleting service:', error);
        }
    };

    const handleDeleteStaff = async (staffId) => {
        try {
            await axiosInstance.delete(`/staff/${staffId}`);
            // Refresh staff
            const response = await axiosInstance.get(`/store/${store.storeId}/staff`);
            setAllStaff(response.data);
        } catch (error) {
            console.error('Error deleting staff:', error);
        }
    };

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
            <div className="mystore-content">
                <div className="mystore-services">
                    <h3>Services:</h3>
                    <ul>
                        {services.length > 0 ? (
                            services.filter(service => service !== null).map((service) => (
                                <li key={service.serviceId}>
                                    {service.name} || Cost: {service.price} || Duration: {service.duration} hours
                                    <button onClick={() => handleEditService(service)}>Edit</button>
                                    <button onClick={() => handleDeleteService(service.serviceId)}>Delete</button>
                                </li>
                            ))
                        ) : (
                            <p>No services found.</p>
                        )}
                    </ul>
                </div>
                <div className="mystore-form">
                    <form onSubmit={handleServiceFormSubmit}>
                        <h3>{editingServiceId ? 'Edit Service' : 'Add Service'}</h3>
                        <label>
                            Name:
                            <input type="text" name="name" value={serviceForm.name} onChange={handleServiceFormChange} required />
                        </label>
                        <label>
                            Price:
                            <input type="number" name="price" value={serviceForm.price} onChange={handleServiceFormChange} required />
                        </label>
                        <label>
                            Duration (hours):
                            <input type="number" name="duration" value={serviceForm.duration} onChange={handleServiceFormChange} required />
                        </label>
                        <button type="submit">{editingServiceId ? 'Update Service' : 'Add Service'}</button>
                    </form>
                </div>
            </div>
            <div className="mystore-content">
                <div className="mystore-staff">
                    <h3>Staff:</h3>
                    <ul>
                        {allStaff.length > 0 ? (
                            allStaff.filter(staff => staff.service !== null).map((staff) => (
                                <li key={staff.staffId}>
                                    {staff.user.username} || Service Type: {staff.service.name}
                                    <button onClick={() => handleEditStaff(staff)}>Edit</button>
                                    <button onClick={() => handleDeleteStaff(staff.staffId)}>Delete</button>
                                </li>
                            ))
                        ) : (
                            <p>No staff members found.</p>
                        )}
                    </ul>
                </div>
                <div className="mystore-form">
                    <form onSubmit={handleStaffFormSubmit}>
                        <h3>{editingStaffId ? 'Edit Staff' : 'Add Staff'}</h3>
                        <label>
                            User ID:
                            <input type="text" name="userId" value={staffForm.userId} onChange={handleStaffFormChange} required />
                        </label>
                        <label>
                            Service ID:
                            <input type="text" name="serviceId" value={staffForm.serviceId} onChange={handleStaffFormChange} required />
                        </label>
                        <button type="submit">{editingStaffId ? 'Update Staff' : 'Add Staff'}</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MyStore;