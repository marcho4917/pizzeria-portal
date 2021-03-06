import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/views/Home/Home';
import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/kitchenContainer';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/WaiterContainer';
import TableBooked from './components/views/Tables/TableBooked';
import TableBookedNew from './components/views/Tables/TableBookedNew';
import TableEvent from './components/views/Tables/TableEvent';
import TableEventNew from './components/views/Tables/TableEventNew';
import WaiterOrderedNew from './components/views/Waiter/WaiterOrderedNew';
import WaiterOrdered from './components/views/Waiter/WaiterOrdered';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import store from './redux/store';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2B4C6F',
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={'/'}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
                <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
                <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
                <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={TableBookedNew} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TableBooked} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={TableEvent} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={TableEventNew} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={WaiterOrderedNew} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={WaiterOrdered} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
