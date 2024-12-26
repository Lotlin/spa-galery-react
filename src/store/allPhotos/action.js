import axios from 'axios';
import {
  ACCESS_KEY,
  PER_PAGE_QUERY_DEFAULT,
  PHOTO_LIST_URL,
} from '../../api/const.js';

export const ALL_PHOTOS_REQUEST = 'ALL_PHOTOS_REQUEST';
export const ALL_PHOTOS_REQUEST_SUCCESS = 'ALL_PHOTOS_REQUEST_SUCCESS';
export const ALL_PHOTOS_REQUEST_ERROR = 'ALL_PHOTOS_REQUEST_ERROR';
export const INCREASE_PAGE_NUMBER = 'INCREASE_PAGE_NUMBER';

export const increasePageNumber = () => ({
  type: INCREASE_PAGE_NUMBER,
});

export const photoRequest = () => ({
  type: ALL_PHOTOS_REQUEST,
});

export const allPhotoRequestSuccess = (data) => ({
  type: ALL_PHOTOS_REQUEST_SUCCESS,
  data,
});

export const allPhotoRequestError = (error) => ({
  type: ALL_PHOTOS_REQUEST_ERROR,
  error,
});

export const allPostsRequestAsync = () => async (dispatch, getState) => {
  const { loading, hasMore, page } = getState().allPhotos;

  if (loading || !hasMore) return;

  dispatch(photoRequest());

  try {
    const response =
    await axios(`${PHOTO_LIST_URL}?page=${page}&${PER_PAGE_QUERY_DEFAULT}`, {
      headers: {
        'Authorization': `Client-ID ${ACCESS_KEY}`
      }
    });

    const existingData = getState().allPhotos.data;
    dispatch(allPhotoRequestSuccess([...existingData, ...response.data]));
    dispatch(increasePageNumber());
  } catch (error) {
    console.error('Ошибка:', error);
    dispatch(allPhotoRequestError(error.toString()));
  }
};

