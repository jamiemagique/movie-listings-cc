import React from 'react';
import tmdbLogo from './tmdb-logo.svg';
import styles from './App.module.css';
import './App.css';
import MovieListings from './components/containers/MovieListings';

const App = () => (
  <>
    <header>
      <h1 className={styles.header}>Movie listings</h1>
    </header>
    <div className="root-content">
      <MovieListings />
    </div>
    <footer className={styles.footer}>
      <span>Powered by <span className="sr-only">The Movie Database</span></span>
      <img src={tmdbLogo} className={styles.footerLogo} alt="The Movie Database logo" />
    </footer>
  </>
);

export default App;
