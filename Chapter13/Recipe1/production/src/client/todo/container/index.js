// Dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import Layout from '../components/Layout';

// Actions
import { fetchTodo } from '../actions';

export default connect(({ todo }) => ({
  todo: todo.list
}), dispatch => bindActionCreators(
  {
    fetchTodo
  },
  dispatch
))(Layout);
