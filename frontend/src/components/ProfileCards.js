import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import defaultProfile from '../img/default-pfp.jpg';
import '../styles/ProfileCards.css';

const ProfileCards = () => {
    return ( 
        <div className="profile-card">
            <Card className="card" style={{ width: '13rem', height: '18rem'}}>
                <Card.Img className='img' variant="top" src={defaultProfile} />
                <Card.Body className="card-body">
                    <Card.Title className="card-title">Username</Card.Title>
                    <Card.Text className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </Card.Text>
                    <Button variant="primary">Book</Button>
                </Card.Body>
            </Card>
        </div>
     );
}
 
export default ProfileCards;