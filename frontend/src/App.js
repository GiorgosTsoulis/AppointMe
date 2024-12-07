import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import ClientNavbar from './components/ClientNavbar';
import Home from './components/Home';
import AppointmentForm from './components/AppointmentForm';


function App() {
  return (
    <div className="App">
      <ClientNavbar />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/book' element={<AppointmentForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
