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
        const uuid = req.params.uuid;

        try {
            const user = await this.userService.getUserById(uuid);
            res.json(user);
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
        const uuid = req.params.uuid;
        const user = req.body;

        try {
            const updatedUser = await this.userService.updateUser(uuid, user);
            res.json(updatedUser);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    deleteUser = async (req, res) => {
        const uuid = req.params.uuid;

        try {
            const success = await this.userService.deleteUser(uuid);
            res.json(success);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }
}

module.exports = userController;