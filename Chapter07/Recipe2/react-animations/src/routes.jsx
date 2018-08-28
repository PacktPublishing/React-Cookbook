// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import Animations from './components/Animations';

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Animations} exact />
    </Switch>
  </App>
);

export default AppRoutes;
