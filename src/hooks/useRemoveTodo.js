import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../reducers/todo.reducer';

export default function useRemoveTodo(id) {
  const dispatch = useDispatch();
  const onRemove = useCallback(() => dispatch(removeTodo(id)), [id, dispatch]);
  return onRemove;
};
