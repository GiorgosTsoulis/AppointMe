class userController {
    constructor(userService) {
        this.userService = userService;
    }

    getAllUsers = async (req, res) => {
        try {
            const users = await this.userService.getAllUsers();
            res.json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    getUserById = async (req, res) => {
        const userId = req.params.userId;

        try {
            const user = await this.userService.getUserById(userId);
            res.json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    getUserByUsername = async (req, res) => {
        const username = req.params.username;

        try {
            const user = await this.userService.getUserByUsername(username);
            res.json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    getUsersByRole = async (req, res) => {
        const role = req.params.role;
        try {
            const users = await this.userService.getUsersByRole(role);
            res.json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    getUserRoleByUsername = async (req, res) => {
        const username = req.params.username;

        try {
            const userRole = await this.userService.getUserRoleByUsername(username);
            res.json(userRole);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    createUser = async (req, res) => {
        const user = req.body;

        try {
            const newUser = await this.userService.createUser(user);
            res.json(newUser);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    updateUser = async (req, res) => {
        const userId = req.params.userId;
        const user = req.body;

        try {
            const updatedUser = await this.userService.updateUser(userId, user);
            res.json(updatedUser);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    deleteUser = async (req, res) => {
        const userId = req.params.uuid;

        try {
            const success = await this.userService.deleteUser(userId);
            res.json(success);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }
}

module.exports = userController;