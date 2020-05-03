import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import TableBooked from './components/views/Tables/TableBooked';
import TableBookedNew from './components/views/Tables/TableBookedNew';
import TableEvent from './components/views/Tables/TableEvent';
import TableEventNew from './components/views/Tables/TableEventNew';
import WaiterOrderedNew from './components/views/Waiter/WaiterOrderedNew';
import WaiterOrdered from './components/views/Waiter/WaiterOrdered';

function App() {
  return (
    <BrowserRouter basename={'/'}>
      <MainLayout>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
          <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TableBooked} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={TableBookedNew} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={TableEvent} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={TableEventNew} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={WaiterOrderedNew} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={WaiterOrdered} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
