const router = require('express').Router();

const controller = require('../controller/userController');

// const {register} = require('../controller/userController');

//post, get, fetch, delete, put
router.post('/register', controller.register)

module.exports = router;