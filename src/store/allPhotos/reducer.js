import {
  ALL_PHOTOS_REQUEST,
  ALL_PHOTOS_REQUEST_ERROR,
  ALL_PHOTOS_REQUEST_SUCCESS,
  INCREASE_PAGE_NUMBER,
} from './action.js';

const initState = {
  loading: false,
  data: [],
  error: '',
  page: 1,
  hasMore: true,
};

export const allPhotosReducer = (state = initState, action) => {
  switch (action.type) {
    case ALL_PHOTOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case ALL_PHOTOS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: '',
        hasMore: action.data.length > 0,
      };
    case ALL_PHOTOS_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case INCREASE_PAGE_NUMBER:
      return {
        ...state,
        page: state.page + 1,
      };
    default:
      return state;
  }
};
