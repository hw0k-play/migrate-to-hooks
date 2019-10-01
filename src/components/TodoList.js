import React from 'react';
import TodoItemContainer from '../containers/TodoItemContainer';

export default function TodoList({ todos }) {
  const itemRender = todos.map(todo => <TodoItemContainer key={todo.id} todo={todo} />);
  return <ul>{itemRender}</ul>;
};
