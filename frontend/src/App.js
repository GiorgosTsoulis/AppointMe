import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import ClientNavbar from './components/ClientNavbar';
import Home from './components/Home';
import AppointmentForm from './components/AppointmentForm';
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <ClientNavbar />
      <div className='content'>
        <Routes>
          <Route path='/' element={
            <motion.div
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <Home />
            </motion.div>
          } />
          <Route path='/store/:uuid/book' element={
            <motion.div
              animate={{ x: 600 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <AppointmentForm />
            </motion.div>
          }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
