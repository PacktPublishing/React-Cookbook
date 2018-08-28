import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        &copy; Codejobs {(new Date()).getFullYear()}
      </footer>
    );
  }
}

export default Footer;
