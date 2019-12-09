import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Subtitle from '../../common/Subtitle/Subtitle';

// Generate Order Data
function createData(id, date, name, booking) {
  return { id, date, name, booking };
}

const rows = [
  createData(0, '08:00', 'Tupac Shakur', 'event'),
  createData(1, '10:42', 'Jarosław Kaczyński', 'booking'),
  createData(2, '15:08', 'Jan Paweł II', 'event'),
  createData(3, '18:03', 'Tom Morello', 'booking'),
  createData(4, '19:47', 'Antoni Macierewicz', 'event'),
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <>
      <Subtitle>Events/Bookings for today</Subtitle>
      <Table size="big">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Events/Bookings</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.booking}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#"  variant="subtitle1">
          See more orders
        </Link>
      </div>
    </>
  );
}
