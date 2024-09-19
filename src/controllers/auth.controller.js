const {UserService, AuthService} = require('../services')
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

