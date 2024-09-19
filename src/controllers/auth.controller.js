const jwt = require('jsonwebtoken');
const {UserService, AuthService} = require('../services')

// User registration (signup)
exports.signup = async (req, res) => {
  try {

    const user = await UserService.creatUser(req.body);

    res.status(201).send(user)
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};

// User login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Use the AuthService login function
    const { user, token } = await AuthService.login(email, password);

    res.status(200).send(user, token);
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};

//logout

exports.logout = (req, res) => {
  try {
    const response = AuthService.logout();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: 'Error logging out', error });
  }
};


