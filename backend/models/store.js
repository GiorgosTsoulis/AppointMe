'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    static associate(models) {
      this.hasMany(models.Appointment, { foreignKey: 'storeId', as: 'appointments' });
      this.belongsTo(models.User, { foreignKey: 'adminId', as: 'admin', constraints: false, scope: { role: 'Admin' } });
      this.hasMany(models.Service, { foreignKey: 'storeId', as: 'services' });
      this.hasMany(models.Staff, { foreignKey: 'storeId', as: 'staff' });
    }

    toJSON() {
      const attributes = { ...this.get() };
      return attributes
    }
  }
  Store.init({
    storeId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    adminId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    service: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Store',
  });
  return Store;
};