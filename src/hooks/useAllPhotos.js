import { useState, useEffect } from 'react';
import {
  ACCESS_KEY,
  PHOTO_LIST_URL,
  PER_PAGE_QUERY_DEFAULT,
} from '../api/const';

export const useAllPhotos = () => {
  const [allPhotosData, setAllPhotosData] = useState([]);

  useEffect(() => {
    fetch(`${PHOTO_LIST_URL}${PER_PAGE_QUERY_DEFAULT}`, {
      method: 'GET',
      headers: {
        'Authorization': `Client-ID ${ACCESS_KEY}`
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка при получении данных');
        }
        return response.json();
      })
      .then(data => {
        setAllPhotosData(data);
      })
      .catch(error => {
        console.error('Ошибка:', error);
      });
  }, []);

  return allPhotosData;
};
