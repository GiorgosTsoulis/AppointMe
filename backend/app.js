const express = require('express');
const { sequelize } = require('./models');
const { userCtrl, storeCtrl, appointmentCtrl } = require('./diContainer');

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

app.get('/appointme/users', userCtrl.getAllUsers);
app.get('/appointme/users/:uuid', userCtrl.getUserById);
app.get('/appointme/users/role/:role', userCtrl.getUsersByRole);
app.post('/appointme/users', userCtrl.createUser);
app.put('/appointme/users/:uuid', userCtrl.updateUser);
app.delete('/appointme/users/:uuid', userCtrl.deleteUser);

app.get('/appointme/stores', storeCtrl.getAllStores);
app.get('/appointme/stores/locations', storeCtrl.getAllLocations);
app.get('/appointme/stores/services', storeCtrl.getAllServices);

//app.get(`appointme/store/:uuid/staff`, storeCtrl.getStaffByStoreId);
//app.get(`appointme/store/:uuid/services`, storeCtrl.getServicesByStoreId);
app.post('/appointme/store/:uuid/bookappointment', appointmentCtrl.createAppointment);

app.get('/appointme/appointments', appointmentCtrl.getAllAppointments);
app.get('/appointme/appointments/:uuid', appointmentCtrl.getAppointmentById);
app.get('/appointme/appointments/user/:uuid', appointmentCtrl.getAppointmentByUserId);
app.get('/appointme/appointments/store/:uuid', appointmentCtrl.getAppointmentByStoreId);
app.get('/appointme/appointments/staff/:uuid', appointmentCtrl.getAppointmentByStaffId);
app.get('/appointme/appointments/date/:date', appointmentCtrl.getAppointmentByDate);

app.put('/appointme/appointments/:uuid', appointmentCtrl.updateAppointment);
app.delete('/appointme/appointments/:uuid', appointmentCtrl.deleteAppointment);

app.listen({ port: 5000 }, async () => {
    console.log('Server running on http://localhost:5000/appointme');
    await sequelize.authenticate();
    console.log('Database connected!');
});

app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from frontend
}));
