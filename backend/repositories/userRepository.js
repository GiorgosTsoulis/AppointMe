class userRepository {
    constructor(userModel) {
        this.userModel = userModel;
    }

    async getAllUsers() {
        return this.userModel.findAll();
    }

    async getUserById(userId) {
        return this.userModel.findOne({ where: { userId } });
    }

    async getUsersByRole(role) {
        return this.userModel.findAll({ where: { role } });
    }

    async getUserByUsername(username) {
        return this.userModel.findOne({ where: { username } });
    }

    async getUserRoleByUsername(username) {
        return this.userModel.findOne({ where: { username } });
    }

    async createUser(user) {
        return this.userModel.create(user);
    }

    async updateUser(userId, user) {
        const userToUpdate = await this.userModel.findOne({ where: { userId } });
        if (user) {
            return userToUpdate.update(user);
        }
        return null;
    }

    async deleteUser(userId) {
        const user = await this.userModel.findOne({ where: { userId } });
        if (user) {
            return user.destroy();
        }
    }
}

module.exports = userRepository;