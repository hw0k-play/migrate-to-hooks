import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../reducers/todo.reducer';

export default function useToggleTodo(id) {
  const dispatch = useDispatch();
  const onToggle = useCallback(() => dispatch(toggleTodo(id)), [id, dispatch]);
  return onToggle;
};
