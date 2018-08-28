import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Calculator from '../../client/calculator';

const paths = [
  {
    component: Calculator,
    exact: true,
    path: '/'
  }
];

const all = (
  <Switch>
    <Route exact path={paths[0].path} component={paths[0].component} />
  </Switch>
);

export default {
  paths,
  all
};
