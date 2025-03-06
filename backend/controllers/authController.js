// filepath: /home/giorgos/AppointMe/backend/controllers/authController.js
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

class authController {
    constructor(userService) {
        this.userService = userService;
    }

    signIn = async (req, res) => {
        const { username, password } = req.body;

        try {
            const user = await this.userService.getUserByUsername(username);
            if (!user) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            const providedPasswordHash = crypto.createHash('sha256').update(password).digest('hex');
            if (!user.validatePassword(password)) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            const token = jwt.sign({ userId: user.userId, username: user.username }, "mySecretKey", { expiresIn: '1h' });
            res.json({ token, user: { username: user.username, role: user.role } });
        } catch (error) {
            res.status(500).json({ message: 'Server error' });
        }
    }

    signUp = async (req, res) => {
        const { username, password, role } = req.body;

        try {
            const existingUser = await this.userService.getUserByUsername(username);
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }

            const hash = crypto.createHash('sha256').update(password).digest('hex');
            const user = { username, password: hash, role };
            const newUser = await this.userService.createUser(user);

            const token = jwt.sign({ userId: newUser.userId, username: newUser.username }, "mySecretKey", { expiresIn: '1h' });
            res.json({ token, user: { username: newUser.username, role: newUser.role } });
        } catch (error) {
            res.status(500).json({ message: 'Server error' });
        }
    }

    getMe = async (req, res) => {
        try {
            const token = req.headers.authorization.split(' ')[1];
            console.log('Token received:', token); // Debug log
            const decodedToken = jwt.verify(token, "mySecretKey");
            const userId = decodedToken.userId;

            const user = await this.userService.getUserById(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.json({ username: user.username, role: user.role });
        } catch (error) {
            console.error('Error verifying token:', error); // Debug log
            res.status(500).json({ message: 'Server error' });
        }
    }
}

module.exports = authController;