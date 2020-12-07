const MongoLib = require('../lib/mongo');

class UserMoviesService {
  constructor() {
    (this.collection = 'user-movies'), (this.mongoDB = new MongoLib());
  }

  async getUserMovies({ userId }) {
    const query = userId && { userId };
    const userMovies = await this.mongoDB.getAll(this.collection, query);
    return userMovies || [];
  }

  async createUserMovie({ userMovie }) {
    const createUserMovieId = await this.mongoDB.create(
      this.collection,
      userMovie
    );
    return createUserMovieId;
  }

  async deleteUserMovie({ movieId, userId }) {
    const deleteUserMovieId = await this.mongoDB.deleteUserMovie(
      this.collection,
      movieId,
      userId
    );
    return deleteUserMovieId;
  }
}

module.exports = UserMoviesService;
