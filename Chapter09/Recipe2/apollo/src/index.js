// Dependencies
import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Components
import App from './App';

// Styles
import './index.css';

// Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphiql'
});

// Wrapping the App with ApolloProvider
const AppContainer = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

// Root
const root = document.getElementById('root');

// Rendering the AppContainer
render(<AppContainer />, root);
