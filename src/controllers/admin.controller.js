const UserService = require('../services/user.service');
const ProductService = require('../services/index');
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');

// Get all users
exports.getUsers = catchAsync(async (req, res) => {
  const users = await UserService.findAllUsers(); // Implement this in your UserService
  res.status(httpStatus.OK).send(users);
});

// Ban user
exports.banUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  await UserService.updateUserProfile(id, { banned: true }); // Implement 'banned' in your user model
  res.status(httpStatus.OK).send({ message: 'User banned successfully' });
});

// Unban user
exports.unbanUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  await UserService.updateUserProfile(id, { banned: false }); // Implement 'banned' in your user model
  res.status(httpStatus.OK).send({ message: 'User unbanned successfully' });
});

// Delete product
exports.deleteProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  await ProductService.deleteProduct(id); // Implement this in your ProductService
  res.status(httpStatus.OK).send({ message: 'Product deleted successfully' });
});

// Create admin
exports.createAdmin = catchAsync(async (req, res) => {
  const user = await UserService.creatUser({ ...req.body, role: 'admin' });
  res.status(httpStatus.CREATED).send(user);
});

// Delete admin
exports.deleteAdmin = catchAsync(async (req, res) => {
  const { id } = req.params;
  await UserService.deleteUserById(id); // Implement this in your UserService
  res.status(httpStatus.OK).send({ message: 'Admin deleted successfully' });
});

// Get all admins
exports.getAdmins = catchAsync(async (req, res) => {
  const admins = await UserService.findAdmins(); // Implement this in your UserService
  res.status(httpStatus.OK).send(admins);
});
