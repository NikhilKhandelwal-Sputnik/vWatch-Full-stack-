const movieRouter = require('express').Router();

const controller = require('../controller/movieController')

movieRouter.get('/:id', controller.getMovie);

module.exports = movieRouter;