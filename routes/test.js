/**,
 * @swagger
 * /api/addExam:
 *    post:
 *      tags:
 *      - 测试
 *      summary: 提交考试答案
 *      produces:
 *      - application/json
 *      parameters:
 *      - name: name
 *        in: query
 *        description: 姓名
 *        required: false
 *        type: integer
 *        maximum:
 *        minimum: 1
 *        format:
 *      - name: phone
 *        in: query
 *        description: 电话
 *        required: false
 *        type: integer
 *        maximum:
 *        minimum: 1
 *        format:
 *      responses:
 *        200:
 *          description: successful operation
 *          schema:
 *            ref: #/definitions/Order
 *        400:
 *          description: Invalid ID supplied
 *        404:
 *          description: Order not found
 * */
