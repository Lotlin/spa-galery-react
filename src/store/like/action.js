import axios from 'axios';
import { PHOTO_LIST_URL } from '../../api/const.js';

export const LIKE_REQUEST = 'PUT_LIKE_REQUEST';
export const LIKE_REQUEST_SUCCESS = 'PUT_LIKE_REQUEST_SUCCESS';
export const LIKE_REQUEST_ERROR = 'PUT_LIKE_REQUEST_ERROR';

export const likeRequest = () => ({
  type: LIKE_REQUEST,
});

export const likeRequestSuccess = (id, likedByUser, likes) => ({
  type: LIKE_REQUEST_SUCCESS,
  payload: { id, likedByUser, likes },
});

export const likeRequestError = (error) => ({
  type: LIKE_REQUEST_ERROR,
  error,
});

export const putLikeRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().token.token;

  if (!token) return;

  dispatch(likeRequest());

  axios(`${PHOTO_LIST_URL}/${id}/like`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(({ data }) => {
      const {
        liked_by_user: likedByUser,
        likes,
      } = data.photo;
      dispatch(likeRequestSuccess(id, likedByUser, likes));
    })
    .catch(error => {
      console.error(error);
      dispatch(likeRequestError(error.toString()));
    });
};

export const deleteLikeRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().token.token;

  if (!token) return;

  dispatch(likeRequest());

  axios(`${PHOTO_LIST_URL}/${id}/like`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(({ data }) => {
      const {
        liked_by_user: likedByUser,
        likes,
      } = data.photo;
      dispatch(likeRequestSuccess(id, likedByUser, likes));
    })
    .catch(error => {
      console.error(error);
      dispatch(likeRequestError(error.toString()));
    });
};
