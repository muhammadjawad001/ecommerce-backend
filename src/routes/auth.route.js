const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const {protect} = require('../middleware/authentication')


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
 *              $ref: ' #/components/schemas/User'
 *      responses:
 *        201:
 *          description: User successfully registered
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
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
 *                username:
 *                  type: string
 *                  example: johndoe
 *                email:
 *                  type: string
 *                  example: johndoe@example.com
 *      responses:
 *        200:
 *          description: User successfully logged in
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  token:
 *                    type: string
 *                    example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *                  user:
 *                    type: object
 *                    properties:
 *                      id:
 *                        type: string
 *                        example: "605c72b8e43d9c00158d1b7a"
 *                      username:
 *                        type: string
 *                        example: johndoe
 *                      email:
 *                        type: string
 *                        example: johndoe@example.com
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


router.get('/token-check', protect, (req, res) => {
    res.status(204).send();  // No content response when token is valid
  });

module.exports = router;
