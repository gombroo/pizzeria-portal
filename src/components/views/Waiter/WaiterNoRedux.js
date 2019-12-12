import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../common/Title/Title';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  {id: '1', status: 'free', order: null},
  {id: '2', status: 'thinking', order: null},
  {id: '3', status: 'ordered', order: 21},
  {id: '4', status: 'prepared', order: 22},
  {id: '5', status: 'delivered', order: 23},
  {id: '6', status: 'paid', order: 24},
];

const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <React.Fragment>
          <Button component={Link} className={styles.button} color="primary" variant="outlined">
            thinking
          </Button>
          <Button component={Link} className={styles.button} color="primary" variant="outlined">
            new order
          </Button>
        </React.Fragment>
      );
    case 'thinking':
      return (
        <Button component={Link} className={styles.button} color="primary" variant="outlined">
          new order
        </Button>
      );
    case 'ordered':
      return (
        <Button component={Link} className={styles.button} color="primary" variant="outlined">
          prepared
        </Button>
      );
    case 'prepared':
      return (
        <Button component={Link} className={styles.button} color="primary" variant="outlined">
          delivered
        </Button>
      );
    case 'delivered':
      return (
        <Button component={Link} className={styles.button} color="primary" variant="outlined">
          paid
        </Button>
      );
    case 'paid':
      return (
        <Button component={Link} className={styles.button} color="primary" variant="outlined">
          free
        </Button>
      );
    default:
      return null;
  }
};

const WaiterNoRedux = () => (
  <div className={styles.component}>
    <Title>Waiter View</Title>
    <Button component={Link} className={styles.button} color="primary" variant="outlined"
      to={`${process.env.PUBLIC_URL}/waiter/ordering/new`}>New Order
    </Button>
    <Button component={Link} className={styles.button} color="primary" variant="outlined"
      to={`${process.env.PUBLIC_URL}/waiter/ordering/order/:id`}>Edit Order
    </Button>
    <Paper className={styles.component}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Table</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Order</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
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
                {renderActions(row.status)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default WaiterNoRedux;
