/**
 * @swagger
 * /users/api/:
 *   post:
 *     summary: 유저 생성하기
 *     tags: [Create User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createUser'
 *     responses:
 *       201:
 *         description: 유저 생성 성공
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/createUser'
 */
