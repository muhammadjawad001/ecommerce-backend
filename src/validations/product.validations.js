// validations/productValidation.js
const Joi = require('joi');

const productValidationSchema = Joi.object({
    name: Joi.string().min(3).required(),
    description: Joi.string().optional(),
    price: Joi.number().positive().required(),
    stock: Joi.number().integer().min(0).default(0),
    imageUrl: Joi.string().uri().optional(),
    location: Joi.string().optional(),
    condition: Joi.string().valid('new', 'used').required(),  // Enum for condition  // UUID validation for userId
});

module.exports = {
    productValidationSchema
};
