import React from 'react';
import axiosInstance from '../axiosConfig'
import '../styles/Home.css';
import { Form, Button } from 'react-bootstrap';
import ProfileCards from './ProfileCards';
import { useState, useEffect } from 'react';

const Home = () => {
    const [location, setLocation] = useState('');
    const [service, setService] = useState('');
    const [locations, setLocations] = useState([]);
    const [services, setServices] = useState([]);
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await axiosInstance.get('/locations');
                setLocations(response.data);
            }
            catch (error) {
                console.error('Error fetching locations:', error);
            }
        }

        const fetchServices = async () => {
            try {
                const response = await axiosInstance.get('/services');
                setServices(response.data);
            }
            catch (error) {
                console.error('Error fetching services:', error);
            }
        }

        fetchLocations();
        fetchServices();
    }, []);

    const handleSearch = async () => {
        try {
            const response = await axiosInstance.get('/profiles', {
                params: { location, service }
            });
            setProfiles(response.data);
        }
        catch (error) {
            console.error('Error fetching profiles:', error)
        }
    }

    return (
        <div className="home">
            <div className="intro">
                <span id="slogan">Book your appointments with ease</span>
            </div>
            <div className="search">
                <Form.Select id="location" aria-label="location" defaultValue="">
                    <option value="" disabled hidden>Location</option>
                    {locations.map(location => (
                        <option key={location.uuid} value={location.uuid}>{location.name}</option>))
                    }
                </Form.Select>
                <Form.Select id="service" aria-label="service" defaultValue="">
                    <option value="" disabled hidden>Service</option>
                    {services.map(service => (
                        <option key={service.uuid} value={service.uuid}>{service.name}</option>))
                    }
                </Form.Select>
                <Button variant="primary" onClick={handleSearch}>Search</Button>
            </div>
            <div className='profiles'>
                {profiles.map(profile => (
                    <ProfileCards key={profile.uuid} profile={profile} />))}
            </div>
        </div >
    );
}

export default Home;