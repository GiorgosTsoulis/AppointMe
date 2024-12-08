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
      this.belongsTo(models.Admin, { foreignKey: 'adminId', as: 'admin' });
    }

    toJSON() {
      return { ...this.get(), storeId: undefined, adminId: undefined }
    }
  }
  Store.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    storeId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false
    },
    adminId: {
      type: DataTypes.INTEGER,
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