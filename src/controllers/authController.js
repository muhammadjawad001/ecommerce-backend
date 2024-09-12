const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// User registration (signup)
exports.signup = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role,
    });

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};

// User login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT
    
    const token = jwt.sign({ userId: user.dataValues.id, role: user.dataValues.role }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    
    

    res.status(200).json({ message: 'Login successful', data: token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};

//logout

exports.logout = (req, res) => {
  // Since JWT is stateless, you usually handle logout on the client side.
  // However, you can implement additional measures like token blacklisting here if needed.
  res.status(200).json({ message: 'Logged out successfully' });
};
