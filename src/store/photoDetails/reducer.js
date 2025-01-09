import { LIKE_REQUEST_SUCCESS } from '../like/action.js';
import {
  PHOTO_DETAILS_REQUEST,
  PHOTO_DETAILS_REQUEST_ERROR,
  PHOTO_DETAILS_REQUEST_SUCCESS,
} from './action.js';

const initState = {
  loading: false,
  data: {},
  error: '',
};

export const photoDetailsReduser = (state = initState, action) => {
  switch (action.type) {
    case PHOTO_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case PHOTO_DETAILS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: '',
      };
    case PHOTO_DETAILS_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case LIKE_REQUEST_SUCCESS:
      if (state.data.id === action.payload.id) {
        return {
          ...state,
          data: {
            ...state.data,
            liked_by_user: action.payload.likedByUser,
            likes: action.payload.likes,
          },
        };
      }
      return state;
    default:
      return state;
  }
};
