const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Order = require('./order.model');
const Product = require('./product.model');

const OrderItem = sequelize.define('OrderItem', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  orderId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Order, // Link to Order model
      key: 'id',
    },
  },
  productId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Product, // Link to Product model
      key: 'id',
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  hooks: {
    beforeCreate: (orderItem, options) => {
      // Custom logic before creating order items
    },
  },
});


module.exports = OrderItem;