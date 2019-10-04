import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';

import TodoInputContainer from './containers/TodoInputContainer';
import TodoListContainer from './containers/TodoListContainer';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <TodoInputContainer />
      <TodoListContainer />
    </Provider>
  );
};
