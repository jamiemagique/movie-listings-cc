import React, { PureComponent } from 'react';
import styles from './MovieCard.module.css';

class MovieCard extends PureComponent {
  render() {
    const { title, posterUrl, genres } = this.props;
    return (
      <div>
        <div className={styles.posterWrapper}>
          <img className={styles.posterImage} alt="" src={posterUrl} />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.genres}>
          <span className="sr-only">{genres.length} genres:</span>
          {genres.map(({ name }) => name).join(', ')}
        </div>
      </div>
    );
  }
};

export default MovieCard;
