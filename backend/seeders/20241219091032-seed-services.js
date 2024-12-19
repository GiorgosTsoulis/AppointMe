'use strict';

const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.bulkInsert('Services', [
      {
        serviceId: uuidv4(),
        storeId: '4e07b61f-d17b-4ee2-af58-a0874ce4fd2e',
        name: 'Haircut',
        duration: 30,
        price: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        serviceId: uuidv4(),
        storeId: '4e07b61f-d17b-4ee2-af58-a0874ce4fd2e',
        name: 'Shampoo',
        duration: 15,
        price: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        serviceId: uuidv4(),
        storeId: '4e07b61f-d17b-4ee2-af58-a0874ce4fd2e',
        name: 'Hair Color',
        duration: 60,
        price: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.bulkDelete('Services', null, {});
  }
};
