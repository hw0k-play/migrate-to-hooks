import React, { Component } from 'react';
import TodoItemContainer from '../containers/TodoItemContainer';

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    const itemsRender = todos.map(todo => (
      <TodoItemContainer key={todo.id} todo={todo} />
    ));
    return (
      <ul>
        {itemsRender}
      </ul>
    );
  }
}

export default TodoList;
