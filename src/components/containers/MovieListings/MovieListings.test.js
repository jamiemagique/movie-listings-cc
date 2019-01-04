import React from 'react';
import MovieListings from '.';
import { mount } from 'enzyme';
import * as moviesApi from '../../../modules/movies/movies.api';

const mockResponse = [
  {
    images: {
      base_url: '<base_url>',
      poster_sizes: ['<size_1>', '<size_2', 'size_3'],
    },
  },
  {
    genres: [
      { id: 1, name: 'Action' },
      { id: 10, name: 'Adventure' },
      { id: 11, name: 'Animation' },
      { id: 12, name: 'Comedy' },
      { id: 22, name: 'Fantasy' },
    ],
  },
  {
    results: [
      { id: 'movie-1', genre_ids: [1, 11], popularity: 10, vote_average: 1 },
      { id: 'movie-2', genre_ids: [1, 10], popularity: 100, vote_average: 3 },
      { id: 'movie-3', genre_ids: [10, 11], popularity: 50, vote_average: 8 },
      { id: 'movie-4', genre_ids: [11], popularity: 75, vote_average: 7 },
    ],
  },
];

describe('MovieListings fetching', () => {
  afterEach(() => {
    jest.resetModules();
  });

  beforeEach(() => {
    moviesApi.fetchMoviesData = jest.fn();
  });

  it('fetches data when mounted and displays PageLoader', () => {
    const fetchMovies = jest.spyOn(moviesApi, 'fetchMoviesData');
    const mountSpy = jest.spyOn(MovieListings.prototype, 'componentDidMount');
    const wrapper = mount(<MovieListings />);
    expect(mountSpy).toHaveBeenCalledTimes(1);
    expect(fetchMovies).toHaveBeenCalledTimes(1);
    expect(wrapper.find('PageLoader').length).toBe(1);
  });

  it('displays PageError when fetching errors', () => {
    moviesApi.fetchMoviesData.mockImplementation(() => {
      throw new Error('Fetch failed')
    });
    const wrapper = mount(<MovieListings />);
    expect(wrapper.find('PageError').length).toBe(1);
  });

  it('fetches data, displays ui correctly and tests functionality e2e', async () => {
    moviesApi.fetchMoviesData.mockReturnValue(Promise.resolve(mockResponse));
    const wrapper = await mount(<MovieListings />);
    await Promise.resolve();
    await wrapper.update();

    // Ensure the number of genres and results are displayed as expected.
    expect(wrapper.find('Checkboxes input[type="checkbox"]').length).toBe(3);
    expect(wrapper.find('MovieCard').length).toBe(3);

    // The movies are ordered by popularity.
    expect(wrapper.find('MovieCard').first().prop('id')).toBe('movie-2');
    expect(wrapper.find('MovieCard').last().prop('id')).toBe('movie-3');

    /**
     * `react-input-range` isn't easily testable
     * so we will trigger it's `onChange` event manually.
     */
    wrapper
      .find('InputRange InputRange')
      .instance()
      .props.onChange(0);
    await wrapper.update();
    expect(wrapper.find('MovieCard').length).toBe(4);

    // Multiple genres on/off.
    wrapper.find('Checkboxes input[id=11]').simulate('change', { target: { value: '11', checked: true } });
    expect(wrapper.find('MovieCard').length).toBe(3);

    wrapper.find('Checkboxes input[id=10]').simulate('change', { target: { value: '10', checked: true } });
    expect(wrapper.find('MovieCard').length).toBe(1);

    wrapper.find('Checkboxes input[id=1]').simulate('change', { target: { value: '1', checked: true } });
    expect(wrapper.find('MovieCard').length).toBe(0);

    wrapper.find('Checkboxes input[id=1]').simulate('change', { target: { value: '1', checked: false } });
    expect(wrapper.find('MovieCard').length).toBe(1);
  });
});
