// Dependencies
import React from 'react';
import { BrowserRouter, StaticRouter, Switch, Route } from 'react-router-dom';

// Components
import About from '@components/About';
import Home from '@components/Home';

export default ({ server, location, context = {} }) => {
  const routes = (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
  );

  // Client Router
  let router = (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  );

  // Server Router
  if (server) {
    router = (
      <StaticRouter location={location} context={context}>
        {routes}
      </StaticRouter>
    );
  }

  return router;
};
