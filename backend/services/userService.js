const e = require("express");

class userService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async getAllUsers() {
        return this.userRepository.getAllUsers();
    }

    async getUserById(id) {
        const user = this.userRepository.getUserById(id);
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

    async updateUser(id, user) {
        const updateUser = await this.userRepository.updateUser(id, user);
        if (!updateUser) {
            throw new Error('User not found');
        }
        return updateUser;
    }

    async deleteUser(id) {
        const success = await this.userRepository.deleteUser(id);
        if (!success) {
            throw new Error('User not found');
        }
        return success;
    }
}

module.exports = userService;