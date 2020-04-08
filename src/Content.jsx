/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */
/* eslint "react/prefer-stateless-function": "off" */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/index.js';


function Content() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div>
        <h2>Counter: {counter}</h2>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </React.Fragment>
  );
}
export default Content;
