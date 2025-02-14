const productRouter  = require("express").Router();

const controller = require('../controller/productController')

productRouter.post('/register', controller.registerProduct)

module.exports = productRouter;