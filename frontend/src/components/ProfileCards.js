import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import defaultProfile from '../img/default-pfp.jpg';
import '../styles/ProfileCards.css';


const ProfileCards = ({ profile }) => {
    const { username, location, service, profileImage } = profile;

    return (
        <div className="profile-card">
            <Card className="card" style={{ width: '13rem', height: '19rem' }}>
                <Card.Img className='img' variant="top" src={profileImage || defaultProfile} />
                <Card.Body className="card-body">
                    <Card.Title className="card-title">{username}</Card.Title>
                    <Card.Text className="card-text">
                        <label>Location: {location}</label>
                        <label>Service: {service}</label>
                    </Card.Text>
                    <Button variant="primary">Book</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProfileCards;