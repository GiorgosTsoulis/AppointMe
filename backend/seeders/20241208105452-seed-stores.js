'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert('Stores', [
      {
        storeId: uuidv4(),
        adminId: '924e8a57-da10-42a4-b760-398e7c69b9ac',
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