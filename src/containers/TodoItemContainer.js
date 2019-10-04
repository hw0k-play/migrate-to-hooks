import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../reducers/todo.reducer';
import TodoItem from '../components/TodoItem';

export default function TodoItemContainer(props) {
  const dispatch = useDispatch();
  const onRemove = (payload) => dispatch(removeTodo(payload));
  const onToggle = (payload) => dispatch(toggleTodo(payload));
  return <TodoItem onRemove={onRemove} onToggle={onToggle} {...props} />;
}
