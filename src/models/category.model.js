const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Product = require('./product.model'); // Correct import of Product model

const Category = sequelize.define('Category',{
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
    parentId: {
        type: DataTypes.UUID,
        allowNull: true,
    },
}, {
    timestamps: true,
});



module.exports = Category;