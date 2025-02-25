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
                console.log('User not found');
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            const providedPasswordHash = crypto.createHash('sha256').update(password).digest('hex');
            console.log('Stored password hash:', user.password);
            console.log('Provided password hash:', providedPasswordHash);

            if (!user.validatePassword(password)) {
                console.log('Password does not match');
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            const token = jwt.sign({ userId: user.userId, username: user.username }, "mySecretKey", { expiresIn: '1h' });
            console.log('User signed in successfully');
            console.log('Signed in user:', user.username); // Debug log
            res.json({ token, user: { username: user.username, role: user.role } });
        } catch (error) {
            console.error('Error during sign in:', error);
            res.status(500).json({ message: 'Server error' });
        }
    }

    signUp = async (req, res) => {
        const { username, password, role } = req.body;

        console.log('Received sign-up request:', { username, role });

        try {
            const existingUser = await this.userService.getUserByUsername(username);
            if (existingUser) {
                console.log('User already exists:', username);
                return res.status(400).json({ message: 'User already exists' });
            }

            const hash = crypto.createHash('sha256').update(password).digest('hex');
            console.log('Hashed password:', hash);

            const user = { username, password: hash, role };
            console.log('Creating user:', user);

            const newUser = await this.userService.createUser(user);
            console.log('User created successfully:', newUser);

            res.json(newUser);
        } catch (error) {
            console.error('Error during sign-up:', error);
            res.status(500).json(error);
        }
    }

    getMe = async (req, res) => {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decodedToken = jwt.verify(token, "mySecretKey");
            const userId = decodedToken.userId;

            const user = await this.userService.getUserById(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            console.log('Authenticated user:', user.username); // Debug log
            res.json({ username: user.username, role: user.role });
        } catch (error) {
            console.error('Error fetching user data:', error);
            res.status(500).json({ message: 'Server error' });
        }
    }
}

module.exports = authController;