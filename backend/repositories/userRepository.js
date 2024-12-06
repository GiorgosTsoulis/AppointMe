class userRepository {
    constructor(userModel) {
        this.userModel = userModel;
    }

    async getAllUsers() {
        return this.userModel.findAll();
    }

    async getUserById(uuid) {
        return this.userModel.findOne({ where: { uuid } });
    }

    async createUser(user) {
        return this.userModel.create(user);
    }

    async updateUser(uuid, user) {
        const userToUpdate = await this.userModel.findOne({ where: { uuid } });
        if (user) {
            return userToUpdate.update(user);
        }
        return null;
    }

    async deleteUser(uuid) {
        const user = await this.userModel.findOne({ where: { uuid } });
        if (user) {
            return user.destroy();
        }
    }
}

module.exports = userRepository;