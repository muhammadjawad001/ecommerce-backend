const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Ecommerce_DB', 'root', 'password', {
  host: '127.0.0.1',  // e.g., 'localhost' if it's local
  dialect: 'mysql',
});


module.exports = sequelize;
