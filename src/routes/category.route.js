const express = require('express');
const router = express.Router();
const { categoryController } = require('../controllers/index');
const { protect, authorizeRoles } = require('../middleware/authentication');
const validate = require('../middleware/validate')
const categoryValidationSchema = require('../validations/index')

// Create Category
router.post('/categories', protect, authorizeRoles('admin'), validate(categoryValidationSchema), categoryController.createCategory);

// Get all Categories
router.get('/categories', protect, authorizeRoles('admin'), categoryController.getCategories);

// Get Category by ID
router.get('/categories/:id', protect, authorizeRoles('admin'), categoryController.getCategoryById);

// Update Category
router.put('/categories/:id', protect, authorizeRoles('admin'),validate(categoryValidationSchema), categoryController.updateCategory);

// Delete Category
router.delete('/categories/:id', protect, authorizeRoles('admin'), categoryController.deleteCategory);

module.exports = router;
