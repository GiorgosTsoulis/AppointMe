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
      this.belongsTo(models.User, { foreignKey: 'customerId', as: 'customer', constraints: false, scope: { role: 'Customer' } });
      this.belongsTo(models.Store, { foreignKey: 'storeId', as: 'store' });
      this.belongsTo(models.User, { foreignKey: 'staffId', as: 'staff', constraints: false, scope: { role: 'Staff' } });
      this.belongsTo(models.Service, { foreignKey: 'serviceId', as: 'service' });
    }

    toJSON() {
      const attributes = { ...this.get() };
      delete attributes.appointmentId;
      delete attributes.customerId;
      delete attributes.storeId;
      delete attributes.staffId;
      return attributes;
    }

  }
  Appointment.init({
    appointmentId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
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
    serviceId: {
      type: DataTypes.UUID,
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