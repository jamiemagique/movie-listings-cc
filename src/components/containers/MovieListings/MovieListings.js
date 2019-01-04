import React, { Component } from 'react';
import MovieResults from '../../common/MovieResults';
import Checkboxes from '../../common/Checkboxes';
import InputRange from '../../common/InputRange';
import PageLoader from '../../common/PageLoader';
import PageError from '../../common/PageError';
import sortDesc from '../../../utils/sortDesc';
import { VOTE_RATING_DEFAULT_VALUE } from '../../../config';
import { fetchMoviesData } from '../../../modules/movies/movies.api';
import styles from './MovieListings.module.css';

class MovieListings extends Component {
  defaultFilters = {
    selectedGenreIds: [],
    minVoteRatingValue: VOTE_RATING_DEFAULT_VALUE,
  };

  state = {
    displayStatus: 'loading',
    genres: [],
    initialData: [],
    ...this.defaultFilters,
  };

  async componentDidMount() {
    try {
      const [ config, movieGenres, movies ] = await fetchMoviesData();
      const { genres } = movieGenres;
      const { results: movieResults } = movies;

      /**
       * One-time constants to hydrate the results with additional data.
       * We don't need to put these into the state as we would need to call 
       * setState() twice here, triggering multiple re-renders.
       */
      this.posterBaseUrl = `${config.images.base_url}${config.images.poster_sizes[2]}`;
      this.initialGenres = genres;

      /**
       * Filter genres displayed to only those contained
       * within the returned movie results data.
       */
      const moviesGenreIds = [...new Set(movieResults.map(({ genre_ids }) => genre_ids).flat())];
      const listedGenres = genres.filter(({ id }) => moviesGenreIds.includes(id));

      this.setState({
        displayStatus: 'loaded',
        genres: listedGenres,
        initialData: this.prepareMovies(movieResults),
      });
    } catch (error) {
      this.setState({ displayStatus: 'error' });
    }
  }

  /**
   * Hydrate each movie with data for UI display.
   *
   * @param {Object[]} movies
   * @returns {Object[]} - Results with additional data.
   */
  hydrateMovies = movies => (
    movies.map(movie => ({
      ...movie,
      genres: this.initialGenres.filter(({ id }) => movie.genre_ids.includes(id)),
      posterUrl: `${this.posterBaseUrl}${movie.poster_path}`,
    }))
  );

  /**
   * Prepare the movies for display.
   *
   * @param {Object[]} movies
   * @returns {Object[]} - Prepared movies.
   */
  prepareMovies = movies => {
    const orderedMovies = sortDesc(movies);
    const hydratedMovies = this.hydrateMovies(orderedMovies);
    return hydratedMovies;
  };

  /**
   * Genre checkbox onChange callback.
   *
   * @param {string} value - The checkbox value, comes back as a string not a number.
   * @param {boolean} isChecked - Is the checked was checked/unchecked.
   */
  onGenresOptChange = (value, isChecked) => {
    const { id } = this.state.genres.find(({ id }) => {
      // Using non-strict comparison to match the genre id
      // (number) with the checkbox value is a string type.
      // eslint-disable-next-line eqeqeq
      return id == value;
    });
    this.setState(prevState => ({
      selectedGenreIds: isChecked ? [...prevState.selectedGenreIds, id] : prevState.selectedGenreIds.filter(item => item !== id),
    }));
  }

  /**
   * Vote rating range input onChange callback.
   *
   * @param {number} value
   */
  onVoteRatingChange = value => this.setState({ minVoteRatingValue: value });

  /**
   * Helper to get the results data to render with filters applied.
   */
  getResultsData = () => {
    const { minVoteRatingValue, selectedGenreIds, initialData } = this.state;
    // Always apply the minimum vote rating score.
    const data = initialData.filter(({ vote_average }) => vote_average >= minVoteRatingValue);
    
    // Filter by any selected genres.
    if (!selectedGenreIds.length) return data;
    return data.filter(({ genre_ids }) => {
      const foundIds = genre_ids.filter(id => selectedGenreIds.includes(id));
      return foundIds.length === selectedGenreIds.length;
    });
  }

  render() {
    const { displayStatus, genres, minVoteRatingValue } = this.state;
    switch (displayStatus) {
      case 'loading':
        return <PageLoader />;
      case 'loaded':
        const data = this.getResultsData();
        return (
          <section className={styles.layout}>
            <form className={styles.formLayout}>
              <h2>Filters</h2>
              <div>
                <InputRange
                  onChange={this.onVoteRatingChange}
                  label="Minimum vote rating"
                  defaultValue={minVoteRatingValue}
                  minValue={0}
                  maxValue={10}
                  step={0.5}
                />
                <Checkboxes
                  onChangeOpt={this.onGenresOptChange}
                  legend="Filter by genre(s)"
                  items={genres}
                />
              </div>
            </form>
            <MovieResults data={data} />
          </section>
        );
      default:
        return <PageError />;
    }
  }
}

export default MovieListings;
