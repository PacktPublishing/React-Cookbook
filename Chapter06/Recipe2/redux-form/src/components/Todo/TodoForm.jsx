import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class TodoForm extends Component {
  renderInput = ({ input }) => <input {...input} type="text" />;

  onSubmit = values => {
    const { addTask, dispatch, reset } = this.props;

    dispatch(reset('todo'));

    addTask(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field name="task" component={this.renderInput} />
      </form>
    )
  }
}

export default reduxForm({
  form: 'todo'
})(TodoForm);
