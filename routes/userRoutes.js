const userRouter = require('express').Router();

const controller = require('../controller/userController');

// const {register} = require('../controller/userController');

//post, get, fetch, delete, put
userRouter.post('/register', controller.registerUser)
userRouter.post('/login',controller.userLogin)

module.exports = userRouter;