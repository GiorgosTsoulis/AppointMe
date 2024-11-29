import React from 'react';
import '../styles/Home.css';
import { Form, Button } from 'react-bootstrap';
import ProfileCards from './ProfileCards';
import { useState, useEffect } from 'react';

const Home = () => {
    const [location, setLocation] = useState("location");
    const [service, setService] = useState("service");
    const [username, setUsername] = useState("username");
    const [profiles, setProfiles] = useState([]);



    const handleSearch = () => {
        const location = document.getElementById('location').value;
        const service = document.getElementById('service').value;
        setLocation(location);
        setService(service);
        setProfiles(
            // fetch profiles from the backend
        );
    }

    return (
        <div className="home">
            <div className="intro">
                <span id="slogan">Book your appointments with ease</span>
            </div>
            <div className="search">
                <Form.Select id="location" aria-label="location" defaultValue="">
                    <option value="" disabled hidden>Location</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                <Form.Select id="service" aria-label="service" defaultValue="">
                    <option value="" disabled hidden>Service</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                <Button variant="primary" onClick={handleSearch}>Search</Button>
            </div>
            <div className='profiles'>
                {profiles.map(profile => (
                    <ProfileCards profiles={profile} />))}
            </div>
        </div >
    );
}

export default Home;