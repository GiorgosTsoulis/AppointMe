'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.bulkInsert('Staff', [
      {
        staffId: uuidv4(),
        userId: '67dba691-a13f-4ce0-afdb-2cbae8b265dd',
        storeId: '5f0a984b-151b-434e-b514-935adf1b9c1b',
        serviceId: '4b3c3138-a2d0-4ffc-992b-da707866087e',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.bulkDelete('Staff', null, {});
  },
};
