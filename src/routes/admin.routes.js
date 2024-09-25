const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const validate = require('../middleware/validate');
const {UserValidation} = require('../validations')
const { protect, authorizeRoles } = require('../middleware/authentication');

// Admin routes
router.get('/users', protect, authorizeRoles('admin'), adminController.getUsers); // Get all users
router.put('/users/:id/ban', protect, authorizeRoles('admin'), adminController.banUser); // Ban user
router.put('/users/:id/unban', protect, authorizeRoles('admin'), adminController.unbanUser); // Unban user
router.delete('/products/:id', protect, authorizeRoles('admin'), adminController.deleteProduct); // Delete product


// Super Admin routes
router.post('/admins', protect, authorizeRoles('super_admin'), validate(UserValidation.admin), adminController.createAdmin); // Create admin
router.delete('/admins/:id', protect, authorizeRoles('super_admin'), adminController.deleteAdmin); // Delete admin
router.get('/admins', protect, authorizeRoles('super_admin'), adminController.getAdmins); // Get all admins

module.exports = router;
