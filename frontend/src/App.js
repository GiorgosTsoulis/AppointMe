import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import ClientNavbar from './components/ClientNavbar';
import Home from './components/Home';
import AppointmentForm from './components/AppointmentForm';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { motion } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== '/auth' && <ClientNavbar />}
      <div className='content'>
        <Routes>
          <Route path='/auth' element={
            <SignIn />
          } />

          <Route path="/signup" element={
            <SignUp />
          } />

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
              animate={{ x: 0 }}
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
