import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import TablesBookingEdit from './components/views/Tables/TablesBookingEdit';
import TablesBookingNew from './components/views/Tables/TablesBookingNew';
import TablesEventsEdit from './components/views/Tables/TablesEventsEdit';
import TablesEventsNew from './components/views/Tables/TablesEventsNew';
import Waiter from './components/views/Waiter/Waiter';
import WaiterOrderNew from './components/views/Waiter/WaiterOrderNew';
import WaiterOrderEdit from './components/views/Waiter/WaiterOrderEdit';
import Kitchen from './components/views/Kitchen/Kitchen';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
    secondary: { main: '#1976d2' },
  },
});

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
              <Route path={process.env.PUBLIC_URL + '/login'} component={Login} />
              <Route path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
              <Route path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
              <Route path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
            </Switch>
            <Switch>
              <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={TablesBookingNew} />
              <Route path={process.env.PUBLIC_URL + '/tables/booking/book/:id'} component={TablesBookingEdit} />
              <Route path={process.env.PUBLIC_URL + '/tables/events/new'} component={TablesEventsNew} />
              <Route path={process.env.PUBLIC_URL + '/tables/events/event/:id'} component={TablesEventsEdit} />
              <Route path={process.env.PUBLIC_URL + '/waiter/ordering/new'} component={WaiterOrderNew} />
              <Route path={process.env.PUBLIC_URL + '/waiter/ordering/order/:id'} component={WaiterOrderEdit} />{' '}
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
