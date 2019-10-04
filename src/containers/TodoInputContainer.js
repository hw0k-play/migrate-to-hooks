import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../reducers/todo.reducer';
import TodoInput from '../components/TodoInput';

export default function TodoInputContainer(props) {
  const dispatch = useDispatch();
  const onAdd = (payload) => dispatch(addTodo(payload));
  return <TodoInput onAdd={onAdd} {...props} />;
}
