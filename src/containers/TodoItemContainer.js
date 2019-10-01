import { connect } from 'react-redux';
import { removeTodo, toggleTodo } from '../reducers/todo.reducer';
import TodoItem from '../components/TodoItem';

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (payload) => dispatch(removeTodo(payload)),
  toggleTodo: (payload) => dispatch(toggleTodo(payload)),
});

export default connect(null, mapDispatchToProps)(TodoItem);
