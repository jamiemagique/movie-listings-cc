import React from 'react';
import { ReactComponent as SvgLoader } from './ball-triangle.svg';
import styles from './PageLoader.module.css';

const PageLoader = () => (
  <div className={styles.layout}>
    <SvgLoader />
  </div>
);

export default PageLoader;
