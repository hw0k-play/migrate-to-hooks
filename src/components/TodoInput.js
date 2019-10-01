import React, { Component } from 'react';

class TodoInput extends Component {
  state = {
    input: ''
  }

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress); 
  }

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      this.handleAdd();
    }
  };

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  }

  handleAdd = () => {
    const { addTodo } = this.props;
    const { input } = this.state;

    if (input === '') {
      alert('값을 입력해주세요.');
      return;
    }
    
    addTodo(input);
    this.setState({ input: '' });
  }

  render() {
    const { input } = this.state;
    const { handleChange, handleAdd } = this;
    return (
      <>
        <input value={input} onChange={handleChange} />
        <button onClick={handleAdd}>추가</button>
      </>
    );
  }
}

export default TodoInput;
