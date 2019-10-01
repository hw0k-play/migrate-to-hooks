import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

const mapStateToProps = ({todo}) => ({
  todos: todo.todos,
});

export default connect(mapStateToProps, null)(TodoList);
