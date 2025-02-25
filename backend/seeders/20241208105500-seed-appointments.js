'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert('Appointments', [
      {
        appointmentId: uuidv4(),
        customerId: '6519ceb3-1f17-4fce-88de-5f9ed67c7efa',
        storeId: '5f0a984b-151b-434e-b514-935adf1b9c1b',
        staffId: '67dba691-a13f-4ce0-afdb-2cbae8b265dd',
        serviceId: '4b3c3138-a2d0-4ffc-992b-da707866087e',
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