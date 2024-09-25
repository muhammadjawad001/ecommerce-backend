const Joi = require("joi");

// Signup  
const signup = Joi.object({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(6).required(),
    email: Joi.string().email().required(),
}); // Make sure to export it as an object


// Login  
const login = Joi.object({
  email: Joi.string().email().required(), // Validate email as required
  password: Joi.string().min(6).required(), // Password with minimum 6 characters
});

// User profile update  
const profileUpdate = Joi.object({
  username: Joi.string().min(3),
  email: Joi.string().email(),
  password: Joi.string().min(6).required(),
});

const admin = Joi.object({
  username: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid('admin').required() // Role must be 'admin'
});

module.exports = {
  signup,
  login,
  profileUpdate,
  admin
};
