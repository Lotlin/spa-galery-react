import axios from 'axios';
import {
  ACCESS_KEY,
  PER_PAGE_QUERY_DEFAULT,
  PHOTO_LIST_URL,
} from '../../api/const.js';

export const ALL_PHOTOS_REQUEST_SUCCESS = 'ALL_PHOTOS_REQUEST_SUCCESS';
export const ALL_PHOTOS_REQUEST_ERROR = 'ALL_PHOTOS_REQUEST_ERROR';

export const allPostsRequestSuccess = (data) => ({
  type: ALL_PHOTOS_REQUEST_SUCCESS,
  data,
});

export const allPostsRequestError = (error) => ({
  type: ALL_PHOTOS_REQUEST_ERROR,
  error,
});

export const allPostsRequestAsync = () => (dispatch) => {
  axios(`${PHOTO_LIST_URL}${PER_PAGE_QUERY_DEFAULT}`, {
    method: 'GET',
    headers: {
      'Authorization': `Client-ID ${ACCESS_KEY}`
    }
  })
    .then(({ data }) => {
      dispatch(allPostsRequestSuccess(data));
    })
    .catch(error => {
      console.error('Ошибка:', error);
      dispatch(allPostsRequestError(error.toString()));
    });
};

