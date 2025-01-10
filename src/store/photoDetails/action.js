import axios from 'axios';
import { PHOTO_LIST_URL, ACCESS_KEY } from '../../api/const.js';

export const PHOTO_DETAILS_REQUEST = 'PHOTO_DETAILS_REQUEST';
export const PHOTO_DETAILS_REQUEST_SUCCESS = 'PHOTO_DETAILS_REQUEST_SUCCESS';
export const PHOTO_DETAILS_REQUEST_ERROR = 'PHOTO_DETAILS_REQUEST_ERROR';


export const photoDetailsRequest = () => ({
  type: PHOTO_DETAILS_REQUEST,
});

export const photoDetailsRequestSuccess = (data) => ({
  type: PHOTO_DETAILS_REQUEST_SUCCESS,
  data,
});

export const photoDetailsRequestError = (error) => ({
  type: PHOTO_DETAILS_REQUEST_ERROR,
  error,
});

export const photoDetailsRequestAsync = (id) => async (dispatch, getState) => {
  dispatch(photoDetailsRequest());
  const token = getState().token.token;

  try {
    const headers = {
      'Authorization': `Client-ID ${ACCESS_KEY}`
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    const response =
    await axios(`${PHOTO_LIST_URL}/${id}`, {
      headers,
    });
    dispatch(photoDetailsRequestSuccess(response.data));
  } catch (error) {
    console.error('Ошибка:', error);
    dispatch(photoDetailsRequestError(error.toString()));
  }
};
