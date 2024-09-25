const express = require('express');
const router = express.Router();
const {productController} = require('../controllers/index');
const upload = require('../middleware/upload');
const validate = require('../middleware/validate');
const {protect, authorizeProductAccess} = require('../middleware/authentication')
const {productValidationSchema} = require('../validations/index');

/**
 * @swagger
 * tags:
 *   - name: Products 
 *     description: Products Module  
*/

/**
 * @swagger
 * /api/products:
 *    post:
 *      summary: create Products
 *      description: products creation
 *      security:
 *       - bearerAuth: []
 *      tags: [Products]
 *      requestBody:
 *        required: true  
 *        content:
 *          application/json:
 *            schema:
 *              $ref: ' #/components/schemas/Product'
 *      responses:
 *        201:
 *          description: Create successfully Product
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Product'
 *        400:
 *          description: Invalid input data
 *        500:
 *          description: Error Creating Products
 */
router.post('/products', protect, upload.single('imageUrl'),validate(productValidationSchema), productController.createProduct);

/**
 * @swagger
 * /api/products:
 *    get:
 *      summary: Retrieve all products
 *      description: Fetch a list of all products
 *      security:
 *       - bearerAuth: []
 *      tags: [Products]
 *      responses:
 *        200:
 *          description: A list of products retrieved successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Product'
 *        500:
 *          description: Error retrieving products
 */
router.get('/products', productController.getProducts);

/**
 * @swagger
 * /api/products/{id}:
 *    get:
 *      summary: Retrieve a specific product
 *      description: Fetch a product by its ID
 *      security:
 *       - bearerAuth: []
 *      tags: [Products]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: The ID of the product to retrieve
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: Product retrieved successfully
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Product'
 *        404:
 *          description: Product not found
 *        500:
 *          description: Error retrieving the product
 */
router.get('/products/:id', protect, authorizeProductAccess, productController.getProductById);

/**
 * @swagger
 * /api/products/{id}:
 *    put:
 *      summary: Update a specific product
 *      description: Modify an existing product by its ID
 *      security:
 *       - bearerAuth: []
 *      tags: [Products]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: The ID of the product to update
 *          schema:
 *            type: string
 *        - in: body
 *          name: product
 *          required: true
 *          description: Product data to update
 *          schema:
 *            $ref: '#/components/schemas/Product'
 *      responses:
 *        200:
 *          description: Product updated successfully
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Product'
 *        400:
 *          description: Invalid input data
 *        404:
 *          description: Product not found
 *        500:
 *          description: Error updating the product
 */
router.put('/products/:id',protect, authorizeProductAccess, validate(productValidationSchema), productController.updateProduct);

/**
 * @swagger
 * /api/products/{id}:
 *    delete:
 *      summary: Delete a specific product
 *      description: Remove a product by its ID
 *      security:
 *       - bearerAuth: []
 *      tags: [Products]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: The ID of the product to delete
 *          schema:
 *            type: string
 *      responses:
 *        204:
 *          description: Product deleted successfully
 *        404:
 *          description: Product not found
 *        500:
 *          description: Error deleting the product
 */
router.delete('/products/:id', protect, authorizeProductAccess, productController.deleteProduct);

module.exports = router;