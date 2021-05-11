import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import styles from './Tables.module.scss';

class Tables extends React.Component {
  render () {
    return (
      <div className={styles.component}>
        <h2 className={styles.title}>Tables view</h2>
        <Link to={`${process.env.PUBLIC_URL}/tables/tablesbooking`} activeClassName='active'>Tables booking</Link>
        <Link to={`${process.env.PUBLIC_URL}/tables/tablesbookingnew`} activeClassName='active'>Tables booking new</Link>
        <Link to={`${process.env.PUBLIC_URL}/tables/tablesevents`} activeClassName='active'>Tables events</Link>
        <Link to={`${process.env.PUBLIC_URL}/tables/tableseventsnew`} activeClassName='active'>Tables events new</Link>
      </div>
    );
  }
}

// Login.PropTypes = {}

export default Tables;
