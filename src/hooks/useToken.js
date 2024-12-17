import { useEffect, useState } from 'react';
import {
  ACCESS_KEY,
  GRANT_TYPE,
  REDIRECT_URI,
  SECRET_KEY,
  TOKEN_URL
} from '../api/const.js';
import { useDispatch } from 'react-redux';
import { getCode } from '../api/code.js';
import { deleteCode } from '../store/idex.js';

export const useToken = state => {
  const dispatch = useDispatch();
  const [token, setToken] = useState(state || localStorage.getItem('Bearer'));

  const code = getCode();

  useEffect(() => {
    if (!code || token) return;

    let urlToken = new URL(TOKEN_URL);

    urlToken.searchParams.append('client_id', ACCESS_KEY);
    urlToken.searchParams.append('client_secret', SECRET_KEY);
    urlToken.searchParams.append('redirect_uri', REDIRECT_URI);
    urlToken.searchParams.append('code', code);
    urlToken.searchParams.append('grant_type', GRANT_TYPE);

    urlToken = urlToken.toString();

    fetch(urlToken, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async response => {
        if (!response.ok) {
          const errorText = await response.text();
          console.error('Error details:', errorText);
          throw new Error(errorText);
        }
        return response.json();
      })
      .then(data => {
        setToken(data['access_token']);
        localStorage.setItem('Bearer', data['access_token']);

        const url = new URL(window.location.href);
        url.searchParams.delete('code');
        window.history.replaceState({}, document.title, url.toString());
      })
      .catch(error => console.error(error));
  }, [token]);

  const delToken = () => {
    setToken('');
    dispatch(deleteCode());
    localStorage.removeItem('Bearer');
  };

  return [token, delToken];
};
