const express = require('express');
const { sequelize } = require('./models');
const { userCtrl, staffCtrl, customerCtrl, adminCtrl, storeCtrl, appointmentCtrl } = require('./diContainer');

const app = express();
app.use(express.json());

app.get('/users', userCtrl.getAllUsers);
app.get('/users/:uuid', userCtrl.getUserById);
app.post('/users', userCtrl.createUser);
app.put('/users/:uuid', userCtrl.updateUser);
app.delete('/users/:uuid', userCtrl.deleteUser);

app.get('/staff', staffCtrl.getAllStaff);
app.get('/staff/:uuid', staffCtrl.getStaffById);
app.post('/staff', staffCtrl.createStaff);
app.put('/staff/:uuid', staffCtrl.updateStaff);
app.delete('/staff/:uuid', staffCtrl.deleteStaff);

app.get('/customers', customerCtrl.getAllCustomers);
app.get('/customers/:uuid', customerCtrl.getCustomerById);
app.post('/customers', customerCtrl.createCustomer);
app.put('/customers/:uuid', customerCtrl.updateCustomer);
app.delete('/customers/:uuid', customerCtrl.deleteCustomer);

app.get('/admins', adminCtrl.getAllAdmins);
app.get('/admins/:uuid', adminCtrl.getAdminById);
app.post('/admins', adminCtrl.createAdmin);
app.put('/admins/:uuid', adminCtrl.updateAdmin);
app.delete('/admins/:uuid', adminCtrl.deleteAdmin);

app.get('/stores', storeCtrl.getAllStores);
app.get('/stores/:uuid', storeCtrl.getStoreById);
app.post('/stores', storeCtrl.createStore);
app.put('/stores/:uuid', storeCtrl.updateStore);
app.delete('/stores/:uuid', storeCtrl.deleteStore);

app.get('/appointments', appointmentCtrl.getAllAppointments);
app.get('/appointments/:uuid', appointmentCtrl.getAppointmentById);
app.post('/appointments', appointmentCtrl.createAppointment);
app.put('/appointments/:uuid', appointmentCtrl.updateAppointment);
app.delete('/appointments/:uuid', appointmentCtrl.deleteAppointment);

app.listen({ port: 5000 }, async () => {
    console.log('Server running on http://localhost:5000');
    await sequelize.authenticate();
    console.log('Database connected!');
});