const ApiError = require('../utils/apiError');
const errorHandler = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({ code: err.statusCode, message: err.message });
  }
    console.error(err);
    res.status(500).json({ message: 'An unexpected error occurred', error: err.stack });
  };
  
  module.exports = errorHandler;
  