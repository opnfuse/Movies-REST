import moviesMock from '../utils/mocks/movies.js';

class MoviesService {
  async getMovies(tags) {
    const movies = await Promise.resolve(moviesMock);
    console.log(tags);

    return movies || [];
  }

  async getMovie(id) {
    const movie = await Promise.resolve(moviesMock[0]);
    console.log(id);

    return movie || {};
  }

  async createMovie() {
    const createdMovieId = await Promise.resolve(moviesMock[0].id);

    return createdMovieId || '';
  }

  async updateMovie(id) {
    const updatedMovieId = await Promise.resolve(moviesMock[0].id);
    console.log(id);

    return updatedMovieId || '';
  }

  async deleteMovie(id) {
    const deletedMovieId = await Promise.resolve(moviesMock[0].id);
    console.log(id);

    return deletedMovieId || '';
  }
}

export default MoviesService;
