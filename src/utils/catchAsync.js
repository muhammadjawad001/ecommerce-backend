const catchAsync = (fn) => {
    return (req, res, next) => {
      Promise.resolve(fn(req, res, next)).catch((err) => next(err, req, res, next));
    };
  };
  
  module.exports = catchAsync;
  