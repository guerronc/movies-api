const express = require('express');
const MoviesService = require('../services/movies');

function moviesApi(app) {
    const router = express.Router();
    app.use('/api/movies', router);
    const moviesService = new MoviesService();

    router.get('/', async function (request, response, next) {
        const { tags } = request.query;
        try {
            const movies = await moviesService.getMovies({ tags });
            response.status(200).json({
                data: movies,
                message: 'Movies listed'
            })
        } catch (error) {
            next(error);
        }
    })
    router.get('/:movieId', async function (request, response, next) {
        const { movieId } = request.params;
        try {
            const movie = await moviesService.getMovie({ movieId })
            response.status(200).json({
                data: movie,
                message: 'Movie retrieved'
            })
        } catch (error) {
            next(error);
        }
    })
    router.post('/', async function (request, response, next) {        
        const { body: movie } = request;
        try {
            const createMovieId = await moviesService.createMovie({ movie })
            response.status(201).json({
                data: createMovieId,
                message: 'Movie created'
            })
        } catch (error) {
            next(error);
        }
    })
    router.put('/:movieId', async function (request, response, next) {
        const { body: movie } = request;
        const { movieId } = request.params;
        try {
            const updatedMovieId = await moviesService.updateMovie({ movieId, movie })
            response.status(200).json({
                data: updatedMovieId,
                message: 'Movies update'
            })
        } catch (error) {
            next(error);
        }
    })
    router.patch('/:movieId', async function (request, response, next) {
        const { body: movie } = request;
        const { movieId } = request.params;
        try {
            const updatedMovieId = await moviesService.updatePartialMovie({ movieId, movie })
            response.status(200).json({
                data: updatedMovieId,
                message: 'Movies update partial movie'
            })
        } catch (error) {
            next(error);
        }
    })
    router.delete('/:movieId', async function (request, response, next) {
        const { movieId } = request.params;
        try {
            const deleteMovieId = await moviesService.deleteMovie({ movieId })
            response.status(200).json({
                data: deleteMovieId,
                message: 'Movies deleted'
            })
        } catch (error) {
            next(error);
        }
    })
}

module.exports = moviesApi;
