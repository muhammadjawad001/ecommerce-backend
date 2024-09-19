const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');


/**
 * @swagger
 * tags:
 *   - name: Auth 
 *     description: Authenticatio module  
*/
/**
 * @swagger
 * /api/auth/signup:
 *    post:
 *      summary: Register user
 *      description: Temp desc
 *      tags: [Auth]
 *      requestBody:
 *        required: true  
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *            username:
 *              type: strings
 *              example: johndoe
 *            email:
 *              type: string
 *              example: johndoe@example.com
 *            password:
 *              type: string
 *              example: password123
 *      responses:
 *        201:
 *          description: User successfully registered
 *        400:
 *          description: Invalid input data
 *        500:
 *          description: Error registering user
 */
router.post('/signup', authController.signup);

/**
 * @swagger
 * /api/auth/login:
 *    post:
 *      summary: Login user
 *      description: Temp desc
 *      tags: [Auth]
 *      requestBody:
 *        required: true  
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *            username:
 *              type: strings
 *              example: johndoe
 *            email:
 *              type: string
 *              example: johndoe@example.com
 *      responses:
 *        200:
 *          description: User successfully login
 *        400:
 *          description: Invalid credentials
 *        404:
 *          description: User not found
 */

// Login route
router.post('/login', authController.login);

/**
 * @swagger
 * /api/auth/logout:
 *    post:
 *      summary: Logout user
 *      description: Temp desc
 *      tags: [Auth]
 *      requestBody:
 *        required: true  
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *            message:
 *              type: strings
 *              example: user logged out succesfuly
 *      responses:
 *        401:
 *          description: Unauthorized request, no token provided or invalid token
 *        500:
 *          description: Server error, unable to log out
 */


//Logout
router.post('/logout', authController.logout);

module.exports = router;
