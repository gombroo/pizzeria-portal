import React from 'react';
import styles from './Tables.scss';
import {Link} from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables View</h2>
    <div>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New Booking</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/book/:id`}>Edit Booking</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>New Evemt</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/event/:id`}>Edit Event</Link>
    </div>
  </div>
);

export default Tables;
