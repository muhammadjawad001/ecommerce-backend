const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserService = require('./user.service');
const ApiError = require('../utils/apiError');

// Login
const login = async (email, password) => {
  // Find the user by email
  const user = await UserService.findUserByEmail(email);
  
  if (!user) {
    throw new ApiError(404, 'User not found');
  }
  // Check if password matches
  const isMatch = await user.validPassword(password);

  if (!isMatch) {
    throw new ApiError(400, 'Invalid credentials');
  }

  
  const token = jwt.sign({userId: user.id,role: user.role}, process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  return { user, token };
};


const logout = () => {
    return { message: 'Logged out successfully' };
  };

module.exports = {
  login,
  logout
};
