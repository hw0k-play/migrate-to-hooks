import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <TodoInput />
      <TodoList />
    </Provider>
  );
};
