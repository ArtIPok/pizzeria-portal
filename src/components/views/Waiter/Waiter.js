import React from 'react';
import { Link } from 'react-router-dom';

// import PropTypes from 'prop-types';

import styles from './Waiter.module.scss';

class Waiter extends React.Component {
  render () {
    return (
      <div className={styles.component}>
        <h2 className={styles.title}>Waiter view</h2>
        <Link to={`${process.env.PUBLIC_URL}/waiter/order`} activeClassName='active'>Waiter order</Link>
        <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`} activeClassName='active'>Waiter order new</Link>

      </div>
    );
  }
}

// Waiter.PropTypes = {}

export default Waiter;
