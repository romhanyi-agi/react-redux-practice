/* eslint "react/prefer-stateless-function": "off" */
import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  return (
    <React.Fragment>
      <h1>Hello</h1>
      <div>
        { isLoggedIn ? <p>Content for logged in users</p>
          : <p>Content for not logged in users.</p>}
      </div>
    </React.Fragment>
  );
}
export default Header;
