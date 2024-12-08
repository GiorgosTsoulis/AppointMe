'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Appointments', [
      {
        uuid: '88888888-8888-8888-8888-888888888888',
        appointmentId: 1,
        customerId: 1, // Assuming the first customer
        storeId: 1, // Assuming the first store
        staffId: 1, // Assuming the first staff
        serviceType: 'Haircut',
        appointmentDate: new Date(),
        appointmentTime: '10:00:00',
        status: 'Pending',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Appointments', null, {});
  }
};