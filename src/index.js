/**
 * @name index.js
 * @description src/index.js root react file
 * song information display practice app that
 * implements redux with react.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
//
import App from './components/App';
import reducers from './reducers';
//
ReactDOM.render(
  // Difference of using redux vs not
  // pass provider a store prop with create
  // store function call with reducers obj
  // passed in.
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);