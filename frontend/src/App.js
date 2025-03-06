import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import ClientNavbar from './components/ClientNavbar';
import Home from './components/Home';
import AppointmentForm from './components/AppointmentForm';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import UserProfile from './components/userProfile';
import CustomerAppointments from './components/CustomerAppointments';
import MyStore from './components/MyStore';
import { useEffect, useState } from 'react';
import { checkAuth } from './utils/auth';

function App() {
  const location = useLocation();
  const [authStatus, setAuthStatus] = useState({ isAuthenticated: false, role: '' });

  useEffect(() => {
    const authenticate = async () => {
      const status = await checkAuth();
      setAuthStatus(status);
    };
    authenticate();
  }, [location]);

  useEffect(() => {
    if (authStatus.isAuthenticated && authStatus.role === 'Admin' && location.pathname.startsWith('/store/')) {
      window.location.href = '/';
      alert('You are not a customer');
    }
  }, [authStatus, location]);

  return (
    <div className="App">
      {location.pathname !== '/auth' && <ClientNavbar />}
      <div className='app-content'>
        <Routes>
          <Route path='/auth/signin' element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path='/' element={<Home />} />
          {authStatus.isAuthenticated && authStatus.role === 'Customer' && (
            <>
              <Route path='/store/:uuid/book' element={<AppointmentForm />} />
              <Route path='/profile' element={<UserProfile />} />
              <Route path='/myappointments' element={<CustomerAppointments />} />
            </>
          )}
          {authStatus.isAuthenticated && authStatus.role === 'Admin' && (
            <>
              <Route path='/profile' element={<UserProfile />} />
              <Route path='/mystore' element={<MyStore />} />
            </>
          )}
          {authStatus.isAuthenticated && authStatus.role === 'Staff' && (
            <>
              <Route path='/profile' element={<UserProfile />} />
            </>
          )}
          
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;