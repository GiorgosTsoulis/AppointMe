const jwt = require('jsomwebtoken');
const crypto = require('crypto');

class authController {
    constructor(userService) {
        this.userService = userService;
    }

    signIn = async (req, res) => {
        const {username, password} = req.body;

        try {
            const user = await this.userService.getUserByUsername(username);
            if (!user || !user.validatePassword(password)) {
                return res.status(401).json({message: 'Invalid credentials'});
            }

            const token = jwt.sign();
        } catch (error) {

        }
    } 
}

module.exports = authController;