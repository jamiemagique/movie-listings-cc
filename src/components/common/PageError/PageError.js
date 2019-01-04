import React from 'react';
import { ReactComponent as SvgError } from './unhappy-face.svg';
import styles from './PageError.module.css';

const PageError = () => (
  <div className={styles.layout}>
    <SvgError />
    <p>Sorry, there was a problem.</p>
  </div>
);

export default PageError;
