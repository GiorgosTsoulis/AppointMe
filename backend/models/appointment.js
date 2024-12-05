'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Store, Staff }) {
      this.belongsTo(User, { foreignKey: 'userId', as: 'customer' });
      this.belongsTo(Store, { foreignKey: 'storeId', as: 'store' });
      this.belongsTo(Staff, { foreignKey: 'staffId', as: 'staff' });
    }

    toJSON() {
      return { ...this.get(), appointmentId: undefined, customerId: undefined, storeId: undefined, staffId: undefined }
    }

  }
  Appointment.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    appointmentId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    storeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    StaffId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    serviceType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    appointmentDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    appointmentTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('Pending', 'Confirmed', 'Cancelled'),
      allowNull: false,
      defaultValue: 'pending'
    },
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};