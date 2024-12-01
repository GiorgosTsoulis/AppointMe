'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          username: 'admin',
          email: 'admin@example.com',
          password: 'admin123',
          role: 'Admin',
        },
        {
          username: 'john_doe',
          email: 'john@example.com',
          password: 'password123',
          role: 'Customer',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
