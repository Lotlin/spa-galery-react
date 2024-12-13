import React from 'react';
import { useToken } from '../hooks/useToken.js';
import PropTypes from 'prop-types';

export const tokenContext = React.createContext({
  token: '',
  delToken: () => {},
});

export const TokenContextProvider = ({ children }) => {
  const [token, delToken] = useToken('');

  return (
    <tokenContext.Provider value={{ token, delToken }}>
      {children}
    </tokenContext.Provider>
  );
};

TokenContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
