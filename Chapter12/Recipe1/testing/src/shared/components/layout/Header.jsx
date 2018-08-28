import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Header.scss';

// We created a component with a simple arrow function.
const Header = props => {
  const {
    url = 'http://localhost:3000'
  } = props;

  return (
    <header className={styles.Header}>
      <a href={url}>
        Todo List - Server Side Rendering
      </a>
    </header>
  );
};

// Even with Functional Components we are able to validate our PropTypes.
Header.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string
};

export default Header;
