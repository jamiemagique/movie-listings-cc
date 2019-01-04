import React from 'react';
import MovieCard from '../MovieCard';
import styles from './MovieResults.module.css';

const MovieResults = ({ data }) => {
  const moviesCount = data.length;
  return (
    <div className={styles.layout}>
      <h2>Movies now playing</h2>
      <span className={styles.counter}>Displaying {moviesCount} {moviesCount === 1 ? 'movie' : 'movies'}</span>
      {data.length ?
        <ol className={styles.grid}>
          {data.map(result => <li key={result.id}><MovieCard {...result} /></li>)}
        </ol>
        : <p>There are no movies matching your filters.</p>
      }
    </div>
  );
};

export default MovieResults;
