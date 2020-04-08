import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers/index.js';
import Header from './Header.jsx';
import Content from './Content.jsx';

const myStore = createStore(
  allReducers,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={myStore}>
    <Header />
    <Content />
  </Provider>,
  document.getElementById('main'),
);

if (module.hot) {
  module.hot.accept();
}
