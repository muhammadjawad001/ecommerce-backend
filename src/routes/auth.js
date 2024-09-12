const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


/**
 * @swagger
 * /sample:
 *   get:
 *     summary: Returns a sample message
 *     responses:
 *       200:
 *         description: A successful response
 */
router.get('/', (req, res) => {
    res.json({ message: 'This is a sample message' });
  });

// Signup route
router.post('/signup', authController.signup);

// Login route
router.post('/login', authController.login);

//Logout
router.post('/logout', authController.logout);

module.exports = router;
