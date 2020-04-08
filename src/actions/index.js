/* eslint-disable arrow-body-style */
export const increment = (nr) => {
  return {
    type: 'INCREMENT',
    payload: nr,
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

export const login = () => {
  return {
    type: 'SIGN_IN',
  };
};
