import axios from 'axios';
import { USER_DATA_URL } from '../../api/const.js';
import { deleteToken } from '../tokenReducer.js';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS';
export const AUTH_REQUEST_ERROR = 'AUTH_REQUEST_ERROR';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const authRequest = () => ({
  type: AUTH_REQUEST,
});

export const authRequestSuccess = (data) => ({
  type: AUTH_REQUEST_SUCCESS,
  data: {
    name: data.name,
    avatar: data.avatar,
  }
});

export const authRequestError = (error) => ({
  type: AUTH_REQUEST_ERROR,
  error,
});

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

export const authRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;

  if (!token) return;

  dispatch(authRequest());

  axios(USER_DATA_URL, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(({ data }) => {
      const userData = {
        name: data['first_name'],
        avatar: data['profile_image'].small,
      };
      dispatch(authRequestSuccess(userData));
    })
    .catch(error => {
      console.error(error);
      dispatch(deleteToken());
      dispatch(authRequestError(error.toString()));
    });
};
