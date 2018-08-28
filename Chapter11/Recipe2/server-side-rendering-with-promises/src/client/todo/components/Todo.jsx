// Dependencies
import React, { Component } from 'react';

// Utils
import { isFirstRender } from '@utils/frontend';

// Styles
import styles from './Todo.scss';

class Todo extends Component {
  componentDidMount() {
    const { fetchTodo } = this.props;

    fetchTodo();
  }

  render() {
    const {
      todo
    } = this.props;

    if (isFirstRender(todo)) {
      return null;
    }

    return (
      <div>
        <div className={styles.Todo}>
          <ol>
            {todo.map((item, key) => <li key={key}>{item.title}</li>)}
          </ol>
        </div>
      </div>
    );
  }
}

export default Todo;
