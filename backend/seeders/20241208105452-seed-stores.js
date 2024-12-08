'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Stores', [
      {
        uuid: '77777777-7777-7777-7777-777777777777',
        storeId: 1,
        adminId: 1, // Assuming the first admin
        name: 'Main Street Store',
        location: '123 Main St',
        service: 'Salon',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Stores', null, {});
  }
};