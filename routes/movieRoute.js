const movieRouter = require('express').Router();

const controller = require('../controller/movieController')

movieRouter.get('/top10', controller.top10Rated);

movieRouter.get('/:id', controller.getMovie);

module.exports = movieRouter;