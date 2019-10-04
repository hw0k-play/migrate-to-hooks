import React, { useState, useEffect, useCallback } from 'react';
import useAddTodo from '../hooks/useAddTodo';

export default function TodoInput() {
  const onAdd = useAddTodo();
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleAdd = useCallback(() => {
    if (input === '') {
      alert('값을 입력해주세요.');
      return;
    }
    
    onAdd(input);
    setInput('');
  }, [input, onAdd]);

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
