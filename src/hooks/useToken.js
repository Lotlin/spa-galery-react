import { useEffect, useState } from 'react';
import {
  ACCESS_KEY,
  GRANT_TYPE,
  REDIRECT_URI,
  SECRET_KEY,
  TOKEN_URL
} from '../api/const.js';

export const useToken = state => {
  const [code, setCode] = useState('');
  const [token, setToken] = useState(state || localStorage.getItem('Bearer'));

  useEffect(() => {
    const urlCode = new URLSearchParams(window.location.search).get('code');
    // чтобы не было ошибки при обновлении страницы,
    // когда пользователь вышел из ЛК и обновил страницу
    const oldUrlCode = localStorage.getItem('code');

    if (urlCode === oldUrlCode) return;

    if (urlCode && !code) {
      setCode(urlCode);
    }
  }, []);

  useEffect(() => {
    if (!code || token || code === 'used') return;
    console.log('code: ', code);

    let urlToken = new URL(TOKEN_URL);

    urlToken.searchParams.append('client_id', ACCESS_KEY);
    urlToken.searchParams.append('client_secret', SECRET_KEY);
    urlToken.searchParams.append('redirect_uri', REDIRECT_URI);
    urlToken.searchParams.append('code', code);
    urlToken.searchParams.append('grant_type', GRANT_TYPE);

    urlToken = urlToken.toString();
    console.log('urlToken: ', urlToken);

    fetch(urlToken, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          return response.text().then(errorText => {
            console.error('Error details:', errorText);
            throw new Error(errorText);
          });
        }
        return response.json();
      })
      .then(data => {
        setToken(data['access_token']);
        localStorage.setItem('Bearer', data['access_token']);
      })
      .catch(error => console.error(error));
  }, [code, token]);

  const delToken = () => {
    setToken('');
    localStorage.setItem('code', code);
    setCode('');
    localStorage.removeItem('Bearer');
  };

  return [token, delToken];
};
