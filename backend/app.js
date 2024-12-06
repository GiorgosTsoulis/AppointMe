const express = require('express');
const { sequelize, User } = require('./models');
const { userCtrl } = require('./diContainer');

const app = express();
app.use(express.json());

app.get('/users', userCtrl.getAllUsers);
app.get('/users/:uuid', userCtrl.getUserById);
app.post('/users', userCtrl.createUser);
app.put('/users/:uuid', userCtrl.updateUser);
app.delete('/users/:uuid', userCtrl.deleteUser);

app.listen({ port: 5000 }, async () => {
    console.log('Server running on http://localhost:5000');
    await sequelize.authenticate();
    console.log('Database connected!');
});