import React from 'react';
import useTodos from '../hooks/useTodos';
import TodoItem from './TodoItem';

export default function TodoList() {
  const todos = useTodos();
  const itemRender = todos.map(todo => <TodoItem key={todo.id} todo={todo} />);
  return <ul>{itemRender}</ul>;
};
