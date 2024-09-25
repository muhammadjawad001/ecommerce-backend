const {CategorySchema} = require('../models/index');
const ApiError = require('../utils/apiError');

// Create a new category
exports.createCategory = async (categoryData) => {
    return await CategorySchema.create(categoryData);
};

// Get all categories
exports.getAllCategories = async () => {
    return await CategorySchema.findAll();
};

// Get category by ID
exports.getCategoryById = async (categoryId) => {
    const category = await CategorySchema.findByPk(categoryId);
    if (!category) {
        throw new ApiError(404, "Category not found");
    }
    return category;
};

// Update category
exports.updateCategory = async (categoryId, updatedData) => {
    const category = await CategorySchema.findByPk(categoryId);
    if (!category) {
        throw new ApiError(404, "Category not found");
    }
    await category.update(updatedData);
    return category;
};

// Delete category
exports.deleteCategory = async (categoryId) => {
    const category = await CategorySchema.findByPk(categoryId);
    if (!category) {
        throw new ApiError(404, "Category not found");
    }
    await category.destroy();
};
