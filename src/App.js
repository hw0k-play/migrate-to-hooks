import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';

import TodoInputContainer from './containers/TodoInputContainer';
import TodoListContainer from './containers/TodoListContainer';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoInputContainer />
        <TodoListContainer />
      </Provider>
    );
  }
}

export default App;
