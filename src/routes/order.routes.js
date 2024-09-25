const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authentication');
const {OrderController} = require('../controllers');


router.post('/orders', protect, OrderController.createOrder);

module.exports = router;
