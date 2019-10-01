import React from 'react';

export default function TodoItem({ todo, toggleTodo, removeTodo }) {
  const handleToggle = () => { toggleTodo(todo.id); }
  const handleRemove = () => { removeTodo(todo.id); }
  return (
    <li>
      <span
        style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
        onClick={handleToggle}
      >
        {todo.text}
      </span>
      <span
        style={{ marginLeft: '2px', cursor: 'pointer' }}
        onClick={handleRemove}
      >
        &times;
      </span>
    </li>
  );
};
