class userService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async getAllUsers() {
        return this.userRepository.getAllUsers();
    }

    async getUserById(userId) {
        const user = this.userRepository.getUserById(userId);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }

    async getUsersByRole(role) {
        const users = this.userRepository.getUsersByRole(role);
        if (!users) {
            throw new Error('Users not found');
        }
        return users;
    }

    async createUser(user) {
        if (!user.username || !user.email || !user.password) {
            throw new Error('Invalid user data');
        }
        return await this.userRepository.createUser(user);
    }

    async updateUser(userId, user) {
        const updateUser = await this.userRepository.updateUser(userId, user);
        if (!updateUser) {
            throw new Error('User not found');
        }
        return updateUser;
    }

    async deleteUser(userId) {
        const success = await this.userRepository.deleteUser(userId);
        if (!success) {
            throw new Error('User not found');
        }
        return success;
    }
}

module.exports = userService;