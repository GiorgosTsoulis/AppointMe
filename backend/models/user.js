'use strict';
const { Model } = require('sequelize');
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
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notNull: { msg: 'User must have an email' },
          notEmpty: { msg: 'Email must not be empty' },
          isEmail: { msg: 'Must be a valid email address' },
        },
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
