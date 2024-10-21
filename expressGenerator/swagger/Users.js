/**
 * @swagger
 * /users/api/users:
 *   get:
 *     summary: 전체 유저 가져오기
 *     tags: [User]
 *     responses:
 *       200:
 *         description: 조회 결과
 *         content:
 *           application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/components/schemas/getAllUsers'
 * /users/api/:id:
 *   get:
 *     summary: 특정 유저 가져오기
 *     tags: [User]
 *     responses:
 *       200:
 *         description: 조회 결과
 *         content:
 *           application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/components/schemas/getAllUsers'
 */
