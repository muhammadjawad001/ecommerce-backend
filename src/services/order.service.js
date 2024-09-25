const { Order, OrderItem, Product } = require('../models');

class OrderService {
  async createOrder(orderData, orderItemsData) {
    const transaction = await Order.sequelize.transaction();
    try {
      // Create the order
      const order = await Order.create(orderData, { transaction });
      
      // Prepare order items data
      const orderItems = orderItemsData.map(item => ({
        ...item,
        orderId: order.id, // Associate with the created order
      }));

      // Create order items
      await OrderItem.bulkCreate(orderItems, { transaction });

      await transaction.commit();
      return order;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
}

module.exports = new OrderService();
