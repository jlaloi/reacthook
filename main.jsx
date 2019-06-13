import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './main.scss';
import {store} from './store';
import {TodoListStored, TodoListHooked} from './todos';

ReactDOM.render(
  <Provider store={store}>
    <TodoListStored />
    <TodoListHooked />
  </Provider>,
  document.getElementById('root')
);
