import axios from 'axios';
import { getCode } from './code.js';
import {
  ACCESS_KEY,
  GRANT_TYPE,
  REDIRECT_URI,
  SECRET_KEY,
  TOKEN_URL
} from './const.js';

export const setToken = (token) => {
  localStorage.setItem('Bearer', token);
};

export const getToken = async () => {
  const code = getCode();

  if (!code) return null;

  const urlToken = new URL(TOKEN_URL);
  urlToken.searchParams.append('client_id', ACCESS_KEY);
  urlToken.searchParams.append('client_secret', SECRET_KEY);
  urlToken.searchParams.append('redirect_uri', REDIRECT_URI);
  urlToken.searchParams.append('code', code);
  urlToken.searchParams.append('grant_type', GRANT_TYPE);

  const urlTokenToString = urlToken.toString();

  try {
    const response = await axios(urlTokenToString, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = response.data;
    const token = data['access_token'];
    localStorage.setItem('Bearer', token);

    const url = new URL(window.location.href);
    url.searchParams.delete('code');
    window.history.replaceState({}, document.title, url.toString());

    return token;
  } catch (error) {
    console.error('Ошибка при получении токена:', error);
    return null;
  }
};
