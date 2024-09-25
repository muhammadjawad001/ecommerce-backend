// validations/categoryValidation.js
const Joi = require('joi');

const categoryValidationSchema = Joi.object({
    name: Joi.string().min(3).required(),  // Category name must be at least 3 characters long and is required
    parentId: Joi.string().uuid().allow(null)  // UUID validation for parentId, allowing it to be null for top-level categories
});

module.exports = {
    categoryValidationSchema
};
