import {
  LIKE_REQUEST,
  LIKE_REQUEST_ERROR,
  LIKE_REQUEST_SUCCESS,
} from './action.js';

const initState = {
  liked_by_user: false,
  error: '',
};

export const likeReducer = (state = initState, action) => {
  switch (action.type) {
    case LIKE_REQUEST:
      return {
        ...state,
        error: '',
      };
    case LIKE_REQUEST_SUCCESS:
      return {
        ...state,
        liked_by_user: action.likedByUser,
        error: ''
      };
    case LIKE_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
