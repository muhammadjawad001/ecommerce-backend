const orderService = require('../services/order.service');

class OrderController {
  async createOrder(req, res) {
    try {
      const { orderData, orderItemsData } = req.body; // Expect orderData and orderItemsData in the request body
      const order = await orderService.createOrder(orderData, orderItemsData);
      res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
      res.status(500).json({ message: 'Error creating order', error: error.message });
    }
  }
}

module.exports = new OrderController();
