class userService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async getAllUsers() {
        return this.userRepository.getAllUsers();
    }

    async getUserById(uuid) {
        const user = this.userRepository.getUserById(uuid);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }

    async createUser(user) {
        if (!user.username || !user.email || !user.password) {
            throw new Error('Invalid user data');
        }
        return await this.userRepository.createUser(user);
    }

    async updateUser(uuid, user) {
        const updateUser = await this.userRepository.updateUser(uuid, user);
        if (!updateUser) {
            throw new Error('User not found');
        }
        return updateUser;
    }

    async deleteUser(uuid) {
        const success = await this.userRepository.deleteUser(uuid);
        if (!success) {
            throw new Error('User not found');
        }
        return success;
    }
}

module.exports = userService;