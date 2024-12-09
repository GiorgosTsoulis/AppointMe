'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        userId: uuidv4(),
        username: 'giorgos_admin',
        email: 'admin@example.com',
        password: 'admin123',
        role: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: uuidv4(),
        username: 'john_doe',
        email: 'john@example.com',
        password: 'password123',
        role: 'Customer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: uuidv4(),
        username: 'jane_staff',
        email: 'jane@example.com',
        password: 'password123',
        role: 'Staff',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};