import React from 'react';
import styles from './Kitchen.module.scss';
import Title from '../../common/Title/Title';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

const demoContent = [
  {
    orderTime: '11:12',
    tableNo: '1',
    dishes: ['chicken', 'curry', 'masala'],
    order: null,
  },
  {
    orderTime: '11:30',
    tableNo: '2',
    dishes: ['hot-dog', 'chips'],
    status: 'thinking',
    order: null,
  },
  {
    orderTime: '11:35',
    tableNo: '3',
    dishes: ['tomato soup', 'orange juice'],
    status: 'ordered',
    order: 123,
  },
  {
    orderTime: '11:40',
    tableNo: '4',
    dishes: ['chicken', 'rice', 'cola'],
    status: 'prepared',
    order: 234,
  },
  {
    orderTime: '11:45',
    tableNo: '5',
    dishes: ['spahgetti', 'pizza'],
    status: 'delivered',
    order: 345,
  },
  {
    orderTime: '11:46',
    tableNo: '6',
    dishes: ['muffin', 'black coffee'],
    status: 'paid',
    order: 456,
  },
];

const Kitchen = () => (
  <div className={styles.component}>
    <Title>Kitchen View</Title>
    <Paper className={styles.component}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Table No.</TableCell>
            <TableCell>Dishes</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.orderTime}>
              <TableCell component="th" scope="row">
                {row.orderTime}
              </TableCell>
              <TableCell>{row.tableNo}</TableCell>
              <TableCell>
                {row.dishes.map(dish => (
                  <p key={dish}>{dish}</p>
                ))}
              </TableCell>
              <TableCell>
                <Checkbox inputProps={{ 'aria-label': 'select all desserts' }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Kitchen;
