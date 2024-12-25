import {
  ALL_PHOTOS_REQUEST_ERROR,
  ALL_PHOTOS_REQUEST_SUCCESS,
} from './action.js';

const initState = {
  loading: false,
  data: [],
  error: '',
};

export const allPhotosReducer = (state = initState, action) => {
  switch (action.type) {
    case ALL_PHOTOS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: ''
      };
    case ALL_PHOTOS_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
