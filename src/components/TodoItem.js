import React, { Component } from 'react';

class TodoItem extends Component {
  handleToggle = () => {
    const { todo, toggleTodo } = this.props;
    toggleTodo(todo.id);
  };

  handleRemove = () => {
    const { todo, removeTodo } = this.props;
    removeTodo(todo.id);
  };

  render() {
    const { todo } = this.props;
    const { handleToggle, handleRemove } = this;
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
  }
}

export default TodoItem;
