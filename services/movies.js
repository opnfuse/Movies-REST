import moviesMock from '../utils/mocks/movies.js';

class MoviesService {
  async getMovies(tags) {
    const movies = await Promise.resolve(moviesMock);

    return movies || [];
  }

  async getMovie(id) {
    const movie = await Promise.resolve(moviesMock[0]);

    return movie || {};
  }

  async createMovie() {
    const createdMovieId = await Promise.resolve(moviesMock[0].id);

    return createdMovieId || '';
  }

  async updateMovie(id) {
    const updatedMovieId = await Promise.resolve(moviesMock[0].id);

    return updatedMovieId || '';
  }

  async deleteMovie(id) {
    const deletedMovieId = await Promise.resolve(moviesMock[0].id);

    return deletedMovieId || '';
  }
}

export default MoviesService;
