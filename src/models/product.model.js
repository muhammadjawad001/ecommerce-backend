const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Users = require("./user.model"); // Correct import of User model
const Categories = require("./category.model");
const OrderItem = require('./orderItems.model'); // Correct import of Category model

const Product = sequelize.define(
  "Product",
  {
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
    categoryId: {
      // Foreign key reference to Category
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Categories, // Ensure model name matches the table name in the database
        key: "id",
      },
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    condition: {
      type: DataTypes.ENUM("new", "used"),
      allowNull: false,
    },
    userId: {
      // Foreign key reference to User
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Users, // Ensure model name matches the table name in the database
        key: "id",
      },
    },
    status: {
      type: DataTypes.ENUM("available", "sold_out"),
      defaultValue: "available", // default to available
    },
  },
  {
    hooks: {
      beforeCreate: (product, options) => {
        // Custom logic before create
      },
      beforeUpdate: (product, options) => {
        // Custom logic before update
      },
    },
  }
);



module.exports = Product;