const cmtRouter = require('express').Router();
const controller = require('../controller/cmtController')

cmtRouter.get('/allComments', controller.getAllComment);

module.exports = cmtRouter;