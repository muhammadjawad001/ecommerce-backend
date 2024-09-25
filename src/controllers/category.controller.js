const catchAsync = require('../utils/catchAsync');
const { CategoryService } = require('../services/index');

// Create a new category
exports.createCategory = catchAsync(async (req, res) => {
    const category = await CategoryService.createCategory(req.body);
    res.status(201).json(category);
});

// Get all categories
exports.getCategories = catchAsync(async (req, res) => {
    const categories = await CategoryService.getAllCategories();
    res.status(200).json(categories);
});

// Get category by ID
exports.getCategoryById = catchAsync(async (req, res) => {
    const category = await CategoryService.getCategoryById(req.params.id);
    res.status(200).json(category);
});

// Update category
exports.updateCategory = catchAsync(async (req, res) => {
    const category = await CategoryService.updateCategory(req.params.id, req.body);
    res.status(200).json(category);
});

// Delete category
exports.deleteCategory = catchAsync(async (req, res) => {
    await CategoryService.deleteCategory(req.params.id);
    res.status(204).send();
});
