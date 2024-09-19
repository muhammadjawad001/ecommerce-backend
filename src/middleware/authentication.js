const jwt = require('jsonwebtoken');
const { findUserById } = require('../services/user.service');
const { findProductById } = require('../services/product.service'); // Import product service

// Middleware for verifying JWT token
exports.protect = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ message: 'No token provided, access denied' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await findUserById(decoded.userId);
    if (!user) {
      return res.status(401).send();
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token, access denied' });
  }
};

// Middleware for authorizing user access to their products
exports.authorizeProductAccess = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await findProductById(productId);

    if (product.userId !== req.user.id) {
      return res.status(403).json({ message: 'Forbidden: You do not have access to this product' });
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};



// Middleware for checking user role
exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access denied, insufficient permissions' });
    }
    next();
  };
};
