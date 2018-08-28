import React from 'react';
import styles from './Footer.scss';

const Footer = () => (
  <footer className={styles.Footer}>
    &copy; Codejobs {(new Date()).getFullYear()}
  </footer>
);

export default Footer;
