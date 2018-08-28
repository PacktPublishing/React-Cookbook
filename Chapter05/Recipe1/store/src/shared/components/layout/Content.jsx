import React from 'react';
import PropTypes from 'prop-types';

const Content = props => {
  const { children } = props;

  return (
    <main>
      {children}
    </main>
  );
};

Content.propTypes = {
  children: PropTypes.element.isRequired
};

export default Content;
