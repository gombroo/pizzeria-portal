import React from 'react';
import styles from './Homepage.module.scss';
import Orders from '../../features/Orders/Orders';
import Bookings from '../../features/Bookings/Bookings';
import { Paper } from '@material-ui/core';
import Title from '../../common/Title/Title';
import Chart from '../../features/Chart/Chart';

const Homepage = () => (
  <div className={styles.component}>
    <Title>Dashboard View</Title>
    <Paper className={styles.paper}>
      <Orders />
    </Paper>
    <Paper className={styles.paper}>
      <Bookings />
    </Paper>
    <Paper className={styles.paper}>
      <Chart />
    </Paper>
  </div>
);

export default Homepage;
