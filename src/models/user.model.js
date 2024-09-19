'use strict';
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const bcrypt = require('bcryptjs');
const Product = require('./product.model'); // Import Product model

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('super_admin', 'admin', 'user'),
    allowNull: false,
    defaultValue: 'user',
  },
}, {
  timestamp: true,
  hooks: {
    beforeCreate: async (user) => {
      if (user.password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      }
    },
    beforeUpdate: async (user) => {
      if (user.password && user.changed('password')) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      }
    },
  },
});

// Add association to Product model
User.hasMany(Product, { foreignKey: 'userId', onDelete: 'CASCADE' }); // A user can have many products
Product.belongsTo(User, { foreignKey: 'userId' }); // A product belongs to a user

User.prototype.validPassword = async function (password) {
  return await bcrypt.compare(password, this.password); // Compare plain text with hashed password
};

module.exports = User;
