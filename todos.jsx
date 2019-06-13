import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import {TodoItems} from './todo';
import {mapStateToProps, mapDispatchToProps} from './store';

export const TodoList = ({todos, add, remove}) => {
  useEffect(() => {
    document.title = `${todos.length} todo(s)`;
  });
  return (
    <>
      <button onClick={() => add(new Date().getTime())}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <TodoItems click={remove} name={todo} key={todo} />
        ))}
      </ul>
    </>
  );
};

export const TodoListHooked = () => {
  const [todos, setTodos] = useState([]);
  const remove = item => setTodos(todos.filter(todo => todo !== item));
  const add = todo => setTodos([...todos, todo]);
  return TodoList({todos, add, remove});
};

export const TodoListStored = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
