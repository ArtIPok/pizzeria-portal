import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Kitchen.module.scss';

class Kitchen extends React.Component {
  render () {
    return (
      <div className={styles.component}>
        <h2 className={styles.title}>Kitchen view</h2>
      </div>
    );
  }
}

// Kitchen.PropTypes = {}

export default Kitchen;
