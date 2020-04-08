/* eslint "react/prefer-stateless-function": "off" */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from './actions/index.js';

function Header() {
  const isLoggedIn = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <h1>Hello</h1>
      <div>
        <p>{ isLoggedIn ? 'You are logged in.' : 'You are not logged in.' }</p>
        <button onClick={() => dispatch(login())}>{ isLoggedIn ? 'Log out' : 'Log in' }</button>
      </div>
    </React.Fragment>
  );
}
export default Header;
