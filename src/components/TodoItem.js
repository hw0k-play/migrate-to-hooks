import React from 'react';
import useToggleTodo from '../hooks/useToggleTodo';
import useRemoveTodo from '../hooks/useRemoveTodo';

export default function TodoItem({ todo }) {
  const onToggle = useToggleTodo(todo.id);
  const onRemove = useRemoveTodo(todo.id);

  const handleToggle = () => { onToggle(); }
  const handleRemove = () => { onRemove(); }

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
