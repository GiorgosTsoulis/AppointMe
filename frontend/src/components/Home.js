import React from 'react';
import axiosInstance from '../axiosConfig';
import '../styles/Home.css';
import { Form, Button } from 'react-bootstrap';
import ProfileCards from './ProfileCards';
import { useState, useEffect } from 'react';

const Home = () => {
    const [stores, setStores] = useState([]);
    const [service, setService] = useState('');
    const [location, setLocation] = useState('');
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await axiosInstance.get('/stores');
                console.log(response.data);
                setStores(response.data);
            } catch (error) {
                console.error('Error fetching stores:', error);
            }
        }
        fetchStores();
    }, []);

    const handleSearch = async () => {
        try {
            const params = {};
            if (location) params.location = location;
            if (service) params.service = service;

            const response = await axiosInstance.get('/stores', { params });
            const handleSearch = async () => {
                try {
                    const params = {};
                    if (location) params.location = location;
                    if (service) params.service = service;

                    const response = await axiosInstance.get('/stores', { params });
                    console.log(response.data)
                    setProfiles(response.data);
                } catch (error) {
                    console.error('Error fetching profiles:', error);
                }
            };
            setProfiles(response.data);
        } catch (error) {
            console.error('Error fetching profiles:', error);
        }
    };

    const uniqueLocations = [...new Set(stores.map(store => store.location))];
    const uniqueServices = [...new Set(stores.map(store => store.service))];

    return (
        <div className="home">
            <div className="intro">
                <span id="slogan">Book your appointments with ease</span>
            </div>
            <div className="search">
                <Form.Select id="location" aria-label="location" defaultValue="" onChange={(e) => setLocation(e.target.value)}>
                    <option value="" disabled hidden>Location</option>
                    {uniqueLocations.map((location, index) =>
                        <option key={index} value={location}>{location}</option>
                    )}
                </Form.Select>

                <Form.Select id="service" aria-label="service" defaultValue="" onChange={(e) => setService(e.target.value)}>
                    <option value="" disabled hidden>Service</option>
                    {uniqueServices.map((service, index) =>
                        <option key={index} value={service}>{service}</option>
                    )}
                </Form.Select>
                <Button variant="primary" onClick={handleSearch}>Search</Button>
            </div>
            <div className="profiles">
                {profiles.length > 0 ? (
                    profiles.map((profile) => (
                        <ProfileCards key={profile.storeId} profile={profile} />
                    ))
                ) : (
                    <p>No profiles to display. Please search to find profiles.</p>
                )}
            </div>
        </div >
    );
};

export default Home;