import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Title from '../../common/Title/Title';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const demoContent = [
  {time: '11:00', status: 'booking', order: null},
  {time: '11:30', status: 'event', order: null},
  {time: '12:00', status: 'booking', order: 123},
  {time: '12:30', status: 'booking', order: 234},
  {time: '13:00', status: 'event', order: 345},
  {time: '13:30', status: 'event', order: 456},
];

const Tables = () => (
  <div className={styles.component}>
    <Title>Tables View</Title>
    <div>
      <Button
        component={Link}
        className={styles.button}
        color="primary"
        variant="outlined"
        to={`${process.env.PUBLIC_URL}/tables/booking/new`}
      >
        New Booking
      </Button>
      <Button
        component={Link}
        className={styles.button}
        color="primary"
        variant="outlined"
        to={`${process.env.PUBLIC_URL}/tables/booking/book/:time`}
      >
        Edit Booking
      </Button>
      <Button
        component={Link}
        className={styles.button}
        color="primary"
        variant="outlined"
        to={`${process.env.PUBLIC_URL}/tables/events/new`}
      >
        New Evemt
      </Button>
      <Button
        component={Link}
        className={styles.button}
        color="primary"
        variant="outlined"
        to={`${process.env.PUBLIC_URL}/tables/events/event/:time`}
      >
        Edit Event
      </Button>
    </div>

    <Paper className={styles.component}>
      <Table size="big">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Table 1</TableCell>
            <TableCell>Table 2</TableCell>
            <TableCell>Table 3</TableCell>
            <TableCell>Table 4</TableCell>
            <TableCell>Table 5</TableCell>
            <TableCell>Table 6</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.time}>
              <TableCell component="th" scope="row">
                {row.time}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                {row.order && (
                  <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                    {row.order}
                  </Button>
                )}
              </TableCell>
              <TableCell>
                {(row.status)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Tables;
