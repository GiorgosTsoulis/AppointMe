'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert('Stores', [
      {
        storeId: uuidv4(),
        adminId: 'bde4767c-2585-4cd1-801c-c773459b6a7f',
        name: 'Barber Shop',
        location: '123 Main St',
        service: 'Barber',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.bulkDelete('Stores', null, {});
  }
};