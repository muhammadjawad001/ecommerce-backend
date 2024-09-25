const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user.model');
const Product = require('./product.model');
const OrderItem = require('./orderItems.model');

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  status: {
    type: DataTypes.ENUM('pending', 'completed', 'canceled'),
    defaultValue: 'pending',
    allowNull: false,
  },
  totalAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  paymentMethod: {
    type: DataTypes.ENUM('credit_card', 'paypal', 'cash_on_delivery'),
    allowNull: false,
  },
  paymentStatus: {
    type: DataTypes.ENUM('paid', 'unpaid'),
    defaultValue: 'unpaid',
  },
}, {});


module.exports = Order;