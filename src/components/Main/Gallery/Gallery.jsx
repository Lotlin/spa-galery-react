import style from './Gallery.module.css';
import Photo from './Photo';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { allPostsRequestAsync } from '../../../store/allPhotos/action.js';


export const Gallery = () => {
  // toDO сделать бесконечную прокрутку
  const allPhotosData = useSelector(state => state.allPhotos.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allPostsRequestAsync());
  }, [dispatch]);

  return (
    <ul className={style.list}>
      {allPhotosData.map((photoData) => (
        <Photo key={photoData.id} photoData={photoData} />
      ))}
    </ul>
  );
};
