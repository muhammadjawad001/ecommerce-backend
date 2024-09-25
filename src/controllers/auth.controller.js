const {UserService, AuthService} = require('../services/index')
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');

// User registration (signup)
exports.signup = catchAsync( async (req, res) => {
    const user = await UserService.creatUser(req.body);
    res.status(201).send(user);
});

// User login
exports.login = catchAsync(async (req, res) => {
    const { email, password } = req.body;

    // Use the AuthService login function
    const { user, token } = await AuthService.login(email, password);
    userData = {
    user: user,
    token: token
   }
    res.status(httpStatus.OK).send(userData);
});

//logout

exports.logout = catchAsync(async (req, res) => {
  const response = AuthService.logout(); // Call the service
  res.status(200).json(response);
});


// Get user profile
exports.getUserProfile = catchAsync(async (req, res) => {
  const user = await UserService.findUserById(req.user.id); // Get the logged-in user's ID from the request
  if (!user) {
      return res.status(404).json({ message: 'User not found' });
  }
  res.status(200).send(user);
});


// Update user profile
exports.updateUserProfile = catchAsync(async (req, res) => {
    const updatedData = req.body; // Get data from request body
    const updatedUser = await UserService.updateUserProfile(req.user.id, updatedData);
    if (!updatedUser[0]) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).send(updatedUser);
});

