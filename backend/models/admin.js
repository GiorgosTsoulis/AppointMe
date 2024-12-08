'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Store, { foreignKey: 'adminId', as: 'stores' });
      this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    }

    toJSON() {
      return { ...this.get(), id: undefined }
    }
  }
  Admin.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    adminId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Admin',
  });
  return Admin;
};