'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Staff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId', as: 'staff' });
      this.belongsTo(models.Store, { foreignKey: 'storeId', as: 'store' });
      this.hasMany(models.Appointment, { foreignKey: 'staffId', as: 'appointments' });
    }

    toJSON() {
      return { ...this.get(), staffId: undefined, userId: undefined, storeId: undefined, appointmentId: undefined }
    }
  }
  Staff.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    staffId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false
    },
    storeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    serviceType: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Staff',
  });
  return Staff;
};