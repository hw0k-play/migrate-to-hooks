import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../reducers/todo.reducer';

export default function useAddTodo() {
  const dispatch = useDispatch();
  const onAdd = useCallback((payload) => dispatch(addTodo(payload)), [dispatch]);
  return onAdd;
};
