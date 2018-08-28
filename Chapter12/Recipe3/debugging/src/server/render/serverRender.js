// Dependencies
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { matchPath } from 'react-router-dom';

// Redux Store
import configureStore from '@configureStore';

// Components
import App from '../../client/App';

// HTML
import html from './html';

// Initial State
import initialState from './initialState';

// Routes
import routes from '@shared/routes';

export default function serverRender() {
  return (req, res, next) => {
    // Configuring Redux Store
    const store = configureStore(initialState(req));

    // Getting the promises from the components which has initialAction.
    const promises = routes.paths.reduce((promises, route) => {
      if (matchPath(req.url, route) && route.component && route.component.initialAction) {
        promises.push(Promise.resolve(store.dispatch(route.component.initialAction())));
      }

      return promises;
    }, []);

    // Resolving our promises
    Promise.all(promises)
      .then(() => {
        // Getting Redux Initial State
        const initialState = store.getState();

        // Rendering with SSR
        const markup = renderToString(
          <Provider store={store}>
            <App
              server
              location={req.url}
            />
          </Provider>
        );

        // Sending our HTML code.
        res.send(html({
          title: 'Codejobs',
          markup,
          initialState
        }));
      })
      .catch(e => {
        console.log('Promise Error: ', e); // eslint-disable-line no-console
      });
  };
}
