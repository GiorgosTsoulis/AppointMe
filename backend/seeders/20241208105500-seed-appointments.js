'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert('Appointments', [
      {
        appointmentId: uuidv4(),
        customerId: '959587fb-6912-460c-83e3-ab0df96249f1',
        storeId: '97f291ce-678f-4a4d-a4d6-48d6cf8b1a96',
        staffId: 'ad621993-d585-48ee-81a5-725efb1500b2',
        serviceType: 'Haircut',
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