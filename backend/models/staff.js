'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Staff extends Model {
    static associate(models) {
      this.belongsTo(models.Store, { foreignKey: 'storeId', as: 'store' });
      this.hasMany(models.Appointment, { foreignKey: 'staffId', as: 'appointments' });
      this.belongsTo(models.Service, { foreignKey: 'serviceId', as: 'service' });
      this.belongsTo(models.User, { foreignKey: 'userId', as: 'user', constraints: false, scope: { role: 'Staff' } });
    }

    toJSON() {
      const attributes = { ...this.get() };
      delete attributes.staffId;
      delete attributes.userId;
      delete attributes.storeId;
      delete attributes.serviceId;
      return attributes;
    }
  }

  Staff.init(
    {
      staffId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      storeId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      serviceId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Staff',
      tableName: 'Staff'
    }
  );

  return Staff;
};
