'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.bulkInsert('Staff', [
      {
        staffId: uuidv4(),
        userId: '275d05a0-a33a-4f35-a06c-0912af83256d', // Replace with actual UUID from Users table
        storeId: '4e07b61f-d17b-4ee2-af58-a0874ce4fd2e', // Replace with actual UUID from Stores table
        position: '05374bbf-1202-4fcb-b877-92c1f606ae94',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.bulkDelete('Staff', null, {});
  },
};
