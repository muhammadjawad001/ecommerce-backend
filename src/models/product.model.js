const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user.model'); // Import User model to establish association

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: { // New field for associating products with users
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Users', // Name of the user table
            key: 'id',
        },
    },
}, {
    hooks: {
        beforeCreate: (product, options) => {
            // custom logic before product creation
        },
        beforeUpdate: (product, options) => {
            // custom logic before product update
        },
    },
});

module.exports = Product;
