import React from 'react';
import styles from './Tables.module.scss';
import Subtitle from '../../common/Subtitle/Subtitle';
import Title from '../../common/Title/Title';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

function createData(details, products) {
  return { details, products };
}

const rows = [
  createData('Table No.', null),
  createData('Date', null),
  createData('Time', null),
  createData('People', null),
];

const TablesEventNew = () => (
  <div className={styles.component}>
    <Title>Tables New Event</Title>
    <Paper className={styles.component}>
      <Table className={styles.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <Subtitle>Event no. ___</Subtitle></TableCell>
            <TableCell />
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.products}>
              <TableCell align="left">{row.details}</TableCell>
              <TableCell component="th" scope="row">
                {row.products}
              </TableCell>
              <TableCell align="right">
                <Button  className={styles.button} color="primary" variant="outlined">Add / Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>

  </div>
);

export default TablesEventNew;
