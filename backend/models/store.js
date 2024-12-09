'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Appointment, { foreignKey: 'storeId', as: 'appointments' });
      this.belongsTo(models.User, { foreignKey: 'adminId', as: 'admin', constraints: false, scope: { role: 'Admin' } });
    }

    toJSON() {
      const attributes = { ...this.get() };
      delete attributes.storeId;
      delete attributes.adminId;
      return attributes;
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