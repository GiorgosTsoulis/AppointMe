'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        uuid: '11111111-1111-1111-1111-111111111111',
        username: 'admin',
        email: 'admin@example.com',
        password: 'admin123',
        role: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: '22222222-2222-2222-2222-222222222222',
        username: 'john_doe',
        email: 'john@example.com',
        password: 'password123',
        role: 'Customer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: '33333333-3333-3333-3333-333333333333',
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