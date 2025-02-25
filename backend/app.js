const express = require('express');
const { sequelize } = require('./models');
const { userCtrl, storeCtrl, appointmentCtrl, authCtrl } = require('./diContainer');

const app = express();
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from frontend
}));

// Auth Routes
app.post('/appointme/auth/signin', authCtrl.signIn);
app.post('/appointme/auth/signup', authCtrl.signUp);
app.get('/appointme/auth/me', authCtrl.getMe);

// Users Routes
app.get('/appointme/users', userCtrl.getAllUsers);
app.get('/appointme/users/:uuid', userCtrl.getUserById);
app.get('/appointme/users/username/:username', userCtrl.getUserByUsername);
app.get('/appointme/users/role/:role', userCtrl.getUsersByRole);
app.get('/appointme/users/role/:username', userCtrl.getUserRoleByUsername);
app.post('/appointme/users', userCtrl.createUser);
app.put('/appointme/users/:uuid', userCtrl.updateUser);
app.delete('/appointme/users/:uuid', userCtrl.deleteUser);

// Stores Routes
app.get('/appointme/stores', storeCtrl.getAllStores);
app.get('/appointme/stores/:uuid', storeCtrl.getStoreById);
app.get('/appointme/stores/locations', storeCtrl.getAllLocations);
app.get(`/appointme/store/:uuid/staff`, storeCtrl.getStaffByStoreId);
app.get('/appointme/stores/services', storeCtrl.getAllServices);
app.get(`/appointme/store/:uuid/services`, storeCtrl.getServicesByStoreId);
app.post('/appointme/store/:uuid/bookappointment', appointmentCtrl.createAppointment);

//Staff Routes

// Appointments Routes
app.get('/appointme/appointments', appointmentCtrl.getAllAppointments);
app.get('/appointme/appointments/:uuid', appointmentCtrl.getAppointmentById);
app.get('/appointme/appointments/user/:uuid', appointmentCtrl.getAppointmentByUserId);
app.get('/appointme/appointments/store/:uuid', appointmentCtrl.getAppointmentByStoreId);
app.get('/appointme/appointments/staff/:uuid', appointmentCtrl.getAppointmentByStaffId);
app.get('/appointme/appointments/date/:date', appointmentCtrl.getAppointmentByDate);

app.put('/appointme/appointments/:uuid', appointmentCtrl.updateAppointment);
app.delete('/appointme/appointments/:uuid', appointmentCtrl.deleteAppointment);

// Server and Database Initialization
app.listen({ port: 5000 }, async () => {
    console.log('Server running on http://localhost:5000/appointme');
    await sequelize.authenticate();
    console.log('Database connected!');
});
