const express = require('express');
const { sequelize } = require('./models');
const { userCtrl, staffCtrl, customerCtrl, adminCtrl, storeCtrl, appointmentCtrl } = require('./diContainer');

const app = express();
app.use(express.json());

app.get('/appointme/users', userCtrl.getAllUsers);
app.get('/appointme/users/:uuid', userCtrl.getUserById);
app.post('/appointme/users', userCtrl.createUser);
app.put('/appointme/users/:uuid', userCtrl.updateUser);
app.delete('/appointme/users/:uuid', userCtrl.deleteUser);

app.get('/appointme/staff', staffCtrl.getAllStaff);
app.get('/appointme/staff/:uuid', staffCtrl.getStaffById);
app.post('/appointme/staff', staffCtrl.createStaff);
app.put('/appointme/staff/:uuid', staffCtrl.updateStaff);
app.delete('/appointme/staff/:uuid', staffCtrl.deleteStaff);
app.get('/appointme/staff/:uuid/appointments', staffCtrl.getAppointments);

app.get('/appointme/customers', customerCtrl.getAllCustomers);
app.get('/appointme/customers/:uuid', customerCtrl.getCustomerById);
app.post('/appointme/customers', customerCtrl.createCustomer);
app.put('/appointme/customers/:uuid', customerCtrl.updateCustomer);
app.delete('/appointme/customers/:uuid', customerCtrl.deleteCustomer);

app.get('/appointme/admins', adminCtrl.getAllAdmins);
app.get('/appointme/admins/:uuid', adminCtrl.getAdminById);
app.post('/appointme/admins', adminCtrl.createAdmin);
app.put('/appointme/admins/:uuid', adminCtrl.updateAdmin);
app.delete('/appointme/admins/:uuid', adminCtrl.deleteAdmin);

app.get('/appointme/stores', storeCtrl.getAllStores);
app.get('/appointme/stores/:uuid', storeCtrl.getStoreById);
app.post('/appointme/stores', storeCtrl.createStore);
app.put('/appointme/stores/:uuid', storeCtrl.updateStore);
app.delete('/appointme/stores/:uuid', storeCtrl.deleteStore);

app.get('/appointme/appointments', appointmentCtrl.getAllAppointments);
app.get('/appointme/appointments/:uuid', appointmentCtrl.getAppointmentById);
app.post('/appointme/appointments', appointmentCtrl.createAppointment);
app.put('/appointme/appointments/:uuid', appointmentCtrl.updateAppointment);
app.delete('/appointme/appointments/:uuid', appointmentCtrl.deleteAppointment);

app.listen({ port: 5000 }, async () => {
    console.log('Server running on http://localhost:5000/appointme');
    await sequelize.authenticate();
    console.log('Database connected!');
});