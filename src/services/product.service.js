const {ProductSchema} = require('../models/index');
const ApiError = require('../utils/apiError');

exports.createProduct = async (productData, userId) => {
  return await ProductSchema.create({
    ...productData, 
    userId,
    categoryId: productData.categoryId,
  });
};

// Get Products with Filters (search, category, price range, condition)
exports.getFilteredProducts = async (filters) => {
  const { search, categoryId, minPrice, maxPrice, condition, location } = filters;

  const query = {
      where: {},
  };

  if (search) {
      query.where.name = { [Op.like]: `%${search}%` };
  }
  if (categoryId) {
      query.where.categoryId = categoryId;
  }
  if (minPrice) {
      query.where.price = { [Op.gte]: minPrice };
  }
  if (maxPrice) {
      query.where.price = { ...query.where.price, [Op.lte]: maxPrice };
  }
  if (condition) {
      query.where.condition = condition;
  }
  if (location) {
      query.where.location = { [Op.like]: `%${location}%` }; // Search by location
  }

  return await Product.findAll(query);
};

//get product by specific id
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
