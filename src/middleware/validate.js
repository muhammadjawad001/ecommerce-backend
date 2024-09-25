// const Joi = require('joi')
// const ApiError = require('../utils/apiError'); // Adjust the path as necessary
// const httpStatus = require('http-status');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
      return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

module.exports = validate;
