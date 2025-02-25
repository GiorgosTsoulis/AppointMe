'use strict';
const { Model } = require('sequelize');
const crypto = require('crypto');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Appointment, { foreignKey: 'customerId', as: 'appointments' });
      this.hasMany(models.Store, { foreignKey: 'adminId', as: 'stores' });
    }

    toJSON() {
      const attributes = { ...this.get() };
      delete attributes.password; // Never expose passwords
      return attributes;
    }

    validatePassword(password) {
      const hash = crypto.createHash('sha256').update(password).digest('hex');
      return this.password === hash;
    }
  }
  User.init(
    {
      userId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM('Customer', 'Admin', 'Staff'),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
