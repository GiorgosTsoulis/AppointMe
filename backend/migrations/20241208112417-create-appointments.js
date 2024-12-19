'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Appointments', {
      appointmentId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      customerId: {
        type: DataTypes.UUID,
        allowNull: false
      },
      storeId: {
        type: DataTypes.UUID,
        allowNull: false
      },
      staffId: {
        type: DataTypes.UUID,
        allowNull: false
      },
      serviceId: {
        type: DataTypes.UUID,
        allowNull: false
      },
      appointmentDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      appointmentTime: {
        type: DataTypes.TIME,
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM('Pending', 'Confirmed', 'Cancelled'),
        allowNull: false,
        defaultValue: 'Pending'
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('Appointments');
  }
};