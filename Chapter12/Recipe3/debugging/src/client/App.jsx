// Dependencies
import React from 'react';
import { BrowserRouter, StaticRouter } from 'react-router-dom';

// Routes
import routes from '@shared/routes';

export default ({ server, location, context = {} }) => {
  // Client Router
  let router = (
    <BrowserRouter>
      {routes.all}
    </BrowserRouter>
  );

  // Server Router
  if (server) {
    router = (
      <StaticRouter location={location} context={context}>
        {routes.all}
      </StaticRouter>
    );
  }

  return router;
};
