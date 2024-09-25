const { UserSchema } = require("../models");

//create user
const creatUser = async (user) => {
  return await UserSchema.create(user);
};

const findUserByEmail = async (email) => {
  return await UserSchema.findOne({ where: { email } });
};

const findUserById = async (id) => {
  return await UserSchema.findOne({ where: { id } });
};

// Update user profile
const updateUserProfile = async (id, userData) => {
  return await UserSchema.update(userData, { where: { id } });
};

const findAllUsers = async () => {
  return await UserSchema.findAll();
};

const findAdmins = async () => {
  return await UserSchema.findAll({ where: { role: "admin" } });
};

const deleteUserById = async (id) => {
  return await UserSchema.destroy({ where: { id } });
};

module.exports = {
  creatUser,
  findUserByEmail,
  findUserById,
  updateUserProfile,
  findAllUsers,
  findAdmins,
  deleteUserById
};
