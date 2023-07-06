import express from "express";

import makeCallback from "./makeCallback";
import helloController from "../controller/hello.controller";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     ReturnData:
 *       type: object
 *       required:
 *         - data
 *         - code
 *         - message
 *         - status
 *       properties:
 *         data:
 *           type: object
 *           description: The return data
 *         code:
 *           type: number
 *           description: The code of response
 *         message:
 *           type: string
 *           description: The message of response
 *         status:
 *           type: boolean
 *           description: The status of response
 *       example:
 *         data: { message: "Hello user" }
 *         code: 200
 *         message: "Hello"
 *         status: true
 *     BadRequestError:
 *       type: object
 *       required:
 *         - data
 *         - code
 *         - message
 *         - status
 *       properties:
 *         data:
 *           type: object
 *           description: The return data
 *         code:
 *           type: number
 *           description: The code of response
 *         message:
 *           type: string
 *           description: The message of response
 *         status:
 *           type: boolean
 *           description: The status of response
 *       example:
 *         data: "BadRequestError"
 *         code: 400
 *         message: "Bad request"
 *         status: false
 */

/**
 * @swagger
 * tags:
 *   name: Hello
 *   description: Hello API
 */


/**
 * @swagger
 * /hello:
 *   post:
 *     summary: Hello to user
 *     tags: [Hello]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of user
 *             example:
 *               name: John Doe
 *     responses: 
 *       200:
 *         description: Hello to user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReturnData'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BadRequestError'
 *               
 */
router.route("/hello")
  .post(makeCallback(helloController.hello));

export default router;
