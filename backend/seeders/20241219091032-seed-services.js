'use strict';

const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.bulkInsert('Services', [
      {
        serviceId: uuidv4(),
        storeId: '5f0a984b-151b-434e-b514-935adf1b9c1b',
        name: 'Haircut',
        duration: 30,
        price: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        serviceId: uuidv4(),
        storeId: '5f0a984b-151b-434e-b514-935adf1b9c1b',
        name: 'Shampoo',
        duration: 15,
        price: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        serviceId: uuidv4(),
        storeId: '5f0a984b-151b-434e-b514-935adf1b9c1b',
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
