import React from 'react';

export const tokenContext = React.createContext({
  token: '',
  delToken: () => {},
});
