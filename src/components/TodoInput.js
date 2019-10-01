import React, { useState, useEffect, useCallback } from 'react';

export default function TodoInput({ addTodo }) {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleAdd = () => {
    if (input === '') {
      alert('값을 입력해주세요.');
      return;
    }
    
    addTodo(input);
    setInput('');
  };

  const handleKeyPress = useCallback((event) => {
    if (event.key === "Enter") {
      handleAdd();
    }
  }, [handleAdd]);

  useEffect(() => {
    document.addEventListener('keypress', handleKeyPress);
    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <>
      <input value={input} onChange={handleChange} />
      <button onClick={handleAdd}>추가</button>
    </>
  );
};
