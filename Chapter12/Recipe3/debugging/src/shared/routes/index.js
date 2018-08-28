import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import About from '@about';
import Home from '@home';
import Todo from '@todo';

const paths = [
  {
    component: Home,
    exact: true,
    path: '/'
  },
  {
    component: About,
    exact: true,
    path: '/about'
  },
  {
    component: Todo,
    exact: true,
    path: '/todo'
  }
];

const all = (
  <Switch>
    <Route exact path={paths[0].path} component={paths[0].component} />
    <Route exact path={paths[1].path} component={paths[1].component} />
    <Route exact path={paths[2].path} component={paths[2].component} />
  </Switch>
);

export default {
  paths,
  all
};
