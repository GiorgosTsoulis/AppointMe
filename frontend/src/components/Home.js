import React from 'react';
import '../styles/Home.css';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="home">
            <div className="intro">
                <span id="slogan">Book your appointments with ease</span>
            </div>
            <div className="search">
                <Form.Select id="location" aria-label="location" defaultValue="">
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
        </div >
    );
}

export default Home;