import React from 'react';
import '../styles/Home.css';
import { Form, Button } from 'react-bootstrap';
import ProfileCards from './ProfileCards';

const Home = () => {
    return (
        <div className="home">
            <div className="intro">
                <span id="slogan">Book your appointments with ease</span>
            </div>
            <div className="search">
                <Form.Select id="location" aria-label="location">
                    <option>Location</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                <Form.Select id="service" aria-label="service">
                    <option>Service</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                <Button variant="primary">Search</Button>
            </div>
            <div className='profiles'>
                <ProfileCards />
            </div>
        </div >
    );
}

export default Home;