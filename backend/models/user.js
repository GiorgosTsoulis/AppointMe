'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Store, Appointment, Customer, Staff, Admin }) {
      // Define associations here
      this.hasMany(Appointment, { foreignKey: 'customerId', as: 'appointments' });
      this.hasMany(Store, { foreignKey: 'admin', as: 'stores' });
      this.hasOne(Customer, { foreignKey: 'userId', as: 'customer' });
      this.hasOne(Staff, { foreignKey: 'userId', as: 'staff' });
      this.hasOne(Admin, { foreignKey: 'userId', as: 'admin' });
    }

    toJSON() {
      const attributes = { ...this.get() };
      delete attributes.password; // Never expose passwords
      return attributes;
    }
  }
  User.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
      },
      userId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
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
        type: DataTypes.ENUM('Customer', 'Admin'),
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
