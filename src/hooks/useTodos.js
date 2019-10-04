import { useSelector } from 'react-redux';

export default function useTodos() {
  const todos = useSelector(state => state.todo.todos);
  return todos;
};
