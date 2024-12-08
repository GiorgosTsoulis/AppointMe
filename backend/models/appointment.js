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
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'customerId', as: 'customer' });
      this.belongsTo(models.Store, { foreignKey: 'storeId', as: 'store' });
      this.belongsTo(models.Staff, { foreignKey: 'staffId', as: 'staff' });
    }

    toJSON() {
      return { ...this.get(), appointmentId: undefined, customerId: undefined, storeId: undefined, staffId: undefined }
    }

  }
  Appointment.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    appointmentId: {
      type: DataTypes.INTEGER,
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
    staffId: {
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
      defaultValue: 'Pending'
    },
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};