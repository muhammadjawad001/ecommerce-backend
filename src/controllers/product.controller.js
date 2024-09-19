const catchAsync = require('../utils/catchAsync');
const {ProductService} = require('../services/index');

// Create Product
exports.createProduct = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const product = await ProductService.createProduct(req.body, userId);
  res.status(201).json(product);
});

// Get All Products
exports.getProducts = catchAsync(async (req, res) => {
  const products = await ProductService.getProducts();
  res.status(200).json(products);
});

// Get Single Product by ID
exports.getProductById = catchAsync(async (req, res) => {
  const product = await ProductService.getProductById(req.params.id);
  res.status(200).json(product);
});

// Update Product
exports.updateProduct = catchAsync(async (req, res) => {
  const product = await ProductService.updateProduct(req.params.id, (req.body));
  res.status(200).json(product);
});

// Delete Product
exports.deleteProduct = catchAsync(async (req, res) => {
  await ProductService.deleteProduct(req.params.id);
  res.status(204).send()
});