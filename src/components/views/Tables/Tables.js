import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Title from '../../common/Title/Title';
import DatePicker from '../../features/DatePicker/DatePicker';
import Box from '@material-ui/core/Box';

const dataTables = [
  {id: '1', time: '12:00', status: 'free', order: null},
  {id: '2', time: '12:30', status: 'thinking', order: null},
  {id: '3', time: '13:00', status: 'ordered', order: 123},
  {id: '4', time: '13:30', status: 'prepared', order: 234},
  {id: '5', time: '14:00', status: 'delivered', order: 345},
  {id: '6', time: '14:30', status: 'paid', order: 456},
];

const Tables = () => {

  return(
    <div className={styles.component}>
      <Title>Tables</Title>
      <Button component={Link} className={styles.button} color="primary" variant="outlined"
        to={`/tables/booking/new`}>
          New Booking
      </Button>
      <Button component={Link} className={styles.button} color="primary" variant="outlined"
        to={`/tables/booking/book/:id`}>
          Edit Booking
      </Button>
      <Button component={Link} className={styles.button} color="primary" variant="outlined"
        to={`/tables/events/new`}>
          New Event
      </Button>
      <Button component={Link} className={styles.button} color="primary" variant="outlined"
        to={`/tables/events/event/:id`}>
          Edit Event
      </Button>

      <Box component="span" m={1}>
        <DatePicker />
      </Box>
      <Paper>
        <Table>
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
            {dataTables.map(row => (
              <TableRow key={row.id} >
                <TableCell scope="row" colSpan={7}>
                  {row.time}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default Tables;
