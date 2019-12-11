import React from 'react';
import styles from './Tables.module.scss';
import Subtitle from '../../common/Subtitle/Subtitle';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Title from '../../common/Title/Title';
import MUIDataTable from 'mui-datatables';

const columns = ['Time', 'Table 1', 'Table 2', 'Table 3', 'Table 4', 'Table 5'];

const data = [
  ['10:00', 'booking', 'booking', 'event', null, 'booking'],
  ['10:30', 'event'],
  ['11:00', null, 'booking', 'event', null, 'booking'],
  ['11:30', null, 'booking', 'event', null, 'booking'],
  ['12:00',  'event', 'booking', 'booking', null, 'booking'],
  ['12:30',  'booking', 'booking', 'event', null, 'booking'],
  ['13:00',  null, null, null, null ],
  ['13:30',  null, null, null, null ],
  ['14:00', 'booking', 'booking', 'event', null, 'booking'],
  ['14:30', 'booking', 'booking', null, null, 'booking'],
  ['15:00', null, 'booking', 'event', null, 'booking'],
];

const options = {
  filterType: null,
  pagination: false,
  filter: false,
  search: false,
  print: false,
  download: false,
  viewColumns: false,
  selectableRowsHeader: false,
  elevation: 2,
};

const TablesBookingEdit = () => (
  <div className={styles.component}>
    <Subtitle>Tables Booking Edit</Subtitle>
    <div className={styles.component}>
      <Title>Tables View</Title>
      <div className={styles.buttons}>
        <Button component={Link} className={styles.button} color="primary" variant="outlined"
          to={`${process.env.PUBLIC_URL}/tables/booking/new`}>
          New Booking
        </Button>
        <Button component={Link} className={styles.button} color="primary" variant="outlined"
          to={`${process.env.PUBLIC_URL}/tables/booking/book/:time`}>
          Edit Booking
        </Button>
        <Button component={Link} className={styles.button} color="primary" variant="outlined"
          to={`${process.env.PUBLIC_URL}/tables/events/new`}>
          New Event
        </Button>
        <Button component={Link} className={styles.button} color="primary" variant="outlined"
          to={`${process.env.PUBLIC_URL}/tables/events/event/:time`}>
          Edit Event
        </Button>
      </div>
      <MUIDataTable data={data} columns={columns} options={options} />
    </div>
  </div>
);

export default TablesBookingEdit;
