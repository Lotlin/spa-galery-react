import React from 'react';
import PropTypes from 'prop-types';
import { useAuth } from '../hooks/useAuth.js';

export const authContext = React.createContext({
  auth: '',
  clearAuth: () => {}
});

export const AuthContextProvider = ({ children }) => {
  const [auth, clearAuth] = useAuth('');

  return (
    <authContext.Provider value={{ auth, clearAuth }}>
      {children}
    </authContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
