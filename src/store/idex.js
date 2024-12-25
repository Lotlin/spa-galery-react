import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { codeReducer } from './codeReducer.js';
import { tokenMiddleware, tokenReducer } from './tokenReducer';
import { thunk } from 'redux-thunk';
import { authReducer } from './auth/reducer';
import { allPhotosReducer } from './allPhotos/reducer';

const rootReducer = combineReducers({
  code: codeReducer,
  token: tokenReducer,
  auth: authReducer,
  allPhotos: allPhotosReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)),
);
