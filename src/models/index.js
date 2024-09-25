const Product = require('./product.model');
const Category = require('./category.model');
const User = require('./user.model');
const Order = require('./order.model');
const OrderItem = require('./orderItems.model')

//Define associations
Category.hasMany(Product, { foreignKey: 'categoryId'});
Product.belongsTo(Category, { foreignKey: 'categoryId'});

User.hasMany(Product, { foreignKey: 'userId', onDelete: 'CASCADE' });
Product.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

Order.hasMany(OrderItem, { foreignKey: 'orderId' });
OrderItem.belongsTo(Order, { foreignKey: 'orderId' });

Product.hasMany(OrderItem, { foreignKey: 'productId' });
OrderItem.belongsTo(Product, { foreignKey: 'productId' });


module.exports.UserSchema = require('./user.model');
module.exports.ProductSchema = require('./product.model');
module.exports.CategorySchema = require('./category.model');
module.exports.Order = require('./order.model');
module.exports.OrderItem = require('./orderItems.model');