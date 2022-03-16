/**
 * @swagger
 * components:
 *  schemas:
 *      Cliente:
 *          type: object
 *          properties:
 *              nombre:
 *                  type: object
 *                  properties:
 *                      nombre:
 *                          type: string
 *                          description: nombre(s) del usuario
 *                      apellidoP:
 *                          type: string
 *                          description: apellido peterno del usuario
 *                      apellidoM:
 *                          type: string
 *                          description: apellido materno del usuario
 *              f_nacimiento:
 *                  type: string
 *                  description: fecha de nacimiento del usuario
 *              rfc:
 *                  type: string
 *                  description: rfc del usuario
 *          required: 
 *              - nombre
 *              - f_nacimiento
 *          example:
 *              nombre:
 *                  nombre: Christian
 *                  apellidoP: Aguilar
 *                  apellidoM: Valdez
 *              f_nacimiento: 08/07/2000
 */
/**
 * @swagger
 * /clientes/:
 *  get:
 *      summary: Obtiene a todos los clientes 
 *      tags: [Cliente]
 *      responses:
 *          200:
 *              description: Clientes listados.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schemas/Cliente'
 */
/**
 * @swagger
 * /clientes/:
 *  post:
 *      summary: Creación de un cliente
 *      tags: [Cliente]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#components/schemas/Cliente'
 *      responses:
 *          200:
 *              description: Nuevo cliente creado.
 */
/**
 * @swagger
 * /clientes/{id}:
 *  put:
 *      summary: Actualización de un cliente
 *      tags: [Cliente]
 *      parameters:
 *          - in : path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            descrption: El ID del cliente
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#components/schemas/Cliente'
 *      responses:
 *          200:
 *              description: Cliente actualizado.
 *          404:
 *              description: Cliente no encontrado
 */
/**
 * @swagger
 * /clientes/{id}:
 *  delete:
 *      summary: Eliminación de un cliente
 *      tags: [Cliente]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: El ID del cliente
 *      responses:
 *          200:
 *              description: Cliente eliminado.
 *          404:
 *              description: Cliente no encontrado.
 */