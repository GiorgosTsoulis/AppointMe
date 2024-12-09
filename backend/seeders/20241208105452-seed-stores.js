'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert('Stores', [
      {
        storeId: uuidv4(),
        adminId: '8a684616-1c9a-4c82-8da7-a941e6771945',
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