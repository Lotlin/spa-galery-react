import { DELETE_CODE, UPDATE_CODE } from './const.js';
import { createStore } from 'redux';

export const deleteCode = () => ({
  type: DELETE_CODE,
  code: '',
});

export const updateCode = (code) => ({
  type: UPDATE_CODE,
  code,
});

const initialState = {
  code: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CODE: {
      return {
        ...state,
        code: '',
      };
    }
    case UPDATE_CODE: {
      return {
        ...state,
        code: action.code,
      };
    }
    default:
      return state;
  }
};

export const store = createStore(rootReducer);
