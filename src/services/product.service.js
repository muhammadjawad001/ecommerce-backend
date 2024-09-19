const {ProductSchema} = require('../models/index');
const ApiError = require('../utils/apiError');

exports.createProduct = async (productData, userId) => {
  return await ProductSchema.create({
    ...productData, userId});
};

exports.getProducts = async () => {
  return await ProductSchema.findAll();
};

exports.getProductById = async (productId) => {
  const product = await ProductSchema.findByPk(productId);
  if (!product)
  {
    throw new ApiError(404, "Product not found")
  }
  return product;
};

exports.updateProduct = async (productId, updatedData) => {
  const product = await ProductSchema.findByPk(productId);
  if (!product) {
    throw new ApiError(404, "Product not found")
  }
  await product.update(updatedData);
  return product;
};

exports.deleteProduct = async (productId) => {
  const product = await ProductSchema.findByPk(productId);
  if (!product) {
    throw new ApiError(404, "Product not found")
  }
  await product.destroy();
  
};
