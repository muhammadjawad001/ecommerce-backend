const catchAsync = require('../utils/catchAsync');
const {ProductService} = require('../services/index');

// Create Product
exports.createProduct = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const productData = {
    ...req.body,
    imageUrl: req.file ? `/uploads/${req.file.filename}` : null,
};
  const product = await ProductService.createProduct(productData, userId);
  res.status(201).json(product);
});

// Get All Products wiith filters
exports.getProducts = catchAsync(async (req, res) => {
  const filters = req.query;
  const products = await ProductService.getFilteredProducts(filters);
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