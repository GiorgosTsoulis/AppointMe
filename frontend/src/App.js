import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import ClientNavbar from './components/ClientNavbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Container fluid>
          <Row>
            <Col><ClientNavbar /></Col>
            <Col></Col>
          </Row>
          <Row>
            <Home />
          </Row>

        </Container>
      </div>
    </div>

  );
}

export default App;
