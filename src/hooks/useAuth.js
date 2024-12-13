import { useContext, useEffect, useState } from 'react';
import { USER_DATA_URL } from '../api/const.js';
import { tokenContext } from '../context/tokenContext.js';

export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const { token, delToken } = useContext(tokenContext);

  useEffect(() => {
    if (!token) return;

    fetch(USER_DATA_URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        return response.json();
      })
      .then(userData => {
        setAuth({
          name: userData['first_name'],
          avatar: userData['profile_image'].small,
        });
      })
      .catch(error => {
        console.error(error);
        setAuth({});
        delToken();
      });
  }, [token]);

  const clearAuth = () => setAuth({});

  return [auth, clearAuth];
};
