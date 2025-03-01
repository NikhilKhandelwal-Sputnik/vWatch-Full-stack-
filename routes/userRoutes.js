const userRouter = require('express').Router();

const controller = require('../controller/userController');

// const {register} = require('../controller/userController');

//post, get, fetch, delete, put
userRouter.post('/register', controller.registerUser)
userRouter.post('/login',controller.userLogin)
userRouter.get('/:id', controller.userDisplay)
// userRouter.delete('/:id',controller.delUser)
// userRouter.patch('/:id',controller.userUpdate)
userRouter.get('/allUser', controller.getAllUser)

module.exports = userRouter;