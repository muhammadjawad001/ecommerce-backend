const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserService = require('./user.service');

// Login
const login = async (email, password) => {
  // Find the user by email
  const user = await UserService.findUserByEmail(email);

  if (!user) {
    throw new Error('User not found');
  }

  // Check if password matches
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('Invalid credentials');
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
