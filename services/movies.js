const MongoLib = require('../lib/mongo')

class MoviesServices {
    constructor() {
        this.collection = 'movies';
        this.mongoDb = new MongoLib();        
    }

    async getMovies({ tags }) {
        const query = tags && { tags: { $in: tags } }
        const movies = await this.mongoDb.getAll(this.collection, query)
        return movies || [];
    }

    async getMovie({ movieId }) {
        const movie = await this.mongoDb.get(this.collection, movieId)
        return movie || {};
    }

    async createMovie({ movie }) {
        const createMovieId = await this.mongoDb.create(this.collection, movie)
        return createMovieId;
    }

    async updateMovie({ movieId, movie } = {}) {
        const updatedMovieId = await this.mongoDb.update(this.collection, movieId, movie)
        return updatedMovieId;
    }
    async updatePartialMovie({ movieId, movie } = {}) {
        const updatedPartialMovieId = await this.mongoDb.update(this.collection, movieId, movie)
        return updatedPartialMovieId;
    }

    async deleteMovie({ movieId }) {
        const deletedMovieId = await this.mongoDb.delete(this.collection, movieId)
        return deletedMovieId;
    }
}

module.exports = MoviesServices