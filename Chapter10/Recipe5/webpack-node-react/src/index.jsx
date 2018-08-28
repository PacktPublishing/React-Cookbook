// Dependencies
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

// Redux Store
import configureStore from '@configureStore';

// Components
import App from './client/App';

// Configuring Redux Store
const store = configureStore(window.initialState);

// Root element
const rootElement = document.querySelector('#root');

// App Wrapper
const renderApp = Component => {
  render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    rootElement
  );
};

// Rendering app
renderApp(App);

// Hot Module Replacement
if (module.hot) {
  module.hot.accept('./client/App', () => {
    renderApp(require('./client/App').default);
  });
}
