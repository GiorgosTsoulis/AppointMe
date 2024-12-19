'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert('Appointments', [
      {
        appointmentId: uuidv4(),
        customerId: '00117666-6827-4a45-94ac-9f94cda0ff33',
        storeId: '4e07b61f-d17b-4ee2-af58-a0874ce4fd2e',
        staffId: '275d05a0-a33a-4f35-a06c-0912af83256d',
        serviceId: '05374bbf-1202-4fcb-b877-92c1f606ae94',
        appointmentDate: new Date(),
        appointmentTime: '10:00:00',
        status: 'Pending',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.bulkDelete('Appointments', null, {});
  }
};