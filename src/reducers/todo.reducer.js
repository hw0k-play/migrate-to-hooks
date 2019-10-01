import { makeUniqueID } from '../utils';

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const removeTodo = (payload) => ({
  type: REMOVE_TODO,
  payload,
});

export const toggleTodo = (payload) => ({
  type: TOGGLE_TODO,
  payload,
});

const initialState = {
  todos: [
    {
      id: makeUniqueID(4),
      text: "할 일 1",
      done: false,
    },
    {
      id: makeUniqueID(4),
      text: "할 일 2",
      done: true,
    }
  ],
};

export default function todo(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: state.todos.concat({
          id: makeUniqueID(4),
          text: action.payload,
          done: false,
        }),
      };
    case REMOVE_TODO:
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    case TOGGLE_TODO:
      return {
        todos: state.todos.map(todo =>
          (todo.id === action.payload)
          ? { ...todo, done: !todo.done }
          : todo
        ),
      };
    default:
      return state;
  }
}
