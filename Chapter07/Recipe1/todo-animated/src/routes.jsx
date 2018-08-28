// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import Todo from './components/Todo';

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Todo} exact />
    </Switch>
  </App>
);

export default AppRoutes;
