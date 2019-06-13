import {createStore} from 'redux';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = todo => {
  return {type: ADD_TODO, todo};
};
export const removeTodo = todo => {
  return {type: REMOVE_TODO, todo};
};

export const todos = (state = [], action) => {
  if (action.type === ADD_TODO) return [...state, action.todo];
  else if (action.type === REMOVE_TODO) return state.filter(todo => todo !== action.todo);
  return state;
};
export const store = createStore(todos);

export const mapStateToProps = state => {
  return {
    todos: state
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    add: todo => dispatch(addTodo(todo)),
    remove: todo => dispatch(removeTodo(todo))
  };
};
