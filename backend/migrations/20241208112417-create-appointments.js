'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Appointments', {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      appointmentId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      customerId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      storeId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      staffId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      serviceType: {
        type: DataTypes.STRING,
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