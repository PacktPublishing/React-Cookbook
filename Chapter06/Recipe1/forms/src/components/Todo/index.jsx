import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import List from './List';
import './Todo.css';

class Todo extends Component {
constructor() {
  super();

  // Initial state...
  this.state = {
    task: '',
    items: []
  };
}

handleOnChange = e => {
  const { target: { value } } = e;

  // Updating our task state with the input value...
  this.setState({
    task: value
  });
}

handleOnSubmit = e => {
  // Prevent default to avoid the actual form submit...
  e.preventDefault();

  // Once is submited we reset the task value and we push the new task to the items array.
  this.setState({
    task: '',
    items: [
      ...this.state.items,
      {
        id: uuidv4(),
        task: this.state.task,
        complete: false
      }
    ]
  });
}

render() {
  return (
    <div className="Todo">
      <h1>New Task:</h1>

      <form onSubmit={this.handleOnSubmit}>
        <input value={this.state.task} onChange={this.handleOnChange} />
      </form>

       <List items={this.state.items} />
    </div>
  );
}
}

export default Todo;
