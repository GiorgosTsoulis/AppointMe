const express = require('express');
const { sequelize, User } = require('./models');

const app = express();
app.use(express.json());

app.post('/users', async (req, res) => {
    const { username, email, password, role } = req.body;

    try {
        const user = await User.create({ username, email, password, role });
        return res.json(user);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
});

app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        return res.json(users);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
});

app.get('/users/:uuid', async (req, res) => {
    const uuid = req.params.uuid;

    try {
        const user = await User.findOne({
            where: { uuid }
        });
        return res.json(user);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
});

app.delete('/users/:uuid', async (req, res) => {
    const uuid = req.params.uuid;

    try {
        const user = await User.findOne({ where: { uuid } });
        await user.destroy();
    }
    catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
});

app.listen({ port: 5000 }, async () => {
    console.log('Server running on http://localhost:5000');
    await sequelize.authenticate();
    console.log('Database connected!');
});