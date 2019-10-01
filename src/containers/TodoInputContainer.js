import { connect } from 'react-redux';
import { addTodo } from '../reducers/todo.reducer';
import TodoInput from '../components/TodoInput';

const mapDispatchToProps = (dispatch) => ({
  addTodo: (payload) => dispatch(addTodo(payload)),
});

export default connect(null, mapDispatchToProps)(TodoInput);
