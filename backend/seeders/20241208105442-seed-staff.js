'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Staffs', [
      {
        uuid: '66666666-6666-6666-6666-666666666666',
        staffId: 1,
        storeId: 1, // Assuming the first store
        userId: 3, // Assuming the third user is the staff
        serviceType: 'Haircut',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Staffs', null, {});
  }
};