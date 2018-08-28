import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import './TodoForm.css';

class TodoForm extends Component {
  renderInput = ({ input }) => <input {...input} type="text" />;

  onSubmit = values => {
    const { addTask, dispatch, reset } = this.props;

    // Resetting our form...
    dispatch(reset('todo'));

    addTask(values);
  }

  renderError(field) {
    const { meta: { submitFailed, error } } = field;

    if (submitFailed && error) {
      return (
        <div className="error">
          {error}
        </div>
      );
    }

    return null;
  }

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field name="task" component={this.renderInput} />
        <Field name="task" component={this.renderError} />
      </form>
    )
  }
}

const validate = values => {
  const errors = {};

  if (!values.task) {
    errors.task = 'The task cannot be empty!';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'todo'
})(TodoForm);
