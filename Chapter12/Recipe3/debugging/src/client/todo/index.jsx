// Dependencies
import React from 'react';

// Actions
import { fetchTodo } from './actions';

// Main Container
import Container from './container';

// Main Component
const Main = props => <Container {...props} />;

// Initial Action
Main.initialAction = () => fetchTodo();

export default Main;
