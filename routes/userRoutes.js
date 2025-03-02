const userRouter = require('express').Router();

const controller = require('../controller/userController');

// const {register} = require('../controller/userController');

//post, get, fetch, delete, put

//Static Routes
userRouter.post('/registerUser', controller.registerUser)
userRouter.post('/login',controller.userLogin)
userRouter.get('/allUser', controller.getAllUser)

//Dynamic Routes
userRouter.get('/:id', controller.userDisplay)
// userRouter.delete('/:id',controller.delUser)
// userRouter.patch('/:id',controller.userUpdate)

module.exports = userRouter;