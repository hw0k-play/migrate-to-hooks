import React from 'react';
import { useSelector } from 'react-redux';
import TodoList from '../components/TodoList';

export default function TodoListContainer(props) {
  const todos = useSelector(state => state.todo.todos);
  return <TodoList todos={todos} {...props} />;
}
